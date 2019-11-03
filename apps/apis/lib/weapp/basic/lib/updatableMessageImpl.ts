import { CreateActivityId, TemplateInfo, UpdatableMessage, SetUpdatableMsgError } from '../../core/lib';
import axios from 'axios';
import { Injectable } from '@nestjs/common';
@Injectable()
export class updatableMessageImpl extends UpdatableMessage {
    async createActivityId(access_token: string): Promise<CreateActivityId> {
        return await axios({
            method: 'GET',
            url: `https://api.weixin.qq.com/cgi-bin/message/wxopen/activityid/create?access_token=${access_token}`
        }).then(res => res.data)
    }

    async setUpdatableMsg(
        access_token: string,
        activity_id: string,
        target_state: number,
        template_info: TemplateInfo
    ): Promise<SetUpdatableMsgError> {
        return await axios({
            method: 'POST',
            url: `https://api.weixin.qq.com/cgi-bin/message/wxopen/updatablemsg/send?access_token=${access_token}`,
            data: {
                activity_id,
                target_state,
                template_info
            }
        }).then(res => res.data)
    }
}
