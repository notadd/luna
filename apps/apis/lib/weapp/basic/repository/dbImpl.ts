import { Connection, getConnection } from "@notadd/magnus-typeorm";
import { Db } from "../../core/repository/db";
export class DbImpl extends Db {
  getConnection(): Connection {
    return getConnection();
  }
}
