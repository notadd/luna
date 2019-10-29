import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import counterStore from './store/counter'
import env from './env';
import './app.scss'

const store = {
  counterStore
}

class App extends Component {
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/room/detail/index',
      'pages/room/create/index',
      'pages/home/index',
      'pages/game/index',
      'pages/home/bind/index',
      'pages/home/forget/index',
      'pages/home/login/index',
      'pages/home/register/index'
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#000',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
        color: '#000',
        selectedColor: '#000',
        list: [{
            pagePath: 'pages/index/index',
            text: '首页',
            selectedIconPath: 'assets/images/footer-bar/index_select.png',
            iconPath: 'assets/images/footer-bar/index.png'
        },{
            pagePath: 'pages/game/index',
            text: '游戏',
            selectedIconPath: 'assets/images/footer-bar/game_select.png',
            iconPath: 'assets/images/footer-bar/game.png'
        },{
            pagePath: 'pages/home/index',
            text: '我的',
            selectedIconPath: 'assets/images/footer-bar/home_select.png',
            iconPath: 'assets/images/footer-bar/home.png'
        }]
    }
  }

  async componentDidMount () {
    // await this.login();
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
