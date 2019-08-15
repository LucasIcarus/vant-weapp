import Taro, { Component, Config } from '@tarojs/taro';
import { View, Image, Block } from '@tarojs/components';
import list from '../config';

import VanButton from '../../components/button';

export default class Dashboard extends Component {
  config: Config = {
    navigationBarTitleText: 'Vant Taro'
  };

  clickHandler(url: string) {
    wx.navigateTo({ url });
  }

  render() {
    return (
      <View className="container">
        <View className="title">
          <Image className="logo" src="https://img.yzcdn.cn/vant/logo.png" />
          <View className="title-text">Vant Taro</View>
        </View>
        <View className="desc">轻量、可靠的小程序 UI 组件库</View>
        {list.map(group => (
          <Block key={group.groupName}>
            <View>{group.groupName}</View>
            {group.list.map(component => (
              <Block key={`${group.groupName}-${component.title}`}>
                <VanButton onClick={this.clickHandler.bind(this, `/pages${component.path}/index`)}>{component.title}</VanButton>
              </Block>
            ))}
          </Block>
        ))}
      </View>
    )
  }
}
