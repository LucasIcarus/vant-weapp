import Taro, { FunctionComponent } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { bem } from '../common';
import './index.less';

export type LoadingType = 'circular' | 'spinner';

interface ILoadingProps {
  size?: string;
  color?: string;
  type?: LoadingType;
  className?: string;
}

const cx = bem({ prefix: 'van-', block: 'loading' });

const Loading: FunctionComponent<ILoadingProps> = ({
  type = 'circular',
  size = '30px',
  color = '#c9c9c9',
  className,
}) => (
  <View
    className={cx(null, null, className)}
    style={`width:${size}; height:${size}`}
  >
    <View
      className={cx('spinner', type)}
      style={`color:${color};`}
    >
      {type === 'spinner' && <View className={cx('dot')} />}
      {type === 'spinner' && <View className={cx('dot')} />}
      {type === 'spinner' && <View className={cx('dot')} />}
      {type === 'spinner' && <View className={cx('dot')} />}
      {type === 'spinner' && <View className={cx('dot')} />}
      {type === 'spinner' && <View className={cx('dot')} />}
      {type === 'spinner' && <View className={cx('dot')} />}
      {type === 'spinner' && <View className={cx('dot')} />}
      {type === 'spinner' && <View className={cx('dot')} />}
      {type === 'spinner' && <View className={cx('dot')} />}
      {type === 'spinner' && <View className={cx('dot')} />}
      {type === 'spinner' && <View className={cx('dot')} />}
    </View>
  </View>
);

Loading.defaultProps = {
  type: 'circular',
  size: '30px',
  color: '#c9c9c9',
};
Loading.options = { addGlobalClass: true };

export default Loading;
