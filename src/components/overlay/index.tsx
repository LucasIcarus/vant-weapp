/*
import { VantComponent } from '../common/component';

VantComponent({
  props: {
    show: Boolean,
    mask: Boolean,
    customStyle: String,
    duration: {
      type: [Number, Object],
      value: 300
    },
    zIndex: {
      type: Number,
      value: 1
    }
  },

  methods: {
    onClick() {
      this.$emit('click');
    },

    // for prevent touchmove
    noop() {}
  }
});

<van-transition
  show="{{ show }}"
  custom-class="van-overlay"
  custom-style="z-index: {{ zIndex }}; {{ mask ? 'background-color: rgba(0, 0, 0, .7);' : '' }}; {{ customStyle }}"
  duration="{{ duration }}"
  bind:tap="onClick"
  catch:touchmove="noop"
/>
*/
import Taro, { FunctionComponent } from '@tarojs/taro';
import { noop } from '../common';
import Transition, { ITransitionDuration } from '../transition';

import './index.less';

interface IOverlayProps {
  show: boolean;
  mask: boolean;
  zIndex?: number;
  customStyle?: string;
  duration?: number | ITransitionDuration;
  onClick?: () => void;
}

const Overlay: FunctionComponent<IOverlayProps> = ({
  show,
  mask,
  duration = 300,
  onClick = noop,
  customStyle = '',
  zIndex = 1,
}) => {
  return (
    <Transition
      show={show}
      onClick={onClick}
      onTouchMove={noop}
      duration={duration}
      className="van-overlay"
      // TODO: 自定义组件样式文件中的样式不会生效...  纯外部样式反而可以
      customStyle={`z-index:${zIndex}; position: fixed; top: 0; right: 0; bottom: 0; left: 0; ${mask ? 'background-color: rgba(0, 0, 0, .7);' : '' } ${customStyle}`}
    />
  );
};

Overlay.defaultProps = {
  duration: 300,
  onClick: noop,
  customStyle: '',
  zIndex: 1,
};
Overlay.options = { addGlobalClass: true };

export default Overlay;
