import { getRepository, getConnection, AdvancedConsoleLogger, SelectQueryBuilder } from 'typeorm';

export interface PageLimit {
	/**
	 * 页码
	 */
	page?: number;
	/**
	 * 每页数量
	 */
	psize?: number;
}
function createOptWhere(
	opt: 'or' | 'not' | 'and' = 'and',
	parameters: any,
	builder: SelectQueryBuilder<any>,
	column: string,
	type: string
) {
	if (typeof parameters === 'string') {
		parameters = `\'${parameters}\'`;
	}
	if (Array.isArray(parameters)) {
		parameters = `(${parameters.join(',')})`;
		if (parameters === '()') {
			parameters = '(0)';
		}
	}
	switch (opt) {
		case 'and':
			builder.andWhere(`entity.${column} ${type} ${parameters}`);
			break;
		case 'not':
			builder.andWhere(`entity.${column} not ${type} ${parameters}`);
			break;
		case 'or':
			builder.orWhere(`entity.${column} ${type} ${parameters}`);
			break;
		default:
			builder.andWhere(`entity.${column} ${type} ${parameters}`);
			break;
	}
}
function createWhere(copyWhere: any, builder: any, opt: 'or' | 'not' | 'and' = 'and') {
	Object.keys(copyWhere).map(key => {
		const keys: string[] = key.split('_');
		let type: string | undefined = ``;
		let column: string = ``;
		if (keys.length > 1) {
			type = keys.pop();
		} else {
			type = undefined;
			const opt = keys[0];
			if (opt === 'OR') {
				const ors = copyWhere[opt];
				ors.map(or => {
					createWhere(or, builder, 'or');
				});
				return builder.getMany();
			} else if (opt === 'AND') {
				const ands = copyWhere[opt];
				ands.map(or => {
					createWhere(or, builder, 'and');
				});
				return builder.getMany();
			} else if (opt === 'NOT') {
				const nots = copyWhere[opt];
				nots.map(or => {
					createWhere(or, builder, 'not');
				});
				return builder.getMany();
			}
		}
		column = keys.join('_');
		const value = copyWhere[key];
		switch (type) {
			case 'Not':
				createOptWhere(opt, value, builder, column, '!=');
				break;
			case 'In':
				createOptWhere(opt, value, builder, column, 'in');
				break;
			case 'NotIn':
				createOptWhere(opt, value, builder, column, 'not in');
				break;
			case 'Lt':
				createOptWhere(opt, value, builder, column, '<');
				break;
			case 'Lte':
				createOptWhere(opt, value, builder, column, '<=');
				break;
			case 'Gt':
				createOptWhere(opt, value, builder, column, '>');
				break;
			case 'Gte':
				createOptWhere(opt, value, builder, column, '>=');
				break;
			case 'Contains':
				createOptWhere(opt, `%${value}%`, builder, column, 'like');
				break;
			case 'NotContains':
				createOptWhere(opt, `%${value}%`, builder, column, 'not like');
				break;
			case 'StartsWith':
				createOptWhere(opt, `${value}%`, builder, column, 'like');
				break;
			case 'NotStartsWith':
				createOptWhere(opt, `${value}%`, builder, column, 'not like');
				break;
			case 'EndsWith':
				createOptWhere(opt, `%${value}`, builder, column, 'like');
				break;
			case 'NotEndsWith':
				createOptWhere(opt, `%${value}`, builder, column, 'not like');
				break;
			default:
				createOptWhere(opt, value, builder, column, '=');
				break;
		}
	});
}

export async function createManyBuilder(relationSql: string, relationField: string): Promise<any[]> {
	const res = await getConnection().query(relationSql);
	return res.map(item => item[relationField]);
}
export function createBuilder(
	copyWhere: any,
	selection: any,
	order: any,
	existRelations: string[],
	entity: any,
	limit?: PageLimit
): Promise<any> {
	const { page, psize } = limit || { page: 1, psize: 20 };
	const relations = Object.keys(selection).filter(key => existRelations.includes(key));
	const selects = Object.keys(selection).filter(key => !existRelations.includes(key));
	const builder = getRepository(entity).createQueryBuilder('entity');
	createWhere(copyWhere, builder);
	if (limit && page && psize) {
		builder.offset((page - 1) * psize);
		builder.limit(psize);
	}
	if (order) {
		Object.keys(order).map(key => {
			const metadata = getConnection()
				.getMetadata(entity)
				.columns.find(it => it.propertyName === key);
			if (metadata) {
				builder.addOrderBy(metadata.databaseName || metadata.propertyName, order[key]);
			}
		});
	}
	// console.log(`sql`, builder.getSql());
	// console.log(`sql`, builder.getParameters());
	return builder.getMany();
}