import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import "./index.scss"
import youxi from './icon/youxi.png'
export default class Index extends Component {
    config: Config = {
        navigationBarTitleText: '比赛'
    }
    componentDidMount(){
        this.setState({
            $taroCompReady: true
        });
    }
    render(){
        return (
            <View className="createOrJoin">
                <View className="bg"></View>
                <View className="content">
                    <View className="quickJoin">
                        <View className="icon"></View>
                        <View className="text">快速加入</View>
                    </View>
                    <View className="createRoom">
                        <View className="icon"></View>
                        <View className="text">创建房间</View>
                    </View>
                    <View className="logo"></View>
                </View>
            </View>
        )
    }
}