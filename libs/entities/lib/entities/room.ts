import { RoomType } from "./roomType";
import { Entity, Column, ManyToOne, OneToMany, ManyToMany, JoinTable, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import { Member } from "./member";
import { GameLog } from './gameLog';
import { ResolveProperty, Order, Where, Selection } from '@notadd/magnus-core';
import { PageLimit, createBuilder, createManyBuilder } from "./type";
@Entity()
export class Room {

    static relations: string[] = ['type','owner','members','gameLogs']

    /**
     * id
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * 房间密码
     */
    @Column()
    password: string;

    /**
     * 房间类型
     */
    @ManyToOne(() => RoomType, type => type.rooms)
    roomType: RoomType;

    @Column()
    roomTypeId: number;

    /**
     * 自动开启
     */
    @Column()
    autoStart: boolean;

    /**
     * 房主
     */
    @ManyToOne(() => Member, type => type.createRooms,{})
    owner: Member;

    @Column()
    ownerId: number;

    /**
     * 加入房间的人
     */
    @ManyToMany(() => Member, type => type.rooms)
    @JoinTable({
        name: 'room_member',
    })
    members: Member[];

    @ResolveProperty()
    async getMembers(
        @Selection() selection: any,
        where?: Where<Member>,
        order?: Order<Member>,
        limit?: PageLimit
    ): Promise<Member[]> {
        const ids = await createManyBuilder(
            `SELECT "memberId" FROM public.room_member WHERE "roomId"= ${this.id}`,
            'memberId'
        );
        const copyWhere: any = {
            id_In: ids,
            ...where
        };
        return createBuilder(copyWhere, selection, order, Member.relations, Member, limit);
    }


    @OneToMany(() => GameLog, type => type.room)
    gameLogs: GameLog[];

    @ResolveProperty()
	async getGameLogs(
		@Selection() selection: any,
		where?: Where<GameLog>,
		order?: Order<GameLog>,
		limit?: PageLimit
	): Promise<GameLog[]> {
		const copyWhere: any = {
			root_id: this.id,
			...where
		};
		return createBuilder(copyWhere, selection, order, GameLog.relations, GameLog, limit);
    }
    
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