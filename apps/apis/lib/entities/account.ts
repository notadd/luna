import { PrimaryGeneratedColumn, Column } from "@notadd/magnus-typeorm";
import { Entity, OneToOne } from "typeorm";
import { Member } from "./member";
import * as transformer from './transformer'

@Entity()
export class Account {

    @PrimaryGeneratedColumn()
    id: number;

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