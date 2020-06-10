webpackHotUpdate("static\\development\\pages\\article.js",{

/***/ "./pages/article.js":
/*!**************************!*\
  !*** ./pages/article.js ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_public_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/public/nav */ "./component/public/nav.js");
/* harmony import */ var _component_article_author__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/article/author */ "./component/article/author.js");
/* harmony import */ var _component_article_articleContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/article/articleContent */ "./component/article/articleContent.js");
/* harmony import */ var _component_article_about__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/article/about */ "./component/article/about.js");
/* harmony import */ var _component_article_comment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/article/comment */ "./component/article/comment.js");
/* harmony import */ var _component_home_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/home/footer */ "./component/home/footer.js");


var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\pages\\article.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var Home = function Home(_ref) {
  var data = _ref.data;

  var fontsizeEvent = function fontsizeEvent() {
    var style = document.documentElement.style;

    if (window.innerWidth < 960) {
      style.fontSize = "6px";
    } else {
      style.fontSize = "10px";
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!data) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace("/404");
    }

    fontsizeEvent();
    window.addEventListener("resize", function () {
      fontsizeEvent();
    });
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(data),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      routerStatus = _useState2[0],
      setRouterStatus = _useState2[1]; // 路由变化事件


  var handleRouteChange = function handleRouteChange(url) {
    setRouterStatus(true);
  };

  next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on("routeChangeStart", handleRouteChange);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css",
    integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
    crossorigin: "anonymous",
    className: "jsx-2130292718",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "//at.alicdn.com/t/font_1748919_piihixc593j.css",
    className: "jsx-2130292718",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "icon",
    href: "/logo.jpg",
    type: "image/x-icon",
    className: "jsx-2130292718",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx("title", {
    className: "jsx-2130292718",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, " \u6587\u7AE0 ")), __jsx("div", {
    className: "jsx-2130292718" + " " + "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("nav", {
    className: "jsx-2130292718",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(_component_public_nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "article-bg.jpg",
    alt: "bg",
    className: "jsx-2130292718",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }))), state && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_component_article_author__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  })), __jsx(_component_article_articleContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    content: data.ArticleContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }), __jsx(_component_article_about__WEBPACK_IMPORTED_MODULE_8__["default"], {
    linkList: data.ArticleAboutLink,
    message: data.ArticleAboutIntroduction,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }), __jsx(_component_article_comment__WEBPACK_IMPORTED_MODULE_9__["default"], {
    message: data.comment,
    id: data._id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }), __jsx(_component_home_footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  })), routerStatus && __jsx("div", {
    className: "jsx-2130292718" + " " + "loadAnima",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, " ")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3199083545",
    __self: _this
  }, ".loadAnima.jsx-2130292718{position:fixed;left:0;top:0;right:0;bottom:0;background:black;-webkit-animation:Loading-jsx-2130292718 2s 10;animation:Loading-jsx-2130292718 2s 10;z-index:9999;}img.jsx-2130292718{width:100%;height:auto;}.photo.jsx-2130292718 img.jsx-2130292718{width:auto;max-width:100%;}@-webkit-keyframes Loading-jsx-2130292718{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}@keyframes Loading-jsx-2130292718{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxhcnRpY2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGUyxBQUc0QixBQVVKLEFBSUEsQUFLQyxBQUdBLEFBR0EsVUFMWixBQUdBLEFBR0EsQ0FmWSxBQUlHLElBZFIsT0FDRCxDQVVSLEdBSUEsRUFiVSxRQUNDLFNBQ1EsaUJBQ08sc0ZBQ1gsYUFDZiIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxwYWdlc1xcYXJ0aWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnQvcHVibGljL25hdlwiO1xyXG5pbXBvcnQgQXV0aG9yIGZyb20gXCIuLi9jb21wb25lbnQvYXJ0aWNsZS9hdXRob3JcIjtcclxuaW1wb3J0IEFydENvbnRlbnQgZnJvbSBcIi4uL2NvbXBvbmVudC9hcnRpY2xlL2FydGljbGVDb250ZW50XCI7XHJcbmltcG9ydCBBYm91dCBmcm9tIFwiLi4vY29tcG9uZW50L2FydGljbGUvYWJvdXRcIjtcclxuaW1wb3J0IENvbW1lbnQgZnJvbSBcIi4uL2NvbXBvbmVudC9hcnRpY2xlL2NvbW1lbnRcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50L2hvbWUvZm9vdGVyXCI7XHJcblxyXG5jb25zdCBIb21lID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgZm9udHNpemVFdmVudCA9ICgpID0+IHtcclxuICAgIGxldCBzdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDk2MCkge1xyXG4gICAgICBzdHlsZS5mb250U2l6ZSA9IFwiNnB4XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdHlsZS5mb250U2l6ZSA9IFwiMTBweFwiO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICBSb3V0ZXIucmVwbGFjZShcIi80MDRcIik7XHJcbiAgICB9XHJcbiAgICBmb250c2l6ZUV2ZW50KCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcbiAgICAgIGZvbnRzaXplRXZlbnQoKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGRhdGEpO1xyXG5cclxuICBjb25zdCBbcm91dGVyU3RhdHVzLCBzZXRSb3V0ZXJTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyDot6/nlLHlj5jljJbkuovku7ZcclxuICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmwpID0+IHtcclxuICAgIHNldFJvdXRlclN0YXR1cyh0cnVlKTtcclxuICB9O1xyXG4gIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDQuNC4xL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1Wa29vOHg0Q0dzTzMrSGh4djhUL1E1UGFYdGtLdHU2dWc1VE9lTlY2Z0JpRmVXUEdGTjlNdWhPZjIzUTlJZmpoXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzE3NDg5MTlfcGlpaGl4YzU5M2ouY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2xvZ28uanBnXCIgdHlwZT1cImltYWdlL3gtaWNvblwiPjwvbGluaz5cclxuICAgICAgICA8dGl0bGU+IOaWh+eroCA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDxOYXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiYXJ0aWNsZS1iZy5qcGdcIiBhbHQ9XCJiZ1wiIC8+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICB7c3RhdGUgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEF1dGhvciB7Li4uZGF0YX0gLz5cclxuXHJcbiAgICAgICAgICAgIDxBcnRDb250ZW50IGNvbnRlbnQ9e2RhdGEuQXJ0aWNsZUNvbnRlbnR9IC8+XHJcblxyXG4gICAgICAgICAgICA8QWJvdXRcclxuICAgICAgICAgICAgICBsaW5rTGlzdD17ZGF0YS5BcnRpY2xlQWJvdXRMaW5rfVxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U9e2RhdGEuQXJ0aWNsZUFib3V0SW50cm9kdWN0aW9ufVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPENvbW1lbnQgbWVzc2FnZT17ZGF0YS5jb21tZW50fSBpZD17ZGF0YS5faWR9IC8+XHJcblxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtyb3V0ZXJTdGF0dXMgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkQW5pbWFcIj4gey8qICDot6/nlLHlj5jljJbml7Yg5o+Q56S65Yqo55S7ICovfTwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubG9hZEFuaW1hIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IExvYWRpbmcgMnMgMTA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBob3RvIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAa2V5ZnJhbWVzIExvYWRpbmcge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgKixcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICBodG1sIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgUlVSTCA9XHJcbiAgICBwcm9jZXNzLmVudi5EQVRBX1VSTCArIFwiYWRkQXJ0aWNsZS9nb3RBcnRpY2xlL1wiICsgY29udGV4dC5xdWVyeS5pZDtcclxuICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goUlVSTCk7XHJcbiAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YTogbnVsbCB9IH07XHJcbiAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGE6IHJlc3VsdCxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\pages\\\\article.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "680210942",
    __self: _this
  }, "*,body{margin:0;padding:0;box-sizing:border-box;}html{font-size:10px;}.container-fluid{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxhcnRpY2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdIeUIsQUFJb0IsQUFLTSxBQUdMLFNBUEEsQ0FRWixLQUhBLElBSndCLHNCQUN4QiIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxwYWdlc1xcYXJ0aWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnQvcHVibGljL25hdlwiO1xyXG5pbXBvcnQgQXV0aG9yIGZyb20gXCIuLi9jb21wb25lbnQvYXJ0aWNsZS9hdXRob3JcIjtcclxuaW1wb3J0IEFydENvbnRlbnQgZnJvbSBcIi4uL2NvbXBvbmVudC9hcnRpY2xlL2FydGljbGVDb250ZW50XCI7XHJcbmltcG9ydCBBYm91dCBmcm9tIFwiLi4vY29tcG9uZW50L2FydGljbGUvYWJvdXRcIjtcclxuaW1wb3J0IENvbW1lbnQgZnJvbSBcIi4uL2NvbXBvbmVudC9hcnRpY2xlL2NvbW1lbnRcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50L2hvbWUvZm9vdGVyXCI7XHJcblxyXG5jb25zdCBIb21lID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgZm9udHNpemVFdmVudCA9ICgpID0+IHtcclxuICAgIGxldCBzdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDk2MCkge1xyXG4gICAgICBzdHlsZS5mb250U2l6ZSA9IFwiNnB4XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdHlsZS5mb250U2l6ZSA9IFwiMTBweFwiO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICBSb3V0ZXIucmVwbGFjZShcIi80MDRcIik7XHJcbiAgICB9XHJcbiAgICBmb250c2l6ZUV2ZW50KCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcbiAgICAgIGZvbnRzaXplRXZlbnQoKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGRhdGEpO1xyXG5cclxuICBjb25zdCBbcm91dGVyU3RhdHVzLCBzZXRSb3V0ZXJTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyDot6/nlLHlj5jljJbkuovku7ZcclxuICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmwpID0+IHtcclxuICAgIHNldFJvdXRlclN0YXR1cyh0cnVlKTtcclxuICB9O1xyXG4gIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDQuNC4xL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1Wa29vOHg0Q0dzTzMrSGh4djhUL1E1UGFYdGtLdHU2dWc1VE9lTlY2Z0JpRmVXUEdGTjlNdWhPZjIzUTlJZmpoXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzE3NDg5MTlfcGlpaGl4YzU5M2ouY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2xvZ28uanBnXCIgdHlwZT1cImltYWdlL3gtaWNvblwiPjwvbGluaz5cclxuICAgICAgICA8dGl0bGU+IOaWh+eroCA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDxOYXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiYXJ0aWNsZS1iZy5qcGdcIiBhbHQ9XCJiZ1wiIC8+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICB7c3RhdGUgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEF1dGhvciB7Li4uZGF0YX0gLz5cclxuXHJcbiAgICAgICAgICAgIDxBcnRDb250ZW50IGNvbnRlbnQ9e2RhdGEuQXJ0aWNsZUNvbnRlbnR9IC8+XHJcblxyXG4gICAgICAgICAgICA8QWJvdXRcclxuICAgICAgICAgICAgICBsaW5rTGlzdD17ZGF0YS5BcnRpY2xlQWJvdXRMaW5rfVxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U9e2RhdGEuQXJ0aWNsZUFib3V0SW50cm9kdWN0aW9ufVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPENvbW1lbnQgbWVzc2FnZT17ZGF0YS5jb21tZW50fSBpZD17ZGF0YS5faWR9IC8+XHJcblxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtyb3V0ZXJTdGF0dXMgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkQW5pbWFcIj4gey8qICDot6/nlLHlj5jljJbml7Yg5o+Q56S65Yqo55S7ICovfTwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubG9hZEFuaW1hIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IExvYWRpbmcgMnMgMTA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBob3RvIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAa2V5ZnJhbWVzIExvYWRpbmcge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgKixcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICBodG1sIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgUlVSTCA9XHJcbiAgICBwcm9jZXNzLmVudi5EQVRBX1VSTCArIFwiYWRkQXJ0aWNsZS9nb3RBcnRpY2xlL1wiICsgY29udGV4dC5xdWVyeS5pZDtcclxuICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goUlVSTCk7XHJcbiAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YTogbnVsbCB9IH07XHJcbiAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGE6IHJlc3VsdCxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\pages\\\\article.js */"));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=article.js.722a686eb66126e4f38b.hot-update.js.map