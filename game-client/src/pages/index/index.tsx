import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import HeaderSearch from '../../components/header-search';
import RoomSearch from '../../components/room-search';
import RoomList from '../../components/room-list';
import env from '../../env';
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
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  async login(){
    const login = await Taro.login();
    console.log({
        login
    });
    const result = await Taro.request({
        url: env.url,
        data: {
            code: login.code
        }
    });
    console.log({
        result
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View className="main-bg">
            <Image className="main-bg-image" src="../../assets/images/bg.png"></Image>
        </View>
        <HeaderSearch></HeaderSearch>
        <RoomSearch></RoomSearch>
        <RoomList></RoomList>
      </View>
    )
  }
}

export default Index  as ComponentType
