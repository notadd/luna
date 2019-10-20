import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import FormItemInput from '../../../components/form-item-input/index';
import FormItemRadio from '../../../components/form-item-radio/index';
import FormItemSwitch from '../../../components/form-item-switch/index';

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
    navigationBarTitleText: '创建房间'
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
      <View className='room-create'>
          <View className="main-bg">
            <Image className="main-bg-image" src="../../../assets/images/bg.png"></Image>
          </View>
          <View className="form">
              <View className="form-bg">
                  <Image className="form-bg-image" src="../../../assets/images/reBgi.png"></Image>
              </View>
            <FormItemInput label={'房间名称'} placeholder={'请输入房间名称'}></FormItemInput>
            <FormItemRadio label={'段位限制'} values={["主教6-","主教6+"]}></FormItemRadio>
            <FormItemRadio label={'场地选择'} values={["黄金","白银","青铜"]}></FormItemRadio>
            <FormItemSwitch label={'隐藏房间'}></FormItemSwitch>
            <FormItemInput label={'房间密码'} placeholder={'请输入房间密码'}></FormItemInput>
            <FormItemRadio label={'开始方式'} values={["自动开始","手动开始"]}></FormItemRadio>
          </View>
          <View className="form-submit">
                <Image className="form-submit-image" src="../../../assets/images/room/btnCreateOK.png"></Image>
            </View>
      </View>
    )
  }
}

export default Index  as ComponentType
