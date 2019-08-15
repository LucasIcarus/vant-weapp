/*
import { link } from '../mixins/link';
import { VantComponent } from '../common/component';

VantComponent({
  classes: [
    'title-class',
    'label-class',
    'value-class',
    'right-icon-class',
    'hover-class'
  ],

  mixins: [link],

  props: {
    title: null,
    value: null,
    icon: String,
    size: String,
    label: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    titleWidth: String,
    customStyle: String,
    arrowDirection: String,
    useLabelSlot: Boolean,
    border: {
      type: Boolean,
      value: true
    }
  },

  methods: {
    onClick(event: Weapp.Event) {
      this.$emit('click', event.detail);
      this.jumpLink();
    }
  }
});

<wxs src="../wxs/utils.wxs" module="utils" />

<view
  class="custom-class {{ utils.bem('cell', [size, { center, required, borderless: !border, clickable: isLink || clickable }]) }}"
  hover-class="van-cell--hover hover-class"
  hover-stay-time="70"
  style="{{ customStyle }}"
  bind:tap="onClick"
>
  <van-icon
    wx:if="{{ icon }}"
    name="{{ icon }}"
    class="van-cell__left-icon-wrap"
    custom-class="van-cell__left-icon"
  />
  <slot wx:else name="icon" />

  <view
    style="{{ titleWidth ? 'max-width:' + titleWidth + ';min-width:' + titleWidth : '' }}"
    class="van-cell__title title-class"
  >
    <block wx:if="{{ title }}">{{ title }}</block>
    <slot wx:else name="title" />

    <view wx:if="{{ label || useLabelSlot }}" class="van-cell__label label-class">
      <slot wx:if="{{ useLabelSlot }}" name="label" />
      <block wx:elif="{{ label }}">{{ label }}</block>
    </view>
  </view>

  <view class="van-cell__value value-class">
    <block wx:if="{{ value || value === 0 }}">{{ value }}</block>
    <slot wx:else />
  </view>

  <van-icon
    wx:if="{{ isLink }}"
    name="{{ arrowDirection ? 'arrow' + '-' + arrowDirection : 'arrow' }}"
    class="van-cell__right-icon-wrap right-icon-class"
    custom-class="van-cell__right-icon"
  />
  <slot wx:else name="right-icon" />

  <slot name="extra" />
</view>
*/

import Taro, { FunctionComponent, Component } from '@tarojs/taro';
import { View, Block } from '@tarojs/components';
import { ITouchEvent } from '@tarojs/components/types/common';
import { WeappLinkType } from '../../definitions';
import { bem, noop } from '../common';
import VanIcon from '../icon';
import './index.less';

export type CellArrowDirection = 'up' | 'down' | 'left';

export interface ICellProps {
  className?: string;
  hoverClass?: string;
  titleClass?: string;
  valueClass?: string;
  customStyle?: string;
  titleWidth?: string;

  url?: string;
  linkType?: WeappLinkType;
  arrowDirection?: CellArrowDirection;
  icon?: string;
  title?: string;
  label?: string;
  useLabelSlot?: boolean;
  value?: string | number;

  size?: string; // 唯一可选值 large
  center?: boolean;
  required?: boolean;
  border?: boolean;
  isLink?: boolean;
  clickable?: boolean;

  onClick?: (detail: any) => void;

  children?: Component | string | JSX.Element;
  renderIcon?: Component | string | JSX.Element;
  renderTitle?: Component | string | JSX.Element;
  renderLabel?: Component | string | JSX.Element;
  renderRightIcon?: Component | string | JSX.Element;
  renderExtra?: Component | string | JSX.Element;
}


const cx = bem({ prefix: 'van-', block: 'cell' });

const Cell: FunctionComponent<ICellProps> = ({
  className,
  hoverClass,
  titleClass,
  valueClass,
  size,
  titleWidth,
  customStyle = '',

  url,
  arrowDirection,
  linkType = 'navigateTo',

  icon,
  title,
  label,
  value,
  useLabelSlot = false,

  border = true,
  center = false,
  isLink = false,
  required = false,
  clickable = false,

  onClick = noop,

  children = '',
  renderIcon = '',
  renderTitle = '',
  renderLabel = '',
  renderRightIcon = '',
  renderExtra = '',
}) => {
  const clickHandler = (event: ITouchEvent) => {
    onClick(event.detail);
    if (url && wx) {
      wx[linkType]({ url });
    }
  }

  return (
    <View
      className={cx(null, [size, { center, required, borderless: !border, clickable: isLink || clickable }], className)}
      hoverClass={cx(null, 'hover', hoverClass)}
      hoverStayTime={70}
      style={customStyle}
      onClick={clickHandler}
    >
      {icon && <VanIcon name={icon} className={cx(['left-icon-wrap', 'left-icon"'])} />}
      {renderIcon}
      <View
        style={`${titleWidth ? 'max-width:' + titleWidth + ';min-width:' + titleWidth : ''}`}
        className={cx('title', null, titleClass)}
      >
        <Block>{title}</Block>
        {renderTitle}
        {renderLabel}
        {(label && !useLabelSlot) && (
          <Block>{label}</Block>
        )}
      </View>
      <View className={cx('value', null, valueClass)}>
        {(value || value === 0) && <Block>{value}</Block>}
        {children}
      </View>
      {isLink && <VanIcon name={arrowDirection ? `arrow-${arrowDirection}` : 'arrow'} />}
      {renderRightIcon}
      {renderExtra}
    </View>
  );
}

Cell.defaultProps = {
  customStyle: '',
  linkType: 'navigateTo',
  useLabelSlot: false,
  border: true,
  center: false,
  isLink: false,
  required: false,
  clickable: false,
  onClick: noop,
  children: '',
  renderIcon: '',
  renderTitle: '',
  renderLabel: '',
  renderRightIcon: '',
  renderExtra: '',
};
Cell.options = { addGlobalClass: true };

export default Cell;



