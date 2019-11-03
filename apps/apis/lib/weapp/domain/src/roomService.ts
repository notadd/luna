import { Injectable } from '@nestjs/common';
import { Member, Room } from '../../../entities';
import { RoomViewDb } from '../../basic/lib/roomViewDb';
import { Db } from '../../core/repository/db';
import { WebAppError } from '../../webapp.error';
import { RoomCreateInput, RoomFindInput } from '../type';
import { TicketService } from './ticketService';

@Injectable()
export class RoomService {
	constructor(
		public roomViewDb: RoomViewDb, 
		public ticketService: TicketService,
		public db: Db) { }

	/**
	 * 查找房间
	 * @param where 查找房间的条件
	 */
	async roomFind(where: RoomFindInput): Promise<any[]> {
		try {
			let whereStr = `WHERE "isHidden" = false`;
			const keys = Object.keys(where);
			keys.forEach(key => {
				whereStr += ` AND "${key}" = '${where[key]}'`
			})
			return await this.roomViewDb.find(whereStr)
		} catch (e) {
			throw new WebAppError(`01`,e.message);
		}
	}

	/**
	 *  创建房间
	 */
	async roomCreate(entity: RoomCreateInput): Promise<Room>{
		try {
			const member = await this.db.getConnection().getRepository(Member).findOne({openid: entity.openId});
			if (!member || member.status === 0) {
				throw new WebAppError(`01`,`账户不存在或已被禁用`);
			}
			const roomRepo = await this.db.getConnection().getRepository(Room);
			const room = await roomRepo.findOne({where: {title: entity.title}});
			if(room) {
				throw new WebAppError(`02`,`该房间号已存在`)
			}
			return await roomRepo.save(roomRepo.create({
				title: entity.title,
				password: entity.password,
				roomTypeId: entity.roomTypeId,
				roomLimitId: entity.roomLimitId,
				isHidden: entity.isHidden,
				startType: entity.startType,
				ownerId: member.id
			}));
		} catch (e) {
			throw new WebAppError(`${e.code || `03`}`, e.message);
		}
	}

	/**
	 * 房间添加用户
	 */
	async roomAddMember(openid: string, roomId: number): Promise<void>{
		try {
			const roomRepo = this.db.getConnection().getRepository(Room);
			const memberRepo = this.db.getConnection().getRepository(Member);
			const room = await roomRepo.findOne({where: {id: roomId },relations: ['members']});
			const member = await memberRepo.findOne({where: {openid }});
			if (!room) {
				throw new WebAppError(`05`,`房间不存在`);
			}
			if (room.members.length > 7) {
				throw new WebAppError(`06`,`房间玩家已满`);
			}
			if (!member || member.status === 0) {
				throw new WebAppError(`07`,`账户不存在或已被禁用`);
			}
			if (room && member) {
				room.members.push(member);
				await roomRepo.save(room);
				await this.ticketService.memberTicketUsed(room.roomLimitId,openid);
			}
		} catch (e) {
			throw new WebAppError(`${e.code || `08`}`, e.message)
		}
	}
}
