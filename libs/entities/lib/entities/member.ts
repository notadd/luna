import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, OneToMany, JoinTable } from 'typeorm';
import { Room } from './room';
import { TixianLog } from './tixianLog';
import { GameLog } from './gameLog';
import { TicketLog } from './ticketLog';
import { ResolveProperty, Order, Where, Selection } from '@notadd/magnus-core';
import { PageLimit, createBuilder, createManyBuilder } from "./type";

@Entity()
export class Member {

    static relations: string[] = ['rooms', 'createRooms', 'tixianLogs', 'gameLogs', 'ticketLogs'];

    @PrimaryGeneratedColumn()
    id: number;

    /**
     * 昵称
     */
    @Column()
    nickname: string;

    /**
     * 密码
     */
    @Column()
    password: string;

    /**
     * 头像
     */
    @Column()
    avatar: string;

    /**
     * 电话
     */
    @Column()
    mobile: string;

    /**
     * 微信id
     */
    @Column()
    openid: string;

    /**
     * 状态 0禁用 1正常
     */
    @Column()
    status: number;

    /**
     * 余额
     */
    @Column()
    fee: number;

    /**
     * 金币
     */
    @Column()
    fee2: number;

    /**
     * 钻石
     */
    @Column()
    fee3: number;

    /**
     * 用户加入的房间
     */
    @ManyToMany(() => Room, type => type.members)
    rooms: Room[];
    @ResolveProperty()
    async getRooms(
        @Selection() selection: any,
        where?: Where<Room>,
        order?: Order<Room>,
        limit?: PageLimit
    ): Promise<Room[]> {
        const ids = await createManyBuilder(
            `SELECT "roomId" FROM public.room_member WHERE "memberId"= ${this.id}`,
            'roomId'
        );
        const copyWhere: any = {
            id_In: ids,
            ...where
        };
        return createBuilder(copyWhere, selection, order, Room.relations, Room, limit);
    }


    /**
     * 用户创建的房间
     */
    @OneToMany(() => Room, type => type.owner)
    createRooms: Room[];

    @ResolveProperty()
    async getCreateRooms(
        @Selection() selection: any,
        where?: Where<Room>,
        order?: Order<Room>,
        limit?: PageLimit
    ): Promise<Room[]> {
        const copyWhere: any = {
            ownerId: this.id,
            ...where
        };
        return createBuilder(copyWhere, selection, order, Room.relations, Room, limit);
    }

    /**
     * 提现记录
     */
    @OneToMany(() => TixianLog, type => type.member)
    tixianLogs: TixianLog[];

    @ResolveProperty()
    async getTixianLogs(
        @Selection() selection: any,
        where?: Where<TixianLog>,
        order?: Order<TixianLog>,
        limit?: PageLimit
    ): Promise<TixianLog[]> {
        const copyWhere: any = {
            memberId: this.id,
            ...where
        };
        return createBuilder(copyWhere, selection, order, TixianLog.relations, TixianLog, limit);
    }

    /**
     * 游戏记录
     */
    @OneToMany(() => GameLog, type => type.members)
    @JoinTable({
        name: 'member_game_log'
    })
    gameLogs: GameLog[];

    @ResolveProperty()
	async getGameLogs(
		@Selection() selection: any,
		where?: Where<GameLog>,
		order?: Order<GameLog>,
		limit?: PageLimit
	): Promise<Member[]> {
		const ids = await createManyBuilder(
			`SELECT "gameLogId" FROM public.member_game_log WHERE "memberId"=${this.id}`,
			'gameLogId'
		);
		const copyWhere: any = {
			id_In: ids,
			...where
		};
		return createBuilder(copyWhere, selection, order, GameLog.relations, GameLog, limit);
	}
   

    /**
     * 用户领取的劵
     */
    @OneToMany(() => TicketLog, type => type.id)
    ticketLogs: TicketLog[];

    @ResolveProperty()
    async getTicketLogs(
        @Selection() selection: any,
        where?: Where<TicketLog>,
        order?: Order<TicketLog>,
        limit?: PageLimit
    ): Promise<TicketLog[]> {
        const copyWhere: any = {
            memberId: this.id,
            ...where
        };
        return createBuilder(copyWhere, selection, order, TicketLog.relations, TicketLog, limit);
    }

    /**
     * 提现时间
     */
    @CreateDateColumn({
        name: 'create_date',
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