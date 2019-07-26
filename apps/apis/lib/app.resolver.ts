import { Resolver, Query } from "@nestjs/graphql";
import { FindAllTixianLogResult, FindAllTixianLogData } from "./magnus/type";
import { Magnus } from "@luna/entities";

@Resolver()
export class AppResolver {
  constructor(public readonly magnus: Magnus) {}

  @Query()
  hello(): string {
    return `hello`;
  }

  @Query()
  async findAllTixianLog(): Promise<FindAllTixianLogResult> {
    const res = await this.magnus.query.findTixianLog<FindAllTixianLogData[]>(
      {},
      `{id, count, createDate, status, member{id, nikename}}`
    );
    return {
      code: 200,
      data: res
    };
  }
}
