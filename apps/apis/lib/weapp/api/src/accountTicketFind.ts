import { Magnus } from '@notadd/magnus-core';

@Magnus()
export class AccountTicketFind {
    /**
     * 查询用户的所有类型的参赛券
     * @param openid 用户唯一编号
     */
    async accountTicketFind(openid: string): Promise<any> {
        return {};
    }
}
