import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { SFButton, SFSchema } from '@delon/form';
import { map } from 'rxjs/operators';
interface Account {
    appid?: string;
    secret?: string;
    tixianTpl?: string;
    chongzhiTpl?: string;
}
const settingEdit = gql`
mutation settingEdit($entity: SettingInput!){
  settingEdit(entity:$entity){
    code,
    message,
    data{
      key,
      value
    }
  }
}
`;

const settingDetail = gql`
query settingDetail($where: SettingWhere!){
  settingDetail(where:$where){
    code,
    data{
      key,
      value
    }
  }
}
`;
@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
    loading: boolean = true;
    schema: SFSchema = {
        type: 'object',
        properties: {
            appid: {
                type: 'string',
                title: 'appid',
                description: '微信小程序appid'
            },
            secret: {
                type: 'string',
                title: 'secret',
                description: '微信小程序secret'
            },
            tixianTpl: {
                type: 'string',
                title: '提现模板',
                description: '微信小程序提现模板'
            },
            chongzhiTpl: {
                type: 'string',
                title: '充值模板',
                description: '微信小程序充值模板'
            }
        },
        required: ['appid', 'secret']
    };
    button: SFButton = {
        submit: '提交'
    };
    constructor(public apollo: Apollo) { }
    ngOnInit() {
        this.apollo.query({
            query: settingDetail,
            variables: {
                where: {
                    key: 'weixin-account'
                }
            }
        }).pipe(
            map(res => res.data),
            map((res: any) => res.settingDetail),
        ).subscribe(res => {
            this.loading = false;
            if (res.code === 'B00012000') {
                const data: Account = res.data.value;
                this.schema.properties.appid.default = data.appid || '';
                this.schema.properties.secret.default = data.secret || '';
                this.schema.properties.chongzhiTpl.default = data.chongzhiTpl || '';
                this.schema.properties.tixianTpl.default = data.tixianTpl || '';
            } else {
                this.schema.properties.appid.default = '';
                this.schema.properties.secret.default = '';
                this.schema.properties.chongzhiTpl.default = '';
                this.schema.properties.tixianTpl.default = '';
            }
        });
    }
    editAccount(account: Account = {}) {
        this.apollo.mutate({
            mutation: settingEdit,
            variables: {
                entity: {
                    key: 'weixin-account',
                    value: account
                }
            }
        }).subscribe(res => {
            console.log(res);
        });
    }
}
