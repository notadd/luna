import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, OneToMany } from 'typeorm';
import { Room } from './room';
import { TixianLog } from './tixianLog';

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

    @OneToMany(() => TixianLog, type => type.id)
    tixianLogs: TixianLog[];
}