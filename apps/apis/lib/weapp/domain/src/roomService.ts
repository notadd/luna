import { Injectable } from '@nestjs/common';
import { Room } from '../../../entities/room';
import { Db } from '../../core/repository/db';
import { RoomFindInput } from '../type';

@Injectable()
export class RoomService {
	constructor(public db: Db) { }

	/**
	 * 查找房间
	 * @param where 查找房间的条件
	 */
	async roomFind(where: RoomFindInput): Promise<any> {
		const roomRepo = this.db.getConnection().getRepository(Room);
		return await roomRepo.find({
			where: {isHidden: false, ...where},
			relations: ['roomLimit', 'roomType', 'members']
		});
	}

	/**
	 * 房间添加用户
	 */
	async roomAddMember(){

	}
}
