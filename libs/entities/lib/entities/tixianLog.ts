import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn } from "typeorm";
import { Member } from "./member";

@Entity()
export class TixianLog {

    static relations: string[] = ['member'];

    @PrimaryGeneratedColumn()
    id: number;

    /**
     * 提现人
     */
    @ManyToOne(() => Member, type => type.tixianLogs)
    member: Member;

    @Column()
    memberId: number;

    /**
     * 提现数量
     */
    @Column()
    count: number;

    /**
     * 提现状态
     */
    @Column()
    status: number;

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