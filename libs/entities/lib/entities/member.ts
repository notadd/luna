import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, OneToMany } from 'typeorm';
import { Room } from './room';
import { TixianLog } from './tixianLog';
import { GameLog } from './gameLog';
import { TicketLog } from './ticketLog';

@Entity()
export class Member {
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * 昵称
     */
    @Column()
    nickname: string;

    /**
     * 头像
     */
    @Column()
    avatar: string;

    /**
     * 电话
     */
    @Column()
    mobile: string;

    /**
     * 微信id
     */
    @Column()
    openid: string;

    /**
     * 创建时间
     */
    @CreateDateColumn()
    createDate: number;

    /**
     * 余额
     */
    @Column()
    fee: number;

    /**
     * 金币
     */
    @Column()
    fee2: number;

    /**
     * 钻石
     */
    @Column()
    fee3: number;

    /**
     * 用户加入的房间
     */
    @ManyToMany(() => Room, type => type.members)
    rooms: Room[];

    /**
     * 用户创建的房间
     */
    @OneToMany(() => Room, type => type.owner)
    createRooms: Room[];

    /**
     * 提现记录
     */
    @OneToMany(() => TixianLog, type => type.member)
    tixianLogs: TixianLog[];

    /**
     * 游戏记录
     */
    @OneToMany(() => GameLog, type => type.member)
    gameLogs: GameLog[];

    /**
     * 用户领取的劵
     */
    @OneToMany(() => TicketLog, type => type.id)
    ticketLogs: TicketLog[];
}