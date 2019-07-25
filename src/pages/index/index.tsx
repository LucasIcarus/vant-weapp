import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

// import VantIcon from '../../components/icon';
// import Loading from '../../components/loading';
// import Transition from '../../components/transition';
// import VanButton from '../../components/button';
import Toast, { ToastType, ToastPosition } from '../../components/toast';
// import Overlay from '../../components/overlay';

import './index.less';
import { LoadingType } from '../../components/loading';
// import { noop } from '../../components/common';

interface ITestState {
  type: ToastType;
  mask: boolean;
  message: string;
  show: boolean;
  zIndex: number;
  duration: number;
  position: ToastPosition;
  forbidClick: boolean;
  loadingType: LoadingType;
}

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  state: ITestState = {
    type: 'text',
    mask: false,
    message: '',
    show: true,
    zIndex: 1000,
    duration: 3000,
    position: 'middle',
    forbidClick: false,
    loadingType: 'circular',
  }

  componentWillMount () { }

  componentDidMount () {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  tickHandler () {
  }

  timeupHandler () {
  }

  clickHandler = () => {
    // this.setState({ show: false });
  }

  render () {
    // const state = this.state;
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        {/* <VantIcon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
        <Loading />
        <Loading type="spinner" />
        <Transition className="block">
          内容
        </Transition> */}
        {/* <VanButton type="default">默认按钮</VanButton> */}
        {/* <VanButton type="primary">主要按钮</VanButton> */}
        {/* <VanButton type="info">信息按钮</VanButton> */}
        {/* <VanButton type="warning">警告按钮</VanButton> */}
        {/* <VanButton type="danger">危险按钮</VanButton> */}
        {/* <VanButton plain type="primary">朴素按钮</VanButton> */}
        {/* <VanButton plain type="danger">朴素按钮</VanButton> */}
        {/* <VanButton plain hairline type="primary">细边框按钮</VanButton> */}
        {/* <VanButton plain hairline type="danger">细边框按钮</VanButton> */}
        {/* <VanButton disabled type="primary">禁用状态</VanButton> */}
        {/* <VanButton disabled type="danger">禁用状态</VanButton> */}
        {/* <VanButton loading type="primary" /> */}
        {/* <VanButton loading type="danger" loadingText="加载中..." /> */}
        {/* <VanButton square type="primary">方形按钮</VanButton> */}
        {/* <VanButton round type="danger">圆形按钮</VanButton> */}
        {/* <VanButton size="large">大号按钮</VanButton> */}
        {/* <VanButton size="normal">普通按钮</VanButton> */}
        {/* <VanButton size="small">小型按钮</VanButton> */}
        {/* <VanButton size="mini">迷你按钮</VanButton> */}
        <Toast {...this.state} id="van-toast" />
      </View>
    )
  }
}

