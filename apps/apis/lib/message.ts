/**
 * header refreshToken
 */
export class Message<T> {
	/**
	 * #### 1位:
	 * > H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
	 * #### 2位:
	 * > 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
	 * #### 3-5位:
	 * > 子系统编码
	 * #### 6-9位
	 * > 业务编码
	 */
    code: string;
	/**
	 * 用户友好提示
	 */
    message: string;
	/**
	 * 返回数据
	 */
    data?: T;

	/**
	 * H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
	 */
    pre: string;
	/**
	 * 子系统编码 基础信息管理 001
	 */
    system: string;
	/**
	 * > 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
	 */
    level: string;
	/**
	 * 业务编码 2000表示正常
	 */
    serviceCode: string;
    constructor(code: string, message: string, data?: T) {
        this.code = code;
        const codes = code.split('');
        this.pre = codes[0];
        this.level = code[1];
        this.system = code[2] + code[3] + code[4];
        this.serviceCode = code[5] + code[6] + code[7] + code[8];
        this.message = message;
        this.data = data || {} as any;
    }
}

export class MessageNoData<T = any> {
	/**
	 * #### 1位:
	 * > H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
	 * #### 2位:
	 * > 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
	 * #### 3-5位:
	 * > 子系统编码
	 * #### 6-9位
	 * > 业务编码
	 */
    code: string;
	/**
	 * 用户友好提示
	 */
    message: string;
	/**
	 * H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
	 */
    pre: string;
	/**
	 * 子系统编码 基础信息管理 001
	 */
    system: string;
	/**
	 * > 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
	 */
    level: string;
	/**
	 * 业务编码 2000表示正常
	 */
    serviceCode: string;
    constructor(code: string, message: string) {
        this.code = code;
        const codes = code.split('');
        this.pre = codes[0];
        this.level = code[1];
        this.system = code[2] + code[3] + code[4];
        this.serviceCode = code[5] + code[6] + code[7] + code[8];
        this.message = message;
    }
}

export class Messages<T> {
	/**
	 * #### 1位:
	 * > H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
	 * #### 2位:
	 * > 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
	 * #### 3-5位:
	 * > 子系统编码 基础信息管理 001
	 * #### ６-9
	 * > 业务编码 2000表示正常
	 */
    code: string;
	/**
	 * H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
	 */
    pre: string;
	/**
	 * 子系统编码 基础信息管理 001
	 */
    system: string;
	/**
	 * > 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
	 */
    level: string;
	/**
	 * 业务编码 2000表示正常
	 */
    serviceCode: string;
	/**
	 * 用户友好提示
	 */
    message: string;
	/**
	 * 返回数据
	 */
    data?: T[] = [];

    constructor(code: string, message: string, data: T[] = []) {
        this.code = code;
        const codes = code.split('');
        this.pre = codes[0];
        this.level = code[1];
        this.system = code[2] + code[3] + code[4];
        this.serviceCode = code[5] + code[6] + code[7] + code[8];
        this.message = message;
        this.data = data;
    }
}
export class Limit {
    page?: number;
    psize?: number;
}
export class ListResult<T> {
    list: T[];
    count: number;
}
export class ListMessages<T> {
	/**
	 * #### 1位:
	 * > H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
	 * #### 2位:
	 * > 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
	 * #### 3-5位:
	 * > 子系统编码
	 * #### 6-8位
	 * > 业务编码
	 */
    code: string;
	/**
	 * 用户友好提示
	 */
    message: string;
	/**
	 * 返回数据
	 */
    data?: ListResult<T>;

	/**
	 * H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
	 */
    pre: string;
	/**
	 * 子系统编码 基础信息管理 001
	 */
    system: string;
	/**
	 * > 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
	 */
    level: string;
	/**
	 * 业务编码 2000表示正常
	 */
    serviceCode: string;

    constructor(code: string, message: string, data?: ListResult<T>) {
        this.code = code;
        const codes = code.split('');
        this.pre = codes[0];
        this.level = code[1];
        this.system = code[2] + code[3] + code[4];
        this.serviceCode = code[5] + code[6] + code[7] + code[8];
        this.message = message;
        this.data = data || { list: [], count: 0 };
    }
}
