import axios from "axios";
import { SubscribeMessage, SubscribeMessageErrorMsg } from '../../core/lib';
import { Injectable } from "@nestjs/common";
@Injectable()
export class SubscribeMessageImpl extends SubscribeMessage {
  async send(
    access_token: string,
    touser: string,
    template_id: string,
    data: Object,
    page?: string
  ): Promise<SubscribeMessageErrorMsg> {
    return await axios({
      method: "POST",
      url: `https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=${access_token}`,
      data: {
        touser,
        template_id,
        data,
        page
      }
    }).then(res => res.data);
  }
}
