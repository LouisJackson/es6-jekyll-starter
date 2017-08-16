(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Default = function Default() {
  _classCallCheck(this, Default);

  console.log('Default module loaded!');
};

exports.default = Default;

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Default = require('./Default');

var _Default2 = _interopRequireDefault(_Default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this._init();
  }

  _createClass(App, [{
    key: '_init',
    value: function _init() {
      console.log('App loaded!');
      this._default = new _Default2.default();
    }
  }]);

  return App;
}();

document.addEventListener("DOMContentLoaded", function () {
  new App();
});

},{"./Default":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfanMvRGVmYXVsdC9pbmRleC5qcyIsIl9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztJQ0FNLE8sR0FDSixtQkFBZ0I7QUFBQTs7QUFDZCxVQUFRLEdBQVIsQ0FBWSx3QkFBWjtBQUNELEM7O2tCQUdZLE87Ozs7Ozs7QUNOZjs7Ozs7Ozs7SUFFTSxHO0FBQ0osaUJBQWU7QUFBQTs7QUFDYixTQUFLLEtBQUw7QUFDRDs7Ozs0QkFFTztBQUNOLGNBQVEsR0FBUixDQUFZLGFBQVo7QUFDQSxXQUFLLFFBQUwsR0FBZ0IsdUJBQWhCO0FBQ0Q7Ozs7OztBQUdILFNBQVMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVc7QUFDdkQsTUFBSSxHQUFKO0FBQ0QsQ0FGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBEZWZhdWx0IHtcbiAgY29uc3RydWN0b3IgKCkgIHtcbiAgICBjb25zb2xlLmxvZygnRGVmYXVsdCBtb2R1bGUgbG9hZGVkIScpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdCIsImltcG9ydCBEZWZhdWx0IGZyb20gJy4vRGVmYXVsdCdcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuX2luaXQoKVxuICB9XG5cbiAgX2luaXQoKSB7XG4gICAgY29uc29sZS5sb2coJ0FwcCBsb2FkZWQhJylcbiAgICB0aGlzLl9kZWZhdWx0ID0gbmV3IERlZmF1bHQoKVxuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkgeyBcbiAgbmV3IEFwcCgpXG59KSJdfQ==
