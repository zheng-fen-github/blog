webpackHotUpdate("static\\development\\pages\\article-list.js",{

/***/ "./component/public/nav.js":
/*!*********************************!*\
  !*** ./component/public/nav.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\public\\nav.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Nav = function Nav(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])().asPath;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(router),
      path = _useState[0];

  return __jsx("div", {
    className: "jsx-3262953798" + " " + "nav row mx-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3262953798" + " " + "col-12 px-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, props.children), __jsx("div", {
    className: "jsx-3262953798" + " " + "content col-12 mx-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3262953798" + " " + "min-nav row align-items-center justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3262953798" + " " + "col-12 col-sm-10 col-lg-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "jsx-3262953798" + " " + "d-flex row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-3262953798" + " " + ((path == "/" ? "liSeled" : null) || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "jsx-3262953798",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 19
    }
  }, "Home"))), __jsx("li", {
    className: "jsx-3262953798" + " " + ((path == "/photo" ? "liSeled" : null) || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/photo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "jsx-3262953798",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 19
    }
  }, "Photo"))), __jsx("li", {
    className: "jsx-3262953798" + " " + ((path == "/article-list" ? "liSeled" : null) || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/article-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "jsx-3262953798",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 19
    }
  }, "Article"))), __jsx("li", {
    className: "jsx-3262953798" + " " + ((path == "/component" ? "liSeled" : null) || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/component",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "jsx-3262953798",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, "Component")))))), props.title), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3262953798",
    __self: _this
  }, ".nav.jsx-3262953798{position:relative;}.content.jsx-3262953798{position:absolute;left:0;right:0;top:0;bottom:0;}.min-nav.jsx-3262953798{width:100%;min-height:14%;border-bottom:solid rgba(255,255,255,0.5) 1px;}ul.jsx-3262953798{width:100%;list-style:none;margin:0;}li.jsx-3262953798{-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;color:white;padding:1rem;margin:1rem;border-radius:6px;-webkit-transition:0.4s;transition:0.4s;cursor:pointer;}li.jsx-3262953798:hover,.liSeled.jsx-3262953798{background:rgba(255,255,255,0.3);}@media (max-width:960px){.min-nav.jsx-3262953798>div.jsx-3262953798{margin:2rem;}}@media (max-width:360px){li.jsx-3262953798{margin:0.4rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxccHVibGljXFxuYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNTLEFBRytCLEFBSUEsQUFPUCxBQUtBLEFBS0osQUFZNkIsQUFJdEIsQUFLRSxXQTlCRCxBQUtDLENBcUJoQixFQUtBLElBMUNGLEFBSVMsT0FDQyxDQU95QyxDQUt4QyxNQVhILEFBZVksQUFZcEIsR0FmQSxHQVhXLFNBQ1gsR0FjYyxZQUNDLFNBVmYsSUFXYyxZQUNNLGtCQUNGLHdDQUNELGVBQ2pCIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxccHVibGljXFxuYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTmF2ID0gKHByb3BzKSA9PiB7XHJcbiAgbGV0IHJvdXRlciA9IHVzZVJvdXRlcigpLmFzUGF0aDtcclxuICBjb25zdCBbcGF0aF0gPSB1c2VTdGF0ZShyb3V0ZXIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYgcm93IG14LTBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcHgtMFwiPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBjb2wtMTIgbXgtMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLW5hdiByb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMCBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1mbGV4IHJvd1wiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGggPT0gXCIvXCIgPyBcImxpU2VsZWRcIiA6IG51bGx9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgPGgzPkhvbWU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aCA9PSBcIi9waG90b1wiID8gXCJsaVNlbGVkXCIgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGhvdG9cIj5cclxuICAgICAgICAgICAgICAgICAgPGgzPlBob3RvPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoID09IFwiL2FydGljbGUtbGlzdFwiID8gXCJsaVNlbGVkXCIgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXJ0aWNsZS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz5BcnRpY2xlPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGggPT0gXCIvY29tcG9uZW50XCIgPyBcImxpU2VsZWRcIiA6IG51bGx9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzPkNvbXBvbmVudDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtwcm9wcy50aXRsZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5uYXYge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5taW4tbmF2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE0JTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDFweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGk6aG92ZXIsXHJcbiAgICAgICAgICAubGlTZWxlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgICAgICAgICAubWluLW5hdiA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMC40cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\public\\\\nav.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=article-list.js.9b80682c7c51fb8a8fc4.hot-update.js.map