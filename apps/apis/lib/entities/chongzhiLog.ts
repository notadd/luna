import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, JoinColumn } from "@notadd/magnus-typeorm";
import { CreateDateColumn, ManyToOne } from "typeorm";
import * as transformer from './transformer'
import { Member } from './member';
@Entity()
export class ChongZhiLog {

    /**
     * 编号
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * 费用
     */
    @Column()
    fee: number;

    /**
     * 状态
     */
    @Column({
        default: 0
    })
    status: number;

    /**
     * 用户
     */
    @ManyToOne(() => Member, type => type.chongZhiLogs)
    @JoinColumn({
        name: 'member_id'
    })
    member: Member;

    /**
     * 用户id
     */
    @Column({
        name: 'member_id'
    })
    memberId: number;

    /**
     * 创建日期
     */
    @CreateDateColumn({
        transformer: transformer.timestamptz
    })
    createDate: string;

    /**
     * 更新日期
     */
    @UpdateDateColumn({
        transformer: transformer.timestamptz
    })
    updateDate: string;
}