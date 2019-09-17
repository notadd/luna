import { Component, OnInit, ViewChild } from '@angular/core';
import { STData, STComponent, STChange } from '@delon/abc';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const query = gql`
query tixianLogAll($where: TixianLogWhere,$order:TixianLogOrder){
    tixianLogAll(where:$where,order:$order){
    code,
    message,
    data{
      id,
      count,
      status,
      fee,
      member{
          id,
          nickname
      },
      createDate,
      updateDate
    }
  },
  pageSetting(url: "/tixian")
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
    widgets: any = {};
    constructor(public apollo: Apollo) { }

    ngOnInit() {
        this.apollo.watchQuery({
            query
        }).valueChanges.pipe(map((res: any) => {
            if (res.data) {
                this.widgets = res.data.pageSetting.widgets;
                // const columns = this.widgets.list.columns;
                this.widgets.list.columns = this.widgets.list.columns.map((li: any) => {
                    if (!li.index) {
                        li.buttons = li.buttons.map(it => {
                            if (li.text === '详情') {
                                li.click = () => {
                                    console.log(`详情`);
                                    this.showDetailModal();
                                };
                                console.log(`详情`);
                            }
                            return it;
                        });
                        console.log(li);
                    }
                    return li;
                });
                this.data = res.data.tixianLogAll.data;
            }
        })).subscribe();
    }

    /**
     * 导出所有
     */
    exportAll() {
        this.st.export();
    }

    /**
     * 导出选择
     */
    exportSelect() { }

    showDetailModal() {
        this.widgets.detail.nzVisible = true;
    }

    hideDetailModal() {
        this.widgets.detail.nzVisible = false;
    }

    /**
     * 显示添加框
     */
    showAddModal() {
        this.widgets.edit.nzVisible = true;
    }

    /**
     * 隐藏添加框
     */
    hideAddModal(event: any) {
        this.widgets.edit.nzVisible = false;
    }
    /**
     * 添加用户
     */
    addUser(user: any) {
        console.log({
            user
        });
    }

    dataChange(data: STData[]) {
        console.log({ data });
        return data;
    }

    change(event: STChange) {
        console.log({ event });
    }

    /**
     * 搜索
     */
    search(event: any) {
        console.log({
            event
        });
    }

}
