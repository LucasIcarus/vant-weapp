import { useState } from '@tarojs/taro';
import { isObj } from '../common/utils';
import { IToastProps, ToastMessage, ToastType } from '.';

interface IToastOptions extends IToastProps {
  context?: any;
  duration?: number;
  selector?: string;
  onClose?: () => void;
}

interface IToastInstance {
  clear(): void;
  timer?: number;
}

const DefaultOptions: IToastOptions = {
  type: 'text',
  mask: false,
  message: '',
  show: false,
  zIndex: 1000,
  duration: 3000,
  position: 'middle',
  forbidClick: false,
  loadingType: 'circular',
  selector: '#van-toast'
};

function parseOptions(message): IToastOptions {
  return isObj(message) ? message : { message };
}

function extractProps(options: IToastOptions): IToastProps {
  const { context, duration, onClose, selector, ...props } = options;
  return props;
}

let queue: IToastInstance[] = [];

export function useToast() {
  const [options, changeOptions] = useState({ ...DefaultOptions });
  function Toast(toastOptions: IToastOptions | ToastMessage) {
    const nextOptions = {
      ...options,
      ...parseOptions(toastOptions),
      show: true,
    };

    const toast: IToastInstance = {
      clear() {
        changeOptions({ ...nextOptions, show: false });
        if (nextOptions.onClose) {
          nextOptions.onClose();
        }
      }
    };
    changeOptions({ ...options, ...nextOptions });
    clearTimeout(toast.timer);
    if (nextOptions.duration && nextOptions.duration > 0) {
      toast.timer = setTimeout(() => {
        toast.clear();
        queue = queue.filter(item => item !== toast);
      }, options.duration);
    }

    queue.push(toast);

    return toast;
  }
  const createMethod = (type: ToastType) => (options: IToastOptions | ToastMessage) =>
    Toast({
      type,
      ...parseOptions(options)
    });

  Toast.loading = createMethod('loading');
  Toast.success = createMethod('success');
  Toast.fail = createMethod('fail');
  Toast.clear = () => {
    queue.forEach(toast => {
      clearTimeout(toast.timer);
      toast.clear();
    });
    queue = [];
  };

  return { props: extractProps(options), ToastUtil: Toast };
}
