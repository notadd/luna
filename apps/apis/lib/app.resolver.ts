import { AppService } from "./app.service";
// import { Resolver, Query } from "@notadd/magnus-core";
import { Resolver, Query, Args } from "@nestjs/graphql";
import { LoginInput, LoginResult } from "./types/login.type";

@Resolver()
export class AppResolver {

  constructor(public readonly appService: AppService) { }
  
  /**
   * 用户登录
   * @param where 用户名和密码 
   */
  @Query()
  async login(@Args('where') where: LoginInput): Promise<LoginResult>{
    return await this.appService.login(where);
  }

}
