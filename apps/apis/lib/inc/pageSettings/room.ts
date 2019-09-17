export default {
    title: '房间管理',
    url: '/room',
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
                index: 'title',
                title: '房间名',
                sort: true
            }, {
                index: 'isHidden',
                title: '是否隐藏',
                type: 'boolean',
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