import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, OneToMany, JoinTable, OneToOne, JoinColumn } from '@notadd/magnus-typeorm';
import { Room } from './room';
import { TixianLog } from './tixianLog';
import { GameLog } from './gameLog';
import { TicketLog } from './ticketLog';
import { Account } from './account';
import * as transformer from './transformer'
import { ChongZhiLog } from './chongzhiLog';

@Entity()
export class Member {

    @PrimaryGeneratedColumn()
    id: number;

    /**
     * 昵称
     */
    @Column({
        nullable: true,
    })
    nickname: string;

    /**
     * 密码
     */
    @Column({
        nullable: true,
    })
    password: string;

    /**
     * 头像
     */
    @Column({
        nullable: true,
    })
    avatarUrl: string;

    /**
     * 电话
     */
    @Column({
        nullable: true,
    })
    mobile: string;

    /** 0未知 1男性 2女性 */
    @Column({
        nullable: true,
    })
    gender: number;

    @Column({
        nullable: true,
    })
    country: string;

    /** 省份 */
    @Column({
        nullable: true,
    })
    province: string;

    @Column({
        nullable: true,
    })
    city: string;

    @Column({
        nullable: true,
    })
    language: string;

    /**
     * 微信id
     */
    @Column()
    openid: string;

    /**
     * 状态 0禁用 1正常
     */
    @Column({
        default: 0
    })
    status: number;

    /**
     * 余额
     */
    @Column({
        default: 0,
    })
    fee: number;

    /**
     * 金币
     */
    @Column({
        default: 0,
    })
    fee2: number;

    /**
     * 钻石
     */
    @Column({
        default: 0,
    })
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

    @OneToMany(() => ChongZhiLog, type => type.member)
    chongZhiLogs: ChongZhiLog[];

    /**
     * 游戏记录
     */
    @OneToMany(() => GameLog, type => type.members)
    @JoinTable({
        name: 'member_game_log'
    })
    gameLogs: GameLog[];

    /**
     * 用户领取的劵
     */
    @OneToMany(() => TicketLog, type => type.member)
    ticketLogs: TicketLog[];

    /**
     * 提现时间
     */
    @CreateDateColumn({
        name: 'create_date',
        type: 'timestamptz',
        transformer: transformer.timestamptz
    })
    createDate: string;

    @OneToOne(() => Account, type => type.member, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({
        name: 'account_id'
    })
    account: Account;

    @Column({
        name: 'account_id',
        nullable: true
    })
    accountId: number;
}