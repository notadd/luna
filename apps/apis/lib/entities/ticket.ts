import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { TicketLog } from "./ticketLog";
import * as transformer from './transformer';
import { OneToOne } from "@notadd/magnus-typeorm";
import { RoomType } from "./roomType";
@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * 名称
     */
    @Column()
    title: string;

    /**
     * 金币
     */
    @Column()
    fee: number;

    /**
     * 总数
     */
    @Column({
        default: 10
    })
    count: number;

    /**
     * 领取记录
     */
    @OneToMany(() => TicketLog, type => type.ticket)
    logs: TicketLog[];

    @OneToOne(() => RoomType, type => type.ticket)
    roomType: RoomType;

    @Column()
    roomTypeId: number;


    @CreateDateColumn({
        transformer: transformer.timestamptz
    })
    createDate: string;

    @UpdateDateColumn({
        transformer: transformer.timestamptz
    })
    updateDate: string;
}