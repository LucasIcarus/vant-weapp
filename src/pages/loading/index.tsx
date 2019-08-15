/*
import Page from '../../common/page';

Page();
<DemoBlock title="Circular" padding>
  <Loading custom-class="loading" />
  <Loading custom-class="loading shadow" color="#fff" />
</DemoBlock>

<DemoBlock title="Spinner" padding>
  <Loading custom-class="loading" type="spinner" />
  <Loading custom-class="loading shadow" type="spinner" color="#fff" />
</DemoBlock>
*/
import Taro, { Component, Config } from "@tarojs/taro";
import { Block } from "@tarojs/components";
import DemoBlock from "../demo-block";
import Loading from "../../components/loading";

export default class LoadingExample extends Component {
  config: Config = {
    navigationBarTitleText: "Loading 加载"
  };

  render() {
    return (
      <Block>
        <DemoBlock title="Circular" padding>
          <Loading custom-class="loading" />
          <Loading custom-class="loading shadow" color="#fff" />
        </DemoBlock>

        <DemoBlock title="Spinner" padding>
          <Loading custom-class="loading" type="spinner" />
          <Loading
            custom-class="loading shadow"
            type="spinner"
            color="#fff"
          />
        </DemoBlock>
      </Block>
    );
  }
}
