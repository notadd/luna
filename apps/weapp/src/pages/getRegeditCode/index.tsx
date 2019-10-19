import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
export default class Index extends Component {
    config: Config = {
        navigationBarTitleText: '输入验证码'
    }
    render(){
        return (<View>输入验证码</View>)
    }
}