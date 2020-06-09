(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\release-article.js"],{

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

/***/ }),

/***/ "./component/release-article/about.js":
/*!********************************************!*\
  !*** ./component/release-article/about.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage */ "./component/release-article/localstorage.js");
var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\release-article\\about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var About = function About(_ref) {
  var List = _ref.List;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_localstorage__WEBPACK_IMPORTED_MODULE_1__["setLocalValue"])("textarea[name='about-article-text']", 'about-article-text');
  }, []);
  return __jsx("div", {
    className: "row about m-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-8  offset-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "my-4 col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "ABOUT ARTICLE"), __jsx("div", {
    className: "col-12 content-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("textarea", {
    name: "about-article-text",
    onChange: function onChange(e) {
      return Object(_localstorage__WEBPACK_IMPORTED_MODULE_1__["setLocalstorage"])('about-article-text', e.target.value);
    },
    className: "w-100 h3 p-4",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "col-12 content-item my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, List && List.map(function (e, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 37
      }
    }, __jsx("input", {
      type: "text",
      name: "a-link-".concat(index),
      placeholder: "Link",
      className: "px-4 py-2 col-6 h4",
      onChange: function onChange(e) {
        return Object(_localstorage__WEBPACK_IMPORTED_MODULE_1__["setLocalstorage"])('about-article-link', e.target.value);
      },
      required: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 41
      }
    }), __jsx("input", {
      type: "text",
      name: "a-link-title-".concat(index),
      placeholder: "Link Title",
      className: "px-4 py-2 ml-5 h4",
      onChange: function onChange(e) {
        return Object(_localstorage__WEBPACK_IMPORTED_MODULE_1__["setLocalstorage"])('about-article-linkTitle', e.target.value);
      },
      required: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 41
      }
    }));
  })), __jsx("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row justify-content-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, __jsx("button", {
    type: "submit shadow-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, "Commit"))))), __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "\n                .about {\n                    border-bottom:2px solid #eaeaea;\n                    padding:10rem 0;\n                }\n                h3 {\n                   font-size:2.5rem;\n                   line-height:2;\n               }\n               h4 {\n                   font-size:2rem;\n                   line-height:1.5;\n               }\n               textarea  {\n                   min-height:15vh;                  \n               }\n                button {\n                    border:none;\n                    background:black;\n                    color:white;\n                    padding:1rem 2rem;\n                    font-size:2rem;\n                    transition:.4s;\n                    font-weight:700;\n                }\n                button:hover {\n                    background:white;\n                    color:black;\n                }\n            "));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./component/release-article/articleContent.js":
/*!*****************************************************!*\
  !*** ./component/release-article/articleContent.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo */ "./component/release-article/photo.js");


var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\release-article\\articleContent.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var ArtContent = function ArtContent(_ref) {
  var setLinkList = _ref.setLinkList;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //初次加载文档 检测是否有内容事件
    var Value = localStorage.getItem('article-content-object');

    if (!Value) {
      var data = JSON.stringify([{
        key: 'content-id-1',
        type: 'text',
        value: ''
      }]);
      localStorage.setItem('article-content-object', data);
      return;
    }

    var dataList = JSON.parse(Value);
    setInitialTextareList(dataList);
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([{
    key: 'content-id-1',
    type: 'text',
    value: ''
  }]),
      initialTextareList = _useState[0],
      setInitialTextareList = _useState[1];

  var inputEv = function inputEv(e, index) {
    //设置文档内容事件        
    var dom = e.target; // 内容高度自动适应                    

    dom.style.height = dom.scrollHeight > dom.offsetHeight ? dom.scrollHeight + 10 + 'px' : dom.offsetHeight + 'px';
    var oldValue = localStorage.getItem('article-content-object');
    if (!oldValue) return;
    var mianData = JSON.parse(oldValue); // 根据输入的值 更新状态和localstorage！！

    mianData[index].value = e.target.value;
    localStorage.setItem('article-content-object', JSON.stringify(mianData));
    setInitialTextareList(mianData);
  };

  var deleteEv = function deleteEv(index) {
    //删除掉文章 段落事件
    var content = initialTextareList.filter(function (item) {
      return item.type === 'text';
    });
    if (content.length === 1) return;
    var newList = initialTextareList.filter(function (e, Cindex) {
      return Cindex !== index;
    });
    setInitialTextareList(newList);
    localStorage.setItem('article-content-object', JSON.stringify(newList));
  };

  return __jsx("div", {
    className: "jsx-2699354276" + " " + 'row Content  mx-0',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(AddG, {
    setList: setInitialTextareList,
    id: initialTextareList,
    setLinkList: setLinkList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2699354276" + " " + "col-8 offset-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, initialTextareList.map(function (e, index) {
    if (e.type === 'text') return __jsx("div", {
      key: e.key,
      className: "jsx-2699354276" + " " + "row content-item position-relative",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 33
      }
    }, __jsx("textarea", {
      name: "message",
      required: index === 0 ? true : false,
      value: e.value,
      onInput: function onInput(e) {
        return inputEv(e, index);
      },
      onChange: function onChange(e) {
        return inputEv(e, index);
      },
      className: "jsx-2699354276" + " " + 'w-100 px-4',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 37
      }
    }), __jsx("div", {
      onClick: function onClick() {
        return deleteEv(index);
      },
      className: "jsx-2699354276" + " " + "delete",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 37
      }
    }, __jsx("i", {
      className: "jsx-2699354276" + " " + 'iconfont icon-trash-',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 41
      }
    })));
    if (e.type === 'photo') return __jsx(_photo__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: e.key,
      state: initialTextareList,
      setState: setInitialTextareList,
      title: e.title,
      index: index,
      name: e.key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 34
      }
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2699354276",
    __self: _this
  }, ".Content.jsx-2699354276{margin-top:10rem;border-bottom:2px solid #eaeaea;}.content-item.jsx-2699354276{margin-bottom:5rem;}textarea.jsx-2699354276{font-size:2.5rem;line-height:2;min-height:40vh;}.delete.jsx-2699354276{position:absolute;right:-50px;top:50%;}.delete.jsx-2699354276 i.jsx-2699354276{background:none;color:black;}.delete.jsx-2699354276 i.jsx-2699354276:hover{background:black;color:white;}i.jsx-2699354276{color:white;font-size:2rem;padding:0.5rem;background:#3a5999;border-radius:50%;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxccmVsZWFzZS1hcnRpY2xlXFxhcnRpY2xlQ29udGVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRXlCLEFBSXFDLEFBS0MsQUFLRixBQUtDLEFBTUEsQUFJQSxBQUlOLFlBQ0csSUFSRCxDQXJCbUIsQUFVbkIsQUFlQSxDQVZGLENBVmYsUUF5QmtCLENBUmxCLENBSUEsQ0FWVyxDQUxRLE9BT25CLElBYXNCLEtBbkJ0QixFQVhBLFlBK0JxQixrQkFDSCxlQUNsQiIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxjb21wb25lbnRcXHJlbGVhc2UtYXJ0aWNsZVxcYXJ0aWNsZUNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyB1c2VTdGF0ZSAsIHVzZUVmZmVjdCAsIHVzZVJlZn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQaG90byBmcm9tICcuL3Bob3RvJ1xyXG5cclxuICBcclxuXHJcbmNvbnN0IEFydENvbnRlbnQgPSAoe3NldExpbmtMaXN0fSkgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgICAgICAgICAgICAgICAgICAgIC8v5Yid5qyh5Yqg6L295paH5qGjIOajgOa1i+aYr+WQpuacieWGheWuueS6i+S7tlxyXG4gICAgICAgIGxldCBWYWx1ZSA9ICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcnRpY2xlLWNvbnRlbnQtb2JqZWN0JykgOyAgICAgICAgIFxyXG4gICAgICAgIGlmKCFWYWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICAgICAgW3tcclxuICAgICAgICAgICAgICAgIGtleTonY29udGVudC1pZC0xJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6J3RleHQnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgOicnfSxdXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcnRpY2xlLWNvbnRlbnQtb2JqZWN0JyxkYXRhKSA7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRhdGFMaXN0ID0gSlNPTi5wYXJzZShWYWx1ZSkgICAgICAgXHJcbiAgICAgICAgc2V0SW5pdGlhbFRleHRhcmVMaXN0KGRhdGFMaXN0KTtcclxuICAgIH0sW10pXHJcbiAgICBjb25zdCBbaW5pdGlhbFRleHRhcmVMaXN0LCBzZXRJbml0aWFsVGV4dGFyZUxpc3RdID0gdXNlU3RhdGUoW3tcclxuICAgICAgICBrZXk6J2NvbnRlbnQtaWQtMScsXHJcbiAgICAgICAgdHlwZTondGV4dCcsXHJcbiAgICAgICAgdmFsdWUgOicnfSxdKTtcclxuICAgIFxyXG4gICAgY29uc3QgaW5wdXRFdiA9IChlLGluZGV4KSA9PiB7ICAgICAgICAvL+iuvue9ruaWh+aho+WGheWuueS6i+S7tiAgICAgICAgXHJcbiAgICAgICAgbGV0IGRvbSA9IGUudGFyZ2V0IDsgICAgICAgICAgICAgLy8g5YaF5a656auY5bqm6Ieq5Yqo6YCC5bqUICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBkb20uc3R5bGUuaGVpZ2h0ID0gZG9tLnNjcm9sbEhlaWdodCA+IGRvbS5vZmZzZXRIZWlnaHQgPyBkb20uc2Nyb2xsSGVpZ2h0KzEwKydweCc6IGRvbS5vZmZzZXRIZWlnaHQrJ3B4JztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgbGV0IG9sZFZhbHVlID0gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FydGljbGUtY29udGVudC1vYmplY3QnKSA7ICAgXHJcbiAgICAgICAgaWYoIW9sZFZhbHVlKSByZXR1cm5cclxuICAgICAgICBsZXQgbWlhbkRhdGEgPSBKU09OLnBhcnNlKG9sZFZhbHVlKSAgICAgICAgICAgICAgICAgIC8vIOagueaNrui+k+WFpeeahOWAvCDmm7TmlrDnirbmgIHlkoxsb2NhbHN0b3JhZ2XvvIHvvIFcclxuICAgICAgICBtaWFuRGF0YVtpbmRleF0udmFsdWUgPSBlLnRhcmdldC52YWx1ZTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcnRpY2xlLWNvbnRlbnQtb2JqZWN0JyxKU09OLnN0cmluZ2lmeShtaWFuRGF0YSkpIDtcclxuICAgICAgICBzZXRJbml0aWFsVGV4dGFyZUxpc3QobWlhbkRhdGEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBkZWxldGVFdiA9IChpbmRleCkgPT4geyAgIC8v5Yig6Zmk5o6J5paH56ugIOauteiQveS6i+S7tlxyXG4gICAgICAgICAgbGV0IGNvbnRlbnQgPSBpbml0aWFsVGV4dGFyZUxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS50eXBlID09PSAndGV4dCcpOyAgICAgICAgICBcclxuICAgICAgICAgIGlmKGNvbnRlbnQubGVuZ3RoID09PSAxKSByZXR1cm4gICAgICAgICBcclxuICAgICAgICAgIGxldCBuZXdMaXN0ID0gaW5pdGlhbFRleHRhcmVMaXN0LmZpbHRlciggKGUsQ2luZGV4KSA9PiBDaW5kZXggIT09IGluZGV4KVxyXG4gICAgICAgICAgc2V0SW5pdGlhbFRleHRhcmVMaXN0KG5ld0xpc3QpO1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FydGljbGUtY29udGVudC1vYmplY3QnLEpTT04uc3RyaW5naWZ5KG5ld0xpc3QpKSA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgQ29udGVudCAgbXgtMCc+XHJcbiAgICAgICAgICAgIDxBZGRHIHNldExpc3Q9e3NldEluaXRpYWxUZXh0YXJlTGlzdH0gaWQ9e2luaXRpYWxUZXh0YXJlTGlzdH0gc2V0TGlua0xpc3Q9e3NldExpbmtMaXN0fS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTggb2Zmc2V0LTJcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVGV4dGFyZUxpc3QubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZSxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS50eXBlID09PSAndGV4dCcpIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY29udGVudC1pdGVtIHBvc2l0aW9uLXJlbGF0aXZlXCIga2V5PXtlLmtleX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiByZXF1aXJlZD17aW5kZXggPT09IDAgPyB0cnVlIDogZmFsc2V9IHZhbHVlPXtlLnZhbHVlfSBjbGFzc05hbWU9J3ctMTAwIHB4LTQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXsoZSkgPT4gaW5wdXRFdihlLGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaW5wdXRFdihlLGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVsZXRlXCIgb25DbGljaz17KCkgPT4gZGVsZXRlRXYoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbi10cmFzaC0nPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS50eXBlID09PSAncGhvdG8nKSByZXR1cm4gKCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBob3RvIGtleT17ZS5rZXl9IHN0YXRlPXtpbml0aWFsVGV4dGFyZUxpc3R9IHNldFN0YXRlID0ge3NldEluaXRpYWxUZXh0YXJlTGlzdH0gdGl0bGU9e2UudGl0bGV9IGluZGV4PXtpbmRleH0gbmFtZT17ZS5rZXl9Lz4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+IHtgXHJcblxyXG4gICAgICAgICAgICAgICAuQ29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxMHJlbTsgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIC5jb250ZW50LWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1cmVtO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICBmb250LXNpemU6Mi41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MjsgIFxyXG4gICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDo0MHZoOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIC5kZWxldGUge1xyXG4gICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICByaWdodDotNTBweDtcclxuICAgICAgICAgICAgICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgLmRlbGV0ZSBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICBjb2xvcjpibGFjazsgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAuZGVsZXRlIGk6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6YmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlOyAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MnJlbTtcclxuICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojM2E1OTk5O1xyXG4gICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmNvbnN0IEFkZEcgPVJlYWN0Lm1lbW8oKHtzZXRMaXN0LHNldExpbmtMaXN0fSkgPT4geyAgICBcclxuICAgIFxyXG4gICAgY29uc3QgYWRkVGV4dCA9ICgpID0+IHtcclxuICAgICAgICAgbGV0IG9sZFZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FydGljbGUtY29udGVudC1vYmplY3QnKTsgICAgICAgICBcclxuICAgICAgICAgaWYoIW9sZFZhbHVlKSByZXR1cm5cclxuICAgICAgICAgXHJcbiAgICAgICAgIGxldCB2YWx1ZSA9IEpTT04ucGFyc2Uob2xkVmFsdWUpOyAgICAgICAgICAgIFxyXG4gICAgICAgICB2YWx1ZS5wdXNoKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTonY29udGVudC1pZC0nKyh2YWx1ZS5sZW5ndGgrMSksXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTondGV4dCcsICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA6Jyd9LFxyXG4gICAgICAgICApICAgICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcnRpY2xlLWNvbnRlbnQtb2JqZWN0JyxkYXRhKTsgIFxyXG4gICAgICAgIHNldExpc3QodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYWRkUGhvdG8gPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG9sZFZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FydGljbGUtY29udGVudC1vYmplY3QnKTsgICAgICAgICBcclxuICAgICAgICBpZighb2xkVmFsdWUpIHJldHVybiAgICAgICAgXHJcbiAgICAgICAgbGV0IHZhbHVlID0gSlNPTi5wYXJzZShvbGRWYWx1ZSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgdmFsdWUucHVzaChcclxuICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAga2V5Oidjb250ZW50LWlkLScrKHZhbHVlLmxlbmd0aCsxKSxcclxuICAgICAgICAgICAgICAgICAgIHR5cGU6J3Bob3RvJywgXHJcbiAgICAgICAgICAgICAgICAgICB0aXRsZTonJyAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgKSAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJ0aWNsZS1jb250ZW50LW9iamVjdCcsZGF0YSk7ICBcclxuICAgICAgIHNldExpc3QodmFsdWUpO1xyXG4gICB9XHJcbiAgIGNvbnN0IGFkZExpbmsgPSAoKSA9PiB7XHJcbiAgICAgICBzZXRMaW5rTGlzdCggcHJlU3RhdGUgPT4gWy4uLnByZVN0YXRlLCdhJ10pXHJcbiAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FkZEcnPlxyXG4gICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ljb25mb250IGljb24tZmlsZS10ZXh0JyBvbkNsaWNrPXsgYWRkVGV4dCB9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ljb25mb250IGljb24taW1hZ2UnIG9uQ2xpY2s9eyBhZGRQaG90byB9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgIDwvbGk+ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ljb25mb250IGljb24tbGluaycgb25DbGljaz17YWRkTGlua30+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgPC9saT4gIFxyXG4gICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkRyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MXJlbSAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOi40cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS4yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSkgXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydENvbnRlbnRcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\release-article\\\\articleContent.js */"));
};

var AddG = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(function (_ref2) {
  var setList = _ref2.setList,
      setLinkList = _ref2.setLinkList;

  var addText = function addText() {
    var oldValue = localStorage.getItem('article-content-object');
    if (!oldValue) return;
    var value = JSON.parse(oldValue);
    value.push({
      key: 'content-id-' + (value.length + 1),
      type: 'text',
      value: ''
    });
    var data = JSON.stringify(value);
    localStorage.setItem('article-content-object', data);
    setList(value);
  };

  var addPhoto = function addPhoto() {
    var oldValue = localStorage.getItem('article-content-object');
    if (!oldValue) return;
    var value = JSON.parse(oldValue);
    value.push({
      key: 'content-id-' + (value.length + 1),
      type: 'photo',
      title: ''
    });
    var data = JSON.stringify(value);
    localStorage.setItem('article-content-object', data);
    setList(value);
  };

  var addLink = function addLink() {
    setLinkList(function (preState) {
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(preState), ['a']);
    });
  };

  return __jsx("div", {
    className: "jsx-1377131071" + " " + 'addG',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "jsx-1377131071",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 16
    }
  }, __jsx("li", {
    className: "jsx-1377131071",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 20
    }
  }, __jsx("i", {
    onClick: addText,
    className: "jsx-1377131071" + " " + 'iconfont icon-file-text',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 23
    }
  })), __jsx("li", {
    className: "jsx-1377131071",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 20
    }
  }, __jsx("i", {
    onClick: addPhoto,
    className: "jsx-1377131071" + " " + 'iconfont icon-image',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 23
    }
  })), __jsx("li", {
    className: "jsx-1377131071",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 20
    }
  }, __jsx("i", {
    onClick: addLink,
    className: "jsx-1377131071" + " " + 'iconfont icon-link',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 23
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1377131071",
    __self: _this
  }, ".addG.jsx-1377131071{position:fixed;top:50%;left:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}li.jsx-1377131071{height:40px;width:40px;background:black;border-radius:50%;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:1rem 0.5rem;-webkit-transition:.4s;transition:.4s;}li.jsx-1377131071:hover{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}i.jsx-1377131071{color:white;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxccmVsZWFzZS1hcnRpY2xlXFxhcnRpY2xlQ29udGVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvSzRCLEFBRzJDLEFBTUgsQUFZUyxBQUdULFlBZEQsQUFlSSxHQXJCUCxRQUNELEFBTVUsSUFlcEIsR0FwQjhCLFVBTVQsa0JBQ0gsZUFDRixFQVFoQixnREFmQSx3QkFRMEIsbUdBQ0osNkZBQ0EsbUJBQ0osc0NBQ2xCIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxccmVsZWFzZS1hcnRpY2xlXFxhcnRpY2xlQ29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7IHVzZVN0YXRlICwgdXNlRWZmZWN0ICwgdXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFBob3RvIGZyb20gJy4vcGhvdG8nXHJcblxyXG4gIFxyXG5cclxuY29uc3QgQXJ0Q29udGVudCA9ICh7c2V0TGlua0xpc3R9KSA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyAgICAgICAgICAgICAgICAgICAgLy/liJ3mrKHliqDovb3mlofmoaMg5qOA5rWL5piv5ZCm5pyJ5YaF5a655LqL5Lu2XHJcbiAgICAgICAgbGV0IFZhbHVlID0gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FydGljbGUtY29udGVudC1vYmplY3QnKSA7ICAgICAgICAgXHJcbiAgICAgICAgaWYoIVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgICAgICBbe1xyXG4gICAgICAgICAgICAgICAga2V5Oidjb250ZW50LWlkLTEnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTondGV4dCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA6Jyd9LF1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FydGljbGUtY29udGVudC1vYmplY3QnLGRhdGEpIDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGF0YUxpc3QgPSBKU09OLnBhcnNlKFZhbHVlKSAgICAgICBcclxuICAgICAgICBzZXRJbml0aWFsVGV4dGFyZUxpc3QoZGF0YUxpc3QpO1xyXG4gICAgfSxbXSlcclxuICAgIGNvbnN0IFtpbml0aWFsVGV4dGFyZUxpc3QsIHNldEluaXRpYWxUZXh0YXJlTGlzdF0gPSB1c2VTdGF0ZShbe1xyXG4gICAgICAgIGtleTonY29udGVudC1pZC0xJyxcclxuICAgICAgICB0eXBlOid0ZXh0JyxcclxuICAgICAgICB2YWx1ZSA6Jyd9LF0pO1xyXG4gICAgXHJcbiAgICBjb25zdCBpbnB1dEV2ID0gKGUsaW5kZXgpID0+IHsgICAgICAgIC8v6K6+572u5paH5qGj5YaF5a655LqL5Lu2ICAgICAgICBcclxuICAgICAgICBsZXQgZG9tID0gZS50YXJnZXQgOyAgICAgICAgICAgICAvLyDlhoXlrrnpq5jluqboh6rliqjpgILlupQgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGRvbS5zdHlsZS5oZWlnaHQgPSBkb20uc2Nyb2xsSGVpZ2h0ID4gZG9tLm9mZnNldEhlaWdodCA/IGRvbS5zY3JvbGxIZWlnaHQrMTArJ3B4JzogZG9tLm9mZnNldEhlaWdodCsncHgnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBsZXQgb2xkVmFsdWUgPSAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJ0aWNsZS1jb250ZW50LW9iamVjdCcpIDsgICBcclxuICAgICAgICBpZighb2xkVmFsdWUpIHJldHVyblxyXG4gICAgICAgIGxldCBtaWFuRGF0YSA9IEpTT04ucGFyc2Uob2xkVmFsdWUpICAgICAgICAgICAgICAgICAgLy8g5qC55o2u6L6T5YWl55qE5YC8IOabtOaWsOeKtuaAgeWSjGxvY2Fsc3RvcmFnZe+8ge+8gVxyXG4gICAgICAgIG1pYW5EYXRhW2luZGV4XS52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FydGljbGUtY29udGVudC1vYmplY3QnLEpTT04uc3RyaW5naWZ5KG1pYW5EYXRhKSkgO1xyXG4gICAgICAgIHNldEluaXRpYWxUZXh0YXJlTGlzdChtaWFuRGF0YSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGRlbGV0ZUV2ID0gKGluZGV4KSA9PiB7ICAgLy/liKDpmaTmjonmlofnq6Ag5q616JC95LqL5Lu2XHJcbiAgICAgICAgICBsZXQgY29udGVudCA9IGluaXRpYWxUZXh0YXJlTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLnR5cGUgPT09ICd0ZXh0Jyk7ICAgICAgICAgIFxyXG4gICAgICAgICAgaWYoY29udGVudC5sZW5ndGggPT09IDEpIHJldHVybiAgICAgICAgIFxyXG4gICAgICAgICAgbGV0IG5ld0xpc3QgPSBpbml0aWFsVGV4dGFyZUxpc3QuZmlsdGVyKCAoZSxDaW5kZXgpID0+IENpbmRleCAhPT0gaW5kZXgpXHJcbiAgICAgICAgICBzZXRJbml0aWFsVGV4dGFyZUxpc3QobmV3TGlzdCk7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJ0aWNsZS1jb250ZW50LW9iamVjdCcsSlNPTi5zdHJpbmdpZnkobmV3TGlzdCkpIDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBDb250ZW50ICBteC0wJz5cclxuICAgICAgICAgICAgPEFkZEcgc2V0TGlzdD17c2V0SW5pdGlhbFRleHRhcmVMaXN0fSBpZD17aW5pdGlhbFRleHRhcmVMaXN0fSBzZXRMaW5rTGlzdD17c2V0TGlua0xpc3R9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOCBvZmZzZXQtMlwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxUZXh0YXJlTGlzdC5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChlLGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlLnR5cGUgPT09ICd0ZXh0JykgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb250ZW50LWl0ZW0gcG9zaXRpb24tcmVsYXRpdmVcIiBrZXk9e2Uua2V5fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiIHJlcXVpcmVkPXtpbmRleCA9PT0gMCA/IHRydWUgOiBmYWxzZX0gdmFsdWU9e2UudmFsdWV9IGNsYXNzTmFtZT0ndy0xMDAgcHgtNCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhlKSA9PiBpbnB1dEV2KGUsaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBpbnB1dEV2KGUsaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWxldGVcIiBvbkNsaWNrPXsoKSA9PiBkZWxldGVFdihpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdpY29uZm9udCBpY29uLXRyYXNoLSc+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlLnR5cGUgPT09ICdwaG90bycpIHJldHVybiAoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGhvdG8ga2V5PXtlLmtleX0gc3RhdGU9e2luaXRpYWxUZXh0YXJlTGlzdH0gc2V0U3RhdGUgPSB7c2V0SW5pdGlhbFRleHRhcmVMaXN0fSB0aXRsZT17ZS50aXRsZX0gaW5kZXg9e2luZGV4fSBuYW1lPXtlLmtleX0vPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD4ge2BcclxuXHJcbiAgICAgICAgICAgICAgIC5Db250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjEwcmVtOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgLmNvbnRlbnQtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjVyZW07XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDoyOyAgXHJcbiAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjQwdmg7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLmRlbGV0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgIHJpZ2h0Oi01MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAuZGVsZXRlIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrOyAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIC5kZWxldGUgaTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgcGFkZGluZzowLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMzYTU5OTk7XHJcbiAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICAgICB9ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuY29uc3QgQWRkRyA9UmVhY3QubWVtbygoe3NldExpc3Qsc2V0TGlua0xpc3R9KSA9PiB7ICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBhZGRUZXh0ID0gKCkgPT4ge1xyXG4gICAgICAgICBsZXQgb2xkVmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJ0aWNsZS1jb250ZW50LW9iamVjdCcpOyAgICAgICAgIFxyXG4gICAgICAgICBpZighb2xkVmFsdWUpIHJldHVyblxyXG4gICAgICAgICBcclxuICAgICAgICAgbGV0IHZhbHVlID0gSlNPTi5wYXJzZShvbGRWYWx1ZSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgIHZhbHVlLnB1c2goXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5Oidjb250ZW50LWlkLScrKHZhbHVlLmxlbmd0aCsxKSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOid0ZXh0JywgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlIDonJ30sXHJcbiAgICAgICAgICkgICAgICAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FydGljbGUtY29udGVudC1vYmplY3QnLGRhdGEpOyAgXHJcbiAgICAgICAgc2V0TGlzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhZGRQaG90byA9ICgpID0+IHtcclxuICAgICAgICBsZXQgb2xkVmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJ0aWNsZS1jb250ZW50LW9iamVjdCcpOyAgICAgICAgIFxyXG4gICAgICAgIGlmKCFvbGRWYWx1ZSkgcmV0dXJuICAgICAgICBcclxuICAgICAgICBsZXQgdmFsdWUgPSBKU09OLnBhcnNlKG9sZFZhbHVlKTsgICAgICAgICAgICBcclxuICAgICAgICB2YWx1ZS5wdXNoKFxyXG4gICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICBrZXk6J2NvbnRlbnQtaWQtJysodmFsdWUubGVuZ3RoKzEpLFxyXG4gICAgICAgICAgICAgICAgICAgdHlwZToncGhvdG8nLCBcclxuICAgICAgICAgICAgICAgICAgIHRpdGxlOicnICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICApICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICBsZXQgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcnRpY2xlLWNvbnRlbnQtb2JqZWN0JyxkYXRhKTsgIFxyXG4gICAgICAgc2V0TGlzdCh2YWx1ZSk7XHJcbiAgIH1cclxuICAgY29uc3QgYWRkTGluayA9ICgpID0+IHtcclxuICAgICAgIHNldExpbmtMaXN0KCBwcmVTdGF0ZSA9PiBbLi4ucHJlU3RhdGUsJ2EnXSlcclxuICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWRkRyc+XHJcbiAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbi1maWxlLXRleHQnIG9uQ2xpY2s9eyBhZGRUZXh0IH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbi1pbWFnZScgb25DbGljaz17IGFkZFBob3RvIH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgPC9saT4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbi1saW5rJyBvbkNsaWNrPXthZGRMaW5rfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICA8L2xpPiAgXHJcbiAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+IHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRHIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6NDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6YmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjoxcmVtIDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246LjRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59KSBcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0Q29udGVudFxyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\release-article\\\\articleContent.js */"));
});
/* harmony default export */ __webpack_exports__["default"] = (ArtContent);

/***/ }),

/***/ "./component/release-article/author.js":
/*!*********************************************!*\
  !*** ./component/release-article/author.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localstorage */ "./component/release-article/localstorage.js");
/* harmony import */ var _authorPhoto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authorPhoto */ "./component/release-article/authorPhoto.js");
var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\release-article\\author.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Author = function Author() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      TypeValue = _useState[0],
      setTypeValue = _useState[1];

  var inputandchang = function inputandchang(e) {
    var value = e.target.value;
    setTypeValue(value);
    localStorage.setItem('article-type', value);
  };

  var selectEvent = function selectEvent(e) {
    // 选择文章类型事件
    var dom = e.target;
    if (dom.tagName !== 'H2') return;
    var seled = document.querySelector('.author h2.seled');
    if (seled) seled.classList.remove('seled');
    dom.classList.add('seled');
    setTypeValue(dom.textContent);
    localStorage.setItem('article-type', dom.textContent);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_localstorage__WEBPACK_IMPORTED_MODULE_2__["setLocalValue"])("input[name='author-name']", 'author-name');
    Object(_localstorage__WEBPACK_IMPORTED_MODULE_2__["setLocalValue"])("input[name='article-title']", 'article-title'); //获取本地localstorage的信息

    var type = localStorage.getItem('article-type');
    var domList = Array.from(document.querySelectorAll('.author h2'));
    domList.map(function (e) {
      return e.textContent === type ? e.classList.add('seled') : null;
    });
    if (type) setTypeValue(type);
  }, []);
  return __jsx("div", {
    className: "jsx-2083476103" + " " + 'row author  m-0',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2083476103" + " " + "col-10 offset-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2083476103" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 20
    }
  }, __jsx("div", {
    className: "jsx-2083476103" + " " + "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 24
    }
  }, __jsx("h3", {
    className: "jsx-2083476103" + " " + "my-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 28
    }
  }, "AUTHOR"), __jsx("div", {
    className: "jsx-2083476103" + " " + " d-flex align-items-around",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 28
    }
  }, __jsx(_authorPhoto__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "jsx-2083476103" + " " + "author-message ml-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 33
    }
  }, __jsx("input", {
    type: "text",
    name: "author-name",
    id: "author-name",
    placeholder: " Article Name",
    required: true,
    onChange: function onChange(e) {
      return Object(_localstorage__WEBPACK_IMPORTED_MODULE_2__["setLocalstorage"])('author-name', e.target.value);
    },
    className: "jsx-2083476103" + " " + 'h3 p-2 m-0',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 37
    }
  }), __jsx("input", {
    type: "text",
    name: "article-title",
    id: "article-title",
    required: true,
    onChange: function onChange(e) {
      return Object(_localstorage__WEBPACK_IMPORTED_MODULE_2__["setLocalstorage"])('article-title', e.target.value);
    },
    placeholder: " Article Title",
    className: "jsx-2083476103" + " " + 'h2 p-2',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 37
    }
  })))), __jsx("div", {
    className: "jsx-2083476103" + " " + "col-12 mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 24
    }
  }, __jsx("ul", {
    onClick: selectEvent,
    className: "jsx-2083476103" + " " + 'row',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 28
    }
  }, __jsx("li", {
    className: "jsx-2083476103" + " " + 'col-auto text-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 32
    }
  }, __jsx("h2", {
    className: "jsx-2083476103" + " " + 'p-3',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }, "React")), __jsx("li", {
    className: "jsx-2083476103" + " " + 'col-auto text-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 32
    }
  }, __jsx("h2", {
    className: "jsx-2083476103" + " " + 'p-3',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 37
    }
  }, "Python")), __jsx("li", {
    className: "jsx-2083476103" + " " + 'col-auto text-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 32
    }
  }, __jsx("h2", {
    className: "jsx-2083476103" + " " + 'p-3',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 37
    }
  }, "Django")), __jsx("li", {
    className: "jsx-2083476103" + " " + 'col-auto text-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 32
    }
  }, __jsx("h2", {
    className: "jsx-2083476103" + " " + 'p-3',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 37
    }
  }, "Webpack")), __jsx("li", {
    className: "jsx-2083476103" + " " + 'col',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 32
    }
  }, __jsx("input", {
    type: "text",
    name: "article-type",
    placeholder: "Type",
    required: true,
    value: TypeValue,
    onInput: inputandchang,
    onChange: inputandchang,
    id: "article-type",
    className: "jsx-2083476103" + " " + 'h-100 px-4',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 36
    }
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2083476103",
    __self: _this
  }, ".author.jsx-2083476103{margin-top:10rem;padding-bottom:8rem;border-bottom:2px solid #eaeaea;}input.jsx-2083476103{height:48%;border:none;border-bottom:solid 1px #c9c9c9;}input[name='article-title'].jsx-2083476103{width:100%;}li.jsx-2083476103 input.jsx-2083476103{font-size:2rem;font-weight:700;}ul.jsx-2083476103{list-style:none;}h2.jsx-2083476103{border:black solid 2px;cursor:pointer;-webkit-transition:.2s;transition:.2s;}h2.seled.jsx-2083476103{color:white;background:black;}h2.jsx-2083476103:hover{border-color:white;}h2.seled.jsx-2083476103:hover{border-color:black;background:white;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxccmVsZWFzZS1hcnRpY2xlXFxhdXRob3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkZ5QixBQUc0QyxBQUtOLEFBS0EsQUFHSSxBQUlDLEFBR08sQUFLWixBQUlRLEFBR0MsV0ExQlIsQUFLZixDQWVtQixHQVpBLENBSW5CLENBakJ1QixFQTZCdkIsQUFHcUIsSUExQmMsQUFjakIsTUFNbEIsRUFaQSxLQW1CZ0IsQ0FoQ21CLENBb0JqQixVQWFsQixPQTNCQSxjQUxBLE9Bb0JBIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxccmVsZWFzZS1hcnRpY2xlXFxhdXRob3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7c2V0TG9jYWxzdG9yYWdlLHNldExvY2FsVmFsdWV9IGZyb20gJy4vbG9jYWxzdG9yYWdlJ1xyXG5pbXBvcnQgUGhvdG8gZnJvbSAnLi9hdXRob3JQaG90bydcclxuXHJcbmNvbnN0IEF1dGhvciA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgW1R5cGVWYWx1ZSwgc2V0VHlwZVZhbHVlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgaW5wdXRhbmRjaGFuZyA9IChlKSA9PiB7ICAgICAgICBcclxuICAgICAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTsgICAgICBcclxuICAgICAgICBzZXRUeXBlVmFsdWUodmFsdWUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcnRpY2xlLXR5cGUnLHZhbHVlKTsgICAgICAgXHJcbiAgICB9XHJcbiAgICBjb25zdCBzZWxlY3RFdmVudCA9IChlKSA9PiB7ICAgIC8vIOmAieaLqeaWh+eroOexu+Wei+S6i+S7tlxyXG4gICAgICAgIGxldCBkb20gPSBlLnRhcmdldDtcclxuICAgICAgICBpZihkb20udGFnTmFtZSAhPT0gJ0gyJykgcmV0dXJuIFxyXG4gICAgICAgIGxldCBzZWxlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdXRob3IgaDIuc2VsZWQnKTtcclxuICAgICAgICBpZihzZWxlZCkgc2VsZWQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWQnKTtcclxuICAgICAgICBkb20uY2xhc3NMaXN0LmFkZCgnc2VsZWQnKTtcclxuICAgICAgICBzZXRUeXBlVmFsdWUoZG9tLnRleHRDb250ZW50KTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJ0aWNsZS10eXBlJyxkb20udGV4dENvbnRlbnQpOyAgICBcclxuICAgIH0gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldExvY2FsVmFsdWUoXCJpbnB1dFtuYW1lPSdhdXRob3ItbmFtZSddXCIsJ2F1dGhvci1uYW1lJylcclxuICAgICAgICBzZXRMb2NhbFZhbHVlKFwiaW5wdXRbbmFtZT0nYXJ0aWNsZS10aXRsZSddXCIsJ2FydGljbGUtdGl0bGUnKSAgIC8v6I635Y+W5pys5ZywbG9jYWxzdG9yYWdl55qE5L+h5oGvXHJcbiAgICAgICAgbGV0IHR5cGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJ0aWNsZS10eXBlJyk7XHJcbiAgICAgICAgbGV0IGRvbUxpc3QgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hdXRob3IgaDInKSk7XHJcbiAgICAgICAgZG9tTGlzdC5tYXAoZSA9PiBlLnRleHRDb250ZW50ID09PSB0eXBlID8gZS5jbGFzc0xpc3QuYWRkKCdzZWxlZCcpIDpudWxsKSAgICAgICAgXHJcbiAgICAgICAgaWYodHlwZSkgc2V0VHlwZVZhbHVlKHR5cGUpXHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGF1dGhvciAgbS0wJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgb2Zmc2V0LTFcIj5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm15LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFVVEhPUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBkLWZsZXggYWxpZ24taXRlbXMtYXJvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBob3RvLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3ItbWVzc2FnZSBtbC00XCI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImF1dGhvci1uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhdXRob3ItbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPScgQXJ0aWNsZSBOYW1lJyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9jYWxzdG9yYWdlKCdhdXRob3ItbmFtZScsZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdoMyBwLTIgbS0wJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhcnRpY2xlLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhcnRpY2xlLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMb2NhbHN0b3JhZ2UoJ2FydGljbGUtdGl0bGUnLGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPScgQXJ0aWNsZSBUaXRsZScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdoMiBwLTInLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J3Jvdycgb25DbGljaz17c2VsZWN0RXZlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nY29sLWF1dG8gdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdwLTMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nY29sLWF1dG8gdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdwLTMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHl0aG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nY29sLWF1dG8gdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdwLTMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGphbmdvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nY29sLWF1dG8gdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdwLTMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2VicGFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT0nYXJ0aWNsZS10eXBlJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUeXBlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtUeXBlVmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17aW5wdXRhbmRjaGFuZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtpbnB1dGFuZGNoYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nYXJ0aWNsZS10eXBlJyBjbGFzc05hbWU9J2gtMTAwIHB4LTQnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+IHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgLmF1dGhvciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjQ4JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206c29saWQgMXB4ICNjOWM5Yzk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGlucHV0W25hbWU9J2FydGljbGUtdGl0bGUnXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7ICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGxpIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjpibGFjayBzb2xpZCAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOi4ycztcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaDIuc2VsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6YmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGgyOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOndoaXRlOyAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICBoMi5zZWxlZDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6YmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRob3JcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\release-article\\\\author.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Author);

/***/ }),

/***/ "./component/release-article/authorPhoto.js":
/*!**************************************************!*\
  !*** ./component/release-article/authorPhoto.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\release-article\\authorPhoto.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var AuthorPhoto = function AuthorPhoto() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      photo = _useState[0],
      setPhoto = _useState[1];

  var clickEv = function clickEv(e) {
    e.target.nextElementSibling.click();
  };

  var clickEv2 = function clickEv2(e) {
    e.target.previousElementSibling.click();
  };

  var fileChange = function fileChange(e) {
    try {
      var file = e.target.files[0];
      var img = document.createElement('img');
      img.src = URL.createObjectURL(file);

      img.onload = function () {
        document.querySelector('.photo-container').append(img);
        canvasFunc(img.offsetWidth, img.offsetHeight, img, setPhoto);
      };
    } catch (err) {
      console.log(err);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var openRequest = indexedDB.open('article-store', 2);

    openRequest.onupgradeneeded = function () {
      var db = openRequest.result;

      if (!db.objectStoreNames.contains('photoBuffer')) {
        db.createObjectStore('photoBuffer', {
          keyPath: 'name'
        });
      }
    };

    openRequest.onsuccess = function _callee() {
      var db, tx, store, photo;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = openRequest.result;
              tx = db.transaction('photoBuffer');
              store = tx.objectStore('photoBuffer');
              photo = store.get('article-author-photo');

              photo.onsuccess = function () {
                if (photo.result) {
                  setPhoto(photo.result.file);
                }
              };

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    };

    return function () {
      URL.revokeObjectURL(photo);
    };
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, !photo && __jsx("div", {
    onClick: clickEv,
    className: "jsx-2605298663" + " " + "file-upload-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }), __jsx("input", {
    type: "file",
    name: "author-photo-file",
    onChange: fileChange,
    className: "jsx-2605298663" + " " + 'd-none',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 12
    }
  }), photo && __jsx("img", {
    src: URL.createObjectURL(photo),
    alt: "author-photo",
    onClick: clickEv2,
    className: "jsx-2605298663",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }), __jsx("div", {
    style: {
      position: 'fixed',
      left: 0,
      top: 0,
      visibility: 'hidden',
      userSelect: 'none'
    },
    className: "jsx-2605298663" + " " + "photo-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 12
    }
  }), __jsx("canvas", {
    id: "canvas",
    hidden: true,
    className: "jsx-2605298663",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 12
    }
  }), __jsx("canvas", {
    id: "canvas2",
    hidden: true,
    className: "jsx-2605298663",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 12
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2605298663",
    __self: _this
  }, ".file-upload-button.jsx-2605298663{width:80px;height:80px;background:black;cursor:pointer;}img.jsx-2605298663{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxccmVsZWFzZS1hcnRpY2xlXFxhdXRob3JQaG90by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRXVCLEFBR2lDLEFBTUksV0FMSCxJQU1mLFFBTG9CLGlCQUNGLGVBQ2xCIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxccmVsZWFzZS1hcnRpY2xlXFxhdXRob3JQaG90by5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAseyB1c2VTdGF0ZSAsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBBdXRob3JQaG90byA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtwaG90bywgc2V0UGhvdG9dID0gdXNlU3RhdGUobnVsbClcclxuICAgXHJcbiAgICBjb25zdCBjbGlja0V2ID0gKGUpID0+IHtcclxuICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xpY2soKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tFdjIgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xpY2soKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZmlsZUNoYW5nZSA9IChlKSA9PiB7ICAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTsgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGltZyAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XHJcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBob3RvLWNvbnRhaW5lcicpLmFwcGVuZChpbWcpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBjYW52YXNGdW5jKGltZy5vZmZzZXRXaWR0aCxpbWcub2Zmc2V0SGVpZ2h0LGltZyxzZXRQaG90byk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9Y2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICAgIFxyXG4gICB9XHJcbiAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgb3BlblJlcXVlc3QgPSBpbmRleGVkREIub3BlbignYXJ0aWNsZS1zdG9yZScsMilcclxuICAgIG9wZW5SZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZGIgPSBvcGVuUmVxdWVzdC5yZXN1bHQ7XHJcbiAgICAgICAgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKCdwaG90b0J1ZmZlcicpKSB7XHJcbiAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKCdwaG90b0J1ZmZlcicsIHtrZXlQYXRoOiAnbmFtZSd9KTtcclxuICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgIH0gICAgIFxyXG4gICAgb3BlblJlcXVlc3Qub25zdWNjZXNzID1hc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRiID0gb3BlblJlcXVlc3QucmVzdWx0O1xyXG4gICAgICAgIGxldCB0eCA9IGRiLnRyYW5zYWN0aW9uKCdwaG90b0J1ZmZlcicpXHJcbiAgICAgICAgbGV0IHN0b3JlID0gdHgub2JqZWN0U3RvcmUoJ3Bob3RvQnVmZmVyJylcclxuICAgICAgICBsZXQgcGhvdG8gPSBzdG9yZS5nZXQoJ2FydGljbGUtYXV0aG9yLXBob3RvJylcclxuICAgICAgICBwaG90by5vbnN1Y2Nlc3MgPSAoKSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHBob3RvLnJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgc2V0UGhvdG8ocGhvdG8ucmVzdWx0LmZpbGUpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0gXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwocGhvdG8pO1xyXG4gICAgfVxyXG59LFtdKVxyXG4gIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICBcclxuICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAhcGhvdG8gJiYgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS11cGxvYWQtYnV0dG9uXCIgb25DbGljaz17Y2xpY2tFdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImF1dGhvci1waG90by1maWxlXCIgY2xhc3NOYW1lPSdkLW5vbmUnIG9uQ2hhbmdlPXtmaWxlQ2hhbmdlfS8+XHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICBwaG90byAmJiA8aW1nIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChwaG90byl9IGFsdD1cImF1dGhvci1waG90b1wiIG9uQ2xpY2s9e2NsaWNrRXYyfS8+XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG8tY29udGFpbmVyXCIgc3R5bGU9e3twb3NpdGlvbjonZml4ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6MCx0b3A6MCxcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OidoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJTZWxlY3Q6J25vbmUnICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9fT48L2Rpdj5cclxuICAgICAgICAgICA8Y2FudmFzIGlkPVwiY2FudmFzXCIgaGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICA8L2NhbnZhcz5cclxuICAgICAgICAgICA8Y2FudmFzIGlkPVwiY2FudmFzMlwiIGhpZGRlbiA+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIDwvY2FudmFzPlxyXG5cclxuICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgIC5maWxlLXVwbG9hZC1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgY2FudmFzRnVuYyA9IChXLEgsaW1nLGxvYWRQaG90bykgPT4ge1xyXG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuICAgIGxldCAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBsZXQgY291bnQgPSBNYXRoLm1pbihXLEgpO1xyXG4gICAgY2FudmFzLndpZHRoID0gY291bnQ7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gY291bnQ7XHJcbiAgICBsZXQgdyA9KE1hdGgubWF4KFcsSCktY291bnQpLzI7ICAgIFxyXG4gICAgVz5IP2N0eC5kcmF3SW1hZ2UoaW1nLC13LDApOiBjdHguZHJhd0ltYWdlKGltZywwLC13KTsgLy/oo4Hlh4/miJDkuIDmr5TkuIAgICAgXHJcbiAgICBsZXQgY3R4MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMyJykuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGNhbnZhczIud2lkdGggPSA4MDtcclxuICAgIGNhbnZhczIuaGVpZ2h0PSA4MDtcclxuICAgIGN0eDIuZHJhd0ltYWdlKGNhbnZhcywwLDAsODAsODApOyAgLy8g57yp5pS+5oiQNDBweCA0MHB4XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhczInKS50b0Jsb2IoKGJsb2IpID0+IHsgIC8vIOi+k+WHuuWbvueJh1xyXG4gICAgICAgXHJcbiAgICAgICBsZXQgbmFtZSA9ICdhdXRob3JQaG90by4nICsgYmxvYi50eXBlLnNsaWNlKDYsOSk7ICAgICAgIFxyXG4gICAgICAgbGV0IGZpbGUgPSBuZXcgRmlsZShbYmxvYl0sbmFtZSk7XHJcbiAgICAgICBcclxuICAgICAgIGxvYWRQaG90byhibG9iKVxyXG4gICAgICAgbGV0IG9wZW5SZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oJ2FydGljbGUtc3RvcmUnLDIpXHJcbiAgICAgICBvcGVuUmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgbGV0IERCID0gb3BlblJlcXVlc3QucmVzdWx0OyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICBsZXQgdHJhbnNhY3Rpb24gID0gIERCLnRyYW5zYWN0aW9uKCdwaG90b0J1ZmZlcicsJ3JlYWR3cml0ZScpO1xyXG4gICAgICAgICAgIGxldCBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKFwicGhvdG9CdWZmZXJcIik7IFxyXG4gICAgICAgICAgIGxldCBwaG90byA9IHN0b3JlLmdldCgnYXJ0aWNsZS1hdXRob3ItcGhvdG8nKVxyXG4gICAgICAgICAgIHBob3RvLm9uc3VjY2VzcyA9ICgpID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihwaG90by5yZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kZWxldGUoJ2FydGljbGUtYXV0aG9yLXBob3RvJykgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBidWZmZXJJdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6J2FydGljbGUtYXV0aG9yLXBob3RvJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZTpuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHJlcSA9IHN0b3JlLmFkZChidWZmZXJJdGVtKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXEub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5a2Y5Zu+54mHYnVmZmVyIOWksei0pScpOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxLmVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICB9ICAgXHJcbiAgICAvLyAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTsgICAgICAgXHJcbiAgICAvLyAgICBhLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpOyAgXHJcbiAgICAvLyAgICBhLmRvd25sb2FkID0gdHJ1ZTsgICBcclxuICAgIC8vICAgIGEuY2xpY2soKTsgICAgIFxyXG59LCdpbWFnZS9wbmcnKVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aG9yUGhvdG9cclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\release-article\\\\authorPhoto.js */"));
};

var canvasFunc = function canvasFunc(W, H, img, loadPhoto) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var count = Math.min(W, H);
  canvas.width = count;
  canvas.height = count;
  var w = (Math.max(W, H) - count) / 2;
  W > H ? ctx.drawImage(img, -w, 0) : ctx.drawImage(img, 0, -w); //裁减成一比一    

  var ctx2 = document.getElementById('canvas2').getContext('2d');
  canvas2.width = 80;
  canvas2.height = 80;
  ctx2.drawImage(canvas, 0, 0, 80, 80); // 缩放成40px 40px

  document.getElementById('canvas2').toBlob(function (blob) {
    // 输出图片
    var name = 'authorPhoto.' + blob.type.slice(6, 9);
    var file = new File([blob], name);
    loadPhoto(blob);
    var openRequest = indexedDB.open('article-store', 2);

    openRequest.onsuccess = function () {
      var DB = openRequest.result;
      var transaction = DB.transaction('photoBuffer', 'readwrite');
      var store = transaction.objectStore("photoBuffer");
      var photo = store.get('article-author-photo');

      photo.onsuccess = function () {
        if (photo.result) {
          store["delete"]('article-author-photo');
        }

        var bufferItem = {
          name: 'article-author-photo',
          file: file,
          create: new Date()
        };
        var req = store.add(bufferItem);

        req.onerror = function () {
          console.log('存图片buffer 失败');
          console.log(req.error);
        };
      };
    }; //    let a = document.createElement('a');       
    //    a.href = URL.createObjectURL(blob);  
    //    a.download = true;   
    //    a.click();     

  }, 'image/png');
};

/* harmony default export */ __webpack_exports__["default"] = (AuthorPhoto);

/***/ }),

/***/ "./component/release-article/footer.js":
/*!*********************************************!*\
  !*** ./component/release-article/footer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\release-article\\footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Footer = function Footer() {
  return __jsx("footer", {
    className: "jsx-919842634" + " " + 'row p-5 justify-content-center mx-0 ',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-919842634" + " " + "col-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 14
    }
  }, __jsx("h3", {
    className: "jsx-919842634",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 25
    }
  }, "2020 iconsquare All rights reserved")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "919842634",
    __self: _this
  }, "footer.jsx-919842634{background:rgba(0,0,0,0.7);color:white;margin-top:10%;}h3.jsx-919842634{font-size:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxccmVsZWFzZS1hcnRpY2xlXFxmb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVzBCLEFBR3FELEFBS1osZUFDbEIsWUFMZSxZQUNHLGVBQ2xCIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxccmVsZWFzZS1hcnRpY2xlXFxmb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPSdyb3cgcC01IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXgtMCAnPlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvXCI+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAyMCBpY29uc3F1YXJlIEFsbCByaWdodHMgcmVzZXJ2ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC43KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjEwJTsgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\release-article\\\\footer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./component/release-article/localstorage.js":
/*!***************************************************!*\
  !*** ./component/release-article/localstorage.js ***!
  \***************************************************/
/*! exports provided: setLocalstorage, setLocalValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalstorage", function() { return setLocalstorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalValue", function() { return setLocalValue; });
var setLocalstorage = function setLocalstorage(key, value) {
  localStorage.setItem(key, value);
};
var setLocalValue = function setLocalValue(query, key) {
  var Value = localStorage.getItem(key);
  if (Value) document.querySelector(query).value = Value;
};

/***/ }),

/***/ "./component/release-article/photo.js":
/*!********************************************!*\
  !*** ./component/release-article/photo.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\release-article\\photo.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var Photo = function Photo(_ref) {
  var name = _ref.name,
      index = _ref.index,
      setState = _ref.setState,
      title = _ref.title,
      state = _ref.state;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      File = _useState[0],
      setFile = _useState[1];

  var clickEv = function clickEv(e) {
    e.currentTarget.nextElementSibling.click();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var openRequest = indexedDB.open('article-store', 2);

    openRequest.onupgradeneeded = function () {
      var db = openRequest.result;

      if (!db.objectStoreNames.contains('photoBuffer')) {
        db.createObjectStore('photoBuffer', {
          keyPath: 'name'
        });
      }
    };

    openRequest.onsuccess = function _callee() {
      var db, tx, store, photo;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = openRequest.result;
              tx = db.transaction('photoBuffer', 'readwrite');
              store = tx.objectStore('photoBuffer');
              photo = store.get(name);

              photo.onsuccess = function () {
                if (photo.result) {
                  setFile(URL.createObjectURL(photo.result.file));
                }
              };

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    };

    return function () {
      URL.revokeObjectURL(File);
    };
  }, []);

  var fileUp = function fileUp(e) {
    var file = e.target.files[0];
    var src = URL.createObjectURL(file);
    setFile(src);
    var openRequest = indexedDB.open('article-store', 2);

    openRequest.onsuccess = function () {
      var DB = openRequest.result;
      var transaction = DB.transaction('photoBuffer', 'readwrite');
      var store = transaction.objectStore("photoBuffer"); // (2)

      var bufferItem = {
        name: name,
        file: file,
        create: new Date()
      };
      var req = store.add(bufferItem);

      req.onsuccess = function () {
        console.log('存图片buffer 成功');
        console.log(req.result);
      };

      req.onerror = function () {
        console.log('存图片buffer 失败');
        console.log(req.error);
      };
    };
  };

  var clearFile = function clearFile(e) {
    //清楚file文件
    setFile(null);
    e.currentTarget.nextElementSibling.value = '';
  };

  var changValue = function changValue(e) {
    // 更改图片标题事件
    var oldValue = localStorage.getItem('article-content-object');
    if (!oldValue) return;
    var mianData = JSON.parse(oldValue); // 根据输入的值 更新状态和localstorage！！

    mianData[index].title = e.target.value;
    localStorage.setItem('article-content-object', JSON.stringify(mianData));
    setState(mianData);
  };

  var deleteEv = function deleteEv(index) {
    var newList = state.filter(function (e, Cindex) {
      return Cindex !== index;
    });
    setState(newList);
    localStorage.setItem('article-content-object', JSON.stringify(newList));
    var openRequest = indexedDB.open('article-store', 2);

    openRequest.onsuccess = function () {
      var DB = openRequest.result;
      var transaction = DB.transaction('photoBuffer', 'readwrite');
      var store = transaction.objectStore("photoBuffer"); // (2)              

      var req = store["delete"](name);

      req.onsuccess = function () {
        console.log(name + 'delete 成功');
      };

      req.onerror = function () {
        console.log(name + 'delete 失败');
        console.log(req.error);
      };
    };
  };

  return __jsx("div", {
    className: "jsx-2814629420" + " " + "row content-item position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "text",
    name: "photo-title",
    onChange: changValue,
    onInput: changValue,
    defaultValue: title ? title : null,
    required: true,
    className: "jsx-2814629420" + " " + 'px-4 text-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }), File ? __jsx("img", {
    src: File,
    alt: "content-photo",
    onDoubleClick: clearFile,
    className: "jsx-2814629420" + " " + 'col-12 photo',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 22
    }
  }) : __jsx("div", {
    onClick: clickEv,
    className: "jsx-2814629420" + " " + ' uploadRoot col-6 offset-3 d-flex justify-content-center align-items-center',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 112
    }
  }, __jsx("i", {
    className: "jsx-2814629420" + " " + 'iconfont icon-cloud-upload',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 40
    }
  })), __jsx("input", {
    type: "file",
    name: name + 'file',
    id: name + 'file',
    onChange: fileUp,
    className: "jsx-2814629420" + " " + 'd-none',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }), __jsx("div", {
    onClick: function onClick() {
      return deleteEv(index);
    },
    className: "jsx-2814629420" + " " + "delete",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "jsx-2814629420" + " " + 'iconfont icon-trash-',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2814629420",
    __self: _this
  }, ".content-item.jsx-2814629420{margin-bottom:5rem;}img.jsx-2814629420{width:100%;}.photo.jsx-2814629420{margin-bottom:3rem;}input[name='photo-title'].jsx-2814629420{height:6vh;width:50%;margin:0 auto;font-size:3rem;line-height:2;margin-bottom:5rem;}.uploadRoot.jsx-2814629420{height:20vh;}i.jsx-2814629420{font-size:8rem;height:8rem;cursor:pointer;-webkit-transition:.2s;transition:.2s;}i.jsx-2814629420:hover{font-size:9rem;height:9rem;}.delete.jsx-2814629420{position:absolute;right:-50px;top:50%;}.delete.jsx-2814629420 i.jsx-2814629420{background:none;color:black;font-size:2rem;}.delete.jsx-2814629420 i.jsx-2814629420:hover{background:black;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxccmVsZWFzZS1hcnRpY2xlXFxwaG90by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtSHlCLEFBR3NDLEFBR1IsQUFHUyxBQUdULEFBU0MsQUFHRyxBQU1ILEFBSU0sQUFNQSxBQUtBLFdBdENyQixBQU1hLENBU2IsR0FHZSxBQU1BLENBVUUsQ0FLQSxDQVhGLENBL0JmLEFBTUEsRUFJaUIsTUFZQyxBQU1sQixDQVVvQixDQUtwQixDQVhXLEtBckJPLEdBdUJsQixJQVhrQixDQWdCbEIsT0EzQmlCLGNBQ0ssZ0JBV3RCLEdBVEEiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxyZWxlYXNlLWFydGljbGVcXHBob3RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgUGhvdG8gPSAoeyBuYW1lLCBpbmRleCwgc2V0U3RhdGUsIHRpdGxlLCBzdGF0ZX0pID0+IHsgICAgXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBbRmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIGNvbnN0IGNsaWNrRXYgPSAoZSkgPT4ge1xyXG4gICAgICAgZS5jdXJyZW50VGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGljaygpXHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBvcGVuUmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKCdhcnRpY2xlLXN0b3JlJywyKVxyXG4gICAgICAgIG9wZW5SZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRiID0gb3BlblJlcXVlc3QucmVzdWx0O1xyXG4gICAgICAgICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoJ3Bob3RvQnVmZmVyJykpIHtcclxuICAgICAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKCdwaG90b0J1ZmZlcicsIHtrZXlQYXRoOiAnbmFtZSd9KTtcclxuICAgICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfSAgICAgXHJcbiAgICAgICAgb3BlblJlcXVlc3Qub25zdWNjZXNzID1hc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkYiA9IG9wZW5SZXF1ZXN0LnJlc3VsdDtcclxuICAgICAgICAgICAgbGV0IHR4ID0gZGIudHJhbnNhY3Rpb24oJ3Bob3RvQnVmZmVyJywncmVhZHdyaXRlJylcclxuICAgICAgICAgICAgbGV0IHN0b3JlID0gdHgub2JqZWN0U3RvcmUoJ3Bob3RvQnVmZmVyJylcclxuICAgICAgICAgICAgbGV0IHBob3RvID0gc3RvcmUuZ2V0KG5hbWUpICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBob3RvLm9uc3VjY2VzcyA9ICgpID0+IHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihwaG90by5yZXN1bHQpIHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEZpbGUoVVJMLmNyZWF0ZU9iamVjdFVSTChwaG90by5yZXN1bHQuZmlsZSkpO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKEZpbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW10pXHJcblxyXG4gICAgY29uc3QgZmlsZVVwID0gKGUpID0+IHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICAgICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XHJcbiAgICAgICAgICAgIHNldEZpbGUoc3JjKVxyXG4gICAgICAgICAgICBsZXQgb3BlblJlcXVlc3QgPSBpbmRleGVkREIub3BlbignYXJ0aWNsZS1zdG9yZScsMilcclxuICAgICAgICAgICAgb3BlblJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IERCID0gb3BlblJlcXVlc3QucmVzdWx0OyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCB0cmFuc2FjdGlvbiAgPSAgREIudHJhbnNhY3Rpb24oJ3Bob3RvQnVmZmVyJywncmVhZHdyaXRlJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShcInBob3RvQnVmZmVyXCIpOyAvLyAoMilcclxuICAgICAgICAgICAgICAgIGxldCBidWZmZXJJdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZSxcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGU6bmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCByZXEgPSBzdG9yZS5hZGQoYnVmZmVySXRlbSk7XHJcbiAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflrZjlm77niYdidWZmZXIg5oiQ5YqfJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxLnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXEub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5a2Y5Zu+54mHYnVmZmVyIOWksei0pScpOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxLmVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xlYXJGaWxlID0gKGUpID0+IHsgICAgICAgICAgLy/muIXmpZpmaWxl5paH5Lu2XHJcbiAgICAgICAgc2V0RmlsZShudWxsKTtcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnZhbHVlID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdWYWx1ZSA9IChlKSA9PiB7ICAgICAgLy8g5pu05pS55Zu+54mH5qCH6aKY5LqL5Lu2XHJcbiAgICAgICAgbGV0IG9sZFZhbHVlID0gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FydGljbGUtY29udGVudC1vYmplY3QnKSA7ICAgXHJcbiAgICAgICAgaWYoIW9sZFZhbHVlKSByZXR1cm4gIFxyXG4gICAgICAgIGxldCBtaWFuRGF0YSA9IEpTT04ucGFyc2Uob2xkVmFsdWUpICAgICAgICAgICAgICAgICAgLy8g5qC55o2u6L6T5YWl55qE5YC8IOabtOaWsOeKtuaAgeWSjGxvY2Fsc3RvcmFnZe+8ge+8gVxyXG4gICAgICAgIG1pYW5EYXRhW2luZGV4XS50aXRsZSA9IGUudGFyZ2V0LnZhbHVlOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FydGljbGUtY29udGVudC1vYmplY3QnLEpTT04uc3RyaW5naWZ5KG1pYW5EYXRhKSkgO1xyXG4gICAgICAgIHNldFN0YXRlKG1pYW5EYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVFdiA9IChpbmRleCkgPT4geyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBsZXQgbmV3TGlzdCA9IHN0YXRlLmZpbHRlciggKGUsQ2luZGV4KSA9PiBDaW5kZXggIT09IGluZGV4KVxyXG4gICAgICAgICAgc2V0U3RhdGUobmV3TGlzdCk7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJ0aWNsZS1jb250ZW50LW9iamVjdCcsSlNPTi5zdHJpbmdpZnkobmV3TGlzdCkpO1xyXG5cclxuICAgICAgICAgIGxldCBvcGVuUmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKCdhcnRpY2xlLXN0b3JlJywyKSAgICAgICAgICBcclxuICAgICAgICAgIG9wZW5SZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICBsZXQgREIgPSBvcGVuUmVxdWVzdC5yZXN1bHQ7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGxldCB0cmFuc2FjdGlvbiAgPSAgREIudHJhbnNhY3Rpb24oJ3Bob3RvQnVmZmVyJywncmVhZHdyaXRlJyk7XHJcbiAgICAgICAgICAgICAgbGV0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoXCJwaG90b0J1ZmZlclwiKTsgLy8gKDIpICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBsZXQgcmVxID0gc3RvcmUuZGVsZXRlKG5hbWUpO1xyXG4gICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5hbWUgKyAnZGVsZXRlIOaIkOWKnycpOyAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXEub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmFtZSArICdkZWxldGUg5aSx6LSlJyk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgfSAgICAgICAgICAgXHJcbiAgICAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbnRlbnQtaXRlbSBwb3NpdGlvbi1yZWxhdGl2ZVwiID5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob3RvLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nVmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgICBvbklucHV0PXtjaGFuZ1ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RpdGxlPyB0aXRsZSA6IG51bGx9IFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdweC00IHRleHQtY2VudGVyJy8+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIEZpbGUgPyA8aW1nIHNyYz17RmlsZX0gYWx0PVwiY29udGVudC1waG90b1wiIGNsYXNzTmFtZT0nY29sLTEyIHBob3RvJyBvbkRvdWJsZUNsaWNrPXtjbGVhckZpbGV9Lz46IDxkaXYgb25DbGljaz17Y2xpY2tFdn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nIHVwbG9hZFJvb3QgY29sLTYgb2Zmc2V0LTMgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbi1jbG91ZC11cGxvYWQnPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT17bmFtZSArICdmaWxlJ30gaWQ9e25hbWUgKyAnZmlsZSd9IGNsYXNzTmFtZT0nZC1ub25lJyBvbkNoYW5nZT17ZmlsZVVwfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVsZXRlXCIgb25DbGljaz17KCkgPT4gZGVsZXRlRXYoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ljb25mb250IGljb24tdHJhc2gtJz48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeD4ge2BcclxuICAgICAgICAgICAgLmNvbnRlbnQtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjVyZW07XHJcbiAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlOyAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAucGhvdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206M3JlbTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBpbnB1dFtuYW1lPSdwaG90by10aXRsZSddIHtcclxuICAgICAgICAgICAgICAgICAgIGhlaWdodDo2dmg7XHJcbiAgICAgICAgICAgICAgICAgICB3aWR0aDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDoyO1xyXG4gICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1cmVtO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAudXBsb2FkUm9vdCB7XHJcbiAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjB2aDsgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICBmb250LXNpemU6OHJlbTtcclxuICAgICAgICAgICAgICAgICAgIGhlaWdodDo4cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOi4ycztcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBpOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTo5cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgaGVpZ2h0OjlyZW07XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLmRlbGV0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgIHJpZ2h0Oi01MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAuZGVsZXRlIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToycmVtOyAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAuZGVsZXRlIGk6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6YmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlOyAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaG90b1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\release-article\\\\photo.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Photo);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=f(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",h=e.pathname||"",c=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),h&&"/"!==h[0]&&(h="/"+h)):n||(n=""),c&&"#"!==c[0]&&(c="#"+c),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:h=h.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:c}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",h=a+s,c=/^https?|ftp|gopher|file/,p=/^(.*?)([#?].*)/,n=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,l=/^([a-z0-9.+-]*:)?\/\/\/*/i,i=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function u(e){try{return decodeURI(e)}catch(t){return e}}function f(e,r,a){void 0===r&&(r=!1),void 0===a&&(a=!1);var f=(e=e.trim()).match(p);e=f?u(f[1]).replace(/\\/g,"/")+f[2]:u(e).replace(/\\/g,"/"),i.test(e)&&"/"!==e.slice(-1)&&(e+="/");var m=!/(^javascript)/.test(e)&&e.match(n),v=l.test(e),d="";m&&(c.test(m[1])||(d=m[1].toLowerCase(),e=""+m[2]+m[3]),m[2]||(v=!1,c.test(m[1])?(d=m[1],e=""+m[3]):e="//"+m[3]),3!==m[2].length&&1!==m[2].length||(d=m[1],e="/"+m[3]));var g,b=e.match(/(:[0-9]+)/),y="";b&&b[1]&&3===b[1].length&&(e=e.replace(y=b[1],y+"00"));var w={},x="",R="";try{g=new URL(e)}catch(t){x=t,d||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(R="/",e=e.substr(1));try{g=new URL(e,h)}catch(e){return w.protocol=d,w.href=d,w}}w.slashes=v&&!R,w.host=g.host===s?"":g.host,w.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),w.protocol=x?d||null:g.protocol,w.search=g.search.replace(/\\/g,"%5C"),w.hash=g.hash.replace(/\\/g,"%5C");var U=e.split("#");!w.search&&~U[0].indexOf("?")&&(w.search="?"),w.hash||""!==U[1]||(w.hash="#"),w.query=r?t.decode(g.search.substr(1)):w.search.substr(1),w.pathname=R+u(g.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),d&&!c.test(d)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=g.port,y&&(w.host=w.host.replace(y+"00",y),w.port=w.port.slice(0,-2)),w.href=R?""+w.pathname+w.search+w.hash:o(w);var j=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~j.indexOf(e)||(w[e]=w[e]||null)}),w}var m=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,v=/https?|ftp|gopher|file/;function d(e,t){var r="string"==typeof e?f(e):e;e="object"==typeof e?o(e):e;var s=f(t),c="";r.protocol&&!r.slashes&&(c=r.protocol,e=e.replace(r.protocol,""),c+="/"===t[0]||"/"===e[0]?"/":""),c&&s.protocol&&(c="",s.slashes||(c=s.protocol,t=t.replace(s.protocol,"")));var p=e.match(m);p&&!s.protocol&&(e=e.substr((c=p[1]+(p[2]||"")).length),/^\/\/[^\/]/.test(t)&&(c=c.slice(0,-1)));var n=new URL(e,h+"/"),l=new URL(t,n).toString().replace(h,""),i=s.protocol||r.protocol;return i+=r.slashes||s.slashes?"//":"",!c&&i?l=l.replace(a,i):c&&(l=l.replace(a,"")),v.test(l)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),c&&(l=c+("/"===l[0]?l.substr(1):l)),l}exports.parse=f,exports.format=o,exports.resolve=d,exports.resolveObject=function(e,t){return f(d(e,t))};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object.assign/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);function g(){return assign;}Object.defineProperties(g(),{implementation:{get:g},shim:{value:g},getPolyfill:{value:g}});module.exports=g();

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Frelease-article&absolutePagePath=C%3A%5Cnewlife%5CnewSite%5Cmy-app%5Cpages%5Crelease-article.js!./":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Frelease-article&absolutePagePath=C%3A%5Cnewlife%5CnewSite%5Cmy-app%5Cpages%5Crelease-article.js ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/release-article", function() {
      var mod = __webpack_require__(/*! ./pages/release-article.js */ "./pages/release-article.js")
      if(true) {
        module.hot.accept(/*! ./pages/release-article.js */ "./pages/release-article.js", function() {
          if(!next.router.components["/release-article"]) return
          var updatedPage = __webpack_require__(/*! ./pages/release-article.js */ "./pages/release-article.js")
          next.router.update("/release-article", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

var Link = /*#__PURE__*/function (_react$Component) {
  _inherits(Link, _react$Component);

  var _super = _createSuper(Link);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _super.call(this, props);
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "getPaths",
    value: function getPaths() {
      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href,
          parsedAs = _this$formatUrls2.as;

      var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
      return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
        '%')];

        if (!isPrefetched) {
          this.cleanUpListeners = listenToIntersections(ref, function () {
            _this2.prefetch();
          });
        }
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch(options) {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
      // loading with priority which can reject but we don't
      // want to force navigation since this is only a prefetch

      _router["default"].prefetch(paths[
      /* href */
      0], paths[
      /* asPath */
      1], options)["catch"](function (err) {
        if (true) {
          // rethrow to show invalid URL errors
          throw err;
        }
      });

      prefetched[paths.join( // Join on an invalid URI character
      '%')] = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch({
            priority: true
          });
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) { var rewriteUrlForNextExport; }

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElement List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  var p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, addBasePath(as), options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, addBasePath(as), options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        Promise.all([_this4.pageLoader.prefetchData(url, asPath), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              _context.next = 4;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 4:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 9;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 9:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = decodeURIComponent;
    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react_1$Component) {
    _inherits(_class, _react_1$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances["delete"](this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(react_1.Component);
};

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var _this = this;

  var used = false;
  var result = null;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = fn.apply(_this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/next/dist/build/polyfills/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/release-article.js":
/*!**********************************!*\
  !*** ./pages/release-article.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_public_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/public/nav */ "./component/public/nav.js");
/* harmony import */ var _component_release_article_author__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/release-article/author */ "./component/release-article/author.js");
/* harmony import */ var _component_release_article_articleContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/release-article/articleContent */ "./component/release-article/articleContent.js");
/* harmony import */ var _component_release_article_about__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/release-article/about */ "./component/release-article/about.js");
/* harmony import */ var _component_release_article_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/release-article/footer */ "./component/release-article/footer.js");


var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\pages\\release-article.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var Home = function Home() {
  var uploadData = function uploadData(data) {
    var QURL, res, result, keys, _i, _keys, key, openRequest;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function uploadData$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            QURL = "http://localhost:4040/" + "addArticle/add";
            _context2.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(QURL, {
              method: "POST",
              body: data
            }));

          case 4:
            res = _context2.sent;
            _context2.next = 7;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

          case 7:
            result = _context2.sent;

            if (res.ok) {
              keys = Object.keys(localStorage);

              for (_i = 0, _keys = keys; _i < _keys.length; _i++) {
                key = _keys[_i];

                if (key !== "author-name" && key !== "article-key") {
                  localStorage.removeItem(key);
                }
              }

              openRequest = indexedDB.open("article-store", 2);

              openRequest.onsuccess = function _callee() {
                var db, tx, store, keys;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        db = openRequest.result;
                        tx = db.transaction("photoBuffer", "readwrite");
                        store = tx.objectStore("photoBuffer");
                        keys = store.getAllKeys();

                        keys.onsuccess = function () {
                          keys.result.map(function (key) {
                            if (key !== "article-author-photo") {
                              store["delete"](key);
                              console.log("delete");
                            }
                          });
                          window.location.reload();
                        };

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, null, null, null, Promise);
              };
            } else {
              alert(result);
            }

            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 11]], Promise);
  };

  var submitForm = function submitForm(e) {
    e.preventDefault();
    var data = new FormData(e.target);
    var content = localStorage.getItem("article-content-object");
    var fileList = JSON.parse(content).filter(function (item) {
      return item.type === "photo";
    });
    fileList.push({
      key: "article-author-photo"
    });
    var openRequest = indexedDB.open("article-store", 2);

    openRequest.onsuccess = function _callee2() {
      var db, tx, store, reqs;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              db = openRequest.result;
              tx = db.transaction("photoBuffer");
              store = tx.objectStore("photoBuffer");
              reqs = fileList.map(function (item) {
                return new Promise(function (resolve, reject) {
                  var photo = store.get(item.key);

                  photo.onsuccess = function () {
                    if (photo.result) {
                      resolve({
                        file: photo.result.file,
                        name: item.key
                      });
                    } else {
                      reject("有一个图片板块没有文件。请上传或是删除点这个板块");
                    }
                  };
                });
              });
              Promise.all(reqs).then(function (items) {
                items.map(function (item) {
                  data.append(item.name, item.file);
                });
                data.append("article-content-main", content);
                data.append("link-count", LinkList.length);
                uploadData(data);
              })["catch"](alert);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    };
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(["a"]),
      LinkList = _useState[0],
      setLinkList = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-680210942",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, "\u7F16\u5199\u6587\u7AE0"), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css",
    integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
    crossorigin: "anonymous",
    className: "jsx-680210942",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "//at.alicdn.com/t/font_1748919_7p01375xskx.css",
    className: "jsx-680210942",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "icon",
    href: "/logo.jpg",
    type: "image/x-icon",
    className: "jsx-680210942",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-680210942" + " " + "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx("nav", {
    className: "jsx-680210942",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx(_component_public_nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "article-bg.jpg",
    alt: "bg",
    className: "jsx-680210942",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }))), __jsx("form", {
    onSubmit: submitForm,
    className: "jsx-680210942",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx(_component_release_article_author__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }), __jsx(_component_release_article_articleContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setLinkList: setLinkList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }), __jsx(_component_release_article_about__WEBPACK_IMPORTED_MODULE_7__["default"], {
    List: LinkList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  })), __jsx(_component_release_article_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "680210942",
    __self: _this
  }, "*,body{margin:0;padding:0;box-sizing:border-box;}html{font-size:10px;}.container-fluid{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxyZWxlYXNlLWFydGljbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0h5QixBQUlvQixBQUtNLEFBR0wsU0FQQSxDQVFaLEtBSEEsSUFKd0Isc0JBQ3hCIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxyZWxlYXNlLWFydGljbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnQvcHVibGljL25hdlwiO1xyXG5pbXBvcnQgQXV0aG9yIGZyb20gXCIuLi9jb21wb25lbnQvcmVsZWFzZS1hcnRpY2xlL2F1dGhvclwiO1xyXG5pbXBvcnQgQXJ0Q29udGVudCBmcm9tIFwiLi4vY29tcG9uZW50L3JlbGVhc2UtYXJ0aWNsZS9hcnRpY2xlQ29udGVudFwiO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4uL2NvbXBvbmVudC9yZWxlYXNlLWFydGljbGUvYWJvdXRcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50L3JlbGVhc2UtYXJ0aWNsZS9mb290ZXJcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdXBsb2FkRGF0YSA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBRVVJMID0gcHJvY2Vzcy5lbnYuREFUQV9VUkwgKyBcImFkZEFydGljbGUvYWRkXCI7XHJcbiAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaChRVVJMLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBkYXRhLFxyXG4gICAgICB9KTtcclxuICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSk7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGtleXMpIHtcclxuICAgICAgICAgIGlmIChrZXkgIT09IFwiYXV0aG9yLW5hbWVcIiAmJiBrZXkgIT09IFwiYXJ0aWNsZS1rZXlcIikge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb3BlblJlcXVlc3QgPSBpbmRleGVkREIub3BlbihcImFydGljbGUtc3RvcmVcIiwgMik7XHJcbiAgICAgICAgb3BlblJlcXVlc3Qub25zdWNjZXNzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgbGV0IGRiID0gb3BlblJlcXVlc3QucmVzdWx0O1xyXG4gICAgICAgICAgbGV0IHR4ID0gZGIudHJhbnNhY3Rpb24oXCJwaG90b0J1ZmZlclwiLCBcInJlYWR3cml0ZVwiKTtcclxuICAgICAgICAgIGxldCBzdG9yZSA9IHR4Lm9iamVjdFN0b3JlKFwicGhvdG9CdWZmZXJcIik7XHJcbiAgICAgICAgICBsZXQga2V5cyA9IHN0b3JlLmdldEFsbEtleXMoKTtcclxuICAgICAgICAgIGtleXMub25zdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBrZXlzLnJlc3VsdC5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChrZXkgIT09IFwiYXJ0aWNsZS1hdXRob3ItcGhvdG9cIikge1xyXG4gICAgICAgICAgICAgICAgc3RvcmUuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZVwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQocmVzdWx0KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XHJcbiAgICBsZXQgY29udGVudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXJ0aWNsZS1jb250ZW50LW9iamVjdFwiKTtcclxuXHJcbiAgICBsZXQgZmlsZUxpc3QgPSBKU09OLnBhcnNlKGNvbnRlbnQpLmZpbHRlcigoaXRlbSkgPT4gaXRlbS50eXBlID09PSBcInBob3RvXCIpO1xyXG4gICAgZmlsZUxpc3QucHVzaCh7XHJcbiAgICAgIGtleTogXCJhcnRpY2xlLWF1dGhvci1waG90b1wiLFxyXG4gICAgfSk7XHJcbiAgICBsZXQgb3BlblJlcXVlc3QgPSBpbmRleGVkREIub3BlbihcImFydGljbGUtc3RvcmVcIiwgMik7XHJcbiAgICBvcGVuUmVxdWVzdC5vbnN1Y2Nlc3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGxldCBkYiA9IG9wZW5SZXF1ZXN0LnJlc3VsdDtcclxuICAgICAgbGV0IHR4ID0gZGIudHJhbnNhY3Rpb24oXCJwaG90b0J1ZmZlclwiKTtcclxuICAgICAgbGV0IHN0b3JlID0gdHgub2JqZWN0U3RvcmUoXCJwaG90b0J1ZmZlclwiKTtcclxuICAgICAgbGV0IHJlcXMgPSBmaWxlTGlzdC5tYXAoXHJcbiAgICAgICAgKGl0ZW0pID0+XHJcbiAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwaG90byA9IHN0b3JlLmdldChpdGVtLmtleSk7XHJcbiAgICAgICAgICAgIHBob3RvLm9uc3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocGhvdG8ucmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgZmlsZTogcGhvdG8ucmVzdWx0LmZpbGUsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ua2V5LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChcIuacieS4gOS4quWbvueJh+adv+Wdl+ayoeacieaWh+S7tuOAguivt+S4iuS8oOaIluaYr+WIoOmZpOeCuei/meS4quadv+Wdl1wiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXFzKVxyXG4gICAgICAgIC50aGVuKChpdGVtcykgPT4ge1xyXG4gICAgICAgICAgaXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKGl0ZW0ubmFtZSwgaXRlbS5maWxlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZGF0YS5hcHBlbmQoXCJhcnRpY2xlLWNvbnRlbnQtbWFpblwiLCBjb250ZW50KTtcclxuICAgICAgICAgIGRhdGEuYXBwZW5kKFwibGluay1jb3VudFwiLCBMaW5rTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgdXBsb2FkRGF0YShkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChhbGVydCk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtMaW5rTGlzdCwgc2V0TGlua0xpc3RdID0gdXNlU3RhdGUoW1wiYVwiXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+57yW5YaZ5paH56ugPC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANC40LjEvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LVZrb284eDRDR3NPMytIaHh2OFQvUTVQYVh0a0t0dTZ1ZzVUT2VOVjZnQmlGZVdQR0ZOOU11aE9mMjNROUlmamhcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTc0ODkxOV83cDAxMzc1eHNreC5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvbG9nby5qcGdcIiB0eXBlPVwiaW1hZ2UveC1pY29uXCI+PC9saW5rPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDxOYXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiYXJ0aWNsZS1iZy5qcGdcIiBhbHQ9XCJiZ1wiIC8+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0Rm9ybX0+XHJcbiAgICAgICAgICA8QXV0aG9yIC8+XHJcblxyXG4gICAgICAgICAgPEFydENvbnRlbnQgc2V0TGlua0xpc3Q9e3NldExpbmtMaXN0fSAvPlxyXG5cclxuICAgICAgICAgIDxBYm91dCBMaXN0PXtMaW5rTGlzdH0gLz5cclxuICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICosXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\pages\\\\release-article.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Frelease-article&absolutePagePath=C%3A%5Cnewlife%5CnewSite%5Cmy-app%5Cpages%5Crelease-article.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Frelease-article&absolutePagePath=C%3A%5Cnewlife%5CnewSite%5Cmy-app%5Cpages%5Crelease-article.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Frelease-article&absolutePagePath=C%3A%5Cnewlife%5CnewSite%5Cmy-app%5Cpages%5Crelease-article.js!./");


/***/ }),

/***/ "dll-reference dll_c2e10d183b950a67d9e7":
/*!*******************************************!*\
  !*** external "dll_c2e10d183b950a67d9e7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_c2e10d183b950a67d9e7;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=release-article.js.map