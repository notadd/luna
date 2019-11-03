import { getConnection } from "@notadd/magnus-typeorm";
import { join } from 'path';
import { existsSync,writeFileSync } from 'fs';
export async function install() {
    try {
        if (!existsSync(join(__dirname,'init.loc'))) {
            await getConnection().query(
                `create or replace view room_with_join_count as select r.*, l.title as "roomLimitTitle",
                t.title as "roomTypeTitle",count(m.*) as join_count
                from room as r 
                left join room_member as m on r."id" = m."roomId" 
                left join room_limit as l on r."roomLimitId" = l.id 
                left join room_type as t on r."roomTypeId" = t.id
                group by r.id,l.title,t.title
                `
            );
            writeFileSync(join(__dirname,'init.loc'),'')
        }
        return `初始化成功`
    } catch (e) {
        return `初始化失败,${e.message}`
    }
}
