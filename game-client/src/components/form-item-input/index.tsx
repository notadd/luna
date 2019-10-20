import { ComponentType } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Input } from '@tarojs/components'

import './index.scss'

type PageStateProps = {
    placeholder: string;
    label: string;
}

class Index extends Component<PageStateProps> {

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
      const {placeholder,label} = this.props;
    return (
      <View className='form-item'>
          <View className='form-item-container'>
            <View className='form-item-label'>{label}</View>
            <View className='form-item-input'>
                <Input placeholder={placeholder}></Input>
            </View>
          </View>
      </View>
    )
  }
}

export default Index  as ComponentType<PageStateProps>
