/*
import Page from '../../common/page';

Page({
  data: {
    show: false,
    name: 'fade',
    showCustom: false
  },

  onClickFade() {
    this.trigger('fade');
  },

  onClickFadeUp() {
    this.trigger('fade-up');
  },

  onClickFadeDown() {
    this.trigger('fade-down');
  },

  onClickFadeLeft() {
    this.trigger('fade-left');
  },

  onClickFadeRight() {
    this.trigger('fade-right');
  },

  onClickSlideUp() {
    this.trigger('slide-up');
  },

  onClickSlideDown() {
    this.trigger('slide-down');
  },

  onClickSlideLeft() {
    this.trigger('slide-left');
  },

  onClickSlideRight() {
    this.trigger('slide-right');
  },

  trigger(name) {
    this.setState({ name, show: true });
    setTimeout(() => {
      this.setState({ show: false });
    }, 500);
  },

  onClickCustom() {
    this.setState({ showCustom: true });

    setTimeout(() => {
      this.setState({ showCustom: false });
    }, 500);
  }
});

<DemoBlock title="基础用法" padding>
  <Cell title="Fade" onClick="onClickFade" isLink />
  <Cell title="Fade Up" onClick="onClickFadeUp" isLink />
  <Cell title="Fade Down" onClick="onClickFadeDown" isLink />
  <Cell title="Fade Left" onClick="onClickFadeLeft" isLink />
  <Cell title="Fade Right" onClick="onClickFadeRight" isLink />
  <Cell title="Slide Up" onClick="onClickSlideUp" isLink />
  <Cell title="Slide Down" onClick="onClickSlideDown" isLink />
  <Cell title="Slide Left" onClick="onClickSlideLeft" isLink />
  <Cell title="Slide Right" onClick="onClickSlideRight" isLink />
  <Cell title="Custom" onClick="onClickCustom" isLink />

  <van-transition
    show="{{ show }}"
    name="{{ name }}"
    custom-class="block"
  />

  <van-transition
    show="{{ showCustom }}"
    name=""
    duration="{{ { enter: 300, leave: 1000 } }}"
    custom-class="block"
    enter-class="van-enter-class"
    enter-active-class="van-enter-active-class"
    leave-active-class="van-leave-active-class"
    leave-to-class="van-leave-to-class"
  />
</DemoBlock>

*/

import Taro, { Component, Config } from '@tarojs/taro';
import { Text } from '@tarojs/components';
import DemoBlock from '../demo-block';
import Transition, { TransitionType } from '../../components/transition';
import Cell from '../../components/cell';

import './index.less';

interface ITransExampleState {
  show: boolean;
  name: TransitionType;
  showCustom: boolean;
}

export default class TransitionExample extends Component<{}, ITransExampleState> {
  config: Config = {
    navigationBarTitleText: 'Transition 动画'
  };

  state: ITransExampleState = {
    show: false,
    name: 'fade',
    showCustom: false
  };

  onClickFade = () => {
    this.trigger('fade');
  };

  onClickFadeUp = () => {
    this.trigger('fade-up');
  };

  onClickFadeDown = () => {
    this.trigger('fade-down');
  };

  onClickFadeLeft = () => {
    this.trigger('fade-left');
  };

  onClickFadeRight = () => {
    this.trigger('fade-right');
  };

  onClickSlideUp = () => {
    this.trigger('slide-up');
  };

  onClickSlideDown = () => {
    this.trigger('slide-down');
  };

  onClickSlideLeft = () => {
    this.trigger('slide-left');
  };

  onClickSlideRight = () => {
    this.trigger('slide-right');
  };

  trigger(name) {
    this.setState({ name, show: true });
    setTimeout(() => {
      this.setState({ show: false }, () => {
        console.log(this.state);
      });
    }, 500);
  }

  onClickCustom = () => {
    this.setState({ showCustom: true });

    setTimeout(() => {
      this.setState({ showCustom: false });
    }, 500);
  };

  render() {
    const { show, name, showCustom } = this.state;
    return (
      <DemoBlock title="基础用法" padding>
        <Cell title="Fade" renderLabel={<Text>test</Text>} onClick={this.onClickFade} isLink />
        <Cell title="Fade Up" onClick={this.onClickFadeUp} isLink />
        <Cell title="Fade Down" onClick={this.onClickFadeDown} isLink />
        <Cell title="Fade Left" onClick={this.onClickFadeLeft} isLink />
        <Cell title="Fade Right" onClick={this.onClickFadeRight} isLink />
        <Cell title="Slide Up" onClick={this.onClickSlideUp} isLink />
        <Cell title="Slide Down" onClick={this.onClickSlideDown} isLink />
        <Cell title="Slide Left" onClick={this.onClickSlideLeft} isLink />
        <Cell title="Slide Right" onClick={this.onClickSlideRight} isLink />
        <Cell title="Custom" onClick={this.onClickCustom} isLink />

        <Transition
          show={show}
          name={name}
          className="block"
        />

        <Transition
          show={showCustom}
          name=""
          duration={{ enter: 300, leave: 1000 }}
          className="block"
          enterClass="van-enter-class"
          enterActiveClass="van-enter-active-class"
          leaveActiveClass="van-leave-active-class"
          leaveToClass="van-leave-to-class"
        />
      </DemoBlock>
    );
  }
}
