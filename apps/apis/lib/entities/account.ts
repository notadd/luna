import { PrimaryGeneratedColumn, Column } from "@notadd/magnus-typeorm";
import { Entity, OneToOne } from "typeorm";
import { Member } from "./member";
import * as transformer from './transformer'

@Entity()
export class Account {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nickname: string;

    @Column()
    steamId: string;

    @OneToOne(() => Member, type => type.account)
    member: Member;

    @Column()
    level: string;
}