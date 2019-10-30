import { MpTemplateMsg, UniformMessage, WeappTemplateMsg, UniformMessageErrorMsg } from '../../core/lib';
import axios from 'axios';
import { Injectable } from '@nestjs/common';
@Injectable()
export class UniformMessageImpl extends UniformMessage {
  async send(
    access_token: string,
    touser: string,
    mp_template_msg: MpTemplateMsg,
    weapp_template_msg?: WeappTemplateMsg
  ): Promise<UniformMessageErrorMsg> {
    return await axios({
        method: 'POST',
        url: `https://api.weixin.qq.com/cgi-bin/message/wxopen/template/uniform_send?access_token=${access_token}`,
        data: {
            touser,
            weapp_template_msg,
            mp_template_msg
        }
    }).then(res => res.data)
  }
}
