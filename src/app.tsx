import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/dashboard'

import './app.less';
import './common.css';

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/dashboard/index',
      'pages/button/index',
      'pages/loading/index',
      'pages/transition/index',
      'pages/toast/index',
      'pages/popup/index',
    ],
    window: {
      navigationBarBackgroundColor: '#f8f8f8',
      navigationBarTitleText: 'Vant Weapp',
      navigationBarTextStyle: 'black',
      backgroundTextStyle: 'dark',
      backgroundColor: '#f8f8f8',
    },
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
