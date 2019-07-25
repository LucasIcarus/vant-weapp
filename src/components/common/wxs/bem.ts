import { memoize } from '.';

interface IBEMOptions {
  prefix?: string;
  block: string;
  elementPrefix?: string;
  modifierPrefix?: string;
}

type PlainObject<T = any> = {
  [key: string]: T;
};

type BEMArg = string | (string | PlainObject)[] | undefined | null | PlainObject;

function toClass(classes: BEMArg, prefix = ''): string {
  if (!classes) return '';

  if (typeof classes === 'string') {
    return (prefix + classes).trim();
  }

  const arrClasses = Array.isArray(classes)
    ? classes
    : Object.keys(classes).filter(className => classes[className]);

  return arrClasses.reduce<string>(
    (prev, currClass) => {
      if (typeof currClass === 'string') {
        return `${prev ? `${prev} ` : ''}${prefix + currClass}`;
      } else {
        return `${prev ? `${prev} ` : ''}${toClass(currClass, prefix)}`;
      }
    },
    ''
  );
}

export function bem(options: IBEMOptions) {
  const { prefix = '', block, elementPrefix = '__', modifierPrefix = '--' } = options;

  const cx = function (element?: BEMArg, modifier?: BEMArg, utils?: BEMArg) {
    const blockClass = `${prefix}${block}`;
    const elementClass = element
      ? toClass(element, blockClass + elementPrefix)
      : '';
    const blockModifier =
      modifier && !elementClass
        ? ` ${toClass(modifier, blockClass + modifierPrefix)}`
        : '';
    const elementModifier =
      modifier && elementClass
        ? ` ${toClass(modifier, elementClass + modifierPrefix)}`
        : '';
    const utilsClass = utils ? ` ${toClass(utils)}` : '';
    const bemClasses = element
      ? elementClass + elementModifier
      : blockClass + blockModifier;
    return (bemClasses + utilsClass).trim();
  };
  return memoize(cx);
}
