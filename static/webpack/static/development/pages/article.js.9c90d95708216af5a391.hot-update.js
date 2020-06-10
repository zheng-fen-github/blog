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
    className: "jsx-4169290636",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "//at.alicdn.com/t/font_1748919_piihixc593j.css",
    className: "jsx-4169290636",
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
    className: "jsx-4169290636",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx("title", {
    className: "jsx-4169290636",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, " \u6587\u7AE0 ")), __jsx("div", {
    className: "jsx-4169290636" + " " + "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("nav", {
    className: "jsx-4169290636",
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
    className: "jsx-4169290636",
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
    className: "jsx-4169290636" + " " + "loadAnima",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, " ")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1856094829",
    __self: _this
  }, ".loadAnima.jsx-4169290636{position:fixed;left:0;top:0;right:0;bottom:0;background:black;-webkit-animation:Loading-jsx-4169290636 2s 10;animation:Loading-jsx-4169290636 2s 10;z-index:9999;}img.jsx-4169290636{width:100%;height:auto;}@-webkit-keyframes Loading-jsx-4169290636{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}@keyframes Loading-jsx-4169290636{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxhcnRpY2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGUyxBQUc0QixBQVVKLEFBTUMsQUFHQSxBQUdBLFVBTFosQUFHQSxBQUdBLENBWlksSUFWTCxPQUNELENBVVIsS0FUVSxRQUNDLFNBQ1EsaUJBQ08sc0ZBQ1gsYUFDZiIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxwYWdlc1xcYXJ0aWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnQvcHVibGljL25hdlwiO1xyXG5pbXBvcnQgQXV0aG9yIGZyb20gXCIuLi9jb21wb25lbnQvYXJ0aWNsZS9hdXRob3JcIjtcclxuaW1wb3J0IEFydENvbnRlbnQgZnJvbSBcIi4uL2NvbXBvbmVudC9hcnRpY2xlL2FydGljbGVDb250ZW50XCI7XHJcbmltcG9ydCBBYm91dCBmcm9tIFwiLi4vY29tcG9uZW50L2FydGljbGUvYWJvdXRcIjtcclxuaW1wb3J0IENvbW1lbnQgZnJvbSBcIi4uL2NvbXBvbmVudC9hcnRpY2xlL2NvbW1lbnRcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50L2hvbWUvZm9vdGVyXCI7XHJcblxyXG5jb25zdCBIb21lID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgZm9udHNpemVFdmVudCA9ICgpID0+IHtcclxuICAgIGxldCBzdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDk2MCkge1xyXG4gICAgICBzdHlsZS5mb250U2l6ZSA9IFwiNnB4XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdHlsZS5mb250U2l6ZSA9IFwiMTBweFwiO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICBSb3V0ZXIucmVwbGFjZShcIi80MDRcIik7XHJcbiAgICB9XHJcbiAgICBmb250c2l6ZUV2ZW50KCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcbiAgICAgIGZvbnRzaXplRXZlbnQoKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGRhdGEpO1xyXG5cclxuICBjb25zdCBbcm91dGVyU3RhdHVzLCBzZXRSb3V0ZXJTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyDot6/nlLHlj5jljJbkuovku7ZcclxuICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmwpID0+IHtcclxuICAgIHNldFJvdXRlclN0YXR1cyh0cnVlKTtcclxuICB9O1xyXG4gIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDQuNC4xL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1Wa29vOHg0Q0dzTzMrSGh4djhUL1E1UGFYdGtLdHU2dWc1VE9lTlY2Z0JpRmVXUEdGTjlNdWhPZjIzUTlJZmpoXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzE3NDg5MTlfcGlpaGl4YzU5M2ouY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2xvZ28uanBnXCIgdHlwZT1cImltYWdlL3gtaWNvblwiPjwvbGluaz5cclxuICAgICAgICA8dGl0bGU+IOaWh+eroCA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDxOYXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiYXJ0aWNsZS1iZy5qcGdcIiBhbHQ9XCJiZ1wiIC8+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICB7c3RhdGUgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEF1dGhvciB7Li4uZGF0YX0gLz5cclxuXHJcbiAgICAgICAgICAgIDxBcnRDb250ZW50IGNvbnRlbnQ9e2RhdGEuQXJ0aWNsZUNvbnRlbnR9IC8+XHJcblxyXG4gICAgICAgICAgICA8QWJvdXRcclxuICAgICAgICAgICAgICBsaW5rTGlzdD17ZGF0YS5BcnRpY2xlQWJvdXRMaW5rfVxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U9e2RhdGEuQXJ0aWNsZUFib3V0SW50cm9kdWN0aW9ufVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPENvbW1lbnQgbWVzc2FnZT17ZGF0YS5jb21tZW50fSBpZD17ZGF0YS5faWR9IC8+XHJcblxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtyb3V0ZXJTdGF0dXMgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkQW5pbWFcIj4gey8qICDot6/nlLHlj5jljJbml7Yg5o+Q56S65Yqo55S7ICovfTwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubG9hZEFuaW1hIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IExvYWRpbmcgMnMgMTA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBrZXlmcmFtZXMgTG9hZGluZyB7XHJcbiAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAqLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5waG90byBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCBSVVJMID1cclxuICAgIHByb2Nlc3MuZW52LkRBVEFfVVJMICsgXCJhZGRBcnRpY2xlL2dvdEFydGljbGUvXCIgKyBjb250ZXh0LnF1ZXJ5LmlkO1xyXG4gIGxldCByZXMgPSBhd2FpdCBmZXRjaChSVVJMKTtcclxuICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSByZXR1cm4geyBwcm9wczogeyBkYXRhOiBudWxsIH0gfTtcclxuICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YTogcmVzdWx0LFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\pages\\\\article.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2726556104",
    __self: _this
  }, "*,body{margin:0;padding:0;box-sizing:border-box;}html{font-size:10px;}.container-fluid{padding:0;}.photo img{width:auto;max-width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxhcnRpY2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZHeUIsQUFJb0IsQUFLTSxBQUdMLEFBR0MsU0FWRCxDQVFaLENBR2lCLElBTmpCLElBSndCLE9BV3hCLGVBVkEiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxccGFnZXNcXGFydGljbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50L3B1YmxpYy9uYXZcIjtcclxuaW1wb3J0IEF1dGhvciBmcm9tIFwiLi4vY29tcG9uZW50L2FydGljbGUvYXV0aG9yXCI7XHJcbmltcG9ydCBBcnRDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnQvYXJ0aWNsZS9hcnRpY2xlQ29udGVudFwiO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4uL2NvbXBvbmVudC9hcnRpY2xlL2Fib3V0XCI7XHJcbmltcG9ydCBDb21tZW50IGZyb20gXCIuLi9jb21wb25lbnQvYXJ0aWNsZS9jb21tZW50XCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9ob21lL2Zvb3RlclwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IGZvbnRzaXplRXZlbnQgPSAoKSA9PiB7XHJcbiAgICBsZXQgc3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA5NjApIHtcclxuICAgICAgc3R5bGUuZm9udFNpemUgPSBcIjZweFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3R5bGUuZm9udFNpemUgPSBcIjEwcHhcIjtcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgUm91dGVyLnJlcGxhY2UoXCIvNDA0XCIpO1xyXG4gICAgfVxyXG4gICAgZm9udHNpemVFdmVudCgpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG4gICAgICBmb250c2l6ZUV2ZW50KCk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShkYXRhKTtcclxuXHJcbiAgY29uc3QgW3JvdXRlclN0YXR1cywgc2V0Um91dGVyU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8g6Lev55Sx5Y+Y5YyW5LqL5Lu2XHJcbiAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsKSA9PiB7XHJcbiAgICBzZXRSb3V0ZXJTdGF0dXModHJ1ZSk7XHJcbiAgfTtcclxuICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA0LjQuMS9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtVmtvbzh4NENHc08zK0hoeHY4VC9RNVBhWHRrS3R1NnVnNVRPZU5WNmdCaUZlV1BHRk45TXVoT2YyM1E5SWZqaFwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgPjwvbGluaz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xNzQ4OTE5X3BpaWhpeGM1OTNqLmNzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9sb2dvLmpwZ1wiIHR5cGU9XCJpbWFnZS94LWljb25cIj48L2xpbms+XHJcbiAgICAgICAgPHRpdGxlPiDmlofnq6AgPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICA8TmF2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImFydGljbGUtYmcuanBnXCIgYWx0PVwiYmdcIiAvPlxyXG4gICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAge3N0YXRlICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxBdXRob3Igey4uLmRhdGF9IC8+XHJcblxyXG4gICAgICAgICAgICA8QXJ0Q29udGVudCBjb250ZW50PXtkYXRhLkFydGljbGVDb250ZW50fSAvPlxyXG5cclxuICAgICAgICAgICAgPEFib3V0XHJcbiAgICAgICAgICAgICAgbGlua0xpc3Q9e2RhdGEuQXJ0aWNsZUFib3V0TGlua31cclxuICAgICAgICAgICAgICBtZXNzYWdlPXtkYXRhLkFydGljbGVBYm91dEludHJvZHVjdGlvbn1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxDb21tZW50IG1lc3NhZ2U9e2RhdGEuY29tbWVudH0gaWQ9e2RhdGEuX2lkfSAvPlxyXG5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7cm91dGVyU3RhdHVzICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZEFuaW1hXCI+IHsvKiAg6Lev55Sx5Y+Y5YyW5pe2IOaPkOekuuWKqOeUuyAqL308L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmxvYWRBbmltYSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBMb2FkaW5nIDJzIDEwO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAa2V5ZnJhbWVzIExvYWRpbmcge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgKixcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICBodG1sIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGhvdG8gaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgUlVSTCA9XHJcbiAgICBwcm9jZXNzLmVudi5EQVRBX1VSTCArIFwiYWRkQXJ0aWNsZS9nb3RBcnRpY2xlL1wiICsgY29udGV4dC5xdWVyeS5pZDtcclxuICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goUlVSTCk7XHJcbiAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YTogbnVsbCB9IH07XHJcbiAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGE6IHJlc3VsdCxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\pages\\\\article.js */"));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=article.js.9c90d95708216af5a391.hot-update.js.map