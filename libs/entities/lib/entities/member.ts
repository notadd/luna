import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, OneToMany } from 'typeorm';
import { Room } from './room';
import { TixianLog } from './tixianLog';
import { GameLog } from './gameLog';

@Entity()
export class Member {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nickname: string;

    @Column()
    openid: string;

    @CreateDateColumn()
    createDate: number;

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
}