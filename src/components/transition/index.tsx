/*
import { VantComponent } from '../common/component';
import { transition } from '../mixins/transition';

VantComponent({
  classes: [
    'enter-class',
    'enter-active-class',
    'enter-to-class',
    'leave-class',
    'leave-active-class',
    'leave-to-class'
  ],

  mixins: [transition(true)]
});

<view
  wx:if="{{ inited }}"
  class="van-transition custom-class {{ classes }}"
  style="-webkit-transition-duration:{{ currentDuration }}ms; transition-duration:{{ currentDuration }}ms; {{ display ? '' : 'display: none;' }} {{ customStyle }}"
  bind:transitionend="onTransitionEnd"
>
  <slot />
</view>
*/
import Taro, { Component, FunctionComponent } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { bem, noop } from '../common';
import { useTransition } from './hooks';

import './index.less';

export type TransitionType = 'fade' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';

export interface ITransitionDuration {
  enter: number;
  leave: number;
}

interface ITransitionProps {
  duration?: number | ITransitionDuration;
  show?: boolean;
  name?: TransitionType;
  className?: string;
  customStyle?: string;
  children?: Component | string | JSX.Element;
  onTransitionEnd?: () => void;
  onClick?: () => void;
  onTouchMove?: () => void;
}

const cx = bem({ prefix: 'van-', block: 'transition' });

const Transition: FunctionComponent<ITransitionProps> = ({
  show = true,
  name = 'fade',
  children,
  duration = 300,
  className,
  customStyle = '',
  onTransitionEnd = noop,
  onClick = noop,
  onTouchMove = noop,
}) => {
  /**
   * type: '',
   * inited: false,
   * display: false
   */
  const { inited, display, classes, currentDuration } = useTransition({
    show,
    name,
    duration,
    transitionEndHandler: onTransitionEnd,
  });
  return inited ? (
    <View
      onClick={onClick}
      onTouchMove={onTouchMove}
      className={cx(null, { display }, [className, classes])}
      style={`-webkit-transition-duration:${currentDuration}ms; transition-duration:${currentDuration}ms; ${customStyle}`}
    >{children}</View>
  ) : null;
};

Transition.defaultProps = {
  show: true,
  name: 'fade',
  duration: 300,
  customStyle: '',
  onTransitionEnd: noop,
  onClick: noop,
  onTouchMove: noop,
};
Transition.options = { addGlobalClass: true };

export default Transition;
