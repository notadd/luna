import { Injectable } from '@nestjs/common';
import { LoginInput, LoginResult } from './types/login.type';
import { verify } from 'argon2';
import { MemberGet } from './graphql/userFind'

@Injectable()
export class AppService {
    async login(where: LoginInput): Promise<LoginResult> {
        const member = await MemberGet({ nickname: where.username }).then(res => res.memberGet);
        if (member) {
            const vefiryResult = await verify(member.password, where.password)
            if (vefiryResult) {
                return {
                    code: 200,
                    message: '登录成功'
                }
            }
        }
        return {
            code: 200,
            message: '登录失败,用户名或密码错误'
        }
    }

}