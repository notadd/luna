import { RoomType } from "./roomType";
import { Entity, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Member } from "./member";
import { GameLog } from './gameLog';
@Entity()
export class Room {

    /**
     * 房间密码
     */
    @Column()
    password: string;

    /**
     * 房间类型
     */
    @ManyToOne(() => RoomType, type => type.rooms)
    type: RoomType;

    /**
     * 自动开启
     */
    @Column()
    autoStart: boolean;

    /**
     * 房主
     */
    @ManyToOne(() => Member, type => type.createRooms)
    owner: Member;

    /**
     * 加入房间的人
     */
    @ManyToMany(() => Member, type => type.rooms)
    @JoinTable({
        name: 'room_member'
    })
    members: Member[];

    @OneToMany(() => GameLog, type => type.room)
    gameLogs: GameLog[];
}