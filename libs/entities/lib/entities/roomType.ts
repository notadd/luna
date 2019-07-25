import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Room } from "./room";

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

    @OneToMany(() => Room, type => type.type)
    rooms: Room[];
}