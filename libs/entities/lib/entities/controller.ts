import { Magnus, MagnusBase, Query, Mutation } from '@notadd/magnus-core'
import { Member, Room, RoomType, Setting, TixianLog, GameLog, Ticket, TicketLog } from './index';
import { getRepository, Repository } from 'typeorm';
@Magnus({
    entities: [
        Member, Room, RoomType, Setting, TixianLog,
        GameLog, Ticket, TicketLog
    ]
})
export class Controller<T> extends MagnusBase<T> {
    get repository(): Repository<T> {
        return getRepository(this.tablename)
    }
    @Query()
    get(entity: Partial<T>): Promise<T> {
        return this.repository.findOneOrFail({
            where: entity
        });
    }

    /**
	 * 通过制定条件获取一组数据
	 * @param entity 条件
	 */
	@Query()
	async find(entity: Partial<T>): Promise<T[]> {
		const relations = Object.keys(this.selection).filter(
			selec => !!this.relations.find(relation => relation.name === selec)
		);
		const res = await this.repository.find({
			where: entity,
			relations
		});
		return res;
	}


    @Mutation()
    save(entity: T): Promise<T> {
        return this.repository.save(entity);
    }
}
