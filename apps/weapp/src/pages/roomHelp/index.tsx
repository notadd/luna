import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
export default class Index extends Component {
    config: Config = {
        navigationBarTitleText: '帮助信息'
    }
    render(){
        return (<View>帮助信息</View>)
    }
}