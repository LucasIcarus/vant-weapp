import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
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
import { View } from '@tarojs/components';
import { bem } from "../common/index";
import './index.less';
const cx = bem({ prefix: 'van-', block: 'info' });

class Info extends Taro.Component {
  render() {
    const props = this.props;
    return <View className={cx(null, null, props.className)}>{props.info}</View>;
  }

}

Info.options = { addGlobalClass: true };
export default Info;