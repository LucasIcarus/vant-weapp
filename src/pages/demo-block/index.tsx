/*
Component({
  properties: {
    title: String,
    padding: Boolean
  },

  externalClasses: ['custom-class']
})

<view class="custom-class demo-block van-clearfix {{ padding ? 'demo-block--padding' : '' }}">
  <view wx:if="{{ title }}" class="demo-block__title">{{ title }}</view>
  <slot />
</view>

*/
import Taro, { FunctionComponent, Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';
import { ReactNode } from 'react';

interface IDemoBlockProps {
  className?: string;
  title?: string;
  padding?: boolean;
  children?: ReactNode;
}

const DemoBlock: FunctionComponent<IDemoBlockProps> = ({
  className,
  title = '',
  padding = false,
  children = '',
}) => {
  return (
    <View
      className={`demo-block van-clearfix ${padding ? 'demo-block--padding' : ''} ${className}`}
    >
      {title && <View className="demo-block__title">{title}</View>}
      {children}
    </View>
  );
}

DemoBlock.defaultProps = {
  title: '',
  padding: false,
  children: '',
};
DemoBlock.options = { addGlobalClass: true };

export default DemoBlock;
