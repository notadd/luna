import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
export default class Index extends Component {
    config: Config = {
        navigationBarTitleText: '比赛记录'
    }
    render(){
        return (<View>比赛记录</View>)
    }
}