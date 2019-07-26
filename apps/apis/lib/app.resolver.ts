import { Resolver, Query } from "@nestjs/graphql";
import { FindAllTixianLogResult } from "./magnus/type";
import { Magnus } from "@luna/entities";

@Resolver()
export class AppResolver {
    constructor(public readonly magnus: Magnus){}

  @Query()
  hello(): string {
    return `hello`;
  }

//   @Query()
//   async findAllTixianLog(): Promise<FindAllTixianLogResult> {
//     await this.magnus.query.findTixianLog();
//   }
}
