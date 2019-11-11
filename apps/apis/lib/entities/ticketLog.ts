import { JoinColumn } from "@notadd/magnus-typeorm";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Member } from "./member";
import { Ticket } from "./ticket";
import * as transformer from './transformer';

@Entity()
export class TicketLog {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Ticket, type => type.logs)
    @JoinColumn({
        name: 'ticket_id'
    })
    ticket: Ticket;

    @Column({
        name: 'ticket_id'
    })
    ticket_Id: number;

    @ManyToOne(() => Member, type => type.ticketLogs)
    @JoinColumn({
        name: 'member_id'
    })
    member: Member;

    @Column({
        name: 'member_id'
    })
    member_id: number;

    @CreateDateColumn({
        type: 'timestamptz',
        transformer: transformer.timestamptz
    })
    createDate: string;
}