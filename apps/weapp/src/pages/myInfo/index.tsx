import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
export default class Index extends Component {
    config: Config = {
        navigationBarTitleText: '我的基本信息'
    }
    render(){
        return (<View>我的基本信息</View>)
    }
}