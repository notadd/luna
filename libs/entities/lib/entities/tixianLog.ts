import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn, getRepository } from "typeorm";
import { Member } from "./member";
import { ResolveProperty } from '@notadd/magnus-core';

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

    @ResolveProperty()
    async getMember(): Promise<Member | undefined> {
        return await getRepository(Member).findOne(this.memberId);
    }

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
        name: 'create_data',
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