import { PrimaryGeneratedColumn, Column } from "@notadd/magnus-typeorm";
import { Entity, OneToOne } from "typeorm";
import { Member } from "./member";
import * as transformer from './transformer'

@Entity()
export class Account {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    openid: string;

    @Column()
    nickName: string;

    @Column()
    avatarUrl: string;

    /** 0未知 1男性 2女性 */
    @Column()
    gender: number;

    @Column()
    country: string;

    /** 省份 */
    @Column()
    province: string;

    @Column()
    city: string;

    @Column()
    language: string;

    @Column()
    steamId: string;

    @OneToOne(() => Member, type => type.account)
    member: Member;

    @Column()
    level: string;
}