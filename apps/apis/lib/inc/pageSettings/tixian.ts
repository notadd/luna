export default {
    title: '提现管理',
    url: '/tixian',
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
                sort: true
            }, {
                index: 'fee',
                title: '金额',
                type: 'currency',
                sort: true
            }, {
                index: 'createDate',
                title: '创建时间',
                type: 'date',
                sort: true
            }, {
                index: 'updateDate',
                title: '更新时间',
                type: 'date',
                sort: true
            }, {
                title: '操作',
                buttons: [{
                    text: '详情'
                }]
            }]
        }
    }
}