/*
import Page from '../../common/page';

Page();
<DemoBlock title="基础用法">
  <VanCellGroup>
    <VanCell title="单元格" value="内容" />
    <VanCell
      title="单元格"
      value="内容"
      label="描述信息"
      border="{{ false }}"
    />
  </VanCellGroup>
</DemoBlock>

<DemoBlock title="单元格大小">
  <VanCellGroup>
    <VanCell
      title="单元格"
      value="内容"
      size="large"
    />
    <VanCell
      title="单元格"
      value="内容"
      size="large"
      use-label-slot
      border="{{ false }}"
    >
      <view slot="label">描述信息</view>
    </VanCell>
  </VanCellGroup>
</DemoBlock>

<DemoBlock title="展示图标">
  <VanCell
    title="单元格"
    value="内容"
    icon="location-o"
    border="{{ false }}"
  />
</DemoBlock>

<DemoBlock title="展示箭头">
  <VanCell title="单元格" is-link />
  <VanCell
    title="单元格"
    value="内容"
    is-link
  />
  <VanCell
    title="单元格"
    is-link
    arrow-direction="down"
    value="内容"
    border="{{ false }}"
  />
</DemoBlock>

<DemoBlock title="页面跳转">
  <VanCell title="单元格" is-link url="/pages/dashboard/index" />
  <VanCell title="单元格" is-link url="/pages/dashboard/index" link-type="redirectTo" />
</DemoBlock>

<DemoBlock title="分组标题">
  <VanCellGroup title="分组 1">
    <VanCell title="单元格" value="内容" />
  </VanCellGroup>
  <VanCellGroup title="分组 2">
    <VanCell title="单元格" value="内容" />
  </VanCellGroup>
</DemoBlock>

<DemoBlock title="高级用法">
  <VanCell value="内容" icon="shop-o" is-link>
    <view slot="title">
      <view class="title">单元格</view>
      <van-tag type="danger">标签</van-tag>
    </view>
  </VanCell>
  <VanCell title="单元格" icon="location-o" is-link />
  <VanCell title="单元格" border="{{ false }}">
    <van-icon slot="right-icon" name="search" />
  </VanCell>
</DemoBlock>

*/
import Taro, { Component, Config } from "@tarojs/taro";
import { View, Block } from "@tarojs/components";
import DemoBlock from "../demo-block";
import VanCell from "../../components/cell";

export default class CellExample extends Component {
  config: Config = {
    navigationBarTitleText: "Cell 单元格"
  };

  render() {
    return (
      <Block>
        <DemoBlock title="基础用法">
          <VanCellGroup>
            <VanCell title="单元格" value="内容" />
            <VanCell
              title="单元格"
              value="内容"
              label="描述信息"
              border="{{ false }}"
            />
          </VanCellGroup>
        </DemoBlock>

        <DemoBlock title="单元格大小">
          <VanCellGroup>
            <VanCell title="单元格" value="内容" size="large" />
            <VanCell
              title="单元格"
              value="内容"
              size="large"
              use-label-slot
              border="{{ false }}"
            >
              <view slot="label">描述信息</view>
            </VanCell>
          </VanCellGroup>
        </DemoBlock>

        <DemoBlock title="展示图标">
          <VanCell
            title="单元格"
            value="内容"
            icon="location-o"
            border="{{ false }}"
          />
        </DemoBlock>

        <DemoBlock title="展示箭头">
          <VanCell title="单元格" is-link />
          <VanCell title="单元格" value="内容" is-link />
          <VanCell
            title="单元格"
            is-link
            arrow-direction="down"
            value="内容"
            border="{{ false }}"
          />
        </DemoBlock>

        <DemoBlock title="页面跳转">
          <VanCell title="单元格" is-link url="/pages/dashboard/index" />
          <VanCell
            title="单元格"
            is-link
            url="/pages/dashboard/index"
            link-type="redirectTo"
          />
        </DemoBlock>

        <DemoBlock title="分组标题">
          <VanCellGroup title="分组 1">
            <VanCell title="单元格" value="内容" />
          </VanCellGroup>
          <VanCellGroup title="分组 2">
            <VanCell title="单元格" value="内容" />
          </VanCellGroup>
        </DemoBlock>

        <DemoBlock title="高级用法">
          <VanCell value="内容" icon="shop-o" is-link>
            <view slot="title">
              <view class="title">单元格</view>
              <van-tag type="danger">标签</van-tag>
            </view>
          </VanCell>
          <VanCell title="单元格" icon="location-o" is-link />
          <VanCell title="单元格" border="{{ false }}">
            <van-icon slot="right-icon" name="search" />
          </VanCell>
        </DemoBlock>
      </Block>
    );
  }
}
