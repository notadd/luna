import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Room } from "./room";
import { OneToOne } from "@notadd/magnus-typeorm";
import { Ticket } from "./ticket";

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

    @OneToOne(() => Ticket,type => type.roomTypeId)
    ticket: Ticket;

    @Column({
        nullable: true
    })
    ticketId: number;

    @OneToMany(() => Room, type => type.roomType)
    rooms: Room[];
}