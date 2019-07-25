/**
 * Simple memoize
 * wxs doesn't support fn.apply, so this memoize only support up to 2 args
 */
function isPrimitive(value) {
  const type = typeof value;
  return type === 'boolean' || type === 'number' || type === 'string' || type === 'undefined' || value === null;
}
// mock simple fn.call in wxs
function call(fn, args) {
  if (args.length) {
    return fn(...args);
  }
  return fn();
}
function serializer(args) {
  if (args.length === 1 && isPrimitive(args[0])) {
    return args[0];
  }
  const obj = {};
  for (var i = 0; i < args.length; i++) {
    obj['key' + i] = args[i];
  }
  return JSON.stringify(obj);
}
export function memoize(fn) {
  const cache = {};
  return function (...args) {
    var key = serializer(args);
    if (cache[key] === undefined) {
      cache[key] = call(fn, args);
    }
    return cache[key];
  };
}