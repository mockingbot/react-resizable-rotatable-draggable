'use strict';

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var getLength = function getLength(x, y) {
  return Math.sqrt(x * x + y * y);
};
var getAngle = function getAngle(_ref, _ref2) {
  var x1 = _ref.x,
    y1 = _ref.y;
  var x2 = _ref2.x,
    y2 = _ref2.y;
  var dot = x1 * x2 + y1 * y2;
  var det = x1 * y2 - y1 * x2;
  var angle = Math.atan2(det, dot) / Math.PI * 180;
  return (angle + 360) % 360;
};
var degToRadian = function degToRadian(deg) {
  return deg * Math.PI / 180;
};
var cos = function cos(deg) {
  return Math.cos(degToRadian(deg));
};
var sin = function sin(deg) {
  return Math.sin(degToRadian(deg));
};
var setWidthAndDeltaW = function setWidthAndDeltaW(width, deltaW, minWidth) {
  deltaW = deltaW / 1.5;
  var expectedWidth = width + deltaW;
  if (expectedWidth > minWidth) {
    width = expectedWidth;
  } else {
    deltaW = minWidth - width;
    width = minWidth;
  }
  return {
    width: width,
    deltaW: deltaW
  };
};
var setHeightAndDeltaH = function setHeightAndDeltaH(height, deltaH, minHeight) {
  deltaH = deltaH / 1.5;
  var expectedHeight = height + deltaH;
  if (expectedHeight > minHeight) {
    height = expectedHeight;
  } else {
    deltaH = minHeight - height;
    height = minHeight;
  }
  return {
    height: height,
    deltaH: deltaH
  };
};
var getNewStyle = function getNewStyle(type, rect, deltaW, deltaH, ratio, minWidth, minHeight) {
  var width = rect.width,
    height = rect.height,
    centerX = rect.centerX,
    centerY = rect.centerY,
    rotateAngle = rect.rotateAngle;
  var widthFlag = width < 0 ? -1 : 1;
  var heightFlag = height < 0 ? -1 : 1;
  width = Math.abs(width);
  height = Math.abs(height);
  switch (type) {
    case 'r':
      {
        var widthAndDeltaW = setWidthAndDeltaW(width, deltaW, minWidth);
        width = widthAndDeltaW.width;
        deltaW = widthAndDeltaW.deltaW;
        if (ratio) {
          deltaH = deltaW / ratio;
          height = width / ratio;
          // 左上角固定
          centerX += deltaW / 2 * cos(rotateAngle) - deltaH / 2 * sin(rotateAngle);
          centerY += deltaW / 2 * sin(rotateAngle) + deltaH / 2 * cos(rotateAngle);
        } else {
          // 左边固定
          centerX += deltaW / 2 * cos(rotateAngle);
          centerY += deltaW / 2 * sin(rotateAngle);
        }
        break;
      }
    case 'tr':
      {
        deltaH = -deltaH;
        var _widthAndDeltaW = setWidthAndDeltaW(width, deltaW, minWidth);
        width = _widthAndDeltaW.width;
        deltaW = _widthAndDeltaW.deltaW;
        var heightAndDeltaH = setHeightAndDeltaH(height, deltaH, minHeight);
        height = heightAndDeltaH.height;
        deltaH = heightAndDeltaH.deltaH;
        if (ratio) {
          deltaW = deltaH * ratio;
          width = height * ratio;
        }
        centerX += deltaW / 2 * cos(rotateAngle) + deltaH / 2 * sin(rotateAngle);
        centerY += deltaW / 2 * sin(rotateAngle) - deltaH / 2 * cos(rotateAngle);
        break;
      }
    case 'br':
      {
        var _widthAndDeltaW2 = setWidthAndDeltaW(width, deltaW, minWidth);
        width = _widthAndDeltaW2.width;
        deltaW = _widthAndDeltaW2.deltaW;
        var _heightAndDeltaH = setHeightAndDeltaH(height, deltaH, minHeight);
        height = _heightAndDeltaH.height;
        deltaH = _heightAndDeltaH.deltaH;
        if (ratio) {
          deltaW = deltaH * ratio;
          width = height * ratio;
        }
        centerX += deltaW / 2 * cos(rotateAngle) - deltaH / 2 * sin(rotateAngle);
        centerY += deltaW / 2 * sin(rotateAngle) + deltaH / 2 * cos(rotateAngle);
        break;
      }
    case 'b':
      {
        var _heightAndDeltaH2 = setHeightAndDeltaH(height, deltaH, minHeight);
        height = _heightAndDeltaH2.height;
        deltaH = _heightAndDeltaH2.deltaH;
        if (ratio) {
          deltaW = deltaH * ratio;
          width = height * ratio;
          // 左上角固定
          centerX += deltaW / 2 * cos(rotateAngle) - deltaH / 2 * sin(rotateAngle);
          centerY += deltaW / 2 * sin(rotateAngle) + deltaH / 2 * cos(rotateAngle);
        } else {
          // 上边固定
          centerX -= deltaH / 2 * sin(rotateAngle);
          centerY += deltaH / 2 * cos(rotateAngle);
        }
        break;
      }
    case 'bl':
      {
        deltaW = -deltaW;
        var _widthAndDeltaW3 = setWidthAndDeltaW(width, deltaW, minWidth);
        width = _widthAndDeltaW3.width;
        deltaW = _widthAndDeltaW3.deltaW;
        var _heightAndDeltaH3 = setHeightAndDeltaH(height, deltaH, minHeight);
        height = _heightAndDeltaH3.height;
        deltaH = _heightAndDeltaH3.deltaH;
        if (ratio) {
          height = width / ratio;
          deltaH = deltaW / ratio;
        }
        centerX -= deltaW / 2 * cos(rotateAngle) + deltaH / 2 * sin(rotateAngle);
        centerY -= deltaW / 2 * sin(rotateAngle) - deltaH / 2 * cos(rotateAngle);
        break;
      }
    case 'l':
      {
        deltaW = -deltaW;
        var _widthAndDeltaW4 = setWidthAndDeltaW(width, deltaW, minWidth);
        width = _widthAndDeltaW4.width;
        deltaW = _widthAndDeltaW4.deltaW;
        if (ratio) {
          height = width / ratio;
          deltaH = deltaW / ratio;
          // 右上角固定
          centerX -= deltaW / 2 * cos(rotateAngle) + deltaH / 2 * sin(rotateAngle);
          centerY -= deltaW / 2 * sin(rotateAngle) - deltaH / 2 * cos(rotateAngle);
        } else {
          // 右边固定
          centerX -= deltaW / 2 * cos(rotateAngle);
          centerY -= deltaW / 2 * sin(rotateAngle);
        }
        break;
      }
    case 'tl':
      {
        deltaW = -deltaW;
        deltaH = -deltaH;
        var _widthAndDeltaW5 = setWidthAndDeltaW(width, deltaW, minWidth);
        width = _widthAndDeltaW5.width;
        deltaW = _widthAndDeltaW5.deltaW;
        var _heightAndDeltaH4 = setHeightAndDeltaH(height, deltaH, minHeight);
        height = _heightAndDeltaH4.height;
        deltaH = _heightAndDeltaH4.deltaH;
        if (ratio) {
          width = height * ratio;
          deltaW = deltaH * ratio;
        }
        centerX -= deltaW / 2 * cos(rotateAngle) - deltaH / 2 * sin(rotateAngle);
        centerY -= deltaW / 2 * sin(rotateAngle) + deltaH / 2 * cos(rotateAngle);
        break;
      }
    case 't':
      {
        deltaH = -deltaH;
        var _heightAndDeltaH5 = setHeightAndDeltaH(height, deltaH, minHeight);
        height = _heightAndDeltaH5.height;
        deltaH = _heightAndDeltaH5.deltaH;
        if (ratio) {
          width = height * ratio;
          deltaW = deltaH * ratio;
          // 左下角固定
          centerX += deltaW / 2 * cos(rotateAngle) + deltaH / 2 * sin(rotateAngle);
          centerY += deltaW / 2 * sin(rotateAngle) - deltaH / 2 * cos(rotateAngle);
        } else {
          centerX += deltaH / 2 * sin(rotateAngle);
          centerY -= deltaH / 2 * cos(rotateAngle);
        }
        break;
      }
  }
  return {
    position: {
      centerX: centerX,
      centerY: centerY
    },
    size: {
      width: width * widthFlag,
      height: height * heightFlag
    }
  };
};
var cursorStartMap = {
  n: 0,
  ne: 1,
  e: 2,
  se: 3,
  s: 4,
  sw: 5,
  w: 6,
  nw: 7
};
var cursorDirectionArray = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];
var cursorMap = {
  0: 0,
  1: 1,
  2: 2,
  3: 2,
  4: 3,
  5: 4,
  6: 4,
  7: 5,
  8: 6,
  9: 6,
  10: 7,
  11: 8
};
var getCursor = function getCursor(rotateAngle, d) {
  var increment = cursorMap[Math.floor(rotateAngle / 30)];
  var index = cursorStartMap[d];
  var newIndex = (index + increment) % 8;
  return cursorDirectionArray[newIndex];
};
var centerToTL = function centerToTL(_ref3) {
  var centerX = _ref3.centerX,
    centerY = _ref3.centerY,
    width = _ref3.width,
    height = _ref3.height,
    rotateAngle = _ref3.rotateAngle;
  return {
    top: centerY - height / 2,
    left: centerX - width / 2,
    width: width,
    height: height,
    rotateAngle: rotateAngle
  };
};
var tLToCenter = function tLToCenter(_ref4) {
  var top = _ref4.top,
    left = _ref4.left,
    width = _ref4.width,
    height = _ref4.height,
    rotateAngle = _ref4.rotateAngle;
  return {
    position: {
      centerX: left + width / 2,
      centerY: top + height / 2
    },
    size: {
      width: width,
      height: height
    },
    transform: {
      rotateAngle: rotateAngle
    }
  };
};
var isOutOfBoundary = function isOutOfBoundary(left, top, width, height, haveBoundary, itemId) {
  var parentElement = document.getElementById(itemId).parentElement;
  if (haveBoundary && (left < 0 || left + width >= parentElement.offsetWidth || top < 0 || top + height >= parentElement.offsetHeight)) {
    return true;
  }
  return false;
};

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = ".rect {\n    position: absolute;\n    border: 1px solid blue;\n}\n\n.square {\n    position: absolute;\n    width: 7px;\n    height: 7px;\n    background: white;\n    border: 1px solid #eb5648;\n    border-radius: 1px;\n    z-index: 2;\n}\n\n.resizable-handler {\n    position: absolute;\n    width: 14px;\n    height: 14px;\n    cursor: pointer;\n    z-index: 1;\n}\n\n.resizable-handler .tl,\n.resizable-handler .t,\n.resizable-handler .tr {\n    top: -7px;\n}\n\n.resizable-handler .tl,\n.resizable-handler .l,\n.resizable-handler .bl {\n    left: -7px;\n}\n\n.resizable-handler .bl,\n.resizable-handler .b,\n.resizable-handler .br {\n    bottom: -7px;\n}\n\n.resizable-handler .br,\n.resizable-handler .r,\n.resizable-handler .tr {\n    right: -7px;\n}\n\n.resizable-handler .l,\n.resizable-handler .r {\n    margin-top: -7px;\n}\n\n.resizable-handler .t,\n.resizable-handler .b {\n    margin-left: -7px;\n}\n\n.rotate {\n    position: absolute;\n    left: 50%;\n    top: -26px;\n    width: 18px;\n    height: 18px;\n    margin-left: -9px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n\n.t,\n.tl,\n.tr {\n    top: -3px;\n}\n\n.b,\n.bl,\n.br {\n    bottom: -3px;\n}\n\n.r,\n.tr,\n.br {\n    right: -3px;\n}\n\n.tl,\n.l,\n.bl {\n    left: -3px;\n}\n\n.l,\n.r {\n    top: 50%;\n    margin-top: -3px;\n}\n\n.t,\n.b {\n    left: 50%;\n    margin-left: -3px;\n}\n\n.childContainer {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n}\n\n.childContainer>* {\n    user-select: none;\n    /* pointer-events: none; */\n}";
n(css,{});

var zoomableMap = {
  n: 't',
  s: 'b',
  e: 'r',
  w: 'l',
  ne: 'tr',
  nw: 'tl',
  se: 'br',
  sw: 'bl'
};
var Rect = /*#__PURE__*/function (_PureComponent) {
  _inherits(Rect, _PureComponent);
  var _super = _createSuper(Rect);
  function Rect(props) {
    var _props$defaultFocus;
    var _this;
    _classCallCheck(this, Rect);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "setElementRef", function (ref) {
      _this.$element = ref;
    });
    // Drag
    _defineProperty(_assertThisInitialized(_this), "startDrag", function (e) {
      var startX = e.clientX,
        startY = e.clientY;
      _this.props.onDragStart && _this.props.onDragStart();
      _this._isMouseDown = true;
      var onMove = function onMove(e) {
        if (!_this._isMouseDown) return; // patch: fix windows press win key during mouseup issue
        e.stopImmediatePropagation();
        var clientX = e.clientX,
          clientY = e.clientY;
        var deltaX = clientX - startX;
        var deltaY = clientY - startY;
        _this.props.onDrag(deltaX, deltaY);
        startX = clientX;
        startY = clientY;
      };
      var onUp = function onUp() {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        if (!_this._isMouseDown) return;
        _this._isMouseDown = false;
        _this.props.onDragEnd && _this.props.onDragEnd();
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });
    // Rotate
    _defineProperty(_assertThisInitialized(_this), "startRotate", function (e) {
      if (e.button !== 0) return;
      var clientX = e.clientX,
        clientY = e.clientY;
      var startAngle = _this.props.styles.transform.rotateAngle;
      var rect = _this.$element.getBoundingClientRect();
      var center = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
      var startVector = {
        x: clientX - center.x,
        y: clientY - center.y
      };
      _this.props.onRotateStart && _this.props.onRotateStart();
      _this._isMouseDown = true;
      var onMove = function onMove(e) {
        if (!_this._isMouseDown) return; // patch: fix windows press win key during mouseup issue
        e.stopImmediatePropagation();
        var clientX = e.clientX,
          clientY = e.clientY;
        var rotateVector = {
          x: clientX - center.x,
          y: clientY - center.y
        };
        var angle = getAngle(startVector, rotateVector);
        _this.props.onRotate(angle, startAngle);
      };
      var onUp = function onUp() {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        if (!_this._isMouseDown) return;
        _this._isMouseDown = false;
        _this.props.onRotateEnd && _this.props.onRotateEnd();
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });
    // Resize
    _defineProperty(_assertThisInitialized(_this), "startResize", function (e, cursor) {
      if (e.button !== 0) return;
      document.body.style.cursor = cursor;
      var _this$props$styles = _this.props.styles,
        _this$props$styles$po = _this$props$styles.position,
        centerX = _this$props$styles$po.centerX,
        centerY = _this$props$styles$po.centerY,
        _this$props$styles$si = _this$props$styles.size,
        width = _this$props$styles$si.width,
        height = _this$props$styles$si.height,
        rotateAngle = _this$props$styles.transform.rotateAngle;
      var startX = e.clientX,
        startY = e.clientY;
      var rect = {
        width: width,
        height: height,
        centerX: centerX,
        centerY: centerY,
        rotateAngle: rotateAngle
      };
      var type = e.target.getAttribute('class').split(' ')[0];
      _this.props.onResizeStart && _this.props.onResizeStart();
      _this._isMouseDown = true;
      var onMove = function onMove(e) {
        if (!_this._isMouseDown) return; // patch: fix windows press win key during mouseup issue
        e.stopImmediatePropagation();
        var clientX = e.clientX,
          clientY = e.clientY;
        var deltaX = clientX - startX;
        var deltaY = clientY - startY;
        var alpha = Math.atan2(deltaY, deltaX);
        var deltaL = getLength(deltaX, deltaY);
        var isShiftKey = e.shiftKey;
        _this.props.onResize(deltaL, alpha, rect, type, isShiftKey);
      };
      var onUp = function onUp() {
        document.body.style.cursor = 'auto';
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        if (!_this._isMouseDown) return;
        _this._isMouseDown = false;
        _this.props.onResizeEnd && _this.props.onResizeEnd();
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });
    _defineProperty(_assertThisInitialized(_this), "onArrowBasedResize", function (e) {
      var _this$props$styles2 = _this.props.styles,
        _this$props$styles2$p = _this$props$styles2.position,
        centerX = _this$props$styles2$p.centerX,
        centerY = _this$props$styles2$p.centerY,
        _this$props$styles2$s = _this$props$styles2.size,
        width = _this$props$styles2$s.width,
        height = _this$props$styles2$s.height,
        rotateAngle = _this$props$styles2.transform.rotateAngle;
      e.clientX;
        e.clientY;
      var rect = {
        width: width,
        height: height,
        centerX: centerX,
        centerY: centerY,
        rotateAngle: rotateAngle
      };
      var shiftPlusArrowKeyPressCount = 0;
      var onKeyDown = function onKeyDown(e) {
        if (e.shiftKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
          var deltaL = e.key === 'ArrowUp' ? ++shiftPlusArrowKeyPressCount : --shiftPlusArrowKeyPressCount; // resize by one pixel
          var alpha = 0;
          var isShiftKey = true;
          _this.props.onResize(deltaL, alpha, rect, 'r', isShiftKey);
        }
      };
      var onKeyUp = function onKeyUp(e) {
        if (e.shiftKey) return;
        document.removeEventListener('keydown', onKeyDown);
        document.removeEventListener('keyup', onKeyUp);
      };
      document.addEventListener('keydown', onKeyDown);
      document.addEventListener('keyup', onKeyUp);
    });
    _this.state = {
      isFocused: (_props$defaultFocus = props.defaultFocus) !== null && _props$defaultFocus !== void 0 ? _props$defaultFocus : false
    };
    return _this;
  }
  _createClass(Rect, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var onFocusChange = this.props.onFocusChange;
      onFocusChange && onFocusChange(this.state.isFocused);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        _this$props$styles3 = _this$props.styles,
        _this$props$styles3$p = _this$props$styles3.position,
        centerX = _this$props$styles3$p.centerX,
        centerY = _this$props$styles3$p.centerY,
        _this$props$styles3$s = _this$props$styles3.size,
        width = _this$props$styles3$s.width,
        height = _this$props$styles3$s.height,
        rotateAngle = _this$props$styles3.transform.rotateAngle,
        zoomable = _this$props.zoomable,
        rotatable = _this$props.rotatable,
        parentRotateAngle = _this$props.parentRotateAngle,
        children = _this$props.children,
        color = _this$props.color,
        itemId = _this$props.itemId,
        focusChange = _this$props.focusChange,
        isDraggable = _this$props.isDraggable;
      var style = {
        width: isFocused ? Math.abs(width) : Math.abs(width) - 1,
        height: isFocused ? Math.abs(height) : Math.abs(height) - 1,
        transform: "rotate(".concat(rotateAngle, "deg)"),
        left: centerX - Math.abs(width) / 2,
        top: centerY - Math.abs(height) / 2
      };
      var direction = zoomable.split(',').map(function (d) {
        return d.trim();
      }).filter(function (d) {
        return d;
      }); // TODO: may be speed up

      var isFocused = this.state.isFocused;
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, isFocused ? /*#__PURE__*/React__default["default"].createElement("div", {
        id: itemId,
        ref: this.setElementRef,
        onMouseDown: this.startDrag,
        className: "rect single-resizer",
        style: _objectSpread2(_objectSpread2({}, style), {}, {
          borderColor: color,
          position: isDraggable ? 'absolute' : 'relative'
        }),
        tabIndex: "0",
        onFocus: function onFocus() {
          return focusChange && _this2.setState({
            isFocused: true
          });
        },
        onBlur: function onBlur() {
          return focusChange && _this2.setState({
            isFocused: false
          });
        },
        onClick: this.onArrowBasedResize
      }, rotatable && /*#__PURE__*/React__default["default"].createElement("div", {
        className: "rotate",
        onMouseDown: this.startRotate
      }, /*#__PURE__*/React__default["default"].createElement("svg", {
        width: "14",
        height: "14",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default["default"].createElement("path", {
        d: "M10.536 3.464A5 5 0 1 0 11 10l1.424 1.425a7 7 0 1 1-.475-9.374L13.659.34A.2.2 0 0 1 14 .483V5.5a.5.5 0 0 1-.5.5H8.483a.2.2 0 0 1-.142-.341l2.195-2.195z",
        fill: color,
        fillRule: "nonzero"
      }))), direction.map(function (d) {
        var cursor = "".concat(getCursor(rotateAngle + parentRotateAngle, d), "-resize");
        return /*#__PURE__*/React__default["default"].createElement("div", {
          key: d,
          className: "".concat(zoomableMap[d], " resizable-handler"),
          style: {
            cursor: cursor
          },
          onMouseDown: function onMouseDown(e) {
            return _this2.startResize(e, cursor);
          }
        });
      }), direction.map(function (d) {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          key: d,
          className: "".concat(zoomableMap[d], " square"),
          style: {
            borderColor: color
          }
        });
      }), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "childContainer"
      }, children)) : /*#__PURE__*/React__default["default"].createElement("div", {
        id: itemId,
        style: _objectSpread2(_objectSpread2({}, style), {}, {
          position: isDraggable ? 'absolute' : 'relative'
        }),
        className: "childContainer",
        onFocus: function onFocus() {
          return focusChange && _this2.setState({
            isFocused: true
          });
        },
        onBlur: function onBlur() {
          return focusChange && _this2.setState({
            isFocused: false
          });
        },
        tabIndex: "0",
        onMouseDown: this.onArrowBasedResize
      }, children));
    }
  }]);
  return Rect;
}(React.PureComponent);
_defineProperty(Rect, "propTypes", {
  styles: PropTypes__default["default"].object,
  zoomable: PropTypes__default["default"].string,
  rotatable: PropTypes__default["default"].bool,
  onResizeStart: PropTypes__default["default"].func,
  onResize: PropTypes__default["default"].func,
  onResizeEnd: PropTypes__default["default"].func,
  onRotateStart: PropTypes__default["default"].func,
  onRotate: PropTypes__default["default"].func,
  onRotateEnd: PropTypes__default["default"].func,
  onDragStart: PropTypes__default["default"].func,
  onDrag: PropTypes__default["default"].func,
  onDragEnd: PropTypes__default["default"].func,
  parentRotateAngle: PropTypes__default["default"].number,
  children: PropTypes__default["default"].node,
  color: PropTypes__default["default"].color,
  itemId: PropTypes__default["default"].string,
  focusChange: PropTypes__default["default"].bool,
  defaultFocus: PropTypes__default["default"].bool,
  isDraggable: PropTypes__default["default"].bool,
  onFocusChange: PropTypes__default["default"].func
});

function ResizableRect(_ref) {
  var _initValues$top, _initValues$left, _initValues$width, _initValues$height;
  var _ref$rotatable = _ref.rotatable,
    rotatable = _ref$rotatable === void 0 ? true : _ref$rotatable,
    _ref$parentRotateAngl = _ref.parentRotateAngle,
    parentRotateAngle = _ref$parentRotateAngl === void 0 ? 0 : _ref$parentRotateAngl,
    _ref$zoomable = _ref.zoomable,
    zoomable = _ref$zoomable === void 0 ? '' : _ref$zoomable,
    _ref$minWidth = _ref.minWidth,
    minWidth = _ref$minWidth === void 0 ? 10 : _ref$minWidth,
    _ref$minHeight = _ref.minHeight,
    minHeight = _ref$minHeight === void 0 ? 10 : _ref$minHeight,
    aspectRatio = _ref.aspectRatio,
    onRotateStart = _ref.onRotateStart,
    onRotate = _ref.onRotate,
    onRotateEnd = _ref.onRotateEnd,
    onResizeStart = _ref.onResizeStart,
    onResize = _ref.onResize,
    onResizeEnd = _ref.onResizeEnd,
    onDragStart = _ref.onDragStart,
    onDrag = _ref.onDrag,
    onDragEnd = _ref.onDragEnd,
    children = _ref.children,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'black' : _ref$color,
    _ref$haveBoundary = _ref.haveBoundary,
    haveBoundary = _ref$haveBoundary === void 0 ? true : _ref$haveBoundary,
    _ref$defaultRotateAng = _ref.defaultRotateAngle,
    defaultRotateAngle = _ref$defaultRotateAng === void 0 ? 0 : _ref$defaultRotateAng,
    _ref$defaultFocus = _ref.defaultFocus,
    defaultFocus = _ref$defaultFocus === void 0 ? false : _ref$defaultFocus,
    _ref$focusChange = _ref.focusChange,
    focusChange = _ref$focusChange === void 0 ? true : _ref$focusChange,
    _ref$id = _ref.id,
    id = _ref$id === void 0 ? 'default_id' : _ref$id,
    onFocusChange = _ref.onFocusChange,
    initValues = _ref.initValues,
    propHeight = _ref.height,
    propWidth = _ref.width,
    propTop = _ref.top,
    propLeft = _ref.left;
  var _useState = React.useState((_initValues$top = initValues === null || initValues === void 0 ? void 0 : initValues.top) !== null && _initValues$top !== void 0 ? _initValues$top : 10),
    _useState2 = _slicedToArray(_useState, 2),
    top = _useState2[0],
    setTop = _useState2[1];
  var _useState3 = React.useState((_initValues$left = initValues === null || initValues === void 0 ? void 0 : initValues.left) !== null && _initValues$left !== void 0 ? _initValues$left : 10),
    _useState4 = _slicedToArray(_useState3, 2),
    left = _useState4[0],
    setLeft = _useState4[1];
  var _useState5 = React.useState((_initValues$width = initValues === null || initValues === void 0 ? void 0 : initValues.width) !== null && _initValues$width !== void 0 ? _initValues$width : 100),
    _useState6 = _slicedToArray(_useState5, 2),
    width = _useState6[0],
    setWidth = _useState6[1];
  var _useState7 = React.useState((_initValues$height = initValues === null || initValues === void 0 ? void 0 : initValues.height) !== null && _initValues$height !== void 0 ? _initValues$height : 100),
    _useState8 = _slicedToArray(_useState7, 2),
    height = _useState8[0],
    setHeight = _useState8[1];
  var _useState9 = React.useState(defaultRotateAngle),
    _useState10 = _slicedToArray(_useState9, 2),
    rotateAngle = _useState10[0],
    setRotateAngle = _useState10[1];
  // const [itemId, setItemId] = useState(uuidv4())
  var _useState11 = React.useState(id),
    _useState12 = _slicedToArray(_useState11, 2),
    itemId = _useState12[0];
    _useState12[1];
  var styles = tLToCenter({
    top: top,
    left: left,
    width: width,
    height: height,
    rotateAngle: rotateAngle
  });
  React.useEffect(function () {
    if (propHeight) {
      setHeight(propHeight);
    }
  }, [propHeight]);
  React.useEffect(function () {
    if (propWidth) {
      setWidth(propWidth);
    }
  }, [propWidth]);
  React.useEffect(function () {
    if (propTop) {
      setTop(propTop);
    }
  }, [propTop]);
  React.useEffect(function () {
    if (propLeft) {
      setLeft(propLeft);
    }
  }, [propLeft]);
  var handleRotate = function handleRotate(angle, startAngle) {
    if (!onRotate) return;
    var rotateAngle = Math.round(startAngle + angle);
    if (rotateAngle >= 360) {
      rotateAngle -= 360;
    } else if (rotateAngle < 0) {
      rotateAngle += 360;
    }
    if (rotateAngle > 356 || rotateAngle < 4) {
      rotateAngle = 0;
    } else if (rotateAngle > 86 && rotateAngle < 94) {
      rotateAngle = 90;
    } else if (rotateAngle > 176 && rotateAngle < 184) {
      rotateAngle = 180;
    } else if (rotateAngle > 266 && rotateAngle < 274) {
      rotateAngle = 270;
    }
    setRotateAngle(rotateAngle);
    onRotate(rotateAngle);
  };
  var handleResize = function handleResize(length, alpha, rect, type, isShiftKey) {
    if (!onResize) return;
    var beta = alpha - degToRadian(rotateAngle + parentRotateAngle);
    var deltaW = length * Math.cos(beta);
    var deltaH = length * Math.sin(beta);
    var ratio = isShiftKey && !aspectRatio ? rect.width / rect.height : aspectRatio;
    var _getNewStyle = getNewStyle(type, _objectSpread2(_objectSpread2({}, rect), {}, {
        rotateAngle: rotateAngle
      }), deltaW, deltaH, ratio, minWidth, minHeight),
      _getNewStyle$position = _getNewStyle.position,
      centerX = _getNewStyle$position.centerX,
      centerY = _getNewStyle$position.centerY,
      _getNewStyle$size = _getNewStyle.size,
      width = _getNewStyle$size.width,
      height = _getNewStyle$size.height;
    var values = centerToTL({
      centerX: centerX,
      centerY: centerY,
      width: width,
      height: height,
      rotateAngle: rotateAngle
    });
    if (isOutOfBoundary(values.left, values.top, width, height, haveBoundary, itemId)) {
      return;
    }
    setHeight(height);
    setWidth(width);
    onResize(values, isShiftKey, type);
  };
  var handleDrag = function handleDrag(deltaX, deltaY) {
    if (!onDrag) return;
    var newLeft = left + deltaX;
    var newTop = top + deltaY;
    if (isOutOfBoundary(newLeft, newTop, width, height, haveBoundary, itemId)) {
      return;
    }
    setLeft(newLeft);
    setTop(newTop);
    onDrag && onDrag(newLeft, newTop);
  };
  return /*#__PURE__*/React__default["default"].createElement(Rect, {
    styles: styles,
    zoomable: zoomable,
    rotatable: Boolean(rotatable && onRotate),
    parentRotateAngle: parentRotateAngle,
    onResizeStart: onResizeStart,
    onResize: handleResize,
    onResizeEnd: onResizeEnd,
    onRotateStart: onRotateStart,
    onRotate: handleRotate,
    onRotateEnd: onRotateEnd,
    onDragStart: onDragStart,
    onDrag: handleDrag,
    isDraggable: onDrag !== undefined,
    onDragEnd: onDragEnd,
    children: children,
    color: color,
    itemId: itemId,
    defaultFocus: defaultFocus,
    focusChange: focusChange,
    onFocusChange: onFocusChange
  });
}

module.exports = ResizableRect;
//# sourceMappingURL=index.js.map
