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
      console.log("object");
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
  }, "footer.jsx-20588762{background:#326fa0;color:white;margin-top:10%;width:100%;}.bottom.jsx-20588762{position:fixed;bottom:0;left:0;z-index:100;}h3.jsx-20588762{font-size:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZUxpc3RcXGZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQlMsQUFHZ0MsQUFNSixBQU1BLGVBTE4sQUFNWCxJQVpjLEtBT0wsT0FOUSxBQU9ILFlBQ2QsR0FQYSxXQUNiIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZUxpc3RcXGZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0c3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBsb29rSGVpZ2h0RnVuYyA9ICgpID0+IHtcclxuICAgIGxldCB3aW5IID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgbGV0IGRvbUggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgaWYgKHdpbkggPiBkb21IKSB7XHJcbiAgICAgIGlmIChzdGF0dXMgPT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgICBzZXRzdGF0dXModHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9iamVjdFwiKTtcclxuICAgICAgaWYgKHN0YXR1cyA9PSBmYWxzZSkgcmV0dXJuO1xyXG4gICAgICBzZXRzdGF0dXMoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvb2tIZWlnaHRGdW5jKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBsb29rSGVpZ2h0RnVuYyk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17YHJvdyBteC0wIHAtMCAke3N0YXR1cyA/IFwiYm90dG9tXCIgOiBcIlwifWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBweS01IG14LTAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8aDM+MjAyMCBIYXZlIGEgZ29vZCBuaWdodDwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzI2ZmEwO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYm90dG9tIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\articleList\\\\footer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=article-list.js.e36e8c868b1c7df9b812.hot-update.js.map