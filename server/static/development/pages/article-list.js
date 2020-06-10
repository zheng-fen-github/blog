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

/***/ "./component/articleList/contentList.js":
/*!**********************************************!*\
  !*** ./component/articleList/contentList.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_anima__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/anima */ "./component/public/anima.js");
/* harmony import */ var _public_getPhoto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/getPhoto */ "./component/public/getPhoto.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page */ "./component/articleList/page.js");
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\articleList\\contentList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const ContentList = ({
  setState,
  type,
  state,
  loading,
  count
}) => {
  return __jsx("div", {
    className: "jsx-3390328514" + " " + "row m-0 article-list-root",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, state.map(item => __jsx("div", {
    key: item._id,
    className: "jsx-3390328514" + " " + "col-12 col-md-10 mx-auto my-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(Item, {
    content: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }))), state.length === 0 && __jsx("div", {
    className: "jsx-3390328514" + " " + "col-12 col-md-10 mx-auto  my-5 not-article-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3390328514" + " " + "row justify-content-center align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, loading ? __jsx(_public_anima__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }) : __jsx("h1", {
    className: "jsx-3390328514" + " " + "col-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, " \u6CA1\u6709\u76F8\u5173\u6587\u7AE0 "))), count > 10 && __jsx(_page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: type,
    count: count,
    setState: setState,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 22
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3390328514",
    __self: undefined
  }, ".not-article-container.jsx-3390328514 .row.jsx-3390328514{height:50vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZUxpc3RcXGNvbnRlbnRMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCUyxBQUd5QixZQUNkIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZUxpc3RcXGNvbnRlbnRMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vcHVibGljL2FuaW1hXCI7XHJcbmltcG9ydCBQaG90byBmcm9tIFwiLi4vcHVibGljL2dldFBob3RvXCI7XHJcbmltcG9ydCBQYWdlIGZyb20gXCIuL3BhZ2VcIjtcclxuXHJcbmNvbnN0IENvbnRlbnRMaXN0ID0gKHsgc2V0U3RhdGUsIHR5cGUsIHN0YXRlLCBsb2FkaW5nLCBjb3VudCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG0tMCBhcnRpY2xlLWxpc3Qtcm9vdFwiPlxyXG4gICAgICB7c3RhdGUubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTEwIG14LWF1dG8gbXktNVwiIGtleT17aXRlbS5faWR9PlxyXG4gICAgICAgICAgPEl0ZW0gY29udGVudD17aXRlbX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIHtzdGF0ZS5sZW5ndGggPT09IDAgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0xMCBteC1hdXRvICBteS01IG5vdC1hcnRpY2xlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29sLWF1dG9cIj4g5rKh5pyJ55u45YWz5paH56ugIDwvaDE+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAge2NvdW50ID4gMTAgJiYgPFBhZ2UgdHlwZT17dHlwZX0gY291bnQ9e2NvdW50fSBzZXRTdGF0ZT17c2V0U3RhdGV9IC8+fVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubm90LWFydGljbGUtY29udGFpbmVyIC5yb3cge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBJdGVtID0gKHsgY29udGVudCB9KSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBTdHJpbmcobmV3IERhdGUoTnVtYmVyKGNvbnRlbnQuY3JlYXRlVGltZSkpKTtcclxuICBsZXQgaWQgPSBjb250ZW50LkFydGljbGVDb250ZW50LmZpbmQoKGl0ZW0pID0+IGl0ZW0udHlwZSA9PT0gXCJwaG90b1wiKTtcclxuICBsZXQgcGF0aCA9IGlkID8gaWQuZmlsZVBhdGggOiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInR5cGVcIj57Y29udGVudC5BcnRpY2xlVHlwZX08L2g0PlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIG15LTVcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj17XCIvYXJ0aWNsZT9pZD1cIiArIGNvbnRlbnQuX2lkfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICB7Y29udGVudC5BcnRpY2xlVGl0bGV9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY3JlYXRlLXRpbWVcIj5cclxuICAgICAgICAgICAge3RpbWUuc2xpY2UoMCwgMTApICsgXCIsXCIgKyB0aW1lLnNsaWNlKDEwLCAxNSl9XHJcbiAgICAgICAgICA8L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBoLTEwMFwiPlxyXG4gICAgICAgICAgICA8UGhvdG8gaWQ9e1wiYWRkQXJ0aWNsZS9nb3RBcnRpY2xlUGhvdG8vXCIgKyBwYXRofSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuY29sLTEyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0ZjczOGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlNjVlMmM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgICAgICAgY29sb3I6ICM4NzhjOGI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50TGlzdDtcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\articleList\\\\contentList.js */"));
};

const Item = ({
  content
}) => {
  let time = String(new Date(Number(content.createTime)));
  let id = content.ArticleContent.find(item => item.type === "photo");
  let path = id ? id.filePath : null;
  return __jsx("div", {
    className: "jsx-4228235842" + " " + "col-12 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-4228235842" + " " + "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-4228235842" + " " + "col-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("h4", {
    className: "jsx-4228235842" + " " + "type",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, content.ArticleType), __jsx("h3", {
    className: "jsx-4228235842" + " " + "title my-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "/article?id=" + content._id,
    target: "_blank",
    className: "jsx-4228235842",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, content.ArticleTitle)), __jsx("h4", {
    className: "jsx-4228235842" + " " + "create-time",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, time.slice(0, 10) + "," + time.slice(10, 15))), __jsx("div", {
    className: "jsx-4228235842" + " " + "col-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-4228235842" + " " + "row align-items-center h-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(_public_getPhoto__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "addArticle/gotArticlePhoto/" + path,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4228235842",
    __self: undefined
  }, ".col-12.jsx-4228235842{border-bottom:2px solid #eaeaea;padding-bottom:5rem;}img.jsx-4228235842{width:100%;}a.jsx-4228235842{color:#4f738d;}a.jsx-4228235842:hover{color:#e65e2c;}h3.jsx-4228235842{font-size:3rem;}h4.jsx-4228235842{font-size:2rem;margin:1rem 0;color:#878c8b;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZUxpc3RcXGNvbnRlbnRMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEUyxBQUc2QyxBQUlyQixBQUdHLEFBR0EsQUFHQyxBQUdBLFdBWGpCLEdBR0EsQUFHQSxDQUdBLEFBR2dCLGNBQ0EsR0FqQk0sV0FrQnRCLFNBakJBIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZUxpc3RcXGNvbnRlbnRMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vcHVibGljL2FuaW1hXCI7XHJcbmltcG9ydCBQaG90byBmcm9tIFwiLi4vcHVibGljL2dldFBob3RvXCI7XHJcbmltcG9ydCBQYWdlIGZyb20gXCIuL3BhZ2VcIjtcclxuXHJcbmNvbnN0IENvbnRlbnRMaXN0ID0gKHsgc2V0U3RhdGUsIHR5cGUsIHN0YXRlLCBsb2FkaW5nLCBjb3VudCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG0tMCBhcnRpY2xlLWxpc3Qtcm9vdFwiPlxyXG4gICAgICB7c3RhdGUubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTEwIG14LWF1dG8gbXktNVwiIGtleT17aXRlbS5faWR9PlxyXG4gICAgICAgICAgPEl0ZW0gY29udGVudD17aXRlbX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIHtzdGF0ZS5sZW5ndGggPT09IDAgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0xMCBteC1hdXRvICBteS01IG5vdC1hcnRpY2xlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29sLWF1dG9cIj4g5rKh5pyJ55u45YWz5paH56ugIDwvaDE+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAge2NvdW50ID4gMTAgJiYgPFBhZ2UgdHlwZT17dHlwZX0gY291bnQ9e2NvdW50fSBzZXRTdGF0ZT17c2V0U3RhdGV9IC8+fVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubm90LWFydGljbGUtY29udGFpbmVyIC5yb3cge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBJdGVtID0gKHsgY29udGVudCB9KSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBTdHJpbmcobmV3IERhdGUoTnVtYmVyKGNvbnRlbnQuY3JlYXRlVGltZSkpKTtcclxuICBsZXQgaWQgPSBjb250ZW50LkFydGljbGVDb250ZW50LmZpbmQoKGl0ZW0pID0+IGl0ZW0udHlwZSA9PT0gXCJwaG90b1wiKTtcclxuICBsZXQgcGF0aCA9IGlkID8gaWQuZmlsZVBhdGggOiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInR5cGVcIj57Y29udGVudC5BcnRpY2xlVHlwZX08L2g0PlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIG15LTVcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj17XCIvYXJ0aWNsZT9pZD1cIiArIGNvbnRlbnQuX2lkfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICB7Y29udGVudC5BcnRpY2xlVGl0bGV9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY3JlYXRlLXRpbWVcIj5cclxuICAgICAgICAgICAge3RpbWUuc2xpY2UoMCwgMTApICsgXCIsXCIgKyB0aW1lLnNsaWNlKDEwLCAxNSl9XHJcbiAgICAgICAgICA8L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBoLTEwMFwiPlxyXG4gICAgICAgICAgICA8UGhvdG8gaWQ9e1wiYWRkQXJ0aWNsZS9nb3RBcnRpY2xlUGhvdG8vXCIgKyBwYXRofSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuY29sLTEyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0ZjczOGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlNjVlMmM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgICAgICAgY29sb3I6ICM4NzhjOGI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50TGlzdDtcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\articleList\\\\contentList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ContentList);

/***/ }),

/***/ "./component/articleList/footer.js":
/*!*****************************************!*\
  !*** ./component/articleList/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\articleList\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Footer = () => {
  const {
    0: status,
    1: setstatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const lookHeightFunc = () => {
    let winH = window.innerHeight;
    let domH = document.documentElement.offsetHeight;

    if (winH > domH) {
      setstatus(true);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    lookHeightFunc();
  }, []);
  return __jsx("footer", {
    className: "jsx-20588762" + " " + `row mx-0 p-0 ${status ? "bottom" : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-20588762" + " " + "col-12 py-5 mx-0 text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "jsx-20588762",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "2020 Have a good night")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "20588762",
    __self: undefined
  }, "footer.jsx-20588762{background:#326fa0;color:white;margin-top:10%;width:100%;}.bottom.jsx-20588762{position:fixed;bottom:0;left:0;z-index:100;}h3.jsx-20588762{font-size:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZUxpc3RcXGZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQlMsQUFHZ0MsQUFNSixBQU1BLGVBTE4sQUFNWCxJQVpjLEtBT0wsT0FOUSxBQU9ILFlBQ2QsR0FQYSxXQUNiIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZUxpc3RcXGZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0c3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBsb29rSGVpZ2h0RnVuYyA9ICgpID0+IHtcclxuICAgIGxldCB3aW5IID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgbGV0IGRvbUggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgaWYgKHdpbkggPiBkb21IKSB7XHJcbiAgICAgIHNldHN0YXR1cyh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb29rSGVpZ2h0RnVuYygpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e2Byb3cgbXgtMCBwLTAgJHtzdGF0dXMgPyBcImJvdHRvbVwiIDogXCJcIn1gfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcHktNSBteC0wIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPGgzPjIwMjAgSGF2ZSBhIGdvb2QgbmlnaHQ8L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzMyNmZhMDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJvdHRvbSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\articleList\\\\footer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./component/articleList/minNav.js":
/*!*****************************************!*\
  !*** ./component/articleList/minNav.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _minNav_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minNav.module.css */ "./component/articleList/minNav.module.css");
/* harmony import */ var _minNav_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_minNav_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\articleList\\minNav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const MinNav = ({
  setState,
  setLoad,
  setType,
  list,
  oldState,
  setPage
}) => {
  let dom = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  const updateShow = async e => {
    try {
      let activeDom = e.target.closest("li");
      if (!activeDom) return;
      let oldDom = dom.current;
      if (oldDom) oldDom.classList.remove("seled");
      let type = activeDom.children[0].textContent;

      if (type === "All") {
        setState(oldState.data);
        setPage(oldState.count);
        setType(null);
        return;
      }

      activeDom.classList.add("seled"); //选中的元素添加样式

      dom.current = activeDom;
      setState([]); //搜索指定文章

      setLoad(true);
      let data = await gotData(type);

      if (Array.isArray(data.data)) {
        setState(data.data);
        setPage(data.count);
        setType(type);
      }

      setLoad(false);
    } catch (err) {
      if (err) console.log(err);
      console.log("列表元素样式切换失败");
    }
  };

  const OpenSearch = async e => {
    e.stopPropagation();
    setSeatchstatus(true);
  };

  const gotData = async type => {
    try {
      const RURL = "http://localhost:4040/" + "addArticle/gotArticle/type/" + type + "?page=1";
      let res = await fetch(RURL);
      let result = await res.json();
      return result;
    } catch (err) {
      console.log(err);
      return {
        err
      };
    }
  };

  const {
    0: SeatchValue,
    1: setSeatchValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");

  const setValue = e => setSeatchValue(e.target.value);

  const {
    0: Seatchstatus,
    1: setSeatchstatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const searchEvent = async () => {
    if (SeatchValue === "") return;
    const RURL = "http://localhost:4040/" + "addArticle/gotArticle/search/" + SeatchValue;
    setState([]);
    setLoad(true);
    let res = await fetch(RURL);
    let result = await res.json();
    setState(result.data);
    setPage(result.length);
    setType("");
    setLoad(false);
    console.log(result);
  };

  return __jsx("div", {
    className: "jsx-2872888197" + " " + "row min-nav-ctn m-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2872888197" + " " + "col-12 .col-md-11 min-nav  p-5 pffset-0 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("ul", {
    onClick: updateShow,
    className: "jsx-2872888197" + " " + "d-flex m-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, list.map((type, index) => __jsx("li", {
    key: index,
    className: "jsx-2872888197",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "jsx-2872888197",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, type))), __jsx("li", {
    className: "jsx-2872888197",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-2872888197",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "All")), __jsx("li", {
    onClick: OpenSearch,
    className: "jsx-2872888197",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-2872888197",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "jsx-2872888197" + " " + "iconfont icon-search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "jsx-2872888197" + " " + `searchCtn ${Seatchstatus ? "openSearchCtn" : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    value: SeatchValue,
    onInput: setValue,
    onChange: setValue,
    className: "jsx-2872888197",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }), __jsx("button", {
    type: "button",
    onClick: searchEvent,
    className: "jsx-2872888197",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, "\u641C\u7D22"), __jsx("button", {
    type: "button",
    onClick: () => setSeatchstatus(false),
    className: "jsx-2872888197" + " " + "close-search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx("svg", {
    t: "1591706026501",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "3269",
    width: "20",
    height: "20",
    className: "jsx-2872888197",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M571.7 514.1l164.9-164.9c16.3-16.3 16.3-43.1 0-59.4-16.3-16.3-43.1-16.3-59.4 0L512.3 454.7 347.4 289.8c-16.3-16.3-43.1-16.3-59.4 0-16.3 16.3-16.3 43.1 0 59.4l164.9 164.9L288 679c-16.3 16.3-16.3 43.1 0 59.4 16.3 16.3 43.1 16.3 59.4 0l164.9-164.9 164.9 164.9c16.3 16.3 43.1 16.3 59.4 0 16.3-16.3 16.3-43.1 0-59.4L571.7 514.1z",
    "p-id": "3270",
    className: "jsx-2872888197",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2872888197",
    __self: undefined
  }, ".min-nav.jsx-2872888197{color:white;background:black;position:relative;z-index:10;}.searchCtn.jsx-2872888197{width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:aqua;margin:20px auto 0 auto;box-shadow:0 0 6px rgba(0,0,0,0.1);-webkit-transform:translateY(-200%);-ms-transform:translateY(-200%);transform:translateY(-200%);-webkit-transition:0.5s;transition:0.5s;}.openSearchCtn.jsx-2872888197{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.searchCtn.jsx-2872888197 input.jsx-2872888197{-webkit-flex:1;-ms-flex:1;flex:1;font-size:2rem;padding:1rem;border:2px solid black;}.searchCtn.jsx-2872888197 button.jsx-2872888197{color:white;background-color:black;border:none;padding:1rem 2rem;text-align:center;}.searchCtn.jsx-2872888197 .close-search.jsx-2872888197{background-color:white;}.searchCtn.jsx-2872888197 .close-search.jsx-2872888197:hover{background-color:black;}@media (max-width:960px){.searchCtn.jsx-2872888197 input.jsx-2872888197{font-size:4rem;}.searchCtn.jsx-2872888197{width:80%;}}ul.jsx-2872888197{list-style:none;}li.jsx-2872888197{-webkit-flex:1;-ms-flex:1;flex:1;cursor:pointer;-webkit-transition:0.4s;transition:0.4s;text-align:center;}li.jsx-2872888197:hover,li.seled.jsx-2872888197{opacity:0.5;-webkit-transform:translateY(-25%);-ms-transform:translateY(-25%);transform:translateY(-25%);}h3.jsx-2872888197{font-size:2.5rem;text-align:center;}i.jsx-2872888197{font-size:2.5rem;}i.active.jsx-2872888197{color:#133d93;}@media (max-width:980px){.min-nav.jsx-2872888197{-webkit-transform:translateY(00%);-ms-transform:translateY(00%);transform:translateY(00%);}}@media (max-width:1100px){.search-input.jsx-2872888197 input.jsx-2872888197{font-size:1.2rem;}}@media (max-width:800px){h3.jsx-2872888197{font-size:2rem;}}@media (max-width:400px){h3.jsx-2872888197{font-size:1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZUxpc3RcXG1pbk5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SFMsQUFHeUIsQUFPRixBQVNjLEFBR2pCLEFBTUssQUFPVyxBQUdBLEFBSU4sQUFHTCxBQUlJLEFBR1QsQUFPSyxBQUlLLEFBSUEsQUFHSCxBQUljLEFBS1QsQUFLRixBQUtBLFVBOUVKLEFBbUNiLEVBMUNpQixBQXlCTSxBQStCSSxFQVc3QixDQTVCRSxBQTBDQSxBQUtBLENBeENGLENBY29CLEFBSXBCLEFBWUUsTUE1Q0YsQUFHQSxNQWxDb0IsSUFrQkgsQUE4QkEsRUF2QkgsQUFtQ2QsWUEzRGEsQUF5Qk8sQ0FQTCxBQThCRyxVQS9DbEIsR0FrQnlCLElBT0wsa0JBQ3BCLENBckJ3QixBQVF4QixBQU1BLElBNkJvQixFQW9CbEIsZUFkRixDQWhEMEIsQUEyQzFCLHdCQTFDd0MsbUNBQ1YsZ0dBQ1osd0NBQ2xCIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZUxpc3RcXG1pbk5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbWluTmF2Lm1vZHVsZS5jc3NcIjtcclxuY29uc3QgTWluTmF2ID0gKHsgc2V0U3RhdGUsIHNldExvYWQsIHNldFR5cGUsIGxpc3QsIG9sZFN0YXRlLCBzZXRQYWdlIH0pID0+IHtcclxuICBsZXQgZG9tID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgdXBkYXRlU2hvdyA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgYWN0aXZlRG9tID0gZS50YXJnZXQuY2xvc2VzdChcImxpXCIpO1xyXG4gICAgICBpZiAoIWFjdGl2ZURvbSkgcmV0dXJuO1xyXG4gICAgICBsZXQgb2xkRG9tID0gZG9tLmN1cnJlbnQ7XHJcbiAgICAgIGlmIChvbGREb20pIG9sZERvbS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWRcIik7XHJcbiAgICAgIGxldCB0eXBlID0gYWN0aXZlRG9tLmNoaWxkcmVuWzBdLnRleHRDb250ZW50O1xyXG4gICAgICBpZiAodHlwZSA9PT0gXCJBbGxcIikge1xyXG4gICAgICAgIHNldFN0YXRlKG9sZFN0YXRlLmRhdGEpO1xyXG4gICAgICAgIHNldFBhZ2Uob2xkU3RhdGUuY291bnQpO1xyXG4gICAgICAgIHNldFR5cGUobnVsbCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGFjdGl2ZURvbS5jbGFzc0xpc3QuYWRkKFwic2VsZWRcIik7IC8v6YCJ5Lit55qE5YWD57Sg5re75Yqg5qC35byPXHJcbiAgICAgIGRvbS5jdXJyZW50ID0gYWN0aXZlRG9tO1xyXG5cclxuICAgICAgc2V0U3RhdGUoW10pOyAvL+aQnOe0ouaMh+WumuaWh+eroFxyXG4gICAgICBzZXRMb2FkKHRydWUpO1xyXG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IGdvdERhdGEodHlwZSk7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuZGF0YSkpIHtcclxuICAgICAgICBzZXRTdGF0ZShkYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldFBhZ2UoZGF0YS5jb3VudCk7XHJcbiAgICAgICAgc2V0VHlwZSh0eXBlKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRMb2FkKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoZXJyKSBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIuWIl+ihqOWFg+e0oOagt+W8j+WIh+aNouWksei0pVwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IE9wZW5TZWFyY2ggPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHNldFNlYXRjaHN0YXR1cyh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnb3REYXRhID0gYXN5bmMgKHR5cGUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IFJVUkwgPVxyXG4gICAgICAgIHByb2Nlc3MuZW52LkRBVEFfVVJMICsgXCJhZGRBcnRpY2xlL2dvdEFydGljbGUvdHlwZS9cIiArIHR5cGUgKyBcIj9wYWdlPTFcIjtcclxuICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKFJVUkwpO1xyXG4gICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGVycixcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IFtTZWF0Y2hWYWx1ZSwgc2V0U2VhdGNoVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgc2V0VmFsdWUgPSAoZSkgPT4gc2V0U2VhdGNoVmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIGNvbnN0IFtTZWF0Y2hzdGF0dXMsIHNldFNlYXRjaHN0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgc2VhcmNoRXZlbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoU2VhdGNoVmFsdWUgPT09IFwiXCIpIHJldHVybjtcclxuICAgIGNvbnN0IFJVUkwgPVxyXG4gICAgICBwcm9jZXNzLmVudi5EQVRBX1VSTCArIFwiYWRkQXJ0aWNsZS9nb3RBcnRpY2xlL3NlYXJjaC9cIiArIFNlYXRjaFZhbHVlO1xyXG4gICAgc2V0U3RhdGUoW10pO1xyXG4gICAgc2V0TG9hZCh0cnVlKTtcclxuICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaChSVVJMKTtcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIHNldFN0YXRlKHJlc3VsdC5kYXRhKTtcclxuICAgIHNldFBhZ2UocmVzdWx0Lmxlbmd0aCk7XHJcbiAgICBzZXRUeXBlKFwiXCIpO1xyXG4gICAgc2V0TG9hZChmYWxzZSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1pbi1uYXYtY3RuIG0tMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiAuY29sLW1kLTExIG1pbi1uYXYgIHAtNSBwZmZzZXQtMCBcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1mbGV4IG0tMFwiIG9uQ2xpY2s9e3VwZGF0ZVNob3d9PlxyXG4gICAgICAgICAge2xpc3QubWFwKCh0eXBlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPGgzPnt0eXBlfTwvaDM+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGgzPkFsbDwvaDM+XHJcbiAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgIDxsaSBvbkNsaWNrPXtPcGVuU2VhcmNofT5cclxuICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25mb250IGljb24tc2VhcmNoXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZWFyY2hDdG4gJHtTZWF0Y2hzdGF0dXMgPyBcIm9wZW5TZWFyY2hDdG5cIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICB2YWx1ZT17U2VhdGNoVmFsdWV9XHJcbiAgICAgICAgICBvbklucHV0PXtzZXRWYWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRWYWx1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3NlYXJjaEV2ZW50fT5cclxuICAgICAgICAgIOaQnOe0olxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2Utc2VhcmNoXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlYXRjaHN0YXR1cyhmYWxzZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB0PVwiMTU5MTcwNjAyNjUwMVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaWNvblwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCJcclxuICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICBwLWlkPVwiMzI2OVwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZD1cIk01NzEuNyA1MTQuMWwxNjQuOS0xNjQuOWMxNi4zLTE2LjMgMTYuMy00My4xIDAtNTkuNC0xNi4zLTE2LjMtNDMuMS0xNi4zLTU5LjQgMEw1MTIuMyA0NTQuNyAzNDcuNCAyODkuOGMtMTYuMy0xNi4zLTQzLjEtMTYuMy01OS40IDAtMTYuMyAxNi4zLTE2LjMgNDMuMSAwIDU5LjRsMTY0LjkgMTY0LjlMMjg4IDY3OWMtMTYuMyAxNi4zLTE2LjMgNDMuMSAwIDU5LjQgMTYuMyAxNi4zIDQzLjEgMTYuMyA1OS40IDBsMTY0LjktMTY0LjkgMTY0LjkgMTY0LjljMTYuMyAxNi4zIDQzLjEgMTYuMyA1OS40IDAgMTYuMy0xNi4zIDE2LjMtNDMuMSAwLTU5LjRMNTcxLjcgNTE0LjF6XCJcclxuICAgICAgICAgICAgICBwLWlkPVwiMzI3MFwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5taW4tbmF2IHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VhcmNoQ3RuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMCBhdXRvO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5vcGVuU2VhcmNoQ3RuIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnNlYXJjaEN0biBpbnB1dCB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VhcmNoQ3RuIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VhcmNoQ3RuIC5jbG9zZS1zZWFyY2gge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zZWFyY2hDdG4gLmNsb3NlLXNlYXJjaDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgICAgIC5zZWFyY2hDdG4gaW5wdXQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VhcmNoQ3RuIHtcclxuICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGk6aG92ZXIsXHJcbiAgICAgICAgICBsaS5zZWxlZCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNSUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaS5hY3RpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzEzM2Q5MztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gICAgICAgICAgICAubWluLW5hdiB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAwJSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAgICAgICAgICAgLnNlYXJjaC1pbnB1dCBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWluTmF2O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\articleList\\\\minNav.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MinNav);

/***/ }),

/***/ "./component/articleList/minNav.module.css":
/*!*************************************************!*\
  !*** ./component/articleList/minNav.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./component/articleList/page.js":
/*!***************************************!*\
  !*** ./component/articleList/page.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\articleList\\page.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Page = ({
  count,
  setState,
  type
}) => {
  let item = 1;
  let array = [item];

  while (count > 10) {
    count -= 10;
    array.push(++item);
  }

  let domRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let dom = document.querySelector('.page');
    dom.classList.add('current');
    domRef.current = dom;
  }, []);

  const gotData = async page => {
    try {
      const RURL = "http://localhost:4040/" + `${type ? 'addArticle/gotArticle/type/' + type + '?page=' : 'addArticle/gotArticleList/'}` + page;
      let res = await fetch(RURL);
      let result = await res.json();
      return result;
    } catch (err) {
      console.log(err);
      return {
        err
      };
    }
  };

  const ClickEvent = async e => {
    let dom = e.target.closest('.page');
    if (!dom || dom.classList.contains('current')) return;
    let page = +dom.children[0].textContent;
    let data = await gotData(page);

    if (Array.isArray(data.data)) {
      setState(data.data);
      domRef.current.classList.remove('current');
      dom.classList.add('current');
      domRef.current = dom;
      let navDom = document.querySelector('.min-nav');
      navDom.scrollIntoView(true);
    }
  };

  return __jsx("div", {
    className: "jsx-961374113" + " " + 'col-6 mx-auto mt-5',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("div", {
    onClick: ClickEvent,
    className: "jsx-961374113" + " " + "row justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, array.map((count, index) => __jsx("div", {
    key: index,
    className: "jsx-961374113" + " " + "col-auto page  mx-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, __jsx("h2", {
    className: "jsx-961374113",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }, " ", count, " ")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "961374113",
    __self: undefined
  }, ".page.jsx-961374113{border:solid #4f738d 2px;color:#4f738d;width:60px;height:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.page.jsx-961374113:hover,.page.current.jsx-961374113{background:#4f738d;color:white;}h2.jsx-961374113{font-weight:700;}@media (max-width:600px){.page.jsx-961374113{width:40px;height:40px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZUxpc3RcXHBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNER3QixBQUdzRCxBQVVQLEFBSUgsQUFJRCxXQUNDLEtBSm5CLEdBSmUsSUFTWCxFQW5CYSxNQVdqQixRQVZjLFdBQ0MsWUFDQywwRUFDVSxtR0FDSiw2RkFDSixlQUNsQiIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxjb21wb25lbnRcXGFydGljbGVMaXN0XFxwYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwge3VzZUVmZmVjdCAsIHVzZVJlZn0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBQYWdlID0gKHsgY291bnQgLHNldFN0YXRlLCB0eXBlfSkgPT4geyAgICBcclxuICAgIGxldCBpdGVtID0gMTtcclxuICAgIGxldCBhcnJheSA9IFtpdGVtXTtcclxuICAgIHdoaWxlIChjb3VudCA+IDEwKSB7IFxyXG4gICAgICAgIGNvdW50IC09IDEwO1xyXG4gICAgICAgIGFycmF5LnB1c2goKytpdGVtKVxyXG4gICAgfSAgICBcclxuXHJcbiAgICBsZXQgZG9tUmVmID0gdXNlUmVmKCkgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgbGV0IGRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJylcclxuICAgICAgICAgZG9tLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKVxyXG4gICAgICAgICBkb21SZWYuY3VycmVudCA9IGRvbTtcclxuICAgIH0sW10pXHJcblxyXG4gICAgY29uc3QgZ290RGF0YSA9IGFzeW5jIChwYWdlKSA9PiB7ICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgY29uc3QgUlVSTCA9IHByb2Nlc3MuZW52LkRBVEFfVVJMK2Ake3R5cGU/J2FkZEFydGljbGUvZ290QXJ0aWNsZS90eXBlLycrdHlwZSsnP3BhZ2U9JzonYWRkQXJ0aWNsZS9nb3RBcnRpY2xlTGlzdC8nfWArcGFnZSAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaChSVVJMKVxyXG4gICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlcy5qc29uKCk7ICAgICAgICAgICBcclxuICAgICAgICAgICAgIHJldHVybiByZXN1bHRcclxuICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGVycixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgIH1cclxuXHJcbiAgIGNvbnN0IENsaWNrRXZlbnQgPSBhc3luYyAoZSkgPT4geyAgICAgICBcclxuICAgICAgIGxldCBkb20gPSBlLnRhcmdldC5jbG9zZXN0KCcucGFnZScpXHJcbiAgICAgICBpZighZG9tIHx8IGRvbS5jbGFzc0xpc3QuY29udGFpbnMoJ2N1cnJlbnQnKSkgcmV0dXJuICAgICAgICBcclxuICAgICAgIGxldCBwYWdlID0gK2RvbS5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcclxuICAgICAgIGxldCBkYXRhID1hd2FpdCBnb3REYXRhKHBhZ2UpOyAgICAgICBcclxuICAgICAgIGlmKEFycmF5LmlzQXJyYXkoZGF0YS5kYXRhKSl7XHJcbiAgICAgICAgICAgIHNldFN0YXRlKGRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIGRvbVJlZi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTsgXHJcbiAgICAgICAgICAgIGRvbS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50JylcclxuICAgICAgICAgICAgZG9tUmVmLmN1cnJlbnQgPSBkb207XHJcbiAgICAgICAgICAgIGxldCBuYXZEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWluLW5hdicpO1xyXG4gICAgICAgICAgICBuYXZEb20uc2Nyb2xsSW50b1ZpZXcodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNiBteC1hdXRvIG10LTUnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgb25DbGljaz17Q2xpY2tFdmVudH0+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5Lm1hcCgoY291bnQsaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBwYWdlICBteC0yXCIga2V5PXtpbmRleH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyID4ge2NvdW50fSA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnBhZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOnNvbGlkICM0ZjczOGQgIDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiM0ZjczOGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnBhZ2U6aG92ZXIsLnBhZ2UuY3VycmVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiM0ZjczOGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\articleList\\\\page.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./component/public/anima.js":
/*!***********************************!*\
  !*** ./component/public/anima.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\public\\anima.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Anima = ({
  color
}) => {
  let colorValue = color ? color : 'black';
  return __jsx("div", {
    className: "anima col-12 px-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "sanjiaoxing first",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "sanjiaoxing last",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "sanjiaoxing first",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "sanjiaoxing last",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 20
    }
  }), __jsx("div", {
    className: "sanjiaoxing first",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "sanjiaoxing last",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 20
    }
  }), __jsx("style", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, `
                .anima {
                    display:flex;
                    justify-content:center;
                }
                .sanjiaoxing {
                    display:inline-block;
                    width:0;
                    height:0;
                    border:solid 20px rgba(0,0,0,0);   
                    border-bottom:solid 20px ${colorValue};                              
                }
                .first {
                    transform-origin:100% 100%;
                    animation:go 2s infinite;                         
                }
                .last {
                    transform-origin:0% 100%;
                    animation:go2 2s infinite;          
                }
                @keyframes go {
                    0% {
                        transform: rotate(0deg) translateX(0);                   
                    }
                    15% {                          
                        transform: rotate(90deg) translateX(0);                                                
                    }
                    45% {
                        transform: rotate(90deg) translateY(0);                         
                    }
                    55% {
                        transform: rotate(90deg) translateY(50%);                        
                    }
                    85% {
                        transform: rotate(90deg) translateY(50%);                        
                    }
                    100% {
                        transform: rotate(0deg) translateY(0%);  
                    }
                }
                @keyframes go2 {
                    0% {
                        transform: rotate(0deg) translateX(0);  
                    }
                    15% {                          
                        transform: rotate(-90deg) translateX(0);                          
                    }
                    45% {
                        transform: rotate(-90deg) translateX(0);                          
                    }
                    55% {
                        transform: rotate(-90deg) translateY(50%);  
                    }
                    85% {
                        transform: rotate(-90deg) translateY(50%);  
                    }                    
                    100% {
                        transform: rotate(0deg) translateY(0%);  
                    }
                }
            `));
};

/* harmony default export */ __webpack_exports__["default"] = (Anima);

/***/ }),

/***/ "./component/public/getPhoto.js":
/*!**************************************!*\
  !*** ./component/public/getPhoto.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\public\\getPhoto.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Photo({
  id
}) {
  const {
    0: blob,
    1: setBlob
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: uncount,
    1: setUncount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getPhoto();
    return () => {
      setUncount(true);

      if (blob) {
        URL.revokeObjectURL(blob);
      }
    };
  }, [id]);

  const getPhoto = async () => {
    try {
      const QURL = "http://localhost:4040/" + id;
      let res = await fetch(QURL);

      if (res.ok) {
        let result = await res.blob();

        if (!uncount) {
          setBlob(result);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, blob && __jsx("img", {
    src: URL.createObjectURL(blob),
    alt: "\u7167\u7247",
    className: "jsx-3166343992",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3166343992",
    __self: this
  }, "img.jsx-3166343992{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxccHVibGljXFxnZXRQaG90by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQzBCLEFBR3lDLFdBQ1oiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxwdWJsaWNcXGdldFBob3RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gUGhvdG8oIHsgaWQgfSApIHtcclxuICAgIGNvbnN0IFtibG9iLHNldEJsb2JdID0gdXNlU3RhdGUobnVsbCk7ICAgIFxyXG4gICAgY29uc3QgW3VuY291bnQsc2V0VW5jb3VudF0gPSB1c2VTdGF0ZShmYWxzZSk7ICAgICAgICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICAgIGdldFBob3RvKCkgICAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFVuY291bnQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgaWYoYmxvYil7XHJcbiAgICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICAgIH0gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgfSxbaWRdKVxyXG4gICAgY29uc3QgZ2V0UGhvdG8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBRVVJMID0gcHJvY2Vzcy5lbnYuREFUQV9VUkwraWQ7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaChRVVJMKVxyXG4gICAgICAgICAgICBpZihyZXMub2spe1xyXG4gICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPWF3YWl0IHJlcy5ibG9iKCk7XHJcbiAgICAgICAgICAgICAgICAgaWYoIXVuY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgc2V0QmxvYihyZXN1bHQpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICg8PiBcclxuXHJcbiAgICAgICAgICAgICAgeyBibG9iICYmIDxpbWcgc3JjPXsgVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKX0gYWx0PVwi54Wn54mHXCIvPiB9IFxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgPC8+KVxyXG4gICAgICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaG90b1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\public\\\\getPhoto.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Photo);

/***/ }),

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
    className: "jsx-211519462" + " " + "nav row mx-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-211519462" + " " + "col-12 px-0 img-ctn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, props.children), __jsx("div", {
    className: "jsx-211519462" + " " + "content col-12 mx-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-211519462" + " " + "min-nav row align-items-center justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-211519462" + " " + "col-12 col-sm-10 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "jsx-211519462" + " " + "d-flex row justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-211519462" + " " + ((path == "/" ? "liSeled" : null) || ""),
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
    className: "jsx-211519462",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 19
    }
  }, "Home"))), __jsx("li", {
    className: "jsx-211519462" + " " + ((path == "/photo" ? "liSeled" : null) || ""),
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
    className: "jsx-211519462",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 19
    }
  }, "Photo"))), __jsx("li", {
    className: "jsx-211519462" + " " + ((path == "/article-list" ? "liSeled" : null) || ""),
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
    className: "jsx-211519462",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 19
    }
  }, "Article"))), __jsx("li", {
    className: "jsx-211519462" + " " + ((path == "/component" ? "liSeled" : null) || ""),
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
    className: "jsx-211519462",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, "Component")))))), props.title), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "211519462",
    __self: undefined
  }, ".nav.jsx-211519462{position:relative;}.img-ctn.jsx-211519462{z-index:999;}.content.jsx-211519462{position:absolute;left:0;right:0;top:0;bottom:0;z-index:1000;}.min-nav.jsx-211519462{width:100%;min-height:14%;border-bottom:solid rgba(255,255,255,0.5) 1px;}ul.jsx-211519462{width:100%;list-style:none;margin:0;z-index:1000;}li.jsx-211519462{-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;color:white;padding:1rem;margin:1rem;border-radius:6px;-webkit-transition:0.4s;transition:0.4s;cursor:pointer;z-index:1000;}li.jsx-211519462:hover,.liSeled.jsx-211519462{background:rgba(255,255,255,0.3);}@media (max-width:960px){.min-nav.jsx-211519462>div.jsx-211519462{margin:2rem;}}@media (max-width:360px){li.jsx-211519462{margin:0.4rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxccHVibGljXFxuYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNTLEFBRytCLEFBR04sQUFHTSxBQVFQLEFBS0EsQUFNSixBQWE2QixBQUl0QixBQUtFLFdBaENELEFBS0MsQ0FoQmxCLEFBdUNFLEVBS0EsSUEvQ0YsQUFNUyxPQUNDLENBUXlDLENBS3hDLE1BWkgsQUFpQlksQUFhcEIsR0FqQmUsR0FaSixTQUNJLENBWWYsRUFJYyxVQWZkLEVBZ0JlLFNBWGYsSUFZYyxZQUNNLGtCQUNGLHdDQUNELGVBQ0YsYUFDZiIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxjb21wb25lbnRcXHB1YmxpY1xcbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IE5hdiA9IChwcm9wcykgPT4ge1xyXG4gIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKS5hc1BhdGg7XHJcbiAgY29uc3QgW3BhdGhdID0gdXNlU3RhdGUocm91dGVyKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2IHJvdyBteC0wXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHB4LTAgaW1nLWN0blwiPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBjb2wtMTIgbXgtMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLW5hdiByb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMCBcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtZmxleCByb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGggPT0gXCIvXCIgPyBcImxpU2VsZWRcIiA6IG51bGx9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgPGgzPkhvbWU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cGF0aCA9PSBcIi9waG90b1wiID8gXCJsaVNlbGVkXCIgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGhvdG9cIj5cclxuICAgICAgICAgICAgICAgICAgPGgzPlBob3RvPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRoID09IFwiL2FydGljbGUtbGlzdFwiID8gXCJsaVNlbGVkXCIgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXJ0aWNsZS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz5BcnRpY2xlPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGggPT0gXCIvY29tcG9uZW50XCIgPyBcImxpU2VsZWRcIiA6IG51bGx9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wb25lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzPkNvbXBvbmVudDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtwcm9wcy50aXRsZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5uYXYge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaW1nLWN0biB7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWluLW5hdiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAxcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxpOmhvdmVyLFxyXG4gICAgICAgICAgLmxpU2VsZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICAgICAgLm1pbi1uYXYgPiBkaXYge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAuNHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\public\\\\nav.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

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

/***/ "./pages/article-list.js":
/*!*******************************!*\
  !*** ./pages/article-list.js ***!
  \*******************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_public_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/public/nav */ "./component/public/nav.js");
/* harmony import */ var _component_articleList_minNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/articleList/minNav */ "./component/articleList/minNav.js");
/* harmony import */ var _component_articleList_contentList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/articleList/contentList */ "./component/articleList/contentList.js");
/* harmony import */ var _component_articleList_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/articleList/footer */ "./component/articleList/footer.js");
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\pages\\article-list.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const ArticleList = ({
  data,
  list,
  count
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!data) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/500");
    }
  }, []);
  const {
    0: routerStatus,
    1: setRouterStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleRouteChange = () => {
    setRouterStatus(true);
  };

  next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on("routeChangeStart", handleRouteChange);
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(data);
  const {
    0: initState,
    1: setInitState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    data,
    count
  });
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(count);
  const {
    0: type,
    1: setType
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-2182261789",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "//at.alicdn.com/t/font_1748919_piihixc593j.css",
    className: "jsx-2182261789",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-2182261789" + " " + "container-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("nav", {
    className: "jsx-2182261789" + " " + "row mx-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2182261789" + " " + "col-12 px-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(_component_public_nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "article-list-bg.jpg",
    alt: "bg",
    className: "jsx-2182261789",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  })))), __jsx(_component_articleList_minNav__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setState: setState,
    setType: setType,
    setPage: setPage,
    setLoad: setLoading,
    list: list,
    oldState: initState,
    setPage: setPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), __jsx(_component_articleList_contentList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    state: state,
    type: type,
    setState: setState,
    loading: loading,
    count: page,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }), __jsx(_component_articleList_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }), routerStatus && __jsx("div", {
    className: "jsx-2182261789" + " " + "loadAnima",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, " ")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2182261789",
    __self: undefined
  }, "*,body{margin:0;padding:0;box-sizing:border-box;}img{width:100%;height:auto;}html{font-size:10px;}.container-fluid{padding:0;overflow-x:hidden;}@media (max-width:600px){html{font-size:6px;}}@media (max-width:400px){html{font-size:5px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxhcnRpY2xlLWxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEV5QixBQUlvQixBQUtFLEFBSUksQUFHTCxBQUtNLEFBS0EsU0FyQk4sQ0FZUSxDQVBOLEdBWVosQUFLQSxDQWJGLElBUndCLElBS3hCLEtBT0EsYUFYQSIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxwYWdlc1xcYXJ0aWNsZS1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50L3B1YmxpYy9uYXZcIjtcclxuaW1wb3J0IE1pbk5hdiBmcm9tIFwiLi4vY29tcG9uZW50L2FydGljbGVMaXN0L21pbk5hdlwiO1xyXG5pbXBvcnQgQ29udGVudExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudC9hcnRpY2xlTGlzdC9jb250ZW50TGlzdFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnQvYXJ0aWNsZUxpc3QvZm9vdGVyXCI7XHJcblxyXG5jb25zdCBBcnRpY2xlTGlzdCA9ICh7IGRhdGEsIGxpc3QsIGNvdW50IH0pID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiLzUwMFwiKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFtyb3V0ZXJTdGF0dXMsIHNldFJvdXRlclN0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICBzZXRSb3V0ZXJTdGF0dXModHJ1ZSk7XHJcbiAgfTtcclxuICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcblxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoZGF0YSk7XHJcbiAgY29uc3QgW2luaXRTdGF0ZSwgc2V0SW5pdFN0YXRlXSA9IHVzZVN0YXRlKHsgZGF0YSwgY291bnQgfSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKGNvdW50KTtcclxuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5BcnRpY2xlPC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANC40LjEvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LVZrb284eDRDR3NPMytIaHh2OFQvUTVQYVh0a0t0dTZ1ZzVUT2VOVjZnQmlGZVdQR0ZOOU11aE9mMjNROUlmamhcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTc0ODkxOV9waWloaXhjNTkzai5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvbG9nby5qcGdcIiB0eXBlPVwiaW1hZ2UveC1pY29uXCI+PC9saW5rPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJyb3cgbXgtMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcHgtMFwiPlxyXG4gICAgICAgICAgICA8TmF2PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXJ0aWNsZS1saXN0LWJnLmpwZ1wiIGFsdD1cImJnXCIgLz5cclxuICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgPE1pbk5hdlxyXG4gICAgICAgICAgc2V0U3RhdGU9e3NldFN0YXRlfVxyXG4gICAgICAgICAgc2V0VHlwZT17c2V0VHlwZX1cclxuICAgICAgICAgIHNldFBhZ2U9e3NldFBhZ2V9XHJcbiAgICAgICAgICBzZXRMb2FkPXtzZXRMb2FkaW5nfVxyXG4gICAgICAgICAgbGlzdD17bGlzdH1cclxuICAgICAgICAgIG9sZFN0YXRlPXtpbml0U3RhdGV9XHJcbiAgICAgICAgICBzZXRQYWdlPXtzZXRQYWdlfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxDb250ZW50TGlzdFxyXG4gICAgICAgICAgc3RhdGU9e3N0YXRlfVxyXG4gICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgIHNldFN0YXRlPXtzZXRTdGF0ZX1cclxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICBjb3VudD17cGFnZX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAge3JvdXRlclN0YXR1cyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRBbmltYVwiPiB7LyogIOi3r+eUseWPmOWMluaXtiDmj5DnpLrliqjnlLsgKi99PC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICosXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBodG1sIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgICAgICBodG1sIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBSVVJMID0gcHJvY2Vzcy5lbnYuREFUQV9VUkwgKyBcImFkZEFydGljbGUvZ290QXJ0aWNsZUxpc3QvMVwiO1xyXG4gIGxldCByZXMgPSBhd2FpdCBmZXRjaChSVVJMKTtcclxuICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSByZXR1cm4geyBwcm9wczogeyBkYXRhOiBudWxsIH0gfTtcclxuICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgbGlzdDogcmVzdWx0Lmxpc3QsXHJcbiAgICAgIGNvdW50OiByZXN1bHQuY291bnQsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVMaXN0O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\pages\\\\article-list.js */"));
};

const getServerSideProps = async () => {
  const RURL = "http://localhost:4040/" + "addArticle/gotArticleList/1";
  let res = await node_fetch__WEBPACK_IMPORTED_MODULE_2___default()(RURL);
  if (res.status === 404) return {
    props: {
      data: null
    }
  };
  let result = await res.json();
  console.log(result);
  return {
    props: {
      data: result.data,
      list: result.list,
      count: result.count
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (ArticleList);

/***/ }),

/***/ 3:
/*!*************************************!*\
  !*** multi ./pages/article-list.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\newlife\newSite\my-app\pages\article-list.js */"./pages/article-list.js");


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

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

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
//# sourceMappingURL=article-list.js.map