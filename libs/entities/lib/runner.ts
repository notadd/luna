import { createRunner } from '@notadd/magnus-core';
const metadata = require('./assets/entities/magnus.metadata.json');
const server = require('./assets/entities/magnus.server.json');
const entity = require('./assets/entities/magnus.entity.json');

import { Controller } from './entities/controller';
import { Mutation, Query } from './magnus/entities/magnus.server';
import { Injectable } from '@nestjs/common';
export const runner = createRunner(
	metadata,
	server,
	{
		Controller
	},
	entity
);

@Injectable()
export class Magnus {
	query: Query = runner.query;
	mutation: Mutation = runner.mutation;
}
