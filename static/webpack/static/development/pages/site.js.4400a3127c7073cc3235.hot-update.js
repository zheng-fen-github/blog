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
    className: "jsx-1920486219" + " " + "site ani pointer test ",
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
    className: "jsx-1920486219" + " " + "backcolor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: mes.url,
    target: "_black",
    className: "jsx-1920486219",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "jsx-1920486219",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, mes.name))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1920486219",
    __self: this
  }, ".site.jsx-1920486219{width:80%;margin:20px 0 20px 20%;background:#212329;padding:10px;border-radius:4px;position:relative;}a.jsx-1920486219{-webkit-text-decoration:none;text-decoration:none;}.site.jsx-1920486219 .backcolor.jsx-1920486219{border-radius:4px;text-align:center;padding:10px;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcc2l0ZVxcbGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmtCLEFBR3FCLEFBUVcsQUFHSCxVQVZLLFFBV0wsZUFWQyxHQVdOLGFBQ0UsQ0FMakIsRUFOZSxZQVlmLENBWG9CLGtCQUNBLGtCQUNwQiIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxjb21wb25lbnRcXHNpdGVcXGxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIExpbmsoeyBtZXNzLCBvcGVuLCBnYW8sIHNldGdhbywgbWVzLCBjb3IgfSkge1xyXG4gIGxldCBvbmNlID0gdXNlUmVmKGZhbHNlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHsgY3VycmVudCB9ID0gb25jZTtcclxuICAgIGN1cnJlbnQgPyAob3BlbiA/IHplcm9FdigpIDogcG9zaXRpb25FdigpKSA6IChvbmNlLmN1cnJlbnQgPSB0cnVlKTtcclxuICB9LCBbb3Blbl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG1lc3MpIHBvc2l0aW9uRXYoKTtcclxuICB9LCBbbWVzc10pO1xyXG4gIGNvbnN0IHBvc2l0aW9uRXYgPSAoKSA9PiB7XHJcbiAgICBsZXQgcG9zaSA9IGRvbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGlmICghZ2FvKSBzZXRnYW8oZG9tLm9mZnNldEhlaWdodCk7XHJcbiAgICBkb20uc3R5bGUudG9wID0gLShwb3NpLnRvcCAtIG1lc3MudG9wKSArIFwicHhcIjtcclxuICB9O1xyXG4gIGNvbnN0IHplcm9FdiA9ICgpID0+IHtcclxuICAgIGRvbS5zdHlsZS50b3AgPSAwO1xyXG4gIH07XHJcbiAgbGV0IGRvbTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZSBhbmkgcG9pbnRlciB0ZXN0IFwiIHJlZj17KHJlZikgPT4gKGRvbSA9IHJlZil9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tjb2xvclwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29yIH19PlxyXG4gICAgICAgIDxhIGhyZWY9e21lcy51cmx9IHRhcmdldD1cIl9ibGFja1wiPlxyXG4gICAgICAgICAgPGgzPnttZXMubmFtZX08L2gzPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuc2l0ZSB7XHJcbiAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMjBweCAyMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjEyMzI5O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zaXRlIC5iYWNrY29sb3Ige1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbms7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\site\\\\link.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ })

})
//# sourceMappingURL=site.js.4400a3127c7073cc3235.hot-update.js.map