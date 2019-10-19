import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
export default class Index extends Component {
    config: Config = {
        navigationBarTitleText: '手机快速注册'
    }
    render(){
        return (<View>手机快速注册</View>)
    }
}