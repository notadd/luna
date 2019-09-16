import {
    Magnus,
    Query,
    MagnusBase,
    Selection,
    Where,
    Order,
    Mutation,
    ID,
    Simple
} from '@notadd/magnus-core';
import { getTreeRepository, GetSelectionSet, createWhere } from '@notadd/magnus-typeorm';
import { Relation, SelectionSet } from '@notadd/magnus-typeorm';
import { Limit, ListMessages, Message, Messages } from '../message';

@Magnus({
    entities: []
})
export class TreeController<T> extends MagnusBase {
    private createWhere(where: any, relations: any, selection: any) {
        return createWhere({
            where,
            relations,
            select: selection
        });
    }
	/**
	 * 分页查找
	 */
    @Query()
    async list(
        where?: Where<T>,
        order?: Order<T>,
        limit?: Limit,
        @GetSelectionSet() set?: SelectionSet
    ): Promise<ListMessages<T>> {
        if (set) {
            const { page, psize } = limit || { page: 1, psize: 200 };
            where = where || ({} as any);
            order = order || {};
            (where as any).parentId = null;
            const _where = this.createWhere(where, set.getRelations(), set.getSelections());
            const [list, count] = await getTreeRepository<T>(this.tablename).findAndCount({
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
        return new ListMessages<T>(`B00012000`, `操作成功`);
    }
	/**
	 * 编辑
	 */
    @Mutation()
    async edit(entity: T, @Selection() selection?: any, @Relation() relations?: any): Promise<Message<T>> {
        if (this.tablename === 'User') {
            delete (entity as any).safetyScore;
        }
        const data = getTreeRepository<T>(this.tablename).create(entity);
        const res = await getTreeRepository(this.tablename).save(data);
        const _where = this.createWhere({ id: (res as any).id }, relations, selection);
        const item = await getTreeRepository<T>(this.tablename).findOne(_where);
        return new Message(`B00012000`, `操作成功`, item);
    }

	/**
	 * 删除符合条件的树元素
	 */
    @Mutation()
    async delete(
        where: Where<T>,
        @Relation() relations?: any,
        @Selection() selection?: any
    ): Promise<Message<T>> {
        const _where = this.createWhere(where, relations, selection);
        const item = await getTreeRepository<T>(this.tablename).findOne(_where.where);
        if (item) {
            try {
                const item = await getTreeRepository<T>(this.tablename).findOne(_where);
                await getTreeRepository(this.tablename).delete(_where.where);
                return new Message(`B00012000`, `删除成功`, item);
            } catch (e) {
                return new Message(`B00015001`, `请先清空相关的资源(${e.message})`);
            }
        } else {
            return new Message(`B00012000`, `操作数据不存在或已经删除`);
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
        const item = await getTreeRepository<T>(this.tablename).findOne(_where.where);
        if (item) {
            await getTreeRepository(this.tablename).update(_where.where, entity);
            const item = await getTreeRepository<T>(this.tablename).findOne(_where);
            return new Message(`B00012000`, `操作成功`, item);
        } else {
            return new Message(`B00012001`, `操作失败`, {} as any);
        }
    }

	/**
	 * 获取一棵树
	 */
    @Query()
    async tree(
        where?: Where<T>,
        @Selection() selection?: any,
        @Relation() relations?: any
    ): Promise<Message<T>> {
        const _where = this.createWhere(where, relations, selection);
        const item = await getTreeRepository<T>(this.tablename).findOne(_where);
        if (item) {
            return new Message(`B00012000`, `操作成功`, item);
        }
        return new Message(`B00010301`, `未找到满足条件的数据`);
    }
	/**
	 * 获取所有树
	 */
    @Query()
    async trees(): Promise<Messages<T>> {
        const trees = await getTreeRepository<T>(this.tablename).findTrees();
        return new Messages(`B00012000`, `操作成功`, trees);
    }

	/**
	 * 获取根
	 */
    @Query()
    async roots(): Promise<Messages<T>> {
        const trees = await getTreeRepository<T>(this.tablename).findRoots();
        return new Messages(`B00012000`, `操作成功`, trees);
    }

	/**
	 * 指定 Parent 的所有子节点  (无嵌套）
	 */
    @Query()
    async findDescendants(where: Where<T>): Promise<Messages<T>> {
        const parent = await getTreeRepository<T>(this.tablename).findOne({
            where: SelectionSet.createWhere(where)
        });
        if (parent) {
            const trees = await getTreeRepository<T>(this.tablename).findDescendants(parent);
            return new Messages(`B00012000`, `操作成功`, trees);
        }
        return new Messages(`B00012000`, `未找到制定父级`);
    }

	/**
	 * 指定 Parent 的所有子节点（嵌套）
	 */
    @Query()
    async findAncestorsTree(where: Where<T>): Promise<Message<T>> {
        const parent = await getTreeRepository<T>(this.tablename).findOne({
            where: SelectionSet.createWhere(where)
        });
        if (parent) {
            const trees = await getTreeRepository<T>(this.tablename).findAncestorsTree(parent);
            return new Message(`B00012000`, `操作成功`, trees);
        }
        return new Message(`B00012000`, `未找到制定父级`);
    }
}
