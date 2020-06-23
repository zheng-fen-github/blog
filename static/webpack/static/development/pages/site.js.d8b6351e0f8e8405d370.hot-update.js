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
    className: "jsx-3991751694" + " " + "site ani pointer test ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3991751694" + " " + "min-ctn ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      backgroundColor: cor
    },
    className: "jsx-3991751694" + " " + "backcolor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: mes.url,
    target: "_black",
    className: "jsx-3991751694",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-3991751694",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, mes.name)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3991751694",
    __self: this
  }, ".site.jsx-3991751694{width:80%;margin-left:20%;border-radius:4px;position:relative;}.min-ctn.jsx-3991751694{margin:20px 0;padding:10px;background:#212329;}a.jsx-3991751694{-webkit-text-decoration:none;text-decoration:none;}.site.jsx-3991751694 .backcolor.jsx-3991751694{border-radius:4px;text-align:center;padding:10px;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcc2l0ZVxcbGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQmtCLEFBR3FCLEFBT0ksQUFLTyxBQUdILFVBZEYsSUFPSCxJQVFLLFFBYkEsQ0FNQyxTQVFOLFFBYkssRUFNcEIsR0FRaUIsQ0FMakIsWUFSQSxFQWNBIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcc2l0ZVxcbGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gTGluayh7IG1lc3MsIG9wZW4sIGdhbywgc2V0Z2FvLCBtZXMsIGNvciB9KSB7XHJcbiAgbGV0IG9uY2UgPSB1c2VSZWYoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgeyBjdXJyZW50IH0gPSBvbmNlO1xyXG4gICAgY3VycmVudCA/IChvcGVuID8gemVyb0V2KCkgOiBwb3NpdGlvbkV2KCkpIDogKG9uY2UuY3VycmVudCA9IHRydWUpO1xyXG4gIH0sIFtvcGVuXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobWVzcykgcG9zaXRpb25FdigpO1xyXG4gIH0sIFttZXNzXSk7XHJcbiAgY29uc3QgcG9zaXRpb25FdiA9ICgpID0+IHtcclxuICAgIGxldCBwb3NpID0gZG9tLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgaWYgKCFnYW8pIHNldGdhbyhkb20ub2Zmc2V0SGVpZ2h0KTtcclxuICAgIGRvbS5zdHlsZS50b3AgPSAtKHBvc2kudG9wIC0gbWVzcy50b3ApICsgXCJweFwiO1xyXG4gIH07XHJcbiAgY29uc3QgemVyb0V2ID0gKCkgPT4ge1xyXG4gICAgZG9tLnN0eWxlLnRvcCA9IDA7XHJcbiAgfTtcclxuICBsZXQgZG9tO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlIGFuaSBwb2ludGVyIHRlc3QgXCIgcmVmPXsocmVmKSA9PiAoZG9tID0gcmVmKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWN0biBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tjb2xvclwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29yIH19PlxyXG4gICAgICAgICAgPGEgaHJlZj17bWVzLnVybH0gdGFyZ2V0PVwiX2JsYWNrXCI+XHJcbiAgICAgICAgICAgIDxoMz57bWVzLm5hbWV9PC9oMz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuc2l0ZSB7XHJcbiAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuXHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5taW4tY3RuIHtcclxuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMyMTIzMjk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2l0ZSAuYmFja2NvbG9yIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\site\\\\link.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ })

})
//# sourceMappingURL=site.js.d8b6351e0f8e8405d370.hot-update.js.map