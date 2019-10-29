import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image, Icon } from '@tarojs/components'
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
    navigationBarTitleText: '我的'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='home-page'>
          <View className="main-bg">
            <Image className="main-bg-image" src="../../assets/images/bg.png"></Image>
          </View>
          <View className="header">
              <View className="header-avatar">
                  <Image className="avatar" src="../../assets/images/avatar.jpg"></Image>
              </View>
              <View className="header-info">
                <View className="username">小小玩家</View>
                <View className="steamId">steamID：511455689</View>
              </View>
              <View className="header-level">
                  <View className="level">
                      骑士6
                  </View>
              </View>
          </View>
      </View>
    )
  }
}

export default Index  as ComponentType
