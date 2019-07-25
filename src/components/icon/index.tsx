/*
import { VantComponent } from '../common/component';

VantComponent({
  props: {
    info: null,
    name: String,
    size: String,
    color: String,
    customStyle: String,
    classPrefix: {
      type: String,
      value: 'van-icon'
    }
  },

  methods: {
    onClick() {
      this.$emit('click');
    }
  }
});

<wxs src="../wxs/utils.wxs" module="utils" />

<view
  class="custom-class {{ classPrefix }} {{ utils.isSrc(name) ? 'van-icon--image' : classPrefix + '-' + name }}"
  style="{{ color ? 'color: ' + color + ';' : '' }}{{ size ? 'font-size: ' + size + ';' : '' }}{{ customStyle }}"
  bind:tap="onClick"
>
  <van-info
    wx:if="{{ info !== null }}"
    info="{{ info }}"
    custom-class="van-icon__info"
  />
  <image
    wx:if="{{ utils.isSrc(name) }}"
    src="{{ name }}"
    class="van-icon__image"
  />
</view>
*/
import * as Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { bem } from '../common';
import Info from '../info';
import './index.less';

interface IIconProps {
  info: null,
  name: string,
  size: string,
  color: string,
  classPrefix?: string,
  onClick?: (...args: any[]) => any;
}

const Icon: Taro.FunctionComponent<IIconProps> = ({
  info = null,
  onClick = function() {},
}) => (
  <View
    className="custom-class {{ classPrefix }} {{ utils.isSrc(name) ? 'van-icon--image' : classPrefix + '-' + name }}"
    style="{{ color ? 'color: ' + color + ';' : '' }}{{ size ? 'font-size: ' + size + ';' : '' }}{{ customStyle }}"
    onClick={onClick}
  ></View>
);
