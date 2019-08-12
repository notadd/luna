import { Resolver, Query, Args } from "@nestjs/graphql";
import { FindAllTixianLogResult, FindAllTixianLogData } from "./magnus/type";
import { FindMemberResult, FindRoomTypeResult, FindRoomResult, FindMemberInput } from "./type";
import { AppService } from "./app.service";

@Resolver()
export class AppResolver {

  constructor(public readonly appService: AppService) { }
  /**
   * 查询用户
   */
  @Query()
  async findMember(@Args('where') where: FindMemberInput): Promise<FindMemberResult> {
    return await this.appService.findAllMemberAndCount(where);
  }

  /**
   * 查询房间类型及所对应的房间个数
   */
  @Query()
  async findRoomType(): Promise<FindRoomTypeResult> {
    return await this.appService.findAllRoomType();
  }

  /**
   * 查询房间
   */
  @Query()
  findRoom(): Promise<FindRoomResult> {
    return {} as any;
  }

  /**
   * 查询提现记录，根据时间倒序
   */
  @Query()
  findAllTiXianLog() {
    return {} as any;
  }



  // @Query()
  // async findAllTixianLog(): Promise<FindAllTixianLogResult> {
  //   const res = await this.magnus.query.findTixianLog<FindAllTixianLogData[]>(
  //     {},
  //     `{id, count, createDate, status, member{id, nikename}}`
  //   );
  //   return {
  //     code: 200,
  //     data: res
  //   };
  // }
}
