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
      <View className='room-search nobc'>
          <View className='room-search-container'>
          </View>
          <View className='room-search-container'>
          </View>
      </View>
    )
  }
}

export default Index  as ComponentType
