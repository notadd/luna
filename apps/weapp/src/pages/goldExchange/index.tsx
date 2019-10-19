import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
export default class Index extends Component {
    config: Config = {
        navigationBarTitleText: '金币兑换'
    }
    render(){
        return (<View>金币兑换</View>)
    }
}