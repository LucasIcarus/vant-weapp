/*
import { VantComponent } from '../common/component';
import { button } from '../mixins/button';
import { openType } from '../mixins/open-type';

VantComponent({
  mixins: [button, openType],

  classes: ['hover-class', 'loading-class'],

  props: {
    plain: Boolean,
    block: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    loadingText: String,
    type: {
      type: String,
      value: 'default'
    },
    size: {
      type: String,
      value: 'normal'
    },
    loadingSize: {
      type: String,
      value: '20px'
    }
  },

  methods: {
    onClick() {
      if (!this.data.disabled && !this.data.loading) {
        this.$emit('click');
      }
    }
  }
});

<wxs src="../wxs/utils.wxs" module="utils" />

<button
  id="{{ id }}"
  class="custom-class {{ utils.bem('button', [type, size, { block, round, plain, square, loading, disabled, hairline, unclickable: disabled || loading }]) }} {{ hairline ? 'van-hairline--surround' : '' }}"
  open-type="{{ openType }}"
  hover-class="van-button--active hover-class"
  lang="{{ lang }}"
  business-id="{{ businessId }}"
  session-from="{{ sessionFrom }}"
  send-message-title="{{ sendMessageTitle }}"
  send-message-path="{{ sendMessagePath }}"
  send-message-img="{{ sendMessageImg }}"
  show-message-card="{{ showMessageCard }}"
  app-parameter="{{ appParameter }}"
  aria-label="{{ ariaLabel }}"
  bindtap="onClick"
  bindgetuserinfo="bindGetUserInfo"
  bindcontact="bindContact"
  bindgetphonenumber="bindGetPhoneNumber"
  binderror="bindError"
  bindlaunchapp="bindLaunchApp"
  bindopensetting="bindOpenSetting"
>
  <block wx:if="{{ loading }}">
    <van-loading
      custom-class="loading-class"
      size="{{ loadingSize }}"
      color="{{ type === 'default' ? '#c9c9c9' : '' }}"
    />
    <view
      wx:if="{{ loadingText }}"
      class="van-button__loading-text"
    >
      {{ loadingText }}
    </view>
  </block>
  <slot wx:else />
</button>

*/
import Taro, { Component, FunctionComponent } from '@tarojs/taro';
import { Button, Block, View } from '@tarojs/components';
import { bem, noop } from '../common';
import Loading from '../loading';
import './index.less';
import { WeappEventFunction } from '../../definitions';

type ButtonOpenType = 'contact' | 'share' | 'getUserInfo' | 'getPhoneNumber' | 'launchApp' | 'openSetting' | 'feedback' | 'getRealnameAuthInfo';
type ButtonLang = 'en' | 'zh-CN' | 'zh-TW';
type ButtonType = 'default' | 'primary' | 'info' | 'warning' | 'danger';
type ButtonSize = 'large' | 'normal' | 'small' | 'mini';

interface IButtonProps {
  id?: string;
  openType?: ButtonOpenType;
  lang?: ButtonLang;
  businessId?: number;
  sessionFrom?: string;
  sendMessageTitle?: string;
  sendMessagePath?: string;
  sendMessageImg?: string;
  showMessageCard?: boolean;
  appParameter?: string;
  ariaLabel?: string;

  type?: ButtonType;
  loadingSize?: string;
  loadingText?: string;
  loadingClass?: string;
  size?: ButtonSize;
  className?: string;
  hoverClass?: string;
  children?: Component | string;

  plain?: boolean,
  block?: boolean,
  round?: boolean,
  square?: boolean,
  loading?: boolean,
  hairline?: boolean,
  disabled?: boolean,

  onClick?: () => void;
  onGetUserInfo?: WeappEventFunction<{
    /** 用户信息 */
    userInfo: {
      /** 昵称 */
      nickName: string,
      /** 头像 */
      avatarUrl: string,
      /**
       * 性别
       *
       * - `0`: 未知
       * - `1`: 男
       * - `2`: 女
       */
      gender: 0 | 1 | 2,
      /** 省份，如：`Yunnan` */
      province: string,
      /** 城市，如：`Dalian` */
      city: string,
      /** 国家，如：`China` */
      country: string,
    },
    /** 不包括敏感信息的原始数据 `JSON` 字符串，用于计算签名 */
    rawData: string,
    /** 使用 `sha1(rawData + sessionkey)` 得到字符串，用于校验用户信息 */
    signature: string,
    /** 包括敏感数据在内的完整用户信息的加密数据 */
    encryptedData: string,
    /** 加密算法的初始向量 */
    iv: string,
  }>;
  onContact?: WeappEventFunction<{
    /** 小程序消息指定的路径 */
    path: string,
    /** 小程序消息指定的查询参数 */
    query: Record<string, any>
  }>;
  onGetPhoneNumber?: WeappEventFunction<{
    /** 包括敏感数据在内的完整用户信息的加密数据 */
    encryptedData: string,
    /** 加密算法的初始向量 */
    iv: string
  }>;
  onError?: WeappEventFunction<any>;
  onLaunchApp?: WeappEventFunction<any>;
  onOpenSetting?: WeappEventFunction<any>;
}

const cx = bem({ prefix: 'van-', block: 'button' });

const VanButton: FunctionComponent<IButtonProps> = ({
  id,
  openType,
  lang = 'en',
  businessId,
  sessionFrom,
  sendMessageTitle,
  sendMessagePath,
  sendMessageImg,
  showMessageCard = false,
  appParameter,
  ariaLabel,

  plain = false,
  block = false,
  round = false,
  square = false,
  loading = false,
  hairline = false,
  disabled = false,
  size = 'normal',
  type = 'default',
  className = '',
  loadingText = '',
  loadingClass = '',
  loadingSize = '20px',
  hoverClass = '',
  children,

  onClick = noop,
  onGetUserInfo = noop,
  onContact = noop,
  onGetPhoneNumber = noop,
  onError = noop,
  onLaunchApp = noop,
  onOpenSetting = noop,
}) => {
  console.log(loading);

  const clickHandler = () => {
    if (!disabled && !loading) {
      onClick();
    }
  };

  // @ts-ignore
  return <Button
    id={id}
    lang={lang}
    openType={openType}
    businessId={businessId}
    sessionFrom={sessionFrom}
    sendMessageTitle={sendMessageTitle}
    sendMessagePath={sendMessagePath}
    sendMessageImg={sendMessageImg}
    showMessageCard={showMessageCard}
    appParameter={appParameter}
    ariaLabel={ariaLabel}
    className={cx(null, [type, size, { block, round, plain, square, loading, disabled, hairline, unclickable: disabled || loading }], [className, { 'van-hairline--surround': hairline }])}
    hoverClass={`van-button--active ${hoverClass}`}
    onClick={clickHandler}
    onGetUserInfo={({ detail }) => onGetUserInfo(detail)}
    onContact={onContact}
    onGetPhoneNumber={({ detail }) => onGetPhoneNumber(detail)}
    onError={({ detail }) => onError(detail)}
    onLaunchApp={({ detail }) => onLaunchApp(detail)}
    onOpenSetting={({ detail }) => onOpenSetting(detail)}
  >
    {loading && (
      <Block>
        <Loading
          className={loadingClass}
          size={loadingSize}
          color={ type === 'default' ? '#c9c9c9' : '' }
        />
        {loadingText && <View className={cx('loading-text')}>
          {loadingText}
        </View>}
      </Block>
    )}
    {!loading && children}
  </Button>
};

VanButton.defaultProps = {
  onClick: noop,
  onGetUserInfo: noop,
  onContact: noop,
  onGetPhoneNumber: noop,
  onError: noop,
  onLaunchApp: noop,
  onOpenSetting: noop,

  plain: false,
  block: false,
  round: false,
  square: false,
  loading: false,
  hairline: false,
  disabled: false,
  size: 'normal',
  type: 'default',
  className: '',
  loadingText: '',
  loadingClass: '',
  loadingSize: '20px',
  hoverClass: '',

  lang: 'en',
  showMessageCard: false,
};
VanButton.options = { addGlobalClass: true };

export default VanButton;
