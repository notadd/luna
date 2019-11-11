import { Magnus, Query, Mutation, Where, Order, MagnusBase, ID, Simple } from '@notadd/magnus-core';
import { Limit, ListMessages, Messages, Message } from '../weapp/api/message';
import { getRepository, GetSelectionSet, FindManyOptions, createWhere } from '@notadd/magnus-typeorm';
import { Selection, Relation, SelectionSet } from '@notadd/magnus-typeorm';
import { GameLog } from '../entities/gameLog';
import { Account } from '../entities/account';
import { Member } from '../entities/member';
import { Room } from '../entities/room';
import { RoomLimit } from '../entities/roomLimit';
import { RoomType } from '../entities/roomType';
import { Setting } from '../entities/setting';
import { Ticket } from '../entities/ticket';
import { TicketLog } from '../entities/ticketLog';
import { TixianLog } from '../entities/tixianLog';
import { ChongZhiLog } from '../entities/chongzhiLog';
@Magnus({
    entities: [
        GameLog,
        Account,
        Member,
        Room,
        RoomLimit,
        RoomType,
        Setting,
        Ticket,
        TicketLog,
        TixianLog,
        ChongZhiLog
    ]
})
export class EntityController<T> extends MagnusBase<T> {
    private createWhere(where: any, relations: any, selection: any) {
        return createWhere({
            where,
            relations,
            select: selection
        });
    }
	/**
	 * 获取列表
	 * 默认分页{page: 1, psize: 20}
	 */
    @Query()
    async list(
        where?: Where<T>,
        order?: Order<T>,
        limit?: Limit,
        @GetSelectionSet() set?: SelectionSet
    ): Promise<ListMessages<T>> {
        if (set) {
            const { page, psize } = limit || { page: 1, psize: 20 };
            where = where || ({} as any);
            order = order || {};
            const _where = this.createWhere(where, set.getRelations(), set.getSelections());
            const [list, count] = await getRepository<T>(this.tablename).findAndCount({
                ..._where,
                order: order,
                skip: (page! - 1) * psize!,
                take: psize!
            });
            return new ListMessages<T>(`B00012000`, `操作成功`, {
                count,
                list
            });
        }
        return new ListMessages<T>(`B60012000`, `系统错误`);
    }

	/**
	 * 获取单条
	 */
    @Query()
    async detail(
        where?: Where<T>,
        @Selection() selection?: any,
        @Relation() relations?: any,
        @GetSelectionSet() set?: any
    ): Promise<Message<T>> {
        debugger;
        const _where = this.createWhere(where, relations, selection);
        const item = await getRepository<T>(this.tablename).findOne({
            ..._where
        });
        if (item) {
            return new Message(`B00012000`, `操作成功`, item!);
        } else {
            return new Message(`B10012000`, `数据不存在或已删除`);
        }
    }

	/**
	 * 获取所有
	 * 没有分页
	 */
    @Query()
    async all(
        where?: Where<T>,
        order?: Order<T>,
        @GetSelectionSet() set?: SelectionSet
    ): Promise<Messages<T>> {
        if (set) {
            const _where = this.createWhere(where, set.getRelations(), set.getSelections());
            const item: FindManyOptions<T> = {
                ..._where,
                order: order
            };
            const list = await getRepository<T>(this.tablename).find(item);
            return new Messages(`B00012000`, `操作成功`, list);
        }
        return new Messages(`B00012000`, `操作成功`);
    }

	/**
	 * 删除
	 */
    @Mutation()
    async deleteId(id: ID, @Relation() relations?: any, @Selection() selection?: any): Promise<Message<T>> {
        const item = await getRepository<T>(this.tablename).findOne(id);
        if (item) {
            try {
                const _where = this.createWhere({ id }, relations, selection);
                const item = await getRepository<T>(this.tablename).findOne(_where);
                await getRepository(this.tablename).delete(id);
                return new Message(`B00012000`, `删除成功`, item);
            } catch (e) {
                return new Message(`B20015001`, `请先清空相关的资源`);
            }
        } else {
            return new Message(`B20014404`, `操作数据不存在或已经删除`, item);
        }
    }

    @Mutation()
    async delete(
        where: Where<T>,
        @Relation() relations?: any,
        @Selection() selection?: any
    ): Promise<Message<T>> {
        const _where = this.createWhere(where, relations, selection);
        const item = await getRepository<T>(this.tablename).findOne(_where.where);
        if (item) {
            try {
                const item = await getRepository<T>(this.tablename).findOne(_where);
                await getRepository(this.tablename).delete(_where.where);
                return new Message(`B00012000`, `删除成功`, item);
            } catch (e) {
                return new Message(`B20015001`, `请先清空相关的资源(${e.message})`);
            }
        } else {
            return new Message(`B20012000`, `操作数据不存在或已经删除`);
        }
    }
	/**
	 * 批量删除
	 */
    @Mutation()
    async deletes(
        ids: ID[],
        @Relation() relations?: any,
        @Selection() selection?: any
    ): Promise<Messages<T>> {
        const _where = this.createWhere(
            {
                id_In: ids
            },
            relations,
            selection
        );
        const items = await getRepository<T>(this.tablename).find(_where.where);
        if (items && items.length > 0) {
            const items = await getRepository<T>(this.tablename).find(_where);
            await getRepository(this.tablename).delete(_where.where);
            return new Message(`B00012000`, `删除成功`, items);
        } else {
            return new Message(`B20012000`, `操作数据不存在或已经删除`);
        }
    }

    @Mutation()
    async update(
        where: Where<T>,
        entity: Simple<T>,
        @Selection() selection: any,
        @Relation() relations: any
    ): Promise<Message<T>> {
        if (this.tablename === 'User') {
            delete (entity as any).safetyScore;
        }
        const _where = this.createWhere(where, relations, selection);
        const item = await getRepository<T>(this.tablename).findOne(_where.where);
        if (item) {
            await getRepository(this.tablename).update(_where.where, entity);
            const item = await getRepository<T>(this.tablename).findOne(_where);
            return new Message(`B00012000`, `操作成功`, item);
        } else {
            return new Message(`B20012001`, `操作失败`, {} as any);
        }
    }

	/**
	 * 更新或新增
	 * 修改状态等操作,应使用update
	 */
    @Mutation()
    async edit(entity: T, @Selection() selection?: any, @Relation() relations?: any): Promise<Message<T>> {
        if (this.tablename === 'User') {
            delete (entity as any).safetyScore;
        }
        const data = getRepository<T>(this.tablename).create(entity);
        const res = await getRepository(this.tablename).save(data);
        const _where = this.createWhere({ id: (res as any).id }, relations, selection);
        const item = await getRepository<T>(this.tablename).findOne(_where);
        return new Message(`B00012000`, `操作成功`, item);
    }
	/**
	 * 批量编辑
	 */
    @Mutation()
    async edits(
        entity: T[],
        @Selection() selection?: any,
        @Relation() relations?: any
    ): Promise<Messages<T>> {
        if (this.tablename === 'User') {
            entity = entity.map(ent => {
                delete (ent as any).safetyScore;
                return ent;
            });
        }
        const datas = entity.map(ent => getRepository(this.tablename).create(ent));
        const list: any = await getRepository(this.tablename).save(datas);
        if (list) {
            const where = this.createWhere(
                {
                    id_In: list.map(it => it.id)
                },
                relations,
                selection
            );
            const items = await getRepository<T>(this.tablename).find(where);
            return new Message(`B00012000`, `操作成功`, items);
        }
        return new Message(`B20012000`, `操作失败`);
    }

	/**
	 * 添加单条数据，无自动关联关系
	 */
    @Mutation()
    async add(
        entity: Simple<T>,
        @Selection() selection?: any,
        @Relation() relations?: any
    ): Promise<Message<T>> {
        if (this.tablename === 'User') {
            delete (entity as any).safetyScore;
        }
        const item = getRepository<T>(this.tablename).create(entity as any);
        const addRes = await getRepository<T>(this.tablename).insert(item);
        if (addRes.identifiers.length === 1) {
            const addSuccess = addRes.identifiers[0];
            const _where = this.createWhere(
                {
                    id: (addSuccess as any).id
                },
                relations,
                selection
            );
            const result = await getRepository<T>(this.tablename).findOne(_where);
            return new Message(`B00012000`, `操作成功`, result);
        }
        return new Message(`B20012000`, `添加失败`);
    }

	/**
	 * 批量添加
	 */
    @Mutation()
    async adds(
        entity: Simple<T>[],
        @Selection() selection?: any,
        @Relation() relations?: any
    ): Promise<Messages<T>> {
        if (this.tablename === 'User') {
            entity = entity.map(ent => {
                delete (ent as any).safetyScore;
                return ent;
            });
        }
        const addRes = await getRepository(this.tablename).insert(entity);
        if (addRes.identifiers.length > 0) {
            const ids = addRes.identifiers.map(res => res.id);
            const _where = this.createWhere(
                {
                    id_In: ids
                },
                relations,
                selection
            );
            const result = await getRepository<T>(this.tablename).find(_where);
            return new Messages(`B00012000`, `操作成功`, result);
        }
        return new Messages(`B20012000`, `插入失败`);
    }
}
