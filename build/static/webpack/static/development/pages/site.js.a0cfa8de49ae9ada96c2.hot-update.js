webpackHotUpdate("static\\development\\pages\\site.js",{

/***/ "./component/site/link.js":
/*!********************************!*\
  !*** ./component/site/link.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\site\\link.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Link(_ref) {
  var mess = _ref.mess,
      open = _ref.open,
      gao = _ref.gao,
      setgao = _ref.setgao,
      mes = _ref.mes,
      cor = _ref.cor;
  var once = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  var initH = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var current = once.current;
    current ? open ? zeroEv() : positionEv() : once.current = true;
  }, [open]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (mess) positionEv();
  }, [mess]);

  var positionEv = function positionEv() {
    var posi = dom.getBoundingClientRect();
    if (!gao) setgao(dom.offsetHeight);
    !initH.current ? initH.current = -(posi.top - mess.top) : null;
    dom.style.top = initH.current + "px";
  };

  var zeroEv = function zeroEv() {
    dom.style.top = 0;
  };

  var dom;
  return __jsx("div", {
    ref: function ref(_ref2) {
      return dom = _ref2;
    },
    className: "jsx-1270826209" + " " + "site ani pointer test ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1270826209" + " " + "min-ctn ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      backgroundColor: cor
    },
    className: "jsx-1270826209" + " " + "backcolor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: mes.url,
    target: "_black",
    className: "jsx-1270826209",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-1270826209",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, mes.name)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1270826209",
    __self: this
  }, ".site.jsx-1270826209{width:80%;margin-left:20%;position:relative;padding:20px 0;}.min-ctn.jsx-1270826209{padding:10px;border-radius:4px;background:#212329;}a.jsx-1270826209{-webkit-text-decoration:none;text-decoration:none;}.site.jsx-1270826209 .backcolor.jsx-1270826209{border-radius:4px;text-align:center;padding:10px;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcc2l0ZVxcbGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ2tCLEFBR3FCLEFBTUcsQUFLUSxBQUdILFVBYkYsR0FNRSxLQVFBLFFBYkEsS0FNQyxLQVFOLFFBYkUsS0FjQSxDQVJqQixBQUdBLFNBUkEsS0FjQSIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxjb21wb25lbnRcXHNpdGVcXGxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIExpbmsoeyBtZXNzLCBvcGVuLCBnYW8sIHNldGdhbywgbWVzLCBjb3IgfSkge1xyXG4gIGxldCBvbmNlID0gdXNlUmVmKGZhbHNlKTtcclxuICBsZXQgaW5pdEggPSB1c2VSZWYoMCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB7IGN1cnJlbnQgfSA9IG9uY2U7XHJcbiAgICBjdXJyZW50ID8gKG9wZW4gPyB6ZXJvRXYoKSA6IHBvc2l0aW9uRXYoKSkgOiAob25jZS5jdXJyZW50ID0gdHJ1ZSk7XHJcbiAgfSwgW29wZW5dKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChtZXNzKSBwb3NpdGlvbkV2KCk7XHJcbiAgfSwgW21lc3NdKTtcclxuICBjb25zdCBwb3NpdGlvbkV2ID0gKCkgPT4ge1xyXG4gICAgbGV0IHBvc2kgPSBkb20uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBpZiAoIWdhbykgc2V0Z2FvKGRvbS5vZmZzZXRIZWlnaHQpO1xyXG4gICAgIWluaXRILmN1cnJlbnQgPyAoaW5pdEguY3VycmVudCA9IC0ocG9zaS50b3AgLSBtZXNzLnRvcCkpIDogbnVsbDtcclxuXHJcbiAgICBkb20uc3R5bGUudG9wID0gaW5pdEguY3VycmVudCArIFwicHhcIjtcclxuICB9O1xyXG4gIGNvbnN0IHplcm9FdiA9ICgpID0+IHtcclxuICAgIGRvbS5zdHlsZS50b3AgPSAwO1xyXG4gIH07XHJcbiAgbGV0IGRvbTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZSBhbmkgcG9pbnRlciB0ZXN0IFwiIHJlZj17KHJlZikgPT4gKGRvbSA9IHJlZil9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1jdG4gXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrY29sb3JcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvciB9fT5cclxuICAgICAgICAgIDxhIGhyZWY9e21lcy51cmx9IHRhcmdldD1cIl9ibGFja1wiPlxyXG4gICAgICAgICAgICA8aDM+e21lcy5uYW1lfTwvaDM+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnNpdGUge1xyXG4gICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5taW4tY3RuIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjEyMzI5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNpdGUgLmJhY2tjb2xvciB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGluaztcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\site\\\\link.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ })

})
//# sourceMappingURL=site.js.a0cfa8de49ae9ada96c2.hot-update.js.map