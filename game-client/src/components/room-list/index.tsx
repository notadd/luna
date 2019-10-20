import { ComponentType } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Input } from '@tarojs/components'

import './index.scss'

type PageStateProps = {
}

interface Index {
  props: PageStateProps;
}

class Index extends Component {

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
      <View className='room-list nobc'>
          <View className='room-list-container'>
          </View>
      </View>
    )
  }
}

export default Index  as ComponentType
