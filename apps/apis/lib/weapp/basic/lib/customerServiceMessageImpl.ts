import axios from "axios";
import { CommonErrorResult, CustomerServiceMessage, GetTempMediaResult, ImageInput, LinkInput, MiniprogrampageInput, TextInput, UploadTempMediaResult } from '../../core/lib';
import { Injectable } from "@nestjs/common";
@Injectable()
export class CustomerServiceMessageImpl extends CustomerServiceMessage {
    async getTempMedia(
        access_token: string,
        media_id: string
    ): Promise<GetTempMediaResult> {
        return await axios({
            method: "GET",
            url: `https://api.weixin.qq.com/cgi-bin/media/get?access_token=${access_token}&media_id=${media_id}`
        }).then(res => res.data);
    }

    async send(
        access_token: string,
        touser: string,
        msgtype: "text" | "image" | "link" | "miniprogrampage",
        text?: TextInput,
        image?: ImageInput,
        link?: LinkInput,
        miniprogrampage?: MiniprogrampageInput
    ): Promise<CommonErrorResult> {
        return await axios({
            method: "POST",
            url: `https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=${access_token}`,
            data: {
                touser,
                msgtype,
                text,
                image,
                link,
                miniprogrampage
            }
        }).then(res => res.data);
    }

    async setTyping(
        access_token: string,
        touser: string,
        command: "Typing" | "CancelTyping"
    ): Promise<CommonErrorResult> {
        return await axios({
            method: "POST",
            url: `https://api.weixin.qq.com/cgi-bin/message/custom/typing?access_token=${access_token}`,
            data: {
                touser,
                command
            }
        }).then(res => res.data);
    }

    /**
     * TODO: 待定
     * @param access_token 
     * @param media 
     * @param type 
     */
    async uploadTempMedia(
        access_token: string,
        media: Object,
        type: "image"
    ): Promise<UploadTempMediaResult> {
        return await axios({
            method: 'POST',
            url: `https://api.weixin.qq.com/cgi-bin/media/upload?access_token=${access_token}&type=${type}`,
            data: {
                media
            },
            headers: {
                "content-type": "multipart/form-data"
            }

        }).then(res => res.data)
    }
}
