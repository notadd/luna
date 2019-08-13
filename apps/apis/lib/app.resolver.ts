import { Resolver, Query, Args } from "@nestjs/graphql";
import { FindMemberResult, FindMemberInput, FindRoomTypeResult, FindTiXianLogResult, FindRoomInput, FindRoomResult, FindTiXianLogInput } from "./type";
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
  async findRoom(where: FindRoomInput): Promise<FindRoomResult> {
    return await this.appService.findAllRoomAndCount(where);
  }

  /**
   * 查询提现记录，根据时间倒序
   */
  @Query()
  async findAllTiXianLog(@Args('where') where: FindTiXianLogInput): Promise<FindTiXianLogResult> {
    return await this.appService.findAllTixianLogAndCount(where);
  }


}
