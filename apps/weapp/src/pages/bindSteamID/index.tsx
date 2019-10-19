import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
export default class Index extends Component {
    config: Config = {
        navigationBarTitleText: '绑定SteamId'
    }
    render(){
        return (<View>绑定SteamId</View>)
    }
}