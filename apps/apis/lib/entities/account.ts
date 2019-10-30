import { PrimaryGeneratedColumn, Column } from "@notadd/magnus-typeorm";
import { Entity, OneToOne } from "typeorm";
import { Member } from "./member";
import * as transformer from './transformer'

@Entity()
export class Account {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true,
    })
    openid: string;

    @Column({
        nullable: true,
    })
    nickName: string;

    @Column({
        nullable: true,
    })
    avatarUrl: string;

    /** 0未知 1男性 2女性 */
    @Column({
        nullable: true,
    })
    gender: number;

    @Column({
        nullable: true,
    })
    country: string;

    /** 省份 */
    @Column({
        nullable: true,
    })
    province: string;

    @Column({
        nullable: true,
    })
    city: string;

    @Column({
        nullable: true,
    })
    language: string;

    @Column({
        nullable: true,
    })
    steamId: string;

    @OneToOne(() => Member, type => type.account)
    member: Member;

    @Column({
        nullable: true,
    })
    level: string;
}