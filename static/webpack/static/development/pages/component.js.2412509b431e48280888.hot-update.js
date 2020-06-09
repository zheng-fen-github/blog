webpackHotUpdate("static\\development\\pages\\component.js",{

/***/ "./pages/component.js":
/*!****************************!*\
  !*** ./pages/component.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_public_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/public/nav */ "./component/public/nav.js");
/* harmony import */ var _component_component_root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/component/root */ "./component/component/root.js");
/* harmony import */ var _component_component_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/component/footer */ "./component/component/footer.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _component_component_redux_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/component/redux/store */ "./component/component/redux/store.js");
var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\pages\\component.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Component = function Component() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      routerStatus = _useState[0],
      setRouterStatus = _useState[1]; // 路由变化事件


  var handleRouteChange = function handleRouteChange() {
    setRouterStatus(true);
  };

  next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on("routeChangeStart", handleRouteChange);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var type = router.query.type;
  type = type ? type : "none";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css",
    integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
    crossorigin: "anonymous",
    className: "jsx-575063660",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "//at.alicdn.com/t/font_1748919_10szvaedj0wj.css",
    className: "jsx-575063660",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "icon",
    href: "/logo.jpg",
    type: "image/x-icon",
    className: "jsx-575063660",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("title", {
    className: "jsx-575063660",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, " \u7EC4\u4EF6\u5E93 ")), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
    store: _component_component_redux_store__WEBPACK_IMPORTED_MODULE_8__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-575063660" + " " + "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("nav", {
    className: "jsx-575063660",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx(_component_public_nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "com-bg.jpg",
    alt: "bg",
    className: "jsx-575063660",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }))), __jsx(_component_component_root__WEBPACK_IMPORTED_MODULE_4__["default"], {
    contentType: type,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), __jsx(_component_component_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "#fdd303",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }), routerStatus && __jsx("div", {
    className: "jsx-575063660" + " " + "loadAnima",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, " "))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2111730568",
    __self: _this
  }, "*,body{margin:0;padding:0;box-sizing:border-box;}html{font-size:10px;}img{width:100%;height:auto;}.container-fluid{padding:0;}@media (max-width:760px){html{font-size:6px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxjb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0R5QixBQUlvQixBQUtNLEFBR0osQUFJRCxBQUlNLFNBZk4sQ0FZWixDQUpjLEdBUVosQ0FYRixJQUp3QixJQVF4QixrQkFQQSIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxwYWdlc1xcY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50L3B1YmxpYy9uYXZcIjtcclxuaW1wb3J0IFJvb3QgZnJvbSBcIi4uL2NvbXBvbmVudC9jb21wb25lbnQvcm9vdFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnQvY29tcG9uZW50L2Zvb3RlclwiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4uL2NvbXBvbmVudC9jb21wb25lbnQvcmVkdXgvc3RvcmVcIjtcclxuY29uc3QgQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtyb3V0ZXJTdGF0dXMsIHNldFJvdXRlclN0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIOi3r+eUseWPmOWMluS6i+S7tlxyXG4gIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgc2V0Um91dGVyU3RhdHVzKHRydWUpO1xyXG4gIH07XHJcbiAgUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG4gIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBsZXQgeyB0eXBlIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgdHlwZSA9IHR5cGUgPyB0eXBlIDogXCJub25lXCI7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA0LjQuMS9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtVmtvbzh4NENHc08zK0hoeHY4VC9RNVBhWHRrS3R1NnVnNVRPZU5WNmdCaUZlV1BHRk45TXVoT2YyM1E5SWZqaFwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgPjwvbGluaz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xNzQ4OTE5XzEwc3p2YWVkajB3ai5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvbG9nby5qcGdcIiB0eXBlPVwiaW1hZ2UveC1pY29uXCI+PC9saW5rPlxyXG4gICAgICAgIDx0aXRsZT4g57uE5Lu25bqTIDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtTdG9yZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDxOYXY+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJjb20tYmcuanBnXCIgYWx0PVwiYmdcIiAvPlxyXG4gICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICAgIDxSb290IGNvbnRlbnRUeXBlPXt0eXBlfSAvPlxyXG5cclxuICAgICAgICAgIDxGb290ZXIgY29sb3I9XCIjZmRkMzAzXCIgLz5cclxuXHJcbiAgICAgICAgICB7cm91dGVyU3RhdHVzICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkQW5pbWFcIj4gey8qICDot6/nlLHlj5jljJbml7Yg5o+Q56S65Yqo55S7ICovfTwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAqLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XHJcbiAgICAgICAgICBodG1sIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9hZEFuaW1hIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IExvYWRpbmcgMnMgMTA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAa2V5ZnJhbWVzIExvYWRpbmcge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\pages\\\\component.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2332455341",
    __self: _this
  }, "img.jsx-575063660{width:100%;height:auto;}.loadAnima.jsx-575063660{position:fixed;left:0;top:0;right:0;bottom:0;background:black;-webkit-animation:Loading-jsx-575063660 2s 10;animation:Loading-jsx-575063660 2s 10;z-index:9999;}@-webkit-keyframes Loading-jsx-575063660{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}@keyframes Loading-jsx-575063660{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxjb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEVTLEFBR3dCLEFBSUksQUFXSCxBQUdBLEFBR0EsVUFMWixBQUdBLEFBR0EsQ0FyQlksSUFJTCxPQUNELENBSlIsS0FLVSxRQUNDLFNBQ1EsaUJBQ08sb0ZBQ1gsYUFDZiIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxwYWdlc1xcY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50L3B1YmxpYy9uYXZcIjtcclxuaW1wb3J0IFJvb3QgZnJvbSBcIi4uL2NvbXBvbmVudC9jb21wb25lbnQvcm9vdFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnQvY29tcG9uZW50L2Zvb3RlclwiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4uL2NvbXBvbmVudC9jb21wb25lbnQvcmVkdXgvc3RvcmVcIjtcclxuY29uc3QgQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtyb3V0ZXJTdGF0dXMsIHNldFJvdXRlclN0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIOi3r+eUseWPmOWMluS6i+S7tlxyXG4gIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgc2V0Um91dGVyU3RhdHVzKHRydWUpO1xyXG4gIH07XHJcbiAgUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG4gIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBsZXQgeyB0eXBlIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgdHlwZSA9IHR5cGUgPyB0eXBlIDogXCJub25lXCI7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA0LjQuMS9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtVmtvbzh4NENHc08zK0hoeHY4VC9RNVBhWHRrS3R1NnVnNVRPZU5WNmdCaUZlV1BHRk45TXVoT2YyM1E5SWZqaFwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgPjwvbGluaz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xNzQ4OTE5XzEwc3p2YWVkajB3ai5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvbG9nby5qcGdcIiB0eXBlPVwiaW1hZ2UveC1pY29uXCI+PC9saW5rPlxyXG4gICAgICAgIDx0aXRsZT4g57uE5Lu25bqTIDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtTdG9yZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDxOYXY+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJjb20tYmcuanBnXCIgYWx0PVwiYmdcIiAvPlxyXG4gICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICAgIDxSb290IGNvbnRlbnRUeXBlPXt0eXBlfSAvPlxyXG5cclxuICAgICAgICAgIDxGb290ZXIgY29sb3I9XCIjZmRkMzAzXCIgLz5cclxuXHJcbiAgICAgICAgICB7cm91dGVyU3RhdHVzICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkQW5pbWFcIj4gey8qICDot6/nlLHlj5jljJbml7Yg5o+Q56S65Yqo55S7ICovfTwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAqLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XHJcbiAgICAgICAgICBodG1sIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9hZEFuaW1hIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IExvYWRpbmcgMnMgMTA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAa2V5ZnJhbWVzIExvYWRpbmcge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\pages\\\\component.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ })

})
//# sourceMappingURL=component.js.2412509b431e48280888.hot-update.js.map