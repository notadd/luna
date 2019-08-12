import { Magnus, MagnusBase, Mutation, Order, Query, Where } from '@notadd/magnus-core';
import { FindConditions, FindOperator, getRepository } from 'typeorm';
import { GameLog, Member, Room, RoomType, Setting, Ticket, TicketLog, TixianLog } from './index';
import { PageLimit, createBuilder } from './type';

@Magnus({
    entities: [
        Member,
        Room,
        RoomType,
        Setting,
        TixianLog,
        GameLog,
        Ticket,
        TicketLog
    ]
})
export class Controller<T> extends MagnusBase<T> {
    get repository() {
        return getRepository<T>(this.entity);
    }
	/**
	 * 没有就插入，有就更新
	 * @param entity  要保存的数据
	 */
    @Mutation()
    async save(entity: T): Promise<T> {
        const item = this.repository.create(entity);
        const res = await this.repository.save(item);
        return res;
    }

	/**
	 * 插入数据
	 * @param entity 要插入的数据
	 */
    @Mutation()
    async insert(entity: T): Promise<T> {
        const item = this.repository.create(entity);
        await this.repository.insert(item);
        return item;
    }
	/**
	 * 更新数据
	 * @param entity
	 */
    @Mutation()
    async update(where: Partial<T>, entity: T): Promise<T> {
        const item = this.repository.create(entity);
        await this.repository.update(where as any, item);
        return item;
    }
	/**
	 * 通过指定条件获取一条数据
	 * @param entity 条件
	 */
    @Query()
    async get(entity: Where<T>): Promise<T | undefined> {
        const selectAndRelations = this.createSelectAndRelations();
        const res = await this.repository.findOne({
            where: entity,
            select: selectAndRelations.select,
            relations: selectAndRelations.relations
        });
        return res;
    }

	/**
	 * 通过制定条件获取一组数据
	 * @param entity 条件
	 */
    @Query()
    async find(
        entity: Where<T>,
        order: Order<T>,
        limit: PageLimit = {
            page: 1,
            psize: 20
        }
    ): Promise<T[]> {
        return createBuilder(
            entity,
            this.selection,
            order,
            this.relations.map(r => r.name),
            this.entity,
            limit
        );
    }

	/**res
	 * 删除
	 * @param id 根据id删除
	 */
    @Mutation()
    async delete(id: number): Promise<boolean> {
        const res = await this.repository.delete(id);
        if (res.affected === 1) return true;
        return false;
    }

    /**
	 * 通过制定条件获取一组数据
	 * @param entity 条件
	 */
    @Query()
    async count(): Promise<number> {
        return this.repository.count();
    }
}