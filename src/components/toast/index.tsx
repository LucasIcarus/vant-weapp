/*
import { VantComponent } from '../common/component';

VantComponent({
  props: {
    show: Boolean,
    mask: Boolean,
    message: String,
    forbidClick: Boolean,
    zIndex: {
      type: Number,
      value: 1000
    },
    type: {
      type: String,
      value: 'text'
    },
    loadingType: {
      type: String,
      value: 'circular'
    },
    position: {
      type: String,
      value: 'middle'
    }
  },

  methods: {
    // for prevent touchmove
    noop() {}
  }
});

<van-overlay
  wx:if="{{ mask || forbidClick }}"
  show="{{ show }}"
  mask="{{ mask }}"
  z-index="{{ zIndex }}"
/>
<van-transition
  show="{{ show }}"
  custom-style="z-index: {{ zIndex }}"
  custom-class="van-toast__container"
>
  <view
    class="van-toast van-toast--{{ type === 'text' ? 'text' : 'icon' }} van-toast--{{ position }}"
    catch:touchmove="noop"
  >
    <!-- text only -->
    <text wx:if="{{ type === 'text' }}">{{ message }}</text>

    <!-- with icon -->
    <block wx:else>
      <van-loading
        wx:if="{{ type === 'loading' }}"
        color="white"
        type="{{ loadingType }}"
        custom-class="van-toast__loading"
      />
      <van-icon wx:else class="van-toast__icon" name="{{ type }}" />
      <text wx:if="{{ message }}" class="van-toast__text">{{ message }}</text>
    </block>

    <slot />
  </view>
</van-transition>

*/
import Taro, { FunctionComponent } from '@tarojs/taro';
import { View, Block, Text } from '@tarojs/components';
import { bem, noop } from '../common';
import './index.less';
import Loading, { LoadingType } from '../loading';
import Overlay from '../overlay';
import Transition from '../transition';
import VanIcon from '../icon';

export type ToastType = 'text' | 'loading' | 'success' | 'fail' | 'html';
export type ToastPosition = 'top' | 'middle' | 'bottom';
export type ToastMessage = string | number;
export interface IToastProps {
  show?: boolean;
  mask?: boolean;
  message?: ToastMessage;
  forbidClick?: boolean;
  zIndex?: number;
  type?: ToastType;
  loadingType?: LoadingType;
  position?: ToastPosition;
  id?: string;
}

const cx = bem({ prefix: 'van-', block: 'toast' });

const Toast: FunctionComponent<IToastProps> = ({
  show = false,
  mask = false,
  message = '',
  forbidClick = false,
  zIndex = 1000,
  type = 'text',
  loadingType = 'circular',
  position = 'middle',
}) => {
  return (
    <Block>
      {(mask || forbidClick) && <Overlay show={show} mask={mask} zIndex={zIndex} />}
      <Transition
        show={show}
        customStyle={`z-index:${zIndex};position: fixed;top: 50%;left: 50%;max-width: 70%;width: fit-content;transform: translate(-50%, -50%);`}
        className={cx('container')}
      >
        <View
          className={cx(null, [position, type === 'text' ? 'text' : 'icon'])}
          onTouchMove={noop}
        >
          {type === 'text' && <Text>{message}</Text>}
          {type !== 'text' && <Block>
            {type === 'loading' && <Loading color="white" type={loadingType} className={cx('loading')} />}
            {type !== 'loading' && <VanIcon name={type} className={cx('icon')} />}
            {message && <Text className={cx('message')}>{message}</Text>}
          </Block>}
        </View>
      </Transition>
    </Block>
  );
};

Toast.defaultProps = {
  show: false,
  mask: false,
  message: '',
  forbidClick: false,
  zIndex: 1000,
  type: 'text',
  loadingType: 'circular',
  position: 'middle',
};
Toast.options = { addGlobalClass: true };

export * from './toast';
export default Toast;
