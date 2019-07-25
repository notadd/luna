import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn } from "typeorm";
import { Member } from "./member";

@Entity()
export class TixianLog {
    @PrimaryGeneratedColumn()
    id: number;


    /**
     * 提现人
     */
    @ManyToOne(() => Member, type => type.tixianLogs)
    member: Member;


    /**
     * 提现数量
     */
    @Column()
    count: number;

    /**
     * 提现状态
     */
    @Column()
    status: number;

    /**
     * 提现时间
     */
    @CreateDateColumn()
    createDate: number;

}