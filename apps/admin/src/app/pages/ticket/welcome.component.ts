import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { NzSizeMDSType } from 'ng-zorro-antd';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
const query = gql`
query ticketList(
    $where: TicketWhere
    $order: TicketOrder
    $limit: LimitInput
){
    ticketList(where: $where, order: $order, limit: $limit){
        code,
        message,
        data{
            count,
            list{
                id,
                title,
                fee,
                count,
                createDate,
                updateDate
            }
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

    /**
     * 是否前端显示分页
     */
    nzFrontPagination: boolean = false;
    nzBordered: boolean = false;
    nzSize: NzSizeMDSType = 'default';
    nzLoading: boolean = true;
    nzLoadingDelay: number = 200;
    nzTitle: string = `卡券管理`;
    nzPageSizeOptions: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    nzShowQuickJumper: boolean = true;
    nzShowSizeChanger: boolean = true;
    nzHideOnSinglePage: boolean = false;
    nzPageIndex: number = 1;
    nzPageSize: number = 20;
    data: Observable<{ list: any[], count: number }>;
    list: Observable<any[]>;
    count: Observable<number>;

    listOfDisplayData: any[];
    mapOfCheckedId: { [key: string]: boolean } = {};
    isAllDisplayDataChecked = false;
    isIndeterminate = false;

    listOfSelection: any[] = [{
        text: '全部',
        onSelect: () => {
            this.checkAll(true);
        }
    }];
    nzSortFee: string = `descend`;
    nzSortId: string = `descend`;

    /**
     * 搜索
     */
    searchForm: FormGroup;
    searchData: any;
    titleController: FormControl;

    constructor(private apollo: Apollo, private fb: FormBuilder) {
        this.searchForm = this.fb.group({});
        this.titleController = new FormControl();
        this.searchForm.addControl('title', this.titleController);
        this.searchForm.valueChanges.subscribe(res => {
            this.searchData = res;
        });
    }

    ngOnInit() {
        this.nzPageIndexChange(1);
    }

    /**
     * page size变化
     */
    nzPageSizeChange($event: number) {
        this.nzPageSize = $event;
        this.nzPageIndexChange(this.nzPageIndex);
    }
    /**
     * page index变化
     */
    nzPageIndexChange($event: number) {
        this.nzLoading = true;
        this.nzPageIndex = $event;
        const limit = {
            page: this.nzPageIndex,
            psize: this.nzPageSize
        };
        const order: any = {};
        const where: any = {};
        if (this.searchData) {
            if (this.searchData.title && this.searchData.title.length > 0) {
                where.title_Like = `%${this.searchData.title}%`;
            }
        }
        if (this.nzSortFee === 'descend') {
            order.fee = 'DESC';
        } else if (this.nzSortFee === 'ascend') {
            order.fee = 'ASC';
        }
        if (this.nzSortId === 'descend') {
            order.id = 'DESC';
        } else if (this.nzSortId === 'ascend') {
            order.id = 'ASC';
        }
        const data = this.apollo.watchQuery({
            query,
            variables: {
                where,
                order,
                limit
            }
        }).valueChanges.pipe(
            tap(() => {
                this.nzLoading = false;
            }),
            map((res: any) => res.data.ticketList.data)
        );
        this.list = data.pipe(
            map(it => it.list)
        );
        this.count = data.pipe(
            map(it => it.count)
        );
    }
    /**
     * 排序 id
     */
    nzSortChangeId($event: any) {
        this.nzSortId = $event;
        this.nzPageIndexChange(this.nzPageIndex);
    }
    /**
     * 排序 fee
     */
    nzSortChangeFee($event: any) {
        this.nzSortFee = $event;
        this.nzPageIndexChange(this.nzPageIndex);
    }

    checkAll(value: boolean): void {
        this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
        this.refreshStatus();
    }
    refreshStatus(): void {
        this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[item.id]);
        this.isIndeterminate =
            this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
    }
    currentPageDataChange($event: Array<{ id: number; name: string; age: number; address: string }>): void {
        this.listOfDisplayData = $event;
        this.refreshStatus();
    }

    /**
     * 搜索按钮
     */
    search() {
        this.nzPageIndexChange(this.nzPageIndex);
    }

    /**
     * 重置表单
     */
    resetForm(): void {
        this.searchForm.reset();
    }

}
