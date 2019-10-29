import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Setting {
    /**
     * id
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * key weixin-account
     */
    @Column()
    key: string;

    /**
     * value
     */
    @Column({
        type: "text",
        transformer: {
            from: (val: string) => {
                return JSON.parse(val)
            },
            to: (val: any) => {
                return JSON.stringify(val)
            }
        }
    })
    value: any;
}