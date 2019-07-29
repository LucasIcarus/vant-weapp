import * as Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { bem } from '../common';
import './index.less';

interface ILoadingProps {
  type?: 'circular' | 'spinner';
  className?: string;
}

const cx = bem({ prefix: 'van-', block: 'loading' });

console.log(cx('dot'));

const Loading: Taro.FunctionComponent<ILoadingProps> = ({
  type = 'circular',
  className,
}) => (
  <View className={cx(null, null, className)}>
    <View className={cx('spinner', type)}>
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

Loading.options = { addGlobalClass: true };

export default Loading;
