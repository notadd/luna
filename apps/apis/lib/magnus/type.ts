export interface FindAllTixianLogResult{
    code: number;
    data:　FindAllTixianLogData[];
}

export interface FindAllTixianLogData {
    /**
     * id
     */
    id: number;
    /**
     * 提现数量
     */
    count: number;
    /**
     * 体现时间
     */
    createDate: number;
    /**
     * 提现状态
     */
    status: number;
    /**
     * 用户
     */
    /**
     * 提现人
     */
    member: FindAllTixianLogMember;
}

export interface FindAllTixianLogMember {
    id: number;
    nikename: string;
}