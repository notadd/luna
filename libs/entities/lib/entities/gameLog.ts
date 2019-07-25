import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from "typeorm";
import { Room } from "./room";
import { Member } from "./member";

@Entity()
export class GameLog {

    @PrimaryGeneratedColumn()
    id: number;

    /**
     * 输赢
     */
    @Column()
    status: number;

    /**
     * 注码
     */
    @Column()
    count: number;

    /**
     * 开始时间
     */
    @Column()
    startTime: number;

    /**
     * 结束时间
     */
    @Column()
    endTime: number;

    /**
     * 房间
     */
    @ManyToOne(() => Room, type => type.gameLogs)
    room: Room;

    @ManyToOne(() => Member, type => type.gameLogs)
    member: Member;
}