import { useState, useEffect } from '@tarojs/taro';
import { ITransitionDuration, TransitionType } from '.';
import { nextTick } from '../common';

type TransitionStatus = 'enter' | 'leave';

interface ITransitionHookOptions {
  show: boolean;
  name: TransitionType;
  transitionEndHandler: () => void;
  duration: number | ITransitionDuration;

  enterClass: string;
  enterActiveClass: string;
  enterToClass: string;
  leaveClass: string;
  leaveActiveClass: string;
  leaveToClass: string;
}

export function useTransition(options: ITransitionHookOptions) {
  // 简单状态锁, 不能使用 statehook
  let status: TransitionStatus = 'enter';
  const {
    enterClass,
    enterActiveClass,
    enterToClass,
    leaveClass,
    leaveActiveClass,
    leaveToClass,
  } = options;
  const getClassNames = (name: string) => ({
    enter: `van-${name}-enter van-${name}-enter-active ${enterClass} ${enterActiveClass}`,
    'enter-to': `van-${name}-enter-to van-${name}-enter-active ${enterToClass} ${enterActiveClass}`,
    leave: `van-${name}-leave van-${name}-leave-active ${leaveClass} ${leaveActiveClass}`,
    'leave-to': `van-${name}-leave-to van-${name}-leave-active ${leaveToClass} ${leaveActiveClass}`
  });

  const [inited, changeInited] = useState(false);
  const [display, toggleDisplay] = useState(false);
  const [classes, changeClasses] = useState('');
  const [currentDuration, changeDuration] = useState(300);
  const { show, name, duration, transitionEndHandler } = options;

  const toggleStatus = (target: TransitionStatus) => status = target;
  const checkStatus = (target: TransitionStatus) => {
    if (target !== status) {
      throw new Error(`incongruent status: ${status}`);
    }
  };

  const onTransitionEnd = () => {
    if (!show) {
      toggleDisplay(false);
      transitionEndHandler();
    }
  };

  const enter = () => {
    const classNames = getClassNames(name);
    const currentDuration = typeof duration !== 'number' ? duration.leave : duration;
    toggleStatus('enter');
    Promise.resolve()
      .then(nextTick)
      .then(() => {
        checkStatus('enter');
        changeInited(true);
        toggleDisplay(true);
        changeClasses(classNames.enter);
        changeDuration(currentDuration);
      })
      .then(nextTick)
      .then(() => {
        checkStatus('enter');
        changeClasses(classNames['enter-to']);
      })
      .catch(() => {});
  };

  const leave = () => {
    const classNames = getClassNames(name);
    const currentDuration = typeof duration !== 'number' ? duration.leave : duration;
    toggleStatus('leave');

    Promise.resolve()
      .then(nextTick)
      .then(() => {
        checkStatus('leave');
        changeClasses(classNames.leave);
        changeDuration(currentDuration);
      })
      .then(() => setTimeout(() => onTransitionEnd(), currentDuration))
      .then(nextTick)
      .then(() => {
        checkStatus('leave');
        changeClasses(classNames['leave-to']);
      })
      .catch((e) => { console.warn(e) });
  }

  useEffect(() => {
    if (show) {
      enter();
    } else {
      leave();
    }
  }, [show]);

  return {
    inited,
    display,
    classes,
    currentDuration,
  };
}
