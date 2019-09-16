import { Component, OnInit, ViewChild } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { STData, STColumn, STPage, STComponent, STChange } from '@delon/abc';
import { SFSchema, SFButton } from '@delon/form';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const query = gql`
query memberAll($where: MemberWhere,$order:MemberOrder){
  memberAll(where:$where,order:$order){
    code,
    message,
    data{
      id,
      nickname,
      avatar,
      mobile,
      openid,
      status,
      fee,
      fee2,
      fee3,
      createDate
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
    @ViewChild('st', { static: false }) st: STComponent;

    params: any = {};
    /**
     * 数据源
     */
    data: Observable<STData[]>;
    /**
     * 表格配置
     */
    columns: STColumn[] = [{
        type: 'checkbox',
        index: 'id',
        title: ''
    }, {
        index: 'id',
        title: '编号',
        sort: true
    }, {
        title: '昵称',
        index: 'nickname'
    }, {
        title: '头像',
        type: 'img',
        index: 'avatar'
    }, {
        title: '电话号码',
        index: 'mobile'
    }, {
        type: 'currency',
        title: '金币',
        index: 'fee',
        sort: true
    }, {
        type: 'date',
        title: '创建时间',
        index: 'createDate',
        sort: true
    }, {
        title: '操作',
        buttons: [{
            text: '编辑'
        }]
    }];
    /**
     * page
     */
    page: STPage = {
        front: true,
        show: true,
        showSize: true,
        showQuickJumper: true,
        toTop: true
    };

    schema: SFSchema = {
        properties: {
            mobile: {
                type: 'string',
                title: '电话号码',
                maxLength: 20
            },
            nickname: {
                type: 'string',
                title: '昵称',
                maxLength: 20
            }
        }
    };

    button: SFButton = {
        submit: '搜索'
    };
    constructor(public apollo: Apollo) { }

    ngOnInit() {
        this.data = this.apollo.watchQuery({
            query
        }).valueChanges.pipe(map((res: any) => res.data.memberAll.data));
    }

    /**
     * 导出所有
     */
    exportAll() {
        this.st.export();
    }

    dataChange(data: STData[]) {
        return data;
    }

    change(event: STChange) {

    }

    submit(event: any) {
        console.log({
            event
        });
    }
}
