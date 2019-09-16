import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, Column, CreateDateColumn } from "typeorm";
import { Member } from "./member";
import { Ticket } from "./ticket";
import * as transformer from './transformer'

@Entity()
export class TicketLog {

    static relations: string[] = ['ticket','member'];

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Ticket, type => type.logs)
    ticket: Ticket;

    @Column()
    ticket_Id: number;

    @ManyToOne(() => Member, type => type.ticketLogs)
    member: Member;

    @Column()
    member_id: number;

    @CreateDateColumn({
        type: 'timestamptz',
        transformer: transformer.timestamptz
    })
    createDate: string;
}