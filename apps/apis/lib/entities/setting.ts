import { Entity, CreateDateColumn, PrimaryColumn, Column, UpdateDateColumn } from "typeorm";

@Entity()
export class Setting {

    @CreateDateColumn()
    createDate: number;

    @UpdateDateColumn()
    updateDate: string;

    /**
     * key weixin-account
     */
    @PrimaryColumn()
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