"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("./wxs/index.js");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index[key];
    }
  });
});
exports.noop = noop;
function noop() {}
;
var nextTick = exports.nextTick = function nextTick() {
  return new Promise(function (resolve) {
    return setTimeout(resolve, 33.333333333333336);
  });
};