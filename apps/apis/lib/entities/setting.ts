import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Setting {
    /**
     * id
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * key
     */
    @Column()
    key: string;

    /**
     * value
     */
    @Column()
    value: string;
}