function toClass(classes, prefix = '') {
  if (!classes) return '';
  if (typeof classes === 'string') {
    return (prefix + classes).trim();
  }
  const arrClasses = Array.isArray(classes) ? classes : Object.keys(classes).filter(className => classes[className]);
  return arrClasses.reduce((prev, currClass) => `${prev ? `${prev} ` : ''}${prefix + currClass}`, '');
}
export function bem(options) {
  const { prefix = '', block, elementPrefix = '__', modifierPrefix = '--' } = options;
  return function (element, modifier, utils) {
    const blockClass = `${prefix}${block}`;
    const elementClass = element ? toClass(element, blockClass + elementPrefix) : '';
    const blockModifier = modifier && !elementClass ? ` ${toClass(modifier, blockClass + modifierPrefix)}` : '';
    const elementModifier = modifier && elementClass ? ` ${toClass(modifier, elementClass + modifierPrefix)}` : '';
    const utilsClass = utils ? ` ${toClass(utils)}` : '';
    const bemClasses = element ? elementClass + elementModifier : blockClass + blockModifier;
    return (bemClasses + utilsClass).trim();
  };
}