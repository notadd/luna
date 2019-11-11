import { JoinColumn } from "@notadd/magnus-typeorm";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { GameLog } from './gameLog';
import { Member } from "./member";
import { RoomLimit } from "./roomLimit";
import { RoomType } from "./roomType";
import * as transformer from './transformer';

@Entity()
export class Room {

    /**
     * 房间名称
     */
    @Column()
    title: string;

    /**
     * 隐藏房间
     */
    @Column()
    isHidden: boolean;
    /**
     * id
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * 房间密码
     */
    @Column({
        nullable: true
    })
    password: string;

    /**
     * 开始方式,1手动 2自动
     */
    @Column()
    startType: number;

    /**
     * 房间类型、场地选择
     */
    @ManyToOne(() => RoomType, type => type.rooms)
    roomType: RoomType;

    @Column()
    roomTypeId: number;

    /**
     * 段位限制
     */
    @ManyToOne(() => RoomLimit, type => type.rooms)
    roomLimit: RoomLimit;

    @Column()
    roomLimitId: number;

    /**
     * 房主
     */
    @ManyToOne(() => Member, type => type.createRooms)
    @JoinColumn({
        name: 'owner_id'
    })
    owner: Member;
    /**
     * 房主id
     */
    @Column({
        name: 'owner_id'
    })
    ownerId: number;

    /**
     * 加入房间的人
     */
    @ManyToMany(() => Member, type => type.rooms)
    @JoinTable({
        name: 'room_member',
    })
    members: Member[];

    /**
     * 游戏记录
     */
    @OneToMany(() => GameLog, type => type.room)
    gameLogs: GameLog[];

    /**
     * 提现时间
     */
    @CreateDateColumn({
        name: 'create_date',
        type: 'timestamptz',
        transformer: transformer.timestamptz
    })
    createDate: string;
}