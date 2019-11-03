import { Entity, Column, OneToOne } from "@notadd/magnus-typeorm";
import { PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Room } from "./room";
import { Ticket } from "./ticket";

/**
 * 段位限制
 */

@Entity()
export class RoomLimit {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @OneToOne(() => Ticket,type => type.roomLimit)
    ticket: Ticket;

    @Column({
        nullable: true
    })
    ticketId: number;

    @OneToMany(() => Room, type => type.roomLimit)
    rooms: Room[];
}