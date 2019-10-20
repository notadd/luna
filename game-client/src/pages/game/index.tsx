import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'

type PageStateProps = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

interface Index {
  props: PageStateProps;
}

@inject('counterStore')
@observer
class Index extends Component {
  config: Config = {
    navigationBarTitleText: '游戏'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goToJoinRoom(){
      console.log(`go to join room`)
      Taro.navigateTo({
        url: '/pages/room/detail/index'
      })
  }
  goToCreateRoom(){
      console.log(`go to create room`)
      Taro.navigateTo({
        url: '/pages/room/create/index'
      })
  }

  render () {
    return (
      <View className='game'>
          <View className="main-bg">
            <Image className="main-bg-image" src="../../assets/images/bg.png"></Image>
          </View>
          <View className="game-content">
            <View className="joinBtn" onClick={()=>this.goToJoinRoom()}>
                <Image className="joinImage" src="../../assets/images/game/join.png"></Image>
            </View>
            <View className="createBtn" onClick={()=>this.goToCreateRoom()}>
                <Image className="createImage" src="../../assets/images/game/create.png"></Image>
            </View>
          </View>
      </View>
    )
  }
}

export default Index  as ComponentType
