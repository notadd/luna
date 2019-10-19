import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
export default class Index extends Component {
    config: Config = {
        navigationBarTitleText: '房间信息'
    }
    render(){
        return (<View>房间信息</View>)
    }
}