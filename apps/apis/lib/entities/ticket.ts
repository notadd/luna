import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { TicketLog } from "./ticketLog";
import * as transformer from './transformer';
import { OneToOne } from "@notadd/magnus-typeorm";
import { Room } from "./room";
import { RoomLimit } from "./roomLimit";
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

    @OneToOne(() => RoomLimit, type => type.ticket)
    roomLimit: RoomLimit;

    @Column()
    roomLimitId: number;


    @CreateDateColumn({
        transformer: transformer.timestamptz
    })
    createDate: string;

    @UpdateDateColumn({
        transformer: transformer.timestamptz
    })
    updateDate: string;
}