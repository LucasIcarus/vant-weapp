import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Image } from '@tarojs/components';
import { bem, isSrc } from "../common/index";
import Info from "../info/index";
import './index.less';

class Icon extends Taro.Component {
  render() {
    const { name, info = null, className = '', classPrefix: prefix = 'van-', onClick = function () {} } = this.props;

    const cx = bem({ prefix, block: 'icon' });
    console.log(cx(null, { image: isSrc(name) }, []));
    return <View className={cx(null, { image: isSrc(name) }, [className, isSrc(name) ? '' : `${prefix}-${name}`])} onClick={onClick}>
      <Info info={info} className={cx('info')} />
      {isSrc(name) && <Image src={name} className={cx('image')} />}
    </View>;
  }

}

export default Icon;