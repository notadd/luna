import { Magnus, Query } from "@notadd/magnus-core";
import { Message } from "../../message";
import { RoomService } from "../../../domain/src/roomService";

interface RoomType {
	id: number;
	title: string;
}

interface RoomTypesFindResult {
	/** 房间段位 */
	roomLimitTypes: RoomType[];
	/** 房间场地 */
	roomTypes: RoomType[];
}

@Magnus()
export class RoomTypesFind {
	constructor(public roomService: RoomService) { }

	/**
	 * 查询房间的段位类型和场地类型
	 */
	@Query()
	async roomTypesFind(): Promise<Message<RoomTypesFindResult>> {
		try {
			const allTypes = await this.roomService.roomTypeFind();
			return new Message<RoomTypesFindResult>(`B00010800`, `查询成功`, allTypes);
		} catch (e) {
			return new Message<RoomTypesFindResult>(`B20010801`, `查询失败,${e.message}`);
		}
	}
}
