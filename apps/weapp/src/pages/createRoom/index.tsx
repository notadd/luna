import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
export default class Index extends Component {
    config: Config = {
        navigationBarTitleText: '创建房间'
    }
    render(){
        return (<View>创建房间</View>)
    }
}