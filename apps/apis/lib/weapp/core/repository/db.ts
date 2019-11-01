import { Connection } from "@notadd/magnus-typeorm";

export abstract class Db {
  abstract getConnection(): Connection;
}
