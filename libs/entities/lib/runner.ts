import { Injectable } from '@nestjs/common';
import { createRunner } from '@notadd/magnus-core';
import { GameLog, Member, Room, RoomType, Setting, Ticket, TicketLog, TixianLog } from './entities';
import { Controller } from './entities/controller';
import { Mutation, Query } from './mangus/magnusWeb/magnus.server';
const metadata = require('./assets/magnusWeb/magnus.metadata.json');
const server = require('./assets/magnusWeb/magnus.server.json');
const entity = require('./assets/magnusWeb/magnus.entity.json');
export const runner = createRunner(
	metadata,
	server,
	{
		Controller
	},
	entity,
	{
		GameLog, 
		Member, 
		Room, 
		RoomType, 
		Setting, 
		Ticket, 
		TicketLog, 
		TixianLog
	}
);

@Injectable()
export class Magnus {
	query: Query = runner.query;
	mutation: Mutation = runner.mutation;
}