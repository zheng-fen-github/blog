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
    dom.style.top = -(posi.top - mess.top) + "px";
  };

  var zeroEv = function zeroEv() {
    dom.style.top = 0;
  };

  var dom;
  return __jsx("div", {
    ref: function ref(_ref2) {
      return dom = _ref2;
    },
    className: "jsx-1650021644" + " " + "site ani pointer test ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      backgroundColor: cor
    },
    className: "jsx-1650021644" + " " + "backcolor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: mes.url,
    target: "_black",
    className: "jsx-1650021644",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "jsx-1650021644",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, mes.name))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1650021644",
    __self: this
  }, ".site.jsx-1650021644{width:80%;margin:20px 0 20px 20%;background:#212329;padding:10px;border-radius:4px;position:relative;}.site.jsx-1650021644 .backcolor.jsx-1650021644{border-radius:4px;text-align:center;padding:10px;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcc2l0ZVxcbGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmtCLEFBR3FCLEFBU1EsVUFSSyxRQVNMLGVBUkMsR0FTTixhQUNFLEdBVEYsWUFVZixDQVRvQixrQkFDQSxrQkFDcEIiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxzaXRlXFxsaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBMaW5rKHsgbWVzcywgb3BlbiwgZ2FvLCBzZXRnYW8sIG1lcywgY29yIH0pIHtcclxuICBsZXQgb25jZSA9IHVzZVJlZihmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB7IGN1cnJlbnQgfSA9IG9uY2U7XHJcbiAgICBjdXJyZW50ID8gKG9wZW4gPyB6ZXJvRXYoKSA6IHBvc2l0aW9uRXYoKSkgOiAob25jZS5jdXJyZW50ID0gdHJ1ZSk7XHJcbiAgfSwgW29wZW5dKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChtZXNzKSBwb3NpdGlvbkV2KCk7XHJcbiAgfSwgW21lc3NdKTtcclxuICBjb25zdCBwb3NpdGlvbkV2ID0gKCkgPT4ge1xyXG4gICAgbGV0IHBvc2kgPSBkb20uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBpZiAoIWdhbykgc2V0Z2FvKGRvbS5vZmZzZXRIZWlnaHQpO1xyXG4gICAgZG9tLnN0eWxlLnRvcCA9IC0ocG9zaS50b3AgLSBtZXNzLnRvcCkgKyBcInB4XCI7XHJcbiAgfTtcclxuICBjb25zdCB6ZXJvRXYgPSAoKSA9PiB7XHJcbiAgICBkb20uc3R5bGUudG9wID0gMDtcclxuICB9O1xyXG4gIGxldCBkb207XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNpdGUgYW5pIHBvaW50ZXIgdGVzdCBcIiByZWY9eyhyZWYpID0+IChkb20gPSByZWYpfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrY29sb3JcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvciB9fT5cclxuICAgICAgICA8YSBocmVmPXttZXMudXJsfSB0YXJnZXQ9XCJfYmxhY2tcIj5cclxuICAgICAgICAgIDxoMz57bWVzLm5hbWV9PC9oMz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnNpdGUge1xyXG4gICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIG1hcmdpbjogMjBweCAwIDIwcHggMjAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzIxMjMyOTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l0ZSAuYmFja2NvbG9yIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\site\\\\link.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ })

})
//# sourceMappingURL=site.js.1674ab9f3477381207cb.hot-update.js.map