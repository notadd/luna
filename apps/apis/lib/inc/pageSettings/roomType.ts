import { STColumn } from "@delon/abc";

export default {
    title: '房间类型管理',
    url: '/roomType',
    widgets: {
        list: {
            page: {
                front: true,
                show: true,
                showSize: true,
                showQuickJumper: true,
                toTop: true
            },
            columns: [{
                type: 'checkbox',
                index: 'id',
                title: ''
            }, {
                index: 'id',
                title: '编号',
                sort: true,
                extends: true
            }, {
                index: 'id',
                title: '编号',
                sort: true
            }, {
                index: 'title',
                title: '类型',
                sort: true
            }, {
                title: '操作',
                buttons: [{
                    text: '详情'
                }]
            }] as STColumn[]
        }
    }
}