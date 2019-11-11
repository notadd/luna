import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, ManyToMany } from "@notadd/magnus-typeorm";
import { Room } from "./room";
import { Member } from "./member";
import * as transformer from './transformer'

@Entity()
export class GameLog {

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
     * 段位
     */
    @Column({
        default: ``
    })
    level: string;

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
        transformer: transformer.timestamptz
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

    @Column()
    memberId: number;

    /**
     * 提现时间
     */
    @CreateDateColumn({
        type: 'timestamptz',
        transformer: transformer.timestamptz
    })
    createDate: string;
}