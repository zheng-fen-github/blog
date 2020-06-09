webpackHotUpdate("static\\development\\pages\\article-list.js",{

/***/ "./pages/article-list.js":
/*!*******************************!*\
  !*** ./pages/article-list.js ***!
  \*******************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_public_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/public/nav */ "./component/public/nav.js");
/* harmony import */ var _component_articleList_minNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/articleList/minNav */ "./component/articleList/minNav.js");
/* harmony import */ var _component_articleList_contentList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/articleList/contentList */ "./component/articleList/contentList.js");
/* harmony import */ var _component_articleList_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/articleList/footer */ "./component/articleList/footer.js");


var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\pages\\article-list.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var ArticleList = function ArticleList(_ref) {
  var _jsx;

  var data = _ref.data,
      list = _ref.list,
      count = _ref.count;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!data) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/500");
    }
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      routerStatus = _useState[0],
      setRouterStatus = _useState[1];

  var handleRouteChange = function handleRouteChange() {
    setRouterStatus(true);
  };

  next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on("routeChangeStart", handleRouteChange);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(data),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    data: data,
    count: count
  }),
      initState = _useState3[0],
      setInitState = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(count),
      page = _useState5[0],
      setPage = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      type = _useState6[0],
      setType = _useState6[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-2281042110",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Article"), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css",
    integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
    crossorigin: "anonymous",
    className: "jsx-2281042110",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "//at.alicdn.com/t/font_1748919_piihixc593j.css",
    className: "jsx-2281042110",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "icon",
    href: "/logo.jpg",
    type: "image/x-icon",
    className: "jsx-2281042110",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-2281042110" + " " + "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("nav", {
    className: "jsx-2281042110" + " " + "row mx-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2281042110" + " " + "col-12 px-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(_component_public_nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "article-list-bg.jpg",
    alt: "bg",
    className: "jsx-2281042110",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  })))), __jsx(_component_articleList_minNav__WEBPACK_IMPORTED_MODULE_6__["default"], (_jsx = {
    setState: setState,
    setType: setType,
    setPage: setPage,
    setLoad: setLoading,
    list: list,
    oldState: initState
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "setPage", setPage), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 9
  }), _jsx)), __jsx(_component_articleList_contentList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    state: state,
    type: type,
    setState: setState,
    loading: loading,
    count: page,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }), __jsx(_component_articleList_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }), routerStatus && __jsx("div", {
    className: "jsx-2281042110" + " " + "loadAnima",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, " ")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2281042110",
    __self: _this
  }, "*,body{margin:0;padding:0;box-sizing:border-box;}img{width:100%;height:auto;z-index:999;}html{font-size:10px;}.container-fluid{padding:0;overflow-x:hidden;}@media (max-width:600px){html{font-size:6px;}}@media (max-width:400px){html{font-size:5px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxhcnRpY2xlLWxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEV5QixBQUlvQixBQUtFLEFBS0ksQUFHTCxBQUtNLEFBS0EsU0F0Qk4sQ0FhUSxDQVJOLEdBYVosQUFLQSxDQWJGLElBVHdCLElBS1YsS0FRZCxPQVBBLE1BTEEiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxccGFnZXNcXGFydGljbGUtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudC9wdWJsaWMvbmF2XCI7XHJcbmltcG9ydCBNaW5OYXYgZnJvbSBcIi4uL2NvbXBvbmVudC9hcnRpY2xlTGlzdC9taW5OYXZcIjtcclxuaW1wb3J0IENvbnRlbnRMaXN0IGZyb20gXCIuLi9jb21wb25lbnQvYXJ0aWNsZUxpc3QvY29udGVudExpc3RcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50L2FydGljbGVMaXN0L2Zvb3RlclwiO1xyXG5cclxuY29uc3QgQXJ0aWNsZUxpc3QgPSAoeyBkYXRhLCBsaXN0LCBjb3VudCB9KSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi81MDBcIik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBbcm91dGVyU3RhdHVzLCBzZXRSb3V0ZXJTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgc2V0Um91dGVyU3RhdHVzKHRydWUpO1xyXG4gIH07XHJcbiAgUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG5cclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGRhdGEpO1xyXG4gIGNvbnN0IFtpbml0U3RhdGUsIHNldEluaXRTdGF0ZV0gPSB1c2VTdGF0ZSh7IGRhdGEsIGNvdW50IH0pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZShjb3VudCk7XHJcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QXJ0aWNsZTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDQuNC4xL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1Wa29vOHg0Q0dzTzMrSGh4djhUL1E1UGFYdGtLdHU2dWc1VE9lTlY2Z0JpRmVXUEdGTjlNdWhPZjIzUTlJZmpoXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzE3NDg5MTlfcGlpaGl4YzU5M2ouY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2xvZ28uanBnXCIgdHlwZT1cImltYWdlL3gtaWNvblwiPjwvbGluaz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwicm93IG14LTBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHB4LTBcIj5cclxuICAgICAgICAgICAgPE5hdj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImFydGljbGUtbGlzdC1iZy5qcGdcIiBhbHQ9XCJiZ1wiIC8+XHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgIDxNaW5OYXZcclxuICAgICAgICAgIHNldFN0YXRlPXtzZXRTdGF0ZX1cclxuICAgICAgICAgIHNldFR5cGU9e3NldFR5cGV9XHJcbiAgICAgICAgICBzZXRQYWdlPXtzZXRQYWdlfVxyXG4gICAgICAgICAgc2V0TG9hZD17c2V0TG9hZGluZ31cclxuICAgICAgICAgIGxpc3Q9e2xpc3R9XHJcbiAgICAgICAgICBvbGRTdGF0ZT17aW5pdFN0YXRlfVxyXG4gICAgICAgICAgc2V0UGFnZT17c2V0UGFnZX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Q29udGVudExpc3RcclxuICAgICAgICAgIHN0YXRlPXtzdGF0ZX1cclxuICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICBzZXRTdGF0ZT17c2V0U3RhdGV9XHJcbiAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgY291bnQ9e3BhZ2V9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIHtyb3V0ZXJTdGF0dXMgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkQW5pbWFcIj4gey8qICDot6/nlLHlj5jljJbml7Yg5o+Q56S65Yqo55S7ICovfTwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAqLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICBodG1sIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgUlVSTCA9IHByb2Nlc3MuZW52LkRBVEFfVVJMICsgXCJhZGRBcnRpY2xlL2dvdEFydGljbGVMaXN0LzFcIjtcclxuICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goUlVSTCk7XHJcbiAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YTogbnVsbCB9IH07XHJcbiAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgIGxpc3Q6IHJlc3VsdC5saXN0LFxyXG4gICAgICBjb3VudDogcmVzdWx0LmNvdW50LFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlTGlzdDtcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\pages\\\\article-list.js */"));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (ArticleList);

/***/ })

})
//# sourceMappingURL=article-list.js.454552379f84dc534405.hot-update.js.map