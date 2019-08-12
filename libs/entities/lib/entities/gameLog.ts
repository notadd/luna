import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, CreateDateColumn } from "typeorm";
import { Room } from "./room";
import { Member } from "./member";

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
    @Column()
    startTime: number;

    /**
     * 结束时间
     */
    @Column()
    endTime: number;

    /**
     * 房间
     */
    @ManyToOne(() => Room, type => type.gameLogs)
    room: Room;

    @Column()
    roomId: number;

    @ManyToOne(() => Member, type => type.gameLogs)
    member: Member;

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