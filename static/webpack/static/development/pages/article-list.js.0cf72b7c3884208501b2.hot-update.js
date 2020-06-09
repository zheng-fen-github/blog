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
    className: "jsx-2182261789",
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
    className: "jsx-2182261789",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "//at.alicdn.com/t/font_1748919_piihixc593j.css",
    className: "jsx-2182261789",
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
    className: "jsx-2182261789",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-2182261789" + " " + "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("nav", {
    className: "jsx-2182261789" + " " + "row mx-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2182261789" + " " + "col-12 px-0",
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
    className: "jsx-2182261789",
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
    className: "jsx-2182261789" + " " + "loadAnima",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, " ")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2182261789",
    __self: _this
  }, "*,body{margin:0;padding:0;box-sizing:border-box;}img{width:100%;height:auto;}html{font-size:10px;}.container-fluid{padding:0;overflow-x:hidden;}@media (max-width:600px){html{font-size:6px;}}@media (max-width:400px){html{font-size:5px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxhcnRpY2xlLWxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEV5QixBQUlvQixBQUtFLEFBSUksQUFHTCxBQUtNLEFBS0EsU0FyQk4sQ0FZUSxDQVBOLEdBWVosQUFLQSxDQWJGLElBUndCLElBS3hCLEtBT0EsYUFYQSIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxwYWdlc1xcYXJ0aWNsZS1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50L3B1YmxpYy9uYXZcIjtcclxuaW1wb3J0IE1pbk5hdiBmcm9tIFwiLi4vY29tcG9uZW50L2FydGljbGVMaXN0L21pbk5hdlwiO1xyXG5pbXBvcnQgQ29udGVudExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudC9hcnRpY2xlTGlzdC9jb250ZW50TGlzdFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnQvYXJ0aWNsZUxpc3QvZm9vdGVyXCI7XHJcblxyXG5jb25zdCBBcnRpY2xlTGlzdCA9ICh7IGRhdGEsIGxpc3QsIGNvdW50IH0pID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiLzUwMFwiKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFtyb3V0ZXJTdGF0dXMsIHNldFJvdXRlclN0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICBzZXRSb3V0ZXJTdGF0dXModHJ1ZSk7XHJcbiAgfTtcclxuICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcblxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoZGF0YSk7XHJcbiAgY29uc3QgW2luaXRTdGF0ZSwgc2V0SW5pdFN0YXRlXSA9IHVzZVN0YXRlKHsgZGF0YSwgY291bnQgfSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKGNvdW50KTtcclxuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5BcnRpY2xlPC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANC40LjEvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LVZrb284eDRDR3NPMytIaHh2OFQvUTVQYVh0a0t0dTZ1ZzVUT2VOVjZnQmlGZVdQR0ZOOU11aE9mMjNROUlmamhcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTc0ODkxOV9waWloaXhjNTkzai5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvbG9nby5qcGdcIiB0eXBlPVwiaW1hZ2UveC1pY29uXCI+PC9saW5rPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJyb3cgbXgtMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcHgtMFwiPlxyXG4gICAgICAgICAgICA8TmF2PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXJ0aWNsZS1saXN0LWJnLmpwZ1wiIGFsdD1cImJnXCIgLz5cclxuICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgPE1pbk5hdlxyXG4gICAgICAgICAgc2V0U3RhdGU9e3NldFN0YXRlfVxyXG4gICAgICAgICAgc2V0VHlwZT17c2V0VHlwZX1cclxuICAgICAgICAgIHNldFBhZ2U9e3NldFBhZ2V9XHJcbiAgICAgICAgICBzZXRMb2FkPXtzZXRMb2FkaW5nfVxyXG4gICAgICAgICAgbGlzdD17bGlzdH1cclxuICAgICAgICAgIG9sZFN0YXRlPXtpbml0U3RhdGV9XHJcbiAgICAgICAgICBzZXRQYWdlPXtzZXRQYWdlfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxDb250ZW50TGlzdFxyXG4gICAgICAgICAgc3RhdGU9e3N0YXRlfVxyXG4gICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgIHNldFN0YXRlPXtzZXRTdGF0ZX1cclxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICBjb3VudD17cGFnZX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAge3JvdXRlclN0YXR1cyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRBbmltYVwiPiB7LyogIOi3r+eUseWPmOWMluaXtiDmj5DnpLrliqjnlLsgKi99PC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICosXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBodG1sIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgICAgICBodG1sIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBSVVJMID0gcHJvY2Vzcy5lbnYuREFUQV9VUkwgKyBcImFkZEFydGljbGUvZ290QXJ0aWNsZUxpc3QvMVwiO1xyXG4gIGxldCByZXMgPSBhd2FpdCBmZXRjaChSVVJMKTtcclxuICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSByZXR1cm4geyBwcm9wczogeyBkYXRhOiBudWxsIH0gfTtcclxuICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgbGlzdDogcmVzdWx0Lmxpc3QsXHJcbiAgICAgIGNvdW50OiByZXN1bHQuY291bnQsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVMaXN0O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\pages\\\\article-list.js */"));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (ArticleList);

/***/ })

})
//# sourceMappingURL=article-list.js.0cf72b7c3884208501b2.hot-update.js.map