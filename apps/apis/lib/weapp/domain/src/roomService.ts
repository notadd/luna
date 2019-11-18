import { Injectable } from '@nestjs/common';
import { Member, Room, RoomLimit, RoomType } from '../../../entities';
import { RoomViewDb } from '../../basic/lib/roomViewDb';
import { Db } from '../../core/repository/db';
import { ServiceError, TypeError, TypeOrmError } from '../../luna.error';
import { RoomCreateInput, RoomFindInput, RoomTypesFindResult } from '../type';
import { TicketService } from './ticketService';

@Injectable()
export class RoomService {
	constructor(
		public roomViewDb: RoomViewDb,
		public ticketService: TicketService,
		public db: Db
	) { }

	/**
	 * 查找房间
	 * @param where 查找房间的条件
	 */
	async roomFind(where: RoomFindInput): Promise<any[]> {
		let whereStr = `WHERE "isHidden" = false`;
		const keys = Object.keys(where);
		keys.forEach(key => {
			if (key === 'title') {
				whereStr += ` AND "${key}" like '%${where[key]}%'`
			} else {
				whereStr += ` AND "${key}" = '${where[key]}'`
			}
		})
		try {
			return await this.roomViewDb.find(whereStr)
		} catch (e) {
			throw new TypeOrmError(`01`, e.message);
		}
	}

	/**
	 * 根据房间号查询房间的具体信息
	 * @param roomId 
	 */
	async roomFindOne(roomId: number): Promise<any> {
		if (!roomId) {
			throw new TypeError(`01`, `房间编号不能为空`);
		}
		const roomRepo = this.db.getConnection().getRepository(Room);
		const room = await roomRepo.findOne({
			where: { id: roomId },
			relations: ['roomLimit', 'members', 'roomType']
		});
		if (!room) {
			throw new ServiceError(`02`, `房间不存在`);
		}
		return {
			id: room.id,
			title: room.title,
			password: room.password,
			startType: room.startType,
			ownerId: room.ownerId,
			isHidden: room.isHidden,
			members: room.members,
			joinCount: room.members.length,
			createDate: room.createDate,
			roomTypeId: room.roomType.id,
			roomTypeTitle: room.roomType.title,
			roomLimitId: room.roomLimit.id,
			roomLimitTitle: room.roomLimit.title
		}
	}

	/**
	 *  创建房间
	 */
	async roomCreate(entity: RoomCreateInput): Promise<Room> {
		if (!entity || !entity.openId || !entity.roomTypeId || !entity.roomLimitId) {
			throw new TypeError(`06`, `创建房间的参数不能为空`)
		}
		const member = await this.db.getConnection().getRepository(Member).findOne({ openid: entity.openId });
		if (!member || member.status === 0) {
			throw new ServiceError(`07`, `账户不存在或已被禁用`);
		}
		const roomRepo = await this.db.getConnection().getRepository(Room);
		const room = await roomRepo.findOne({ where: { title: entity.title } });
		if (room) {
			throw new ServiceError(`08`, `该房间号已存在`)
		}
		const roomEntity = {
			title: entity.title,
			roomTypeId: entity.roomTypeId,
			roomLimitId: entity.roomLimitId,
			isHidden: entity.isHidden,
			startType: entity.startType,
			ownerId: member.id
		}
		try {
			return await roomRepo.save(roomRepo.create({ ...roomEntity, members: [member] }));
		} catch (e) {
			throw new TypeOrmError(`09`, e.message)
		}
	}

	/**
	 * 房间添加用户
	 */
	async roomAddMember(openid: string, roomId: number): Promise<void> {
		if (!openid || !roomId) {
			throw new TypeError(`06`, `用户编号或房间编号不可为空`);
		}
		const roomRepo = this.db.getConnection().getRepository(Room);
		const memberRepo = this.db.getConnection().getRepository(Member);
		const room = await roomRepo.findOne({ where: { id: roomId }, relations: ['members'] });
		const member = await memberRepo.findOne({ where: { openid } });
		if (!room) {
			throw new ServiceError(`07`, `房间不存在`);
		}
		if (room.members.length > 7) {
			throw new ServiceError(`08`, `房间玩家已满`);
		}
		if (!member || member.status === 0) {
			throw new ServiceError(`09`, `账户不存在或已被禁用`);
		}
		try {
			room.members.push(member);
			await roomRepo.save(room);
			return;
		} catch (e) {
			throw new TypeOrmError(`10`, e.message)
		}
	}

	/**
	 * 用户退出房间
	 * @param roomId 房间编号
	 * @param outOpenId 退出者编号
	 */
	async roomRemoveMember(roomId: number, outOpenId: string): Promise<void> {
		if (!roomId || !outOpenId) {
			throw new TypeError(`01`, `房间编号或退出人编号不能为空`)
		}
		const roomRepo = this.db.getConnection().getRepository(Room);
		const room = await roomRepo.findOne({ where: { id: roomId }, relations: ['members'] });
		if (!room) {
			throw new ServiceError(`02`, `房间不存在`);
		}
		const newRoom = room.members.filter(m => m.openid === outOpenId);
		try {
			await roomRepo.save(newRoom);
		} catch (e) {
			throw new TypeOrmError(`03`, e.message);
		}
	}

	/**
	 * 房间段位类型和房间场地类型查询
	 */
	async roomTypeFind(): Promise<RoomTypesFindResult> {
		const limitRepo = this.db.getConnection().getRepository(RoomLimit);
		const typeRepo = this.db.getConnection().getRepository(RoomType);
		const limitTypes = await limitRepo.find();
		const roomTypes = await typeRepo.find();
		return { roomLimitTypes: limitTypes, roomTypes }
	}
}
