module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/public/nav.js":
/*!*********************************!*\
  !*** ./component/public/nav.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\public\\nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Nav = props => {
  let router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])().asPath;
  const {
    0: path
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(router);
  return __jsx("div", {
    className: "jsx-3262953798" + " " + "nav row mx-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3262953798" + " " + "col-12 px-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, props.children), __jsx("div", {
    className: "jsx-3262953798" + " " + "content col-12 mx-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3262953798" + " " + "min-nav row align-items-center justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3262953798" + " " + "col-12 col-sm-10 col-lg-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "jsx-3262953798" + " " + "d-flex row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-3262953798" + " " + ((path == "/" ? "liSeled" : null) || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "jsx-3262953798",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 19
    }
  }, "Home"))), __jsx("li", {
    className: "jsx-3262953798" + " " + ((path == "/photo" ? "liSeled" : null) || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/photo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "jsx-3262953798",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 19
    }
  }, "Photo"))), __jsx("li", {
    className: "jsx-3262953798" + " " + ((path == "/article-list" ? "liSeled" : null) || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/article-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "jsx-3262953798",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 19
    }
  }, "Article"))), __jsx("li", {
    className: "jsx-3262953798" + " " + ((path == "/component" ? "liSeled" : null) || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/component",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "jsx-3262953798",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, "Component")))))), props.title), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3262953798",
    __self: undefined
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage */ "./component/release-article/localstorage.js");
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\release-article\\about.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const About = ({
  List
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_localstorage__WEBPACK_IMPORTED_MODULE_1__["setLocalValue"])("textarea[name='about-article-text']", 'about-article-text');
  }, []);
  return __jsx("div", {
    className: "row about m-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-8  offset-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "my-4 col-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "ABOUT ARTICLE"), __jsx("div", {
    className: "col-12 content-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("textarea", {
    name: "about-article-text",
    onChange: e => Object(_localstorage__WEBPACK_IMPORTED_MODULE_1__["setLocalstorage"])('about-article-text', e.target.value),
    className: "w-100 h3 p-4",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "col-12 content-item my-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, List && List.map((e, index) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 37
    }
  }, __jsx("input", {
    type: "text",
    name: `a-link-${index}`,
    placeholder: "Link",
    className: "px-4 py-2 col-6 h4",
    onChange: e => Object(_localstorage__WEBPACK_IMPORTED_MODULE_1__["setLocalstorage"])('about-article-link', e.target.value),
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 41
    }
  }), __jsx("input", {
    type: "text",
    name: `a-link-title-${index}`,
    placeholder: "Link Title",
    className: "px-4 py-2 ml-5 h4",
    onChange: e => Object(_localstorage__WEBPACK_IMPORTED_MODULE_1__["setLocalstorage"])('about-article-linkTitle', e.target.value),
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 41
    }
  })))), __jsx("div", {
    className: "col-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row justify-content-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, __jsx("button", {
    type: "submit shadow-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, "Commit"))))), __jsx("style", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, `
                .about {
                    border-bottom:2px solid #eaeaea;
                    padding:10rem 0;
                }
                h3 {
                   font-size:2.5rem;
                   line-height:2;
               }
               h4 {
                   font-size:2rem;
                   line-height:1.5;
               }
               textarea  {
                   min-height:15vh;                  
               }
                button {
                    border:none;
                    background:black;
                    color:white;
                    padding:1rem 2rem;
                    font-size:2rem;
                    transition:.4s;
                    font-weight:700;
                }
                button:hover {
                    background:white;
                    color:black;
                }
            `));
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo */ "./component/release-article/photo.js");
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\release-article\\articleContent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const ArtContent = ({
  setLinkList
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    //初次加载文档 检测是否有内容事件
    let Value = localStorage.getItem('article-content-object');

    if (!Value) {
      let data = JSON.stringify([{
        key: 'content-id-1',
        type: 'text',
        value: ''
      }]);
      localStorage.setItem('article-content-object', data);
      return;
    }

    let dataList = JSON.parse(Value);
    setInitialTextareList(dataList);
  }, []);
  const {
    0: initialTextareList,
    1: setInitialTextareList
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    key: 'content-id-1',
    type: 'text',
    value: ''
  }]);

  const inputEv = (e, index) => {
    //设置文档内容事件        
    let dom = e.target; // 内容高度自动适应                    

    dom.style.height = dom.scrollHeight > dom.offsetHeight ? dom.scrollHeight + 10 + 'px' : dom.offsetHeight + 'px';
    let oldValue = localStorage.getItem('article-content-object');
    if (!oldValue) return;
    let mianData = JSON.parse(oldValue); // 根据输入的值 更新状态和localstorage！！

    mianData[index].value = e.target.value;
    localStorage.setItem('article-content-object', JSON.stringify(mianData));
    setInitialTextareList(mianData);
  };

  const deleteEv = index => {
    //删除掉文章 段落事件
    let content = initialTextareList.filter(item => item.type === 'text');
    if (content.length === 1) return;
    let newList = initialTextareList.filter((e, Cindex) => Cindex !== index);
    setInitialTextareList(newList);
    localStorage.setItem('article-content-object', JSON.stringify(newList));
  };

  return __jsx("div", {
    className: "jsx-2699354276" + " " + 'row Content  mx-0',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(AddG, {
    setList: setInitialTextareList,
    id: initialTextareList,
    setLinkList: setLinkList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2699354276" + " " + "col-8 offset-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, initialTextareList.map((e, index) => {
    if (e.type === 'text') return __jsx("div", {
      key: e.key,
      className: "jsx-2699354276" + " " + "row content-item position-relative",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 33
      }
    }, __jsx("textarea", {
      name: "message",
      required: index === 0 ? true : false,
      value: e.value,
      onInput: e => inputEv(e, index),
      onChange: e => inputEv(e, index),
      className: "jsx-2699354276" + " " + 'w-100 px-4',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 37
      }
    }), __jsx("div", {
      onClick: () => deleteEv(index),
      className: "jsx-2699354276" + " " + "delete",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 37
      }
    }, __jsx("i", {
      className: "jsx-2699354276" + " " + 'iconfont icon-trash-',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 41
      }
    })));
    if (e.type === 'photo') return __jsx(_photo__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: e.key,
      state: initialTextareList,
      setState: setInitialTextareList,
      title: e.title,
      index: index,
      name: e.key,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 34
      }
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2699354276",
    __self: undefined
  }, ".Content.jsx-2699354276{margin-top:10rem;border-bottom:2px solid #eaeaea;}.content-item.jsx-2699354276{margin-bottom:5rem;}textarea.jsx-2699354276{font-size:2.5rem;line-height:2;min-height:40vh;}.delete.jsx-2699354276{position:absolute;right:-50px;top:50%;}.delete.jsx-2699354276 i.jsx-2699354276{background:none;color:black;}.delete.jsx-2699354276 i.jsx-2699354276:hover{background:black;color:white;}i.jsx-2699354276{color:white;font-size:2rem;padding:0.5rem;background:#3a5999;border-radius:50%;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxccmVsZWFzZS1hcnRpY2xlXFxhcnRpY2xlQ29udGVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRXlCLEFBSXFDLEFBS0MsQUFLRixBQUtDLEFBTUEsQUFJQSxBQUlOLFlBQ0csSUFSRCxDQXJCbUIsQUFVbkIsQUFlQSxDQVZGLENBVmYsUUF5QmtCLENBUmxCLENBSUEsQ0FWVyxDQUxRLE9BT25CLElBYXNCLEtBbkJ0QixFQVhBLFlBK0JxQixrQkFDSCxlQUNsQiIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxjb21wb25lbnRcXHJlbGVhc2UtYXJ0aWNsZVxcYXJ0aWNsZUNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyB1c2VTdGF0ZSAsIHVzZUVmZmVjdCAsIHVzZVJlZn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQaG90byBmcm9tICcuL3Bob3RvJ1xyXG5cclxuICBcclxuXHJcbmNvbnN0IEFydENvbnRlbnQgPSAoe3NldExpbmtMaXN0fSkgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgICAgICAgICAgICAgICAgICAgIC8v5Yid5qyh5Yqg6L295paH5qGjIOajgOa1i+aYr+WQpuacieWGheWuueS6i+S7tlxyXG4gICAgICAgIGxldCBWYWx1ZSA9ICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcnRpY2xlLWNvbnRlbnQtb2JqZWN0JykgOyAgICAgICAgIFxyXG4gICAgICAgIGlmKCFWYWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICAgICAgW3tcclxuICAgICAgICAgICAgICAgIGtleTonY29udGVudC1pZC0xJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6J3RleHQnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgOicnfSxdXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcnRpY2xlLWNvbnRlbnQtb2JqZWN0JyxkYXRhKSA7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRhdGFMaXN0ID0gSlNPTi5wYXJzZShWYWx1ZSkgICAgICAgXHJcbiAgICAgICAgc2V0SW5pdGlhbFRleHRhcmVMaXN0KGRhdGFMaXN0KTtcclxuICAgIH0sW10pXHJcbiAgICBjb25zdCBbaW5pdGlhbFRleHRhcmVMaXN0LCBzZXRJbml0aWFsVGV4dGFyZUxpc3RdID0gdXNlU3RhdGUoW3tcclxuICAgICAgICBrZXk6J2NvbnRlbnQtaWQtMScsXHJcbiAgICAgICAgdHlwZTondGV4dCcsXHJcbiAgICAgICAgdmFsdWUgOicnfSxdKTtcclxuICAgIFxyXG4gICAgY29uc3QgaW5wdXRFdiA9IChlLGluZGV4KSA9PiB7ICAgICAgICAvL+iuvue9ruaWh+aho+WGheWuueS6i+S7tiAgICAgICAgXHJcbiAgICAgICAgbGV0IGRvbSA9IGUudGFyZ2V0IDsgICAgICAgICAgICAgLy8g5YaF5a656auY5bqm6Ieq5Yqo6YCC5bqUICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBkb20uc3R5bGUuaGVpZ2h0ID0gZG9tLnNjcm9sbEhlaWdodCA+IGRvbS5vZmZzZXRIZWlnaHQgPyBkb20uc2Nyb2xsSGVpZ2h0KzEwKydweCc6IGRvbS5vZmZzZXRIZWlnaHQrJ3B4JztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgbGV0IG9sZFZhbHVlID0gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FydGljbGUtY29udGVudC1vYmplY3QnKSA7ICAgXHJcbiAgICAgICAgaWYoIW9sZFZhbHVlKSByZXR1cm5cclxuICAgICAgICBsZXQgbWlhbkRhdGEgPSBKU09OLnBhcnNlKG9sZFZhbHVlKSAgICAgICAgICAgICAgICAgIC8vIOagueaNrui+k+WFpeeahOWAvCDmm7TmlrDnirbmgIHlkoxsb2NhbHN0b3JhZ2XvvIHvvIFcclxuICAgICAgICBtaWFuRGF0YVtpbmRleF0udmFsdWUgPSBlLnRhcmdldC52YWx1ZTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcnRpY2xlLWNvbnRlbnQtb2JqZWN0JyxKU09OLnN0cmluZ2lmeShtaWFuRGF0YSkpIDtcclxuICAgICAgICBzZXRJbml0aWFsVGV4dGFyZUxpc3QobWlhbkRhdGEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBkZWxldGVFdiA9IChpbmRleCkgPT4geyAgIC8v5Yig6Zmk5o6J5paH56ugIOauteiQveS6i+S7tlxyXG4gICAgICAgICAgbGV0IGNvbnRlbnQgPSBpbml0aWFsVGV4dGFyZUxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS50eXBlID09PSAndGV4dCcpOyAgICAgICAgICBcclxuICAgICAgICAgIGlmKGNvbnRlbnQubGVuZ3RoID09PSAxKSByZXR1cm4gICAgICAgICBcclxuICAgICAgICAgIGxldCBuZXdMaXN0ID0gaW5pdGlhbFRleHRhcmVMaXN0LmZpbHRlciggKGUsQ2luZGV4KSA9PiBDaW5kZXggIT09IGluZGV4KVxyXG4gICAgICAgICAgc2V0SW5pdGlhbFRleHRhcmVMaXN0KG5ld0xpc3QpO1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FydGljbGUtY29udGVudC1vYmplY3QnLEpTT04uc3RyaW5naWZ5KG5ld0xpc3QpKSA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgQ29udGVudCAgbXgtMCc+XHJcbiAgICAgICAgICAgIDxBZGRHIHNldExpc3Q9e3NldEluaXRpYWxUZXh0YXJlTGlzdH0gaWQ9e2luaXRpYWxUZXh0YXJlTGlzdH0gc2V0TGlua0xpc3Q9e3NldExpbmtMaXN0fS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTggb2Zmc2V0LTJcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVGV4dGFyZUxpc3QubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZSxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS50eXBlID09PSAndGV4dCcpIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY29udGVudC1pdGVtIHBvc2l0aW9uLXJlbGF0aXZlXCIga2V5PXtlLmtleX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiByZXF1aXJlZD17aW5kZXggPT09IDAgPyB0cnVlIDogZmFsc2V9IHZhbHVlPXtlLnZhbHVlfSBjbGFzc05hbWU9J3ctMTAwIHB4LTQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXsoZSkgPT4gaW5wdXRFdihlLGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaW5wdXRFdihlLGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVsZXRlXCIgb25DbGljaz17KCkgPT4gZGVsZXRlRXYoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbi10cmFzaC0nPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS50eXBlID09PSAncGhvdG8nKSByZXR1cm4gKCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBob3RvIGtleT17ZS5rZXl9IHN0YXRlPXtpbml0aWFsVGV4dGFyZUxpc3R9IHNldFN0YXRlID0ge3NldEluaXRpYWxUZXh0YXJlTGlzdH0gdGl0bGU9e2UudGl0bGV9IGluZGV4PXtpbmRleH0gbmFtZT17ZS5rZXl9Lz4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+IHtgXHJcblxyXG4gICAgICAgICAgICAgICAuQ29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxMHJlbTsgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIC5jb250ZW50LWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1cmVtO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICBmb250LXNpemU6Mi41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MjsgIFxyXG4gICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDo0MHZoOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIC5kZWxldGUge1xyXG4gICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICByaWdodDotNTBweDtcclxuICAgICAgICAgICAgICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgLmRlbGV0ZSBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICBjb2xvcjpibGFjazsgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAuZGVsZXRlIGk6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6YmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlOyAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MnJlbTtcclxuICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojM2E1OTk5O1xyXG4gICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmNvbnN0IEFkZEcgPVJlYWN0Lm1lbW8oKHtzZXRMaXN0LHNldExpbmtMaXN0fSkgPT4geyAgICBcclxuICAgIFxyXG4gICAgY29uc3QgYWRkVGV4dCA9ICgpID0+IHtcclxuICAgICAgICAgbGV0IG9sZFZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FydGljbGUtY29udGVudC1vYmplY3QnKTsgICAgICAgICBcclxuICAgICAgICAgaWYoIW9sZFZhbHVlKSByZXR1cm5cclxuICAgICAgICAgXHJcbiAgICAgICAgIGxldCB2YWx1ZSA9IEpTT04ucGFyc2Uob2xkVmFsdWUpOyAgICAgICAgICAgIFxyXG4gICAgICAgICB2YWx1ZS5wdXNoKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTonY29udGVudC1pZC0nKyh2YWx1ZS5sZW5ndGgrMSksXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTondGV4dCcsICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA6Jyd9LFxyXG4gICAgICAgICApICAgICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcnRpY2xlLWNvbnRlbnQtb2JqZWN0JyxkYXRhKTsgIFxyXG4gICAgICAgIHNldExpc3QodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYWRkUGhvdG8gPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG9sZFZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FydGljbGUtY29udGVudC1vYmplY3QnKTsgICAgICAgICBcclxuICAgICAgICBpZighb2xkVmFsdWUpIHJldHVybiAgICAgICAgXHJcbiAgICAgICAgbGV0IHZhbHVlID0gSlNPTi5wYXJzZShvbGRWYWx1ZSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgdmFsdWUucHVzaChcclxuICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAga2V5Oidjb250ZW50LWlkLScrKHZhbHVlLmxlbmd0aCsxKSxcclxuICAgICAgICAgICAgICAgICAgIHR5cGU6J3Bob3RvJywgXHJcbiAgICAgICAgICAgICAgICAgICB0aXRsZTonJyAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgKSAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJ0aWNsZS1jb250ZW50LW9iamVjdCcsZGF0YSk7ICBcclxuICAgICAgIHNldExpc3QodmFsdWUpO1xyXG4gICB9XHJcbiAgIGNvbnN0IGFkZExpbmsgPSAoKSA9PiB7XHJcbiAgICAgICBzZXRMaW5rTGlzdCggcHJlU3RhdGUgPT4gWy4uLnByZVN0YXRlLCdhJ10pXHJcbiAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FkZEcnPlxyXG4gICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ljb25mb250IGljb24tZmlsZS10ZXh0JyBvbkNsaWNrPXsgYWRkVGV4dCB9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ljb25mb250IGljb24taW1hZ2UnIG9uQ2xpY2s9eyBhZGRQaG90byB9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgIDwvbGk+ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ljb25mb250IGljb24tbGluaycgb25DbGljaz17YWRkTGlua30+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgPC9saT4gIFxyXG4gICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkRyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MXJlbSAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOi40cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS4yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSkgXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydENvbnRlbnRcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\release-article\\\\articleContent.js */"));
};

const AddG = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(({
  setList,
  setLinkList
}) => {
  const addText = () => {
    let oldValue = localStorage.getItem('article-content-object');
    if (!oldValue) return;
    let value = JSON.parse(oldValue);
    value.push({
      key: 'content-id-' + (value.length + 1),
      type: 'text',
      value: ''
    });
    let data = JSON.stringify(value);
    localStorage.setItem('article-content-object', data);
    setList(value);
  };

  const addPhoto = () => {
    let oldValue = localStorage.getItem('article-content-object');
    if (!oldValue) return;
    let value = JSON.parse(oldValue);
    value.push({
      key: 'content-id-' + (value.length + 1),
      type: 'photo',
      title: ''
    });
    let data = JSON.stringify(value);
    localStorage.setItem('article-content-object', data);
    setList(value);
  };

  const addLink = () => {
    setLinkList(preState => [...preState, 'a']);
  };

  return __jsx("div", {
    className: "jsx-1377131071" + " " + 'addG',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "jsx-1377131071",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 16
    }
  }, __jsx("li", {
    className: "jsx-1377131071",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 20
    }
  }, __jsx("i", {
    onClick: addText,
    className: "jsx-1377131071" + " " + 'iconfont icon-file-text',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 23
    }
  })), __jsx("li", {
    className: "jsx-1377131071",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 20
    }
  }, __jsx("i", {
    onClick: addPhoto,
    className: "jsx-1377131071" + " " + 'iconfont icon-image',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 23
    }
  })), __jsx("li", {
    className: "jsx-1377131071",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 20
    }
  }, __jsx("i", {
    onClick: addLink,
    className: "jsx-1377131071" + " " + 'iconfont icon-link',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 23
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1377131071",
    __self: undefined
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localstorage */ "./component/release-article/localstorage.js");
/* harmony import */ var _authorPhoto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authorPhoto */ "./component/release-article/authorPhoto.js");
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\release-article\\author.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Author = () => {
  const {
    0: TypeValue,
    1: setTypeValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const inputandchang = e => {
    let value = e.target.value;
    setTypeValue(value);
    localStorage.setItem('article-type', value);
  };

  const selectEvent = e => {
    // 选择文章类型事件
    let dom = e.target;
    if (dom.tagName !== 'H2') return;
    let seled = document.querySelector('.author h2.seled');
    if (seled) seled.classList.remove('seled');
    dom.classList.add('seled');
    setTypeValue(dom.textContent);
    localStorage.setItem('article-type', dom.textContent);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Object(_localstorage__WEBPACK_IMPORTED_MODULE_2__["setLocalValue"])("input[name='author-name']", 'author-name');
    Object(_localstorage__WEBPACK_IMPORTED_MODULE_2__["setLocalValue"])("input[name='article-title']", 'article-title'); //获取本地localstorage的信息

    let type = localStorage.getItem('article-type');
    let domList = Array.from(document.querySelectorAll('.author h2'));
    domList.map(e => e.textContent === type ? e.classList.add('seled') : null);
    if (type) setTypeValue(type);
  }, []);
  return __jsx("div", {
    className: "jsx-2083476103" + " " + 'row author  m-0',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2083476103" + " " + "col-10 offset-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2083476103" + " " + "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 20
    }
  }, __jsx("div", {
    className: "jsx-2083476103" + " " + "col-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 24
    }
  }, __jsx("h3", {
    className: "jsx-2083476103" + " " + "my-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 28
    }
  }, "AUTHOR"), __jsx("div", {
    className: "jsx-2083476103" + " " + " d-flex align-items-around",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 28
    }
  }, __jsx(_authorPhoto__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "jsx-2083476103" + " " + "author-message ml-4",
    __self: undefined,
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
    onChange: e => Object(_localstorage__WEBPACK_IMPORTED_MODULE_2__["setLocalstorage"])('author-name', e.target.value),
    className: "jsx-2083476103" + " " + 'h3 p-2 m-0',
    __self: undefined,
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
    onChange: e => Object(_localstorage__WEBPACK_IMPORTED_MODULE_2__["setLocalstorage"])('article-title', e.target.value),
    placeholder: " Article Title",
    className: "jsx-2083476103" + " " + 'h2 p-2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 37
    }
  })))), __jsx("div", {
    className: "jsx-2083476103" + " " + "col-12 mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 24
    }
  }, __jsx("ul", {
    onClick: selectEvent,
    className: "jsx-2083476103" + " " + 'row',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 28
    }
  }, __jsx("li", {
    className: "jsx-2083476103" + " " + 'col-auto text-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 32
    }
  }, __jsx("h2", {
    className: "jsx-2083476103" + " " + 'p-3',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }, "React")), __jsx("li", {
    className: "jsx-2083476103" + " " + 'col-auto text-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 32
    }
  }, __jsx("h2", {
    className: "jsx-2083476103" + " " + 'p-3',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 37
    }
  }, "Python")), __jsx("li", {
    className: "jsx-2083476103" + " " + 'col-auto text-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 32
    }
  }, __jsx("h2", {
    className: "jsx-2083476103" + " " + 'p-3',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 37
    }
  }, "Django")), __jsx("li", {
    className: "jsx-2083476103" + " " + 'col-auto text-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 32
    }
  }, __jsx("h2", {
    className: "jsx-2083476103" + " " + 'p-3',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 37
    }
  }, "Webpack")), __jsx("li", {
    className: "jsx-2083476103" + " " + 'col',
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 36
    }
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2083476103",
    __self: undefined
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\release-article\\authorPhoto.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const AuthorPhoto = () => {
  const {
    0: photo,
    1: setPhoto
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);

  const clickEv = e => {
    e.target.nextElementSibling.click();
  };

  const clickEv2 = e => {
    e.target.previousElementSibling.click();
  };

  const fileChange = e => {
    try {
      let file = e.target.files[0];
      let img = document.createElement('img');
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        document.querySelector('.photo-container').append(img);
        canvasFunc(img.offsetWidth, img.offsetHeight, img, setPhoto);
      };
    } catch (err) {
      console.log(err);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let openRequest = indexedDB.open('article-store', 2);

    openRequest.onupgradeneeded = () => {
      let db = openRequest.result;

      if (!db.objectStoreNames.contains('photoBuffer')) {
        db.createObjectStore('photoBuffer', {
          keyPath: 'name'
        });
      }
    };

    openRequest.onsuccess = async () => {
      let db = openRequest.result;
      let tx = db.transaction('photoBuffer');
      let store = tx.objectStore('photoBuffer');
      let photo = store.get('article-author-photo');

      photo.onsuccess = () => {
        if (photo.result) {
          setPhoto(photo.result.file);
        }
      };
    };

    return () => {
      URL.revokeObjectURL(photo);
    };
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !photo && __jsx("div", {
    onClick: clickEv,
    className: "jsx-2605298663" + " " + "file-upload-button",
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 12
    }
  }), __jsx("canvas", {
    id: "canvas",
    hidden: true,
    className: "jsx-2605298663",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 12
    }
  }), __jsx("canvas", {
    id: "canvas2",
    hidden: true,
    className: "jsx-2605298663",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 12
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2605298663",
    __self: undefined
  }, ".file-upload-button.jsx-2605298663{width:80px;height:80px;background:black;cursor:pointer;}img.jsx-2605298663{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxccmVsZWFzZS1hcnRpY2xlXFxhdXRob3JQaG90by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRXVCLEFBR2lDLEFBTUksV0FMSCxJQU1mLFFBTG9CLGlCQUNGLGVBQ2xCIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxccmVsZWFzZS1hcnRpY2xlXFxhdXRob3JQaG90by5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAseyB1c2VTdGF0ZSAsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBBdXRob3JQaG90byA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtwaG90bywgc2V0UGhvdG9dID0gdXNlU3RhdGUobnVsbClcclxuICAgXHJcbiAgICBjb25zdCBjbGlja0V2ID0gKGUpID0+IHtcclxuICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xpY2soKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tFdjIgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xpY2soKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZmlsZUNoYW5nZSA9IChlKSA9PiB7ICAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTsgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGltZyAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XHJcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBob3RvLWNvbnRhaW5lcicpLmFwcGVuZChpbWcpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBjYW52YXNGdW5jKGltZy5vZmZzZXRXaWR0aCxpbWcub2Zmc2V0SGVpZ2h0LGltZyxzZXRQaG90byk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9Y2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICAgIFxyXG4gICB9XHJcbiAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgb3BlblJlcXVlc3QgPSBpbmRleGVkREIub3BlbignYXJ0aWNsZS1zdG9yZScsMilcclxuICAgIG9wZW5SZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZGIgPSBvcGVuUmVxdWVzdC5yZXN1bHQ7XHJcbiAgICAgICAgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKCdwaG90b0J1ZmZlcicpKSB7XHJcbiAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKCdwaG90b0J1ZmZlcicsIHtrZXlQYXRoOiAnbmFtZSd9KTtcclxuICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgIH0gICAgIFxyXG4gICAgb3BlblJlcXVlc3Qub25zdWNjZXNzID1hc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRiID0gb3BlblJlcXVlc3QucmVzdWx0O1xyXG4gICAgICAgIGxldCB0eCA9IGRiLnRyYW5zYWN0aW9uKCdwaG90b0J1ZmZlcicpXHJcbiAgICAgICAgbGV0IHN0b3JlID0gdHgub2JqZWN0U3RvcmUoJ3Bob3RvQnVmZmVyJylcclxuICAgICAgICBsZXQgcGhvdG8gPSBzdG9yZS5nZXQoJ2FydGljbGUtYXV0aG9yLXBob3RvJylcclxuICAgICAgICBwaG90by5vbnN1Y2Nlc3MgPSAoKSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHBob3RvLnJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgc2V0UGhvdG8ocGhvdG8ucmVzdWx0LmZpbGUpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0gXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwocGhvdG8pO1xyXG4gICAgfVxyXG59LFtdKVxyXG4gIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICBcclxuICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAhcGhvdG8gJiYgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS11cGxvYWQtYnV0dG9uXCIgb25DbGljaz17Y2xpY2tFdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImF1dGhvci1waG90by1maWxlXCIgY2xhc3NOYW1lPSdkLW5vbmUnIG9uQ2hhbmdlPXtmaWxlQ2hhbmdlfS8+XHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICBwaG90byAmJiA8aW1nIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChwaG90byl9IGFsdD1cImF1dGhvci1waG90b1wiIG9uQ2xpY2s9e2NsaWNrRXYyfS8+XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG8tY29udGFpbmVyXCIgc3R5bGU9e3twb3NpdGlvbjonZml4ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6MCx0b3A6MCxcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OidoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJTZWxlY3Q6J25vbmUnICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9fT48L2Rpdj5cclxuICAgICAgICAgICA8Y2FudmFzIGlkPVwiY2FudmFzXCIgaGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICA8L2NhbnZhcz5cclxuICAgICAgICAgICA8Y2FudmFzIGlkPVwiY2FudmFzMlwiIGhpZGRlbiA+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIDwvY2FudmFzPlxyXG5cclxuICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgIC5maWxlLXVwbG9hZC1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgY2FudmFzRnVuYyA9IChXLEgsaW1nLGxvYWRQaG90bykgPT4ge1xyXG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuICAgIGxldCAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBsZXQgY291bnQgPSBNYXRoLm1pbihXLEgpO1xyXG4gICAgY2FudmFzLndpZHRoID0gY291bnQ7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gY291bnQ7XHJcbiAgICBsZXQgdyA9KE1hdGgubWF4KFcsSCktY291bnQpLzI7ICAgIFxyXG4gICAgVz5IP2N0eC5kcmF3SW1hZ2UoaW1nLC13LDApOiBjdHguZHJhd0ltYWdlKGltZywwLC13KTsgLy/oo4Hlh4/miJDkuIDmr5TkuIAgICAgXHJcbiAgICBsZXQgY3R4MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMyJykuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGNhbnZhczIud2lkdGggPSA4MDtcclxuICAgIGNhbnZhczIuaGVpZ2h0PSA4MDtcclxuICAgIGN0eDIuZHJhd0ltYWdlKGNhbnZhcywwLDAsODAsODApOyAgLy8g57yp5pS+5oiQNDBweCA0MHB4XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhczInKS50b0Jsb2IoKGJsb2IpID0+IHsgIC8vIOi+k+WHuuWbvueJh1xyXG4gICAgICAgXHJcbiAgICAgICBsZXQgbmFtZSA9ICdhdXRob3JQaG90by4nICsgYmxvYi50eXBlLnNsaWNlKDYsOSk7ICAgICAgIFxyXG4gICAgICAgbGV0IGZpbGUgPSBuZXcgRmlsZShbYmxvYl0sbmFtZSk7XHJcbiAgICAgICBcclxuICAgICAgIGxvYWRQaG90byhibG9iKVxyXG4gICAgICAgbGV0IG9wZW5SZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oJ2FydGljbGUtc3RvcmUnLDIpXHJcbiAgICAgICBvcGVuUmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgbGV0IERCID0gb3BlblJlcXVlc3QucmVzdWx0OyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICBsZXQgdHJhbnNhY3Rpb24gID0gIERCLnRyYW5zYWN0aW9uKCdwaG90b0J1ZmZlcicsJ3JlYWR3cml0ZScpO1xyXG4gICAgICAgICAgIGxldCBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKFwicGhvdG9CdWZmZXJcIik7IFxyXG4gICAgICAgICAgIGxldCBwaG90byA9IHN0b3JlLmdldCgnYXJ0aWNsZS1hdXRob3ItcGhvdG8nKVxyXG4gICAgICAgICAgIHBob3RvLm9uc3VjY2VzcyA9ICgpID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihwaG90by5yZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kZWxldGUoJ2FydGljbGUtYXV0aG9yLXBob3RvJykgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBidWZmZXJJdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6J2FydGljbGUtYXV0aG9yLXBob3RvJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZTpuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHJlcSA9IHN0b3JlLmFkZChidWZmZXJJdGVtKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXEub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5a2Y5Zu+54mHYnVmZmVyIOWksei0pScpOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxLmVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICB9ICAgXHJcbiAgICAvLyAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTsgICAgICAgXHJcbiAgICAvLyAgICBhLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpOyAgXHJcbiAgICAvLyAgICBhLmRvd25sb2FkID0gdHJ1ZTsgICBcclxuICAgIC8vICAgIGEuY2xpY2soKTsgICAgIFxyXG59LCdpbWFnZS9wbmcnKVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aG9yUGhvdG9cclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\release-article\\\\authorPhoto.js */"));
};

const canvasFunc = (W, H, img, loadPhoto) => {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let count = Math.min(W, H);
  canvas.width = count;
  canvas.height = count;
  let w = (Math.max(W, H) - count) / 2;
  W > H ? ctx.drawImage(img, -w, 0) : ctx.drawImage(img, 0, -w); //裁减成一比一    

  let ctx2 = document.getElementById('canvas2').getContext('2d');
  canvas2.width = 80;
  canvas2.height = 80;
  ctx2.drawImage(canvas, 0, 0, 80, 80); // 缩放成40px 40px

  document.getElementById('canvas2').toBlob(blob => {
    // 输出图片
    let name = 'authorPhoto.' + blob.type.slice(6, 9);
    let file = new File([blob], name);
    loadPhoto(blob);
    let openRequest = indexedDB.open('article-store', 2);

    openRequest.onsuccess = () => {
      let DB = openRequest.result;
      let transaction = DB.transaction('photoBuffer', 'readwrite');
      let store = transaction.objectStore("photoBuffer");
      let photo = store.get('article-author-photo');

      photo.onsuccess = () => {
        if (photo.result) {
          store.delete('article-author-photo');
        }

        let bufferItem = {
          name: 'article-author-photo',
          file,
          create: new Date()
        };
        let req = store.add(bufferItem);

        req.onerror = () => {
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\release-article\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Footer = () => {
  return __jsx("footer", {
    className: "jsx-919842634" + " " + 'row p-5 justify-content-center mx-0 ',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-919842634" + " " + "col-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 14
    }
  }, __jsx("h3", {
    className: "jsx-919842634",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 25
    }
  }, "2020 iconsquare All rights reserved")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "919842634",
    __self: undefined
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
const setLocalstorage = (key, value) => {
  localStorage.setItem(key, value);
};
const setLocalValue = (query, key) => {
  let Value = localStorage.getItem(key);
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\release-article\\photo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Photo = ({
  name,
  index,
  setState,
  title,
  state
}) => {
  const {
    0: File,
    1: setFile
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);

  const clickEv = e => {
    e.currentTarget.nextElementSibling.click();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let openRequest = indexedDB.open('article-store', 2);

    openRequest.onupgradeneeded = () => {
      let db = openRequest.result;

      if (!db.objectStoreNames.contains('photoBuffer')) {
        db.createObjectStore('photoBuffer', {
          keyPath: 'name'
        });
      }
    };

    openRequest.onsuccess = async () => {
      let db = openRequest.result;
      let tx = db.transaction('photoBuffer', 'readwrite');
      let store = tx.objectStore('photoBuffer');
      let photo = store.get(name);

      photo.onsuccess = () => {
        if (photo.result) {
          setFile(URL.createObjectURL(photo.result.file));
        }
      };
    };

    return () => {
      URL.revokeObjectURL(File);
    };
  }, []);

  const fileUp = e => {
    let file = e.target.files[0];
    let src = URL.createObjectURL(file);
    setFile(src);
    let openRequest = indexedDB.open('article-store', 2);

    openRequest.onsuccess = () => {
      let DB = openRequest.result;
      let transaction = DB.transaction('photoBuffer', 'readwrite');
      let store = transaction.objectStore("photoBuffer"); // (2)

      let bufferItem = {
        name,
        file,
        create: new Date()
      };
      let req = store.add(bufferItem);

      req.onsuccess = () => {
        console.log('存图片buffer 成功');
        console.log(req.result);
      };

      req.onerror = () => {
        console.log('存图片buffer 失败');
        console.log(req.error);
      };
    };
  };

  const clearFile = e => {
    //清楚file文件
    setFile(null);
    e.currentTarget.nextElementSibling.value = '';
  };

  const changValue = e => {
    // 更改图片标题事件
    let oldValue = localStorage.getItem('article-content-object');
    if (!oldValue) return;
    let mianData = JSON.parse(oldValue); // 根据输入的值 更新状态和localstorage！！

    mianData[index].title = e.target.value;
    localStorage.setItem('article-content-object', JSON.stringify(mianData));
    setState(mianData);
  };

  const deleteEv = index => {
    let newList = state.filter((e, Cindex) => Cindex !== index);
    setState(newList);
    localStorage.setItem('article-content-object', JSON.stringify(newList));
    let openRequest = indexedDB.open('article-store', 2);

    openRequest.onsuccess = () => {
      let DB = openRequest.result;
      let transaction = DB.transaction('photoBuffer', 'readwrite');
      let store = transaction.objectStore("photoBuffer"); // (2)              

      let req = store.delete(name);

      req.onsuccess = () => {
        console.log(name + 'delete 成功');
      };

      req.onerror = () => {
        console.log(name + 'delete 失败');
        console.log(req.error);
      };
    };
  };

  return __jsx("div", {
    className: "jsx-2814629420" + " " + "row content-item position-relative",
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 22
    }
  }) : __jsx("div", {
    onClick: clickEv,
    className: "jsx-2814629420" + " " + ' uploadRoot col-6 offset-3 d-flex justify-content-center align-items-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 112
    }
  }, __jsx("i", {
    className: "jsx-2814629420" + " " + 'iconfont icon-cloud-upload',
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }), __jsx("div", {
    onClick: () => deleteEv(index),
    className: "jsx-2814629420" + " " + "delete",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "jsx-2814629420" + " " + 'iconfont icon-trash-',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2814629420",
    __self: undefined
  }, ".content-item.jsx-2814629420{margin-bottom:5rem;}img.jsx-2814629420{width:100%;}.photo.jsx-2814629420{margin-bottom:3rem;}input[name='photo-title'].jsx-2814629420{height:6vh;width:50%;margin:0 auto;font-size:3rem;line-height:2;margin-bottom:5rem;}.uploadRoot.jsx-2814629420{height:20vh;}i.jsx-2814629420{font-size:8rem;height:8rem;cursor:pointer;-webkit-transition:.2s;transition:.2s;}i.jsx-2814629420:hover{font-size:9rem;height:9rem;}.delete.jsx-2814629420{position:absolute;right:-50px;top:50%;}.delete.jsx-2814629420 i.jsx-2814629420{background:none;color:black;font-size:2rem;}.delete.jsx-2814629420 i.jsx-2814629420:hover{background:black;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxccmVsZWFzZS1hcnRpY2xlXFxwaG90by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtSHlCLEFBR3NDLEFBR1IsQUFHUyxBQUdULEFBU0MsQUFHRyxBQU1ILEFBSU0sQUFNQSxBQUtBLFdBdENyQixBQU1hLENBU2IsR0FHZSxBQU1BLENBVUUsQ0FLQSxDQVhGLENBL0JmLEFBTUEsRUFJaUIsTUFZQyxBQU1sQixDQVVvQixDQUtwQixDQVhXLEtBckJPLEdBdUJsQixJQVhrQixDQWdCbEIsT0EzQmlCLGNBQ0ssZ0JBV3RCLEdBVEEiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxyZWxlYXNlLWFydGljbGVcXHBob3RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgUGhvdG8gPSAoeyBuYW1lLCBpbmRleCwgc2V0U3RhdGUsIHRpdGxlLCBzdGF0ZX0pID0+IHsgICAgXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBbRmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIGNvbnN0IGNsaWNrRXYgPSAoZSkgPT4ge1xyXG4gICAgICAgZS5jdXJyZW50VGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGljaygpXHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBvcGVuUmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKCdhcnRpY2xlLXN0b3JlJywyKVxyXG4gICAgICAgIG9wZW5SZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRiID0gb3BlblJlcXVlc3QucmVzdWx0O1xyXG4gICAgICAgICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoJ3Bob3RvQnVmZmVyJykpIHtcclxuICAgICAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKCdwaG90b0J1ZmZlcicsIHtrZXlQYXRoOiAnbmFtZSd9KTtcclxuICAgICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfSAgICAgXHJcbiAgICAgICAgb3BlblJlcXVlc3Qub25zdWNjZXNzID1hc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkYiA9IG9wZW5SZXF1ZXN0LnJlc3VsdDtcclxuICAgICAgICAgICAgbGV0IHR4ID0gZGIudHJhbnNhY3Rpb24oJ3Bob3RvQnVmZmVyJywncmVhZHdyaXRlJylcclxuICAgICAgICAgICAgbGV0IHN0b3JlID0gdHgub2JqZWN0U3RvcmUoJ3Bob3RvQnVmZmVyJylcclxuICAgICAgICAgICAgbGV0IHBob3RvID0gc3RvcmUuZ2V0KG5hbWUpICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBob3RvLm9uc3VjY2VzcyA9ICgpID0+IHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihwaG90by5yZXN1bHQpIHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEZpbGUoVVJMLmNyZWF0ZU9iamVjdFVSTChwaG90by5yZXN1bHQuZmlsZSkpO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKEZpbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW10pXHJcblxyXG4gICAgY29uc3QgZmlsZVVwID0gKGUpID0+IHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICAgICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XHJcbiAgICAgICAgICAgIHNldEZpbGUoc3JjKVxyXG4gICAgICAgICAgICBsZXQgb3BlblJlcXVlc3QgPSBpbmRleGVkREIub3BlbignYXJ0aWNsZS1zdG9yZScsMilcclxuICAgICAgICAgICAgb3BlblJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IERCID0gb3BlblJlcXVlc3QucmVzdWx0OyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCB0cmFuc2FjdGlvbiAgPSAgREIudHJhbnNhY3Rpb24oJ3Bob3RvQnVmZmVyJywncmVhZHdyaXRlJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShcInBob3RvQnVmZmVyXCIpOyAvLyAoMilcclxuICAgICAgICAgICAgICAgIGxldCBidWZmZXJJdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZSxcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGU6bmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCByZXEgPSBzdG9yZS5hZGQoYnVmZmVySXRlbSk7XHJcbiAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflrZjlm77niYdidWZmZXIg5oiQ5YqfJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxLnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXEub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5a2Y5Zu+54mHYnVmZmVyIOWksei0pScpOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxLmVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xlYXJGaWxlID0gKGUpID0+IHsgICAgICAgICAgLy/muIXmpZpmaWxl5paH5Lu2XHJcbiAgICAgICAgc2V0RmlsZShudWxsKTtcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnZhbHVlID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdWYWx1ZSA9IChlKSA9PiB7ICAgICAgLy8g5pu05pS55Zu+54mH5qCH6aKY5LqL5Lu2XHJcbiAgICAgICAgbGV0IG9sZFZhbHVlID0gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FydGljbGUtY29udGVudC1vYmplY3QnKSA7ICAgXHJcbiAgICAgICAgaWYoIW9sZFZhbHVlKSByZXR1cm4gIFxyXG4gICAgICAgIGxldCBtaWFuRGF0YSA9IEpTT04ucGFyc2Uob2xkVmFsdWUpICAgICAgICAgICAgICAgICAgLy8g5qC55o2u6L6T5YWl55qE5YC8IOabtOaWsOeKtuaAgeWSjGxvY2Fsc3RvcmFnZe+8ge+8gVxyXG4gICAgICAgIG1pYW5EYXRhW2luZGV4XS50aXRsZSA9IGUudGFyZ2V0LnZhbHVlOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FydGljbGUtY29udGVudC1vYmplY3QnLEpTT04uc3RyaW5naWZ5KG1pYW5EYXRhKSkgO1xyXG4gICAgICAgIHNldFN0YXRlKG1pYW5EYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVFdiA9IChpbmRleCkgPT4geyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBsZXQgbmV3TGlzdCA9IHN0YXRlLmZpbHRlciggKGUsQ2luZGV4KSA9PiBDaW5kZXggIT09IGluZGV4KVxyXG4gICAgICAgICAgc2V0U3RhdGUobmV3TGlzdCk7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJ0aWNsZS1jb250ZW50LW9iamVjdCcsSlNPTi5zdHJpbmdpZnkobmV3TGlzdCkpO1xyXG5cclxuICAgICAgICAgIGxldCBvcGVuUmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKCdhcnRpY2xlLXN0b3JlJywyKSAgICAgICAgICBcclxuICAgICAgICAgIG9wZW5SZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICBsZXQgREIgPSBvcGVuUmVxdWVzdC5yZXN1bHQ7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGxldCB0cmFuc2FjdGlvbiAgPSAgREIudHJhbnNhY3Rpb24oJ3Bob3RvQnVmZmVyJywncmVhZHdyaXRlJyk7XHJcbiAgICAgICAgICAgICAgbGV0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoXCJwaG90b0J1ZmZlclwiKTsgLy8gKDIpICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBsZXQgcmVxID0gc3RvcmUuZGVsZXRlKG5hbWUpO1xyXG4gICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5hbWUgKyAnZGVsZXRlIOaIkOWKnycpOyAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXEub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmFtZSArICdkZWxldGUg5aSx6LSlJyk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgfSAgICAgICAgICAgXHJcbiAgICAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbnRlbnQtaXRlbSBwb3NpdGlvbi1yZWxhdGl2ZVwiID5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob3RvLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nVmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgICBvbklucHV0PXtjaGFuZ1ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RpdGxlPyB0aXRsZSA6IG51bGx9IFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdweC00IHRleHQtY2VudGVyJy8+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIEZpbGUgPyA8aW1nIHNyYz17RmlsZX0gYWx0PVwiY29udGVudC1waG90b1wiIGNsYXNzTmFtZT0nY29sLTEyIHBob3RvJyBvbkRvdWJsZUNsaWNrPXtjbGVhckZpbGV9Lz46IDxkaXYgb25DbGljaz17Y2xpY2tFdn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nIHVwbG9hZFJvb3QgY29sLTYgb2Zmc2V0LTMgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbi1jbG91ZC11cGxvYWQnPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT17bmFtZSArICdmaWxlJ30gaWQ9e25hbWUgKyAnZmlsZSd9IGNsYXNzTmFtZT0nZC1ub25lJyBvbkNoYW5nZT17ZmlsZVVwfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVsZXRlXCIgb25DbGljaz17KCkgPT4gZGVsZXRlRXYoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ljb25mb250IGljb24tdHJhc2gtJz48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeD4ge2BcclxuICAgICAgICAgICAgLmNvbnRlbnQtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjVyZW07XHJcbiAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlOyAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAucGhvdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206M3JlbTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBpbnB1dFtuYW1lPSdwaG90by10aXRsZSddIHtcclxuICAgICAgICAgICAgICAgICAgIGhlaWdodDo2dmg7XHJcbiAgICAgICAgICAgICAgICAgICB3aWR0aDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDoyO1xyXG4gICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1cmVtO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAudXBsb2FkUm9vdCB7XHJcbiAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjB2aDsgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICBmb250LXNpemU6OHJlbTtcclxuICAgICAgICAgICAgICAgICAgIGhlaWdodDo4cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOi4ycztcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBpOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTo5cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgaGVpZ2h0OjlyZW07XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLmRlbGV0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgIHJpZ2h0Oi01MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAuZGVsZXRlIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToycmVtOyAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAuZGVsZXRlIGk6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6YmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlOyAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaG90b1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\release-article\\\\photo.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Photo);

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

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
  return (href, as) => {
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
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
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

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
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

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
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

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
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
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
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
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

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
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
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

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
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
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
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

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
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
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
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

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
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

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
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

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
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


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

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

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

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

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

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
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
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
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
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
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
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

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
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

/***/ "./pages/release-article.js":
/*!**********************************!*\
  !*** ./pages/release-article.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_public_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/public/nav */ "./component/public/nav.js");
/* harmony import */ var _component_release_article_author__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/release-article/author */ "./component/release-article/author.js");
/* harmony import */ var _component_release_article_articleContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/release-article/articleContent */ "./component/release-article/articleContent.js");
/* harmony import */ var _component_release_article_about__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/release-article/about */ "./component/release-article/about.js");
/* harmony import */ var _component_release_article_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/release-article/footer */ "./component/release-article/footer.js");
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\pages\\release-article.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const Home = () => {
  const uploadData = async data => {
    try {
      const QURL = "http://localhost:4040/" + "addArticle/add";
      let res = await fetch(QURL, {
        method: "POST",
        body: data
      });
      let result = await res.json();

      if (res.ok) {
        let keys = Object.keys(localStorage);

        for (let key of keys) {
          if (key !== "author-name" && key !== "article-key") {
            localStorage.removeItem(key);
          }
        }

        let openRequest = indexedDB.open("article-store", 2);

        openRequest.onsuccess = async () => {
          let db = openRequest.result;
          let tx = db.transaction("photoBuffer", "readwrite");
          let store = tx.objectStore("photoBuffer");
          let keys = store.getAllKeys();

          keys.onsuccess = () => {
            keys.result.map(key => {
              if (key !== "article-author-photo") {
                store.delete(key);
                console.log("delete");
              }
            });
            window.location.reload();
          };
        };
      } else {
        alert(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const submitForm = e => {
    e.preventDefault();
    let data = new FormData(e.target);
    let content = localStorage.getItem("article-content-object");
    let fileList = JSON.parse(content).filter(item => item.type === "photo");
    fileList.push({
      key: "article-author-photo"
    });
    let openRequest = indexedDB.open("article-store", 2);

    openRequest.onsuccess = async () => {
      let db = openRequest.result;
      let tx = db.transaction("photoBuffer");
      let store = tx.objectStore("photoBuffer");
      let reqs = fileList.map(item => new Promise((resolve, reject) => {
        let photo = store.get(item.key);

        photo.onsuccess = () => {
          if (photo.result) {
            resolve({
              file: photo.result.file,
              name: item.key
            });
          } else {
            reject("有一个图片板块没有文件。请上传或是删除点这个板块");
          }
        };
      }));
      Promise.all(reqs).then(items => {
        items.map(item => {
          data.append(item.name, item.file);
        });
        data.append("article-content-main", content);
        data.append("link-count", LinkList.length);
        uploadData(data);
      }).catch(alert);
    };
  };

  const {
    0: LinkList,
    1: setLinkList
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(["a"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-680210942",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "//at.alicdn.com/t/font_1748919_7p01375xskx.css",
    className: "jsx-680210942",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-680210942" + " " + "container-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx("nav", {
    className: "jsx-680210942",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx(_component_public_nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "article-bg.jpg",
    alt: "bg",
    className: "jsx-680210942",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }))), __jsx("form", {
    onSubmit: submitForm,
    className: "jsx-680210942",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx(_component_release_article_author__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }), __jsx(_component_release_article_articleContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setLinkList: setLinkList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }), __jsx(_component_release_article_about__WEBPACK_IMPORTED_MODULE_6__["default"], {
    List: LinkList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  })), __jsx(_component_release_article_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "680210942",
    __self: undefined
  }, "*,body{margin:0;padding:0;box-sizing:border-box;}html{font-size:10px;}.container-fluid{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxyZWxlYXNlLWFydGljbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0h5QixBQUlvQixBQUtNLEFBR0wsU0FQQSxDQVFaLEtBSEEsSUFKd0Isc0JBQ3hCIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxyZWxlYXNlLWFydGljbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnQvcHVibGljL25hdlwiO1xyXG5pbXBvcnQgQXV0aG9yIGZyb20gXCIuLi9jb21wb25lbnQvcmVsZWFzZS1hcnRpY2xlL2F1dGhvclwiO1xyXG5pbXBvcnQgQXJ0Q29udGVudCBmcm9tIFwiLi4vY29tcG9uZW50L3JlbGVhc2UtYXJ0aWNsZS9hcnRpY2xlQ29udGVudFwiO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4uL2NvbXBvbmVudC9yZWxlYXNlLWFydGljbGUvYWJvdXRcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50L3JlbGVhc2UtYXJ0aWNsZS9mb290ZXJcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdXBsb2FkRGF0YSA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBRVVJMID0gcHJvY2Vzcy5lbnYuREFUQV9VUkwgKyBcImFkZEFydGljbGUvYWRkXCI7XHJcbiAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaChRVVJMLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBkYXRhLFxyXG4gICAgICB9KTtcclxuICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSk7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGtleXMpIHtcclxuICAgICAgICAgIGlmIChrZXkgIT09IFwiYXV0aG9yLW5hbWVcIiAmJiBrZXkgIT09IFwiYXJ0aWNsZS1rZXlcIikge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb3BlblJlcXVlc3QgPSBpbmRleGVkREIub3BlbihcImFydGljbGUtc3RvcmVcIiwgMik7XHJcbiAgICAgICAgb3BlblJlcXVlc3Qub25zdWNjZXNzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgbGV0IGRiID0gb3BlblJlcXVlc3QucmVzdWx0O1xyXG4gICAgICAgICAgbGV0IHR4ID0gZGIudHJhbnNhY3Rpb24oXCJwaG90b0J1ZmZlclwiLCBcInJlYWR3cml0ZVwiKTtcclxuICAgICAgICAgIGxldCBzdG9yZSA9IHR4Lm9iamVjdFN0b3JlKFwicGhvdG9CdWZmZXJcIik7XHJcbiAgICAgICAgICBsZXQga2V5cyA9IHN0b3JlLmdldEFsbEtleXMoKTtcclxuICAgICAgICAgIGtleXMub25zdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBrZXlzLnJlc3VsdC5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChrZXkgIT09IFwiYXJ0aWNsZS1hdXRob3ItcGhvdG9cIikge1xyXG4gICAgICAgICAgICAgICAgc3RvcmUuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZVwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQocmVzdWx0KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XHJcbiAgICBsZXQgY29udGVudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXJ0aWNsZS1jb250ZW50LW9iamVjdFwiKTtcclxuXHJcbiAgICBsZXQgZmlsZUxpc3QgPSBKU09OLnBhcnNlKGNvbnRlbnQpLmZpbHRlcigoaXRlbSkgPT4gaXRlbS50eXBlID09PSBcInBob3RvXCIpO1xyXG4gICAgZmlsZUxpc3QucHVzaCh7XHJcbiAgICAgIGtleTogXCJhcnRpY2xlLWF1dGhvci1waG90b1wiLFxyXG4gICAgfSk7XHJcbiAgICBsZXQgb3BlblJlcXVlc3QgPSBpbmRleGVkREIub3BlbihcImFydGljbGUtc3RvcmVcIiwgMik7XHJcbiAgICBvcGVuUmVxdWVzdC5vbnN1Y2Nlc3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGxldCBkYiA9IG9wZW5SZXF1ZXN0LnJlc3VsdDtcclxuICAgICAgbGV0IHR4ID0gZGIudHJhbnNhY3Rpb24oXCJwaG90b0J1ZmZlclwiKTtcclxuICAgICAgbGV0IHN0b3JlID0gdHgub2JqZWN0U3RvcmUoXCJwaG90b0J1ZmZlclwiKTtcclxuICAgICAgbGV0IHJlcXMgPSBmaWxlTGlzdC5tYXAoXHJcbiAgICAgICAgKGl0ZW0pID0+XHJcbiAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwaG90byA9IHN0b3JlLmdldChpdGVtLmtleSk7XHJcbiAgICAgICAgICAgIHBob3RvLm9uc3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocGhvdG8ucmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgZmlsZTogcGhvdG8ucmVzdWx0LmZpbGUsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ua2V5LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChcIuacieS4gOS4quWbvueJh+adv+Wdl+ayoeacieaWh+S7tuOAguivt+S4iuS8oOaIluaYr+WIoOmZpOeCuei/meS4quadv+Wdl1wiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXFzKVxyXG4gICAgICAgIC50aGVuKChpdGVtcykgPT4ge1xyXG4gICAgICAgICAgaXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKGl0ZW0ubmFtZSwgaXRlbS5maWxlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZGF0YS5hcHBlbmQoXCJhcnRpY2xlLWNvbnRlbnQtbWFpblwiLCBjb250ZW50KTtcclxuICAgICAgICAgIGRhdGEuYXBwZW5kKFwibGluay1jb3VudFwiLCBMaW5rTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgdXBsb2FkRGF0YShkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChhbGVydCk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtMaW5rTGlzdCwgc2V0TGlua0xpc3RdID0gdXNlU3RhdGUoW1wiYVwiXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+57yW5YaZ5paH56ugPC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANC40LjEvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LVZrb284eDRDR3NPMytIaHh2OFQvUTVQYVh0a0t0dTZ1ZzVUT2VOVjZnQmlGZVdQR0ZOOU11aE9mMjNROUlmamhcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTc0ODkxOV83cDAxMzc1eHNreC5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvbG9nby5qcGdcIiB0eXBlPVwiaW1hZ2UveC1pY29uXCI+PC9saW5rPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDxOYXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiYXJ0aWNsZS1iZy5qcGdcIiBhbHQ9XCJiZ1wiIC8+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0Rm9ybX0+XHJcbiAgICAgICAgICA8QXV0aG9yIC8+XHJcblxyXG4gICAgICAgICAgPEFydENvbnRlbnQgc2V0TGlua0xpc3Q9e3NldExpbmtMaXN0fSAvPlxyXG5cclxuICAgICAgICAgIDxBYm91dCBMaXN0PXtMaW5rTGlzdH0gLz5cclxuICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICosXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\pages\\\\release-article.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!****************************************!*\
  !*** multi ./pages/release-article.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\newlife\newSite\my-app\pages\release-article.js */"./pages/release-article.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=release-article.js.map