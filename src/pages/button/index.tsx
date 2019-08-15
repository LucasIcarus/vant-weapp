/*
<demo-section>
  <DemoBlock title="按钮类型" padding>
    <View className="row">
      <VanButton className="demo-margin-right">默认按钮</VanButton>
      <VanButton type="primary" className="demo-margin-right">主要按钮</VanButton>
      <VanButton type="info" className="demo-margin-right">信息按钮</VanButton>
    </View>
    <VanButton type="danger" className="demo-margin-right">危险按钮</VanButton>
    <VanButton type="warning">警告按钮</VanButton>
  </DemoBlock>

  <DemoBlock title="朴素按钮" padding>
    <VanButton type="primary" plain className="demo-margin-right">朴素按钮</VanButton>
    <VanButton type="danger" plain>朴素按钮</VanButton>
  </DemoBlock>

  <DemoBlock title="细边框" padding>
    <VanButton type="primary" plain hairline className="demo-margin-right">细边框按钮</VanButton>
    <VanButton type="danger" plain hairline>细边框按钮</VanButton>
  </DemoBlock>

  <DemoBlock title="禁用状态" padding>
    <VanButton type="primary" disabled className="demo-margin-right">禁用状态</VanButton>
    <VanButton type="danger" disabled>禁用状态</VanButton>
  </DemoBlock>

  <DemoBlock title="加载状态" padding>
    <VanButton loading type="primary" className="demo-margin-right" />
    <VanButton loading type="danger" loading-text="加载中..." />
  </DemoBlock>

  <DemoBlock title="按钮形状" padding>
    <VanButton type="primary" square className="demo-margin-right">方形按钮</VanButton>
    <VanButton type="danger" round>圆形按钮</VanButton>
  </DemoBlock>

  <DemoBlock title="按钮尺寸" padding>
    <VanButton size="large" block custom-className="demo-margin-bottom">大号按钮</VanButton>
    <VanButton className="demo-margin-right">普通按钮</VanButton>
    <VanButton size="small" className="demo-margin-right">小型按钮</VanButton>
    <VanButton size="mini">迷你按钮</VanButton>
  </DemoBlock>
</demo-section>
*/
import Taro, { Component, Config } from "@tarojs/taro";
import { View, Block } from "@tarojs/components";
import DemoBlock from "../demo-block";
import VanButton from "../../components/button";

export default class ButtonExample extends Component {
  config: Config = {
    navigationBarTitleText: "Button 按钮"
  };

  render() {
    return (
      <Block>
        <DemoBlock title="按钮类型" padding>
          <View className="row">
            <VanButton className="demo-margin-right">默认按钮</VanButton>
            <VanButton type="primary" className="demo-margin-right">
              主要按钮
            </VanButton>
            <VanButton type="info" className="demo-margin-right">
              信息按钮
            </VanButton>
          </View>
          <VanButton type="danger" className="demo-margin-right">
            危险按钮
          </VanButton>
          <VanButton type="warning">警告按钮</VanButton>
        </DemoBlock>

        <DemoBlock title="朴素按钮" padding>
          <VanButton type="primary" plain className="demo-margin-right">
            朴素按钮
          </VanButton>
          <VanButton type="danger" plain>
            朴素按钮
          </VanButton>
        </DemoBlock>

        <DemoBlock title="细边框" padding>
          <VanButton type="primary" plain hairline className="demo-margin-right">
            细边框按钮
          </VanButton>
          <VanButton type="danger" plain hairline>
            细边框按钮
          </VanButton>
        </DemoBlock>

        <DemoBlock title="禁用状态" padding>
          <VanButton type="primary" disabled className="demo-margin-right">
            禁用状态
          </VanButton>
          <VanButton type="danger" disabled>
            禁用状态
          </VanButton>
        </DemoBlock>

        <DemoBlock title="加载状态" padding>
          <VanButton loading type="primary" className="demo-margin-right" />
          <VanButton loading type="danger" loading-text="加载中..." />
        </DemoBlock>

        <DemoBlock title="按钮形状" padding>
          <VanButton type="primary" square className="demo-margin-right">
            方形按钮
          </VanButton>
          <VanButton type="danger" round>
            圆形按钮
          </VanButton>
        </DemoBlock>

        <DemoBlock title="按钮尺寸" padding>
          <VanButton size="large" block custom-className="demo-margin-bottom">
            大号按钮
          </VanButton>
          <VanButton className="demo-margin-right">普通按钮</VanButton>
          <VanButton size="small" className="demo-margin-right">
            小型按钮
          </VanButton>
          <VanButton size="mini">迷你按钮</VanButton>
        </DemoBlock>
      </Block>
    );
  }
}
