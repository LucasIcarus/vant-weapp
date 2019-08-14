/*
import { VantComponent } from '../common/component';
import { transition } from '../mixins/transition';
import { safeArea } from '../mixins/safe-area';

VantComponent({
  classes: [
    'enter-class',
    'enter-active-class',
    'enter-to-class',
    'leave-class',
    'leave-active-class',
    'leave-to-class'
  ],

  mixins: [transition(false), safeArea()],

  props: {
    transition: {
      type: String,
      observer: 'observeClass'
    },
    customStyle: String,
    overlayStyle: String,
    zIndex: {
      type: Number,
      value: 100
    },
    overlay: {
      type: Boolean,
      value: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      value: true
    },
    position: {
      type: String,
      value: 'center',
      observer: 'observeClass'
    }
  },

  created() {
    this.observeClass();
  },

  methods: {
    onClickOverlay() {
      this.$emit('click-overlay');

      if (this.data.closeOnClickOverlay) {
        this.$emit('close');
      }
    },

    observeClass() {
      const { transition, position } = this.data;

      const updateData: { [key: string]: any } = {
        name: transition || position
      };

      if (transition === 'none') {
        updateData.duration = 0;
      }

      this.set(updateData);
    }
  }
});

<wxs src="../wxs/utils.wxs" module="utils" />

<van-overlay
  wx:if="{{ overlay }}"
  mask
  show="{{ show }}"
  z-index="{{ zIndex }}"
  custom-style="{{ overlayStyle }}"
  duration="{{ duration }}"
  bind:click="onClickOverlay"
/>
<view
  wx:if="{{ inited }}"
  class="custom-class {{ classes }} {{ utils.bem('popup', [position, { safe: isIPhoneX && safeAreaInsetBottom }]) }}"
  style="z-index: {{ zIndex }}; -webkit-transition-duration:{{ currentDuration }}ms; transition-duration:{{ currentDuration }}ms; {{ display ? '' : 'display: none;' }} {{ customStyle }}"
  bind:transitionend="onTransitionEnd"
>
  <view wx:if="{{ safeAreaInsetTop }}" class="van-popup__safe-top" style="padding-top: {{ statusBarHeight }}px;"></view>
  <slot />
</view>
*/

import Taro, { FunctionComponent, Component } from '@tarojs/taro';
import { View, Block, Text } from '@tarojs/components';
import { bem, noop } from '../common';
import './index.less';
import Overlay from '../overlay';
import { useTransition } from '../transition/hooks';

type PopupPosition = 'top' | 'bottom' | 'right' | 'left' | 'center';

interface IPopupProps {
  show?: boolean;
  overlay?: boolean;
  zIndex?: number;
  duration?: number,
  closeOnClickOverlay?: boolean;
  position?: PopupPosition;
  overlayStyle?: string;
  className?: string;
  customStyle?: string;
  children?: Component | string | JSX.Element;
  onTransitionEnd?: () => void;
  onClickOverlay?: () => void;
  onClose?: () => void;
}

const cx = bem({ prefix: 'van-', block: 'popup' });

const Popup: FunctionComponent<IPopupProps> = ({
  className,
  customStyle = '',
  show = false,
  overlay = true,
  zIndex = 100,
  duration = 300,
  closeOnClickOverlay = true,
  position = 'center',
  overlayStyle = '',
  onTransitionEnd = noop,
  onClickOverlay = noop,
  onClose = noop,
  children = '',
}) => {
  const { inited, display, classes, currentDuration } = useTransition({
    show,
    name: 'fade',
    duration,
    transitionEndHandler: onTransitionEnd,
  });

  const overlayClickHandler = () => {
    onClickOverlay();
    if (closeOnClickOverlay) {
      onClose();
    }
  };

  return (
    <Block>
      {overlay &&
        <Overlay
          mask
          show={show}
          zIndex={zIndex}
          customStyle={overlayStyle}
          duration={duration}
          onClick={overlayClickHandler}
        />
      }
      {inited &&
        <View
          className={cx(null, position, [...classes, className])}
          style={`z-index:${zIndex};-webkit-transition-duration:${currentDuration}ms;transition-duration:${currentDuration}ms;${display ? '' : 'display: none;'}${customStyle}`}
        >
          <View />
          {children}
        </View>
      }
    </Block>
  )
}

Popup.defaultProps = {
  customStyle: '',
  show: false,
  overlay: true,
  zIndex: 100,
  duration: 300,
  closeOnClickOverlay: true,
  position: 'center',
  onTransitionEnd: noop,
  overlayStyle: '',
  onClickOverlay: noop,
  onClose: noop,
};
Popup.options = { addGlobalClass: true };

export default Popup;
