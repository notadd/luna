import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, Column, CreateDateColumn } from "typeorm";
import { Member } from "./member";
import { Ticket } from "./ticket";

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

    /**
     * 提现时间
     */
    @CreateDateColumn({
        type: 'timestamptz',
        transformer: {
            to: (value: string): Date => {
                let date = new Date();
                if (value) {
                    date = new Date(value);
                }
                return date;
            },
            from: (value: Date) => {
                return value.toISOString();
            }
        }
    })
    createDate: string;
}