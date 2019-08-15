/*
import Page from '../../common/page';
import Toast from '../../dist/toast/toast';

Page({
  showToastUtil() {
    ToastUtil('提示内容');
  },

  showLongToastUtil() {
    ToastUtil('这是一条长文字提示，超过一定字数就会换行');
  },

  showLoadingToastUtil() {
    Toast.loading({ mask: true, message: '加载中...' });
  },

  showSuccessToastUtil() {
    Toast.success('成功文案');
  },

  showFailToastUtil() {
    Toast.fail('失败提示');
  },

  showCustomizedToastUtil(duration) {
    const text = second => `倒计时 ${second} 秒`;
    const toast = Toast.loading({
      duration: 0,
      forbidClick: true,
      loadingType: 'spinner',
      message: text(3)
    });

    let second = 3;
    const timer = setInterval(() => {
      second--;
      if (second) {
        toast.setData({ message: text(second) });
      } else {
        clearInterval(timer);
        Toast.clear();
      }
    }, 1000);
  }
});

<DemoBlock title="文字提示" padding>
  <VanButton onClick={this.showToast} className="demo-margin-right">文字提示</VanButton>
  <VanButton onClick={this.showLongToast}>长文字提示</VanButton>
</DemoBlock>

<DemoBlock title="加载提示" padding>
  <VanButton onClick={this.showLoadingToast}>加载提示</VanButton>
</DemoBlock>

<DemoBlock title="成功/失败提示" padding>
  <VanButton onClick={this.showSuccessToast} className="demo-margin-right">成功提示</VanButton>
  <VanButton onClick={this.showFailToast}>失败提示</VanButton>
</DemoBlock>

<DemoBlock title="高级用法" padding>
  <VanButton onClick={this.showCustomizedToast}>高级用法</VanButton>
</DemoBlock>

<van-toast id="van-toast" />
*/

import Taro, { Component, Config } from "@tarojs/taro";
import { Block } from "@tarojs/components";
import DemoBlock from "../demo-block";
import Toast, { useToast } from "../../components/toast";
import VanButton from "../../components/button";

export default class ToastExample extends Component {
  config: Config = {
    navigationBarTitleText: "Toast 轻提示"
  };

  render() {
    const { props, ToastUtil } = useToast();

    const showToast = () => {
      ToastUtil('提示内容');
    };

    const showLongToast = () => {
      ToastUtil('这是一条长文字提示，超过一定字数就会换行');
    };

    const showLoadingToast = () => {
      ToastUtil.loading({ mask: true, message: '加载中...' });
    };

    const showSuccessToast = () => {
      ToastUtil.success('成功文案');
    };

    const showFailToast = () => {
      ToastUtil.fail('失败提示');
    };
    return (
      <Block>
        <DemoBlock title="文字提示" padding>
          <VanButton onClick={showToast} className="demo-margin-right">
            文字提示
          </VanButton>
          <VanButton onClick={showLongToast}>长文字提示</VanButton>
        </DemoBlock>

        <DemoBlock title="加载提示" padding>
          <VanButton onClick={showLoadingToast}>加载提示</VanButton>
        </DemoBlock>

        <DemoBlock title="成功/失败提示" padding>
          <VanButton onClick={showSuccessToast} className="demo-margin-right">
            成功提示
          </VanButton>
          <VanButton onClick={showFailToast}>失败提示</VanButton>
        </DemoBlock>

        {/* <DemoBlock title="高级用法" padding>
          <VanButton onClick={this.showCustomizedToastUtil}>高级用法</VanButton>
        </DemoBlock> */}
        <Toast {...props} />
      </Block>
    );
  }
}
