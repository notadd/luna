import { Entity, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn, getRepository, JoinColumn } from "typeorm";
import { Member } from "./member";
import { ResolveProperty } from '@notadd/magnus-core';
import * as transformer from './transformer'
@Entity()
export class TixianLog {
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * 提现人
     */
    @ManyToOne(() => Member, type => type.tixianLogs)
    @JoinColumn({
        name: 'member_id'
    })
    member: Member;

    @Column({
        name: 'member_id'
    })
    memberId: number;

    @ResolveProperty()
    async getMember(): Promise<Member | undefined> {
        return await getRepository(Member).findOne(this.memberId);
    }

    /**
     * 提现数量
     */
    @Column()
    count: number;

    /**
     * 提现金额
     */
    @Column()
    fee: number;

    /**
     * 提现状态
     */
    @Column()
    status: number;

    /**
     * 提现时间
     */
    @CreateDateColumn({
        name: 'create_data',
        type: 'timestamptz',
        transformer: transformer.timestamptz
    })
    createDate: string;

    /**
     * 更新时间
     */
    @UpdateDateColumn({
        name: 'update_data',
        type: 'timestamptz',
        transformer: transformer.timestamptz
    })
    updateDate: string;

}