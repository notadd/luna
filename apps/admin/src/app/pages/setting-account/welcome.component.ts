import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { SFButton, SFSchema } from '@delon/form';
interface Account {
    appid?: string;
    secret?: string;
    tixianTpl?: string;
    chongzhiTpl?: string;
}
const graphql = gql`
mutation settingEdit($entity: SettingInput!){
  settingEdit(entity:$entity){
    code,
    data{
      id
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

    account: Account = {};

    schema: SFSchema = {
        type: 'object',
        properties: {
            appid: {
                type: 'string',
                title: '微信小程序appid'
            },
            secret: {
                type: 'string',
                title: '微信小程序secret'
            },
            tixianTpl: {
                type: 'string',
                title: '提现模板'
            },
            chongzhiTpl: {
                type: 'string',
                title: '提现模板'
            }
        },
        required: ['appid', 'secret']
    };
    button: SFButton = {
        submit: '提交'
    };

    constructor(public apollo: Apollo) { }

    ngOnInit() { }

    editAccount(account: Account) {
        this.apollo.mutate({
            mutation: graphql,
            variables: {
                key: 'weixin-account',
                value: account
            }
        }).subscribe(res => console.log(res));
    }

}
