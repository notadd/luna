import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TicketLog } from "./ticketLog";
import { ResolveProperty, Order, Where, Selection } from '@notadd/magnus-core';
import { PageLimit, createBuilder } from "./type";
@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    /**
     * 领取记录
     */
    @OneToMany(() => TicketLog, type => type.ticket)
    logs: TicketLog[];

    @ResolveProperty()
	async getTicketLogs(
		@Selection() selection: any,
		where?: Where<TicketLog>,
		order?: Order<TicketLog>,
		limit?: PageLimit
	): Promise<TicketLog[]> {
		const copyWhere: any = {
			ticketId: this.id,
			...where
		};
		return createBuilder(copyWhere, selection, order, TicketLog.relations, TicketLog, limit);
	}
}