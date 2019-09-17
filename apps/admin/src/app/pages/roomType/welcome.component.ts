import { Component, OnInit, ViewChild } from '@angular/core';
import { STData, STComponent, STChange } from '@delon/abc';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const query = gql`
query roomTypeAll($where: RoomTypeWhere,$order:RoomTypeOrder){
  roomTypeAll(where:$where,order:$order){
    code,
    message,
    data{
      id,
      title,
      rooms {
          id,
          title
      }
    }
  },
  pageSetting(url: "/roomType")
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
    widgets: any;
    constructor(public apollo: Apollo) { }

    ngOnInit() {
        this.apollo.watchQuery({
            query
        }).valueChanges.pipe(map((res: any) => {
            if (res.data) {
                this.widgets = res.data.pageSetting.widgets;
                this.data = res.data.roomTypeAll.data;
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
