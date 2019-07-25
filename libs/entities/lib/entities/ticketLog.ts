import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Member } from "./member";
import { Ticket } from "./ticket";

@Entity()
export class TicketLog {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne()
    ticket: Ticket;

    @ManyToOne(() => Member, type => type.ticketLogs)
    member: Member;
}