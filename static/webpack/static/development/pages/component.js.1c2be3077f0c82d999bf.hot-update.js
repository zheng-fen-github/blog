webpackHotUpdate("static\\development\\pages\\component.js",{

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
    className: "jsx-1388991925" + " " + "nav row mx-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1388991925" + " " + "col-12 px-0 img-ctn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, props.children), __jsx("div", {
    className: "jsx-1388991925" + " " + "content col-12 mx-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1388991925" + " " + "min-nav row align-items-center justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1388991925" + " " + "col-12 col-sm-10 col-lg-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "jsx-1388991925" + " " + "d-flex row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-1388991925" + " " + ((path == "/" ? "liSeled" : null) || ""),
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
    className: "jsx-1388991925",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 19
    }
  }, "Home"))), __jsx("li", {
    className: "jsx-1388991925" + " " + ((path == "/photo" ? "liSeled" : null) || ""),
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
    className: "jsx-1388991925",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 19
    }
  }, "Photo"))), __jsx("li", {
    className: "jsx-1388991925" + " " + ((path == "/article-list" ? "liSeled" : null) || ""),
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
    className: "jsx-1388991925",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 19
    }
  }, "Article"))), __jsx("li", {
    className: "jsx-1388991925" + " " + ((path == "/component" ? "liSeled" : null) || ""),
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
    className: "jsx-1388991925",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, "Component")))))), props.title), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1388991925",
    __self: _this
  }, ".nav.jsx-1388991925{position:relative;}.img-ctn.jsx-1388991925{z-index:999;}.content.jsx-1388991925{position:absolute;left:0;right:0;top:0;bottom:0;z-index:1000;}.min-nav.jsx-1388991925{width:100%;min-height:14%;border-bottom:solid rgba(255,255,255,0.5) 1px;}ul.jsx-1388991925{width:100%;list-style:none;margin:0;}li.jsx-1388991925{-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;color:white;padding:1rem;margin:1rem;border-radius:6px;-webkit-transition:0.4s;transition:0.4s;cursor:pointer;}li.jsx-1388991925:hover,.liSeled.jsx-1388991925{background:rgba(255,255,255,0.3);}@media (max-width:960px){.min-nav.jsx-1388991925>div.jsx-1388991925{margin:2rem;}}@media (max-width:360px){li.jsx-1388991925{margin:0.4rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxccHVibGljXFxuYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNTLEFBRytCLEFBR04sQUFHTSxBQVFQLEFBS0EsQUFLSixBQVk2QixBQUl0QixBQUtFLFdBOUJELEFBS0MsQ0FoQmxCLEFBcUNFLEVBS0EsSUE3Q0YsQUFNUyxPQUNDLENBUXlDLENBS3hDLE1BWkgsQUFnQlksQUFZcEIsR0FmQSxHQVpXLFNBQ0ksR0FlRCxVQWRkLEVBZWUsU0FWZixJQVdjLFlBQ00sa0JBQ0Ysd0NBQ0QsZUFDakIiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxwdWJsaWNcXG5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBOYXYgPSAocHJvcHMpID0+IHtcclxuICBsZXQgcm91dGVyID0gdXNlUm91dGVyKCkuYXNQYXRoO1xyXG4gIGNvbnN0IFtwYXRoXSA9IHVzZVN0YXRlKHJvdXRlcik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdiByb3cgbXgtMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBweC0wIGltZy1jdG5cIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgY29sLTEyIG14LTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1uYXYgcm93IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTAgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtZmxleCByb3dcIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoID09IFwiL1wiID8gXCJsaVNlbGVkXCIgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz5Ib21lPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGggPT0gXCIvcGhvdG9cIiA/IFwibGlTZWxlZFwiIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bob3RvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz5QaG90bzwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aCA9PSBcIi9hcnRpY2xlLWxpc3RcIiA/IFwibGlTZWxlZFwiIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FydGljbGUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+QXJ0aWNsZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoID09IFwiL2NvbXBvbmVudFwiID8gXCJsaVNlbGVkXCIgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcG9uZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz5Db21wb25lbnQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7cHJvcHMudGl0bGV9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubmF2IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmltZy1jdG4ge1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1pbi1uYXYge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTQlO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsaTpob3ZlcixcclxuICAgICAgICAgIC5saVNlbGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgICAgIC5taW4tbmF2ID4gZGl2IHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwLjRyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\public\\\\nav.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=component.js.1c2be3077f0c82d999bf.hot-update.js.map