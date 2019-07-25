'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bem = bem;
function toClass(classes) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!classes) return '';
  if (typeof classes === 'string') {
    return (prefix + classes).trim();
  }
  var arrClasses = Array.isArray(classes) ? classes : Object.keys(classes).filter(function (className) {
    return classes[className];
  });
  return arrClasses.reduce(function (prev, currClass) {
    return '' + (prev ? prev + ' ' : '') + (prefix + currClass);
  }, '');
}
function bem(options) {
  var _options$prefix = options.prefix,
      prefix = _options$prefix === undefined ? '' : _options$prefix,
      block = options.block,
      _options$elementPrefi = options.elementPrefix,
      elementPrefix = _options$elementPrefi === undefined ? '__' : _options$elementPrefi,
      _options$modifierPref = options.modifierPrefix,
      modifierPrefix = _options$modifierPref === undefined ? '--' : _options$modifierPref;

  return function (element, modifier, utils) {
    var blockClass = '' + prefix + block;
    var elementClass = element ? toClass(element, blockClass + elementPrefix) : '';
    var blockModifier = modifier && !elementClass ? ' ' + toClass(modifier, blockClass + modifierPrefix) : '';
    var elementModifier = modifier && elementClass ? ' ' + toClass(modifier, elementClass + modifierPrefix) : '';
    var utilsClass = utils ? ' ' + toClass(utils) : '';
    var bemClasses = element ? elementClass + elementModifier : blockClass + blockModifier;
    return (bemClasses + utilsClass).trim();
  };
}