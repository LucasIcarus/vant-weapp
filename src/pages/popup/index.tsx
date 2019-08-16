/*
import Page from '../../common/page';

Page({
  data: {
    show: {
      middle: false,
      top: false,
      bottom: false,
      right: false,
      right2: false
    }
  },

  onTransitionEnd() {
    console.log(`You can't see me 🌚`);
  },
  toggle(type) {
    this.setData({
      [`show.${type}`]: !this.data.show[type]
    });
  },

  togglePopup() {
    this.toggle('middle');
  },

  toggleRightPopup() {
    this.toggle('right');
  },

  toggleRightPopup2() {
    this.toggle('right2');
  },

  toggleBottomPopup() {
    this.toggle('bottom');
  },

  toggleTopPopup() {
    this.toggle('top');
    setTimeout(() => {
      this.toggle('top');
    }, 2000);
  },

  onClickLeft() {
    wx.navigateBack();
  }
});

<van-nav-bar
  title="Popup 弹出层"
  left-text="返回"
  left-arrow
  bind:click-left="onClickLeft"
/>

<DemoBlock title="基础用法" padding>
  <VanButton onClick={this.togglePopup}>弹出 Popup</VanButton>
  <Popup
    show="{{ show.middle }}"
    className="center"
    transition="none"
    bind:close="togglePopup"
    bind:transitionEnd="onTransitionEnd"
  >
    内容
  </Popup>
</DemoBlock>

<DemoBlock title="弹出位置" padding>
  <VanButton onClick={this.toggleBottomPopup} className="demo-margin-right">底部弹出</VanButton>

  <Popup
    show="{{ show.bottom }}"
    position="bottom"
    className="bottom"
    bind:close="toggleBottomPopup"
    bind:transitionEnd="onTransitionEnd"
  >
    内容
  </Popup>

  <VanButton onClick={this.toggleTopPopup} className="demo-margin-right">顶部弹出</VanButton>
  <Popup
    show="{{ show.top }}"
    position="top"
    safe-area-inset-top
    overlay="{{ false }}"
    className="top"
    bind:close="toggleTopPopup"
    bind:transitionEnd="onTransitionEnd"
  >
    内容
  </Popup>

  <VanButton onClick={this.toggleRightPopup}>右侧弹出</VanButton>
  <Popup
    show="{{ show.right }}"
    position="right"
    safe-area-inset-top
    className="right"
    bind:close="toggleRightPopup"
    bind:transitionEnd="onTransitionEnd"
  >
    <VanButton onClick={this.toggleRightPopup} className="demo-margin-right">关闭弹层</VanButton>

    <VanButton onClick={this.toggleRightPopup2}>右侧弹出</VanButton>
    <Popup
      show="{{ show.right2 }}"
      position="right"
      safe-area-inset-top
      className="right"
      bind:close="toggleRightPopup2"
      bind:transitionEnd="onTransitionEnd"
    >
      <VanButton onClick={this.toggleRightPopup2}>关闭弹层</VanButton>
    </Popup>
  </Popup>
</DemoBlock>

*/

import Taro, { Component, Config } from '@tarojs/taro';
import { Block } from '@tarojs/components';
import DemoBlock from '../demo-block';
import Popup from '../../components/popup';
import VanButton from '../../components/button';

type ExampleType = 'middle' | 'top' | 'bottom' | 'right' | 'right2';

export default class PopupExample extends Component {
  config: Config = {
    navigationBarTitleText: 'Popup 弹出层',
  };

  state = {
    middle: false,
    top: false,
    bottom: false,
    right: false,
    right2: false
  };

  onTransitionEnd() {
    console.log(`You can't see me 🌚`);
  }

  toggle(type: ExampleType) {
    this.setState({
      [`${type}`]: !this.state[type]
    });
  }

  togglePopup = () => {
    this.toggle('middle');
  };

  toggleRightPopup = () => {
    this.toggle('right');
  };

  toggleRightPopup2 = () => {
    this.toggle('right2');
  };

  toggleBottomPopup = () => {
    this.toggle('bottom');
  };

  toggleTopPopup = () => {
    this.toggle('top');
    setTimeout(() => {
      this.toggle('top');
    }, 2000);
  };

  onClickLeft() {
    wx.navigateBack({ delta: 1 });
  }

  render() {
    return (
      <Block>
        <DemoBlock title="基础用法" padding>
          <VanButton onClick={this.togglePopup}>弹出 Popup</VanButton>
          <Popup
            show={this.state.middle}
            className="center"
            // transition="none"
            onClose={this.togglePopup}
            onTransitionEnd={this.onTransitionEnd}
          >
            内容
          </Popup>
        </DemoBlock>

        <DemoBlock title="弹出位置" padding>
          <VanButton onClick={this.toggleBottomPopup} className="demo-margin-right">底部弹出</VanButton>
          <Popup
            show={this.state.bottom}
            position="bottom"
            className="bottom"
            onClose={this.toggleBottomPopup}
            onTransitionEnd={this.onTransitionEnd}
          >
            内容
          </Popup>

          <VanButton onClick={this.toggleTopPopup} className="demo-margin-right">顶部弹出</VanButton>
          <Popup
            show={this.state.top}
            position="top"
            safe-area-inset-top
            overlay={false}
            className="top"
            onClose={this.toggleTopPopup}
            onTransitionEnd={this.onTransitionEnd}
          >
            内容
          </Popup>

          <VanButton onClick={this.toggleRightPopup}>右侧弹出</VanButton>
          <Popup
            show={this.state.right}
            position="right"
            safe-area-inset-top
            className="right"
            onClose={this.toggleRightPopup}
            onTransitionEnd={this.onTransitionEnd}
          >
            <VanButton onClick={this.toggleRightPopup} className="demo-margin-right">关闭弹层</VanButton>

            <VanButton onClick={this.toggleRightPopup2}>右侧弹出</VanButton>
            <Popup
              show={this.state.right2}
              position="right"
              safe-area-inset-top
              className="right"
              onClose={this.toggleRightPopup2}
              onTransitionEnd={this.onTransitionEnd}
            >
              <VanButton onClick={this.toggleRightPopup2}>关闭弹层</VanButton>
            </Popup>
          </Popup>
        </DemoBlock>
      </Block>
    );
  }
}

