import { SFSchema } from "@delon/form";

export default {
    title: '用户管理',
    url: '/member',
    widgets: {
        list: {
            ui: 'st',
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
            }]
        },
        search: {
            ui: 'sf',
            layout: 'inline',
            button: {
                submit: '搜索'
            },
            schema: {
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
            }
        },
        edit: {
            nzVisible: false,
            nzTitle: '添加用户',
            button: null,
            schema: {
                properties: {
                    mobile: {
                        type: 'string',
                        title: '手机号码',
                        description: '请输入11位手机号码',
                        format: 'mobile',
                        maxLength: 20,
                        name: 'mobile'
                    },
                    nickname: {
                        type: 'string',
                        title: '昵称',
                        description: `请输入大于3位的字符串`,
                        minLength: 3,
                        name: 'nickname'
                    },
                    avatar: {
                        type: 'string',
                        title: '头像',
                        description: '请上传头像',
                        name: 'avatar',
                        ui: 'upload'
                    },
                    fee: {
                        type: 'number',
                        title: '金币',
                        description: '请输入大于等于0的整数',
                        name: 'fee',
                        minimum: 0,
                        maximum: 1000
                    }
                },
                required: ['nickname', 'mobile', 'fee']
            } as SFSchema
        },
        detail: {
            ui: 'nz-drawer',
            nzVisible: false,
            nzPlacement: 'right',
            nzTitle: '用户详情',
            children: {
                sv: {
                    ui: 'sv',
                    size: 'small',
                    layout: 'horizontal',
                    gutter: 32,
                    col: 3,
                    list: [{
                        label: '',
                        key: '',
                        unit: '',
                        type: 'primary',
                    }]
                }
            }
        }
    }
}