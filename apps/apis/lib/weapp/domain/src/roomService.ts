import { Injectable } from '@nestjs/common';
import { RoomFindInput } from '../type';
import { WebAppError } from '../../webapp.error';
import { RoomViewDb } from '../../basic/lib/roomViewDb';

@Injectable()
export class RoomService {
	constructor(public roomViewDb: RoomViewDb) { }

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
	 * 房间添加用户
	 */
	async roomAddMember(openid: string): Promise<any>{
		
	}
}
