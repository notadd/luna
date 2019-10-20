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
      <View className='header-search nobc'>
          <View className='header-search-container'>
            <View className='header-search-icon'></View>
            <View className='header-search-form'>
                <Input className="aui-text-center" placeholder="请输入房间号"></Input>
            </View>
          </View>
      </View>
    )
  }
}

export default Index  as ComponentType
