import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { TicketLog } from "./ticketLog";

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    /**
     * 领取记录
     */
    @ManyToOne(() => TicketLog, type => type.ticket)
    logs: TicketLog[];
}