import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Room } from "./room";
import { ResolveProperty, Order, Where, Selection } from '@notadd/magnus-core';
import { PageLimit, createBuilder } from "./type";

@Entity()
export class RoomType {
    /**
     * id
     */
    @PrimaryGeneratedColumn()
    id: number;
    /**
     * 类型名
     */
    @Column()
    title: string;

    @OneToMany(() => Room, type => type.roomType)
    rooms: Room[];

    @ResolveProperty()
	async getRooms(
		@Selection() selection: any,
		where?: Where<Room>,
		order?: Order<Room>,
		limit?: PageLimit
	): Promise<Room[]> {
		const copyWhere: any = {
			roomTypeId: this.id,
			...where
		};
		return createBuilder(copyWhere, selection, order, Room.relations, Room, limit);
	}
}