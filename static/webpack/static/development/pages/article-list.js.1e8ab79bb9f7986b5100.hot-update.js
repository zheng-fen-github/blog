webpackHotUpdate("static\\development\\pages\\article-list.js",{

/***/ "./component/articleList/footer.js":
/*!*****************************************!*\
  !*** ./component/articleList/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\articleList\\footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Footer = function Footer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      status = _useState[0],
      setstatus = _useState[1];

  var lookHeightFunc = function lookHeightFunc() {
    var winH = window.innerHeight;
    var domH = document.documentElement.offsetHeight;

    if (winH > domH) {
      if (status == true) return;
      setstatus(true);
    } else {
      console.log(status);
      if (status == false) return;
      setstatus(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    lookHeightFunc();
    window.addEventListener("resize", lookHeightFunc);
  }, []);
  return __jsx("footer", {
    className: "jsx-20588762" + " " + "row mx-0 p-0 ".concat(status ? "bottom" : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-20588762" + " " + "col-12 py-5 mx-0 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "jsx-20588762",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "2020 Have a good night")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "20588762",
    __self: _this
  }, "footer.jsx-20588762{background:#326fa0;color:white;margin-top:10%;width:100%;}.bottom.jsx-20588762{position:fixed;bottom:0;left:0;z-index:100;}h3.jsx-20588762{font-size:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZUxpc3RcXGZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQlMsQUFHZ0MsQUFNSixBQU1BLGVBTE4sQUFNWCxJQVpjLEtBT0wsT0FOUSxBQU9ILFlBQ2QsR0FQYSxXQUNiIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZUxpc3RcXGZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0c3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBsb29rSGVpZ2h0RnVuYyA9ICgpID0+IHtcclxuICAgIGxldCB3aW5IID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgbGV0IGRvbUggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgaWYgKHdpbkggPiBkb21IKSB7XHJcbiAgICAgIGlmIChzdGF0dXMgPT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgICBzZXRzdGF0dXModHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhzdGF0dXMpO1xyXG4gICAgICBpZiAoc3RhdHVzID09IGZhbHNlKSByZXR1cm47XHJcbiAgICAgIHNldHN0YXR1cyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9va0hlaWdodEZ1bmMoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGxvb2tIZWlnaHRGdW5jKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtgcm93IG14LTAgcC0wICR7c3RhdHVzID8gXCJib3R0b21cIiA6IFwiXCJ9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHB5LTUgbXgtMCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxoMz4yMDIwIEhhdmUgYSBnb29kIG5pZ2h0PC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMjZmYTA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3R0b20ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\articleList\\\\footer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=article-list.js.1e8ab79bb9f7986b5100.hot-update.js.map