import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, CreateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Room } from "./room";
import { Member } from "./member";
import { ResolveProperty, Selection, Where, Order } from "@notadd/magnus-core";
import { PageLimit, createManyBuilder, createBuilder } from "./type";

@Entity()
export class GameLog {

    static relations: string[] = ['room','member'];

    @PrimaryGeneratedColumn()
    id: number;

    /**
     * 输赢
     */
    @Column()
    status: number;

    /**
     * 注码
     */
    @Column()
    count: number;

    /**
     * 开始时间
     */
    @Column({
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
    startTime: string;

    /**
     * 结束时间
     */
    @Column({
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
    endTime: string;

    /**
     * 房间
     */
    @ManyToOne(() => Room, type => type.gameLogs)
    room: Room;

    @Column()
    roomId: number;

    @ManyToMany(() => Member, type => type.gameLogs)
    members: Member[];

    @ResolveProperty()
	async getMembers(
		@Selection() selection: any,
		where?: Where<Member>,
		order?: Order<Member>,
		limit?: PageLimit
	): Promise<Member[]> {
		const ids = await createManyBuilder(
			`SELECT "memberId" FROM public.member_game_log WHERE "gameLogId"=${this.id}`,
			'memberId'
        );
		const copyWhere: any = {
			id_In: ids,
			...where
        };
		return createBuilder(copyWhere, selection, order, Member.relations, Member, limit);
    }

    @Column()
    memberId: number;
    
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