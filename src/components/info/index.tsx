/*
import { VantComponent } from '../common/component';

VantComponent({
  props: {
    info: null,
    customStyle: String
  }
});
<view
  wx:if="{{ info !== null }}"
  class="custom-class van-info"
  style="{{ customStyle }}"
>{{ info }}</view>
*/

import Taro, { FunctionComponent } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { bem } from '../common';
import './index.less';

interface IInfoProps {
  info?: string | number | null;
  className?: string;
}

const cx = bem({ prefix: 'van-', block: 'info' });

const Info: FunctionComponent<IInfoProps> = ({ info, className }) => info === null ? null : (
  <View className={cx(null, null, className)}>{info}</View>
);

Info.defaultProps = {
  info: null
};
Info.options = { addGlobalClass: true };

export default Info;