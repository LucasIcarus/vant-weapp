"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bem = require("./bem.js");

Object.keys(_bem).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _bem[key];
    }
  });
});