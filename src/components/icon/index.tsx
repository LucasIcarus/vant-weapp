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
import Taro, { FunctionComponent } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { bem, isSrc, noop } from '../common';
import Info from '../info';
import './index.less';

interface IIconProps {
  name: string,
  info?: null | string | number,
  size?: string,
  color?: string,
  className?: string;
  classPrefix?: string,
  onClick?: (...args: any[]) => any;
}

const Icon: FunctionComponent<IIconProps> = ({
  name,
  info,
  className,
  classPrefix: prefix,
  onClick,
}) => {
  const cx = bem({ prefix, block: 'icon' });
  return (
    <View
      className={cx(null, { image: isSrc(name) }, [className, isSrc(name) ? '' : `${prefix}-${name}`])}
      onClick={onClick}
    >
      <Info info={info} className={cx('info')} />
      {isSrc(name) && (
        <Image src={name} className={cx('image')} />
      )}
    </View>
  );
}

Icon.defaultProps = {
  name: '',
  info: null,
  classPrefix: 'van-',
  onClick: noop,
};
Icon.options = { addGlobalClass: true };

export default Icon;
