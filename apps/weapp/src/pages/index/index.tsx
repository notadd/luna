import Taro, { Component, Config } from '@tarojs/taro'
import { View,Text, Input } from '@tarojs/components'
import './index.scss'


export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  }
  componentDidMount(){
      this.setState({
          $taroCompReady: true
      });
  }
  render () {
    return (
        <View>
            <View id="roomList" className="aui-card-list nobc">
                <View className="roomListHeader">
                    房间列表
                </View>
                <View className="aui-card-list-footer aui-padded-0 nobc">
                    <View id="ulRoom" className="aui-list aui-media-list aui-padded-5 allWight">
                    </View>
                </View>
            </View>
            <View className="search">
                <Input/>
            </View>
            <Text>Hello world1111111!</Text>
        </View>
    )
  }
}
