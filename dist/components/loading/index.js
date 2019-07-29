"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = (0, _index3.bem)({ prefix: 'van-', block: 'loading' });
console.log(cx('dot'));

var Loading = function (_Taro$Component) {
  _inherits(Loading, _Taro$Component);

  function Loading() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Loading);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loading.__proto__ || Object.getPrototypeOf(Loading)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp8", "anonymousState__temp9", "anonymousState__temp10", "anonymousState__temp11", "anonymousState__temp12", "anonymousState__temp13", "anonymousState__temp14", "type", "className"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Loading, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Loading.prototype.__proto__ || Object.getPrototypeOf(Loading.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var _props = this.__props,
          _props$type = _props.type,
          type = _props$type === undefined ? 'circular' : _props$type,
          className = _props.className;

      var anonymousState__temp = cx(null, null, className);
      var anonymousState__temp2 = cx('spinner', type);
      var anonymousState__temp3 = type === 'spinner' ? cx('dot') : null;
      var anonymousState__temp4 = type === 'spinner' ? cx('dot') : null;
      var anonymousState__temp5 = type === 'spinner' ? cx('dot') : null;
      var anonymousState__temp6 = type === 'spinner' ? cx('dot') : null;
      var anonymousState__temp7 = type === 'spinner' ? cx('dot') : null;
      var anonymousState__temp8 = type === 'spinner' ? cx('dot') : null;
      var anonymousState__temp9 = type === 'spinner' ? cx('dot') : null;
      var anonymousState__temp10 = type === 'spinner' ? cx('dot') : null;
      var anonymousState__temp11 = type === 'spinner' ? cx('dot') : null;
      var anonymousState__temp12 = type === 'spinner' ? cx('dot') : null;
      var anonymousState__temp13 = type === 'spinner' ? cx('dot') : null;
      var anonymousState__temp14 = type === 'spinner' ? cx('dot') : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp8: anonymousState__temp8,
        anonymousState__temp9: anonymousState__temp9,
        anonymousState__temp10: anonymousState__temp10,
        anonymousState__temp11: anonymousState__temp11,
        anonymousState__temp12: anonymousState__temp12,
        anonymousState__temp13: anonymousState__temp13,
        anonymousState__temp14: anonymousState__temp14,
        type: type
      });
      return this.__state;
    }
  }]);

  return Loading;
}(_index2.default.Component);

Loading.$$events = [];
Loading.$$componentPath = "components/loading/index";


Loading.options = { addGlobalClass: true };
exports.default = Loading;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Loading));