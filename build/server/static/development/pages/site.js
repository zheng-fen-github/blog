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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/site/index.js":
/*!*********************************!*\
  !*** ./component/site/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link */ "./component/site/link.js");
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\site\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  data
}) => {
  const {
    0: POSI,
    1: setPOSI
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: open,
    1: setopen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: he,
    1: sethe
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: childhe,
    1: setchlidhe
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setTimeout(() => {
      let MainPosi = mainDom.getBoundingClientRect();
      initHeight.current = heightDom.offsetHeight;
      sethe(heightDom.offsetHeight); //获取最低高度

      setPOSI(MainPosi); // 获取位置信息
    });
  }, []);
  let mainDom;
  let heightDom;
  let initHeight = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);
  return __jsx("div", {
    ref: ref => mainDom = ref,
    style: {
      height: he
    },
    className: "jsx-236287195" + " " + "link-ctn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-236287195" + " " + "main pointer ani",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-236287195" + " " + "color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-236287195" + " " + "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-236287195",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, data.MainType))), __jsx("div", {
    ref: ref => heightDom = ref,
    onClick: () => {
      let h = initHeight.current;
      setopen(pre => !pre);
      !open ? sethe(h + childhe * data.contentList.length) : sethe(h);
    },
    className: "jsx-236287195" + " " + "main pointer ani nice",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      backgroundColor: data.color
    },
    className: "jsx-236287195" + " " + "color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-236287195" + " " + "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-236287195",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, data.MainType))), data.contentList.map((s, i) => __jsx(_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    mess: POSI,
    open: open,
    gao: childhe,
    key: i,
    setgao: setchlidhe,
    mes: s,
    cor: data.color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "236287195",
    __self: undefined
  }, ".link-ctn.jsx-236287195{width:80%;margin:20px auto;position:relative;-webkit-transition:0.5s;transition:0.5s;overflow:hidden;}.nice.jsx-236287195{position:absolute;left:0;top:0;width:100%;z-index:10;}.main.jsx-236287195{padding:10px 20px;background:#212329;border-radius:6px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.main.jsx-236287195>.color.jsx-236287195{width:66px;height:40px;border-radius:4px;margin:0 20px;}.main.jsx-236287195>.title.jsx-236287195{-webkit-flex:1;-ms-flex:1;flex:1;font-size:30px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcc2l0ZVxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RrQixBQUdxQixBQU9RLEFBT0EsQUFRUCxBQU1KLFVBM0JVLENBc0JMLE9BZkwsQUFPWSxLQVNELEVBZlosRUFQWSxJQVFQLEVBbUJJLElBYkcsSUFTSixDQWRILEdBUkssR0EyQkUsS0FsQnBCLEVBS2UsQUFTZixXQUtBLG1CQTNCa0IsZ0JBQ2xCLDRCQWFxQiw2RkFDckIiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxzaXRlXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4vbGlua1wiO1xyXG5leHBvcnQgZGVmYXVsdCAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCBbUE9TSSwgc2V0UE9TSV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbb3Blbiwgc2V0b3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2hlLCBzZXRoZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY2hpbGRoZSwgc2V0Y2hsaWRoZV0gPSB1c2VTdGF0ZSgwKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGxldCBNYWluUG9zaSA9IG1haW5Eb20uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGluaXRIZWlnaHQuY3VycmVudCA9IGhlaWdodERvbS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIHNldGhlKGhlaWdodERvbS5vZmZzZXRIZWlnaHQpOyAvL+iOt+WPluacgOS9jumrmOW6plxyXG4gICAgICBzZXRQT1NJKE1haW5Qb3NpKTsgLy8g6I635Y+W5L2N572u5L+h5oGvXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgbGV0IG1haW5Eb207XHJcbiAgbGV0IGhlaWdodERvbTtcclxuICBsZXQgaW5pdEhlaWdodCA9IHVzZVJlZigwKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJsaW5rLWN0blwiXHJcbiAgICAgIHJlZj17KHJlZikgPT4gKG1haW5Eb20gPSByZWYpfVxyXG4gICAgICBzdHlsZT17eyBoZWlnaHQ6IGhlIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbiBwb2ludGVyIGFuaVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3JcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICA8aDI+e2RhdGEuTWFpblR5cGV9PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJtYWluIHBvaW50ZXIgYW5pIG5pY2VcIlxyXG4gICAgICAgIHJlZj17KHJlZikgPT4gKGhlaWdodERvbSA9IHJlZil9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgbGV0IGggPSBpbml0SGVpZ2h0LmN1cnJlbnQ7XHJcbiAgICAgICAgICBzZXRvcGVuKChwcmUpID0+ICFwcmUpO1xyXG4gICAgICAgICAgIW9wZW4gPyBzZXRoZShoICsgY2hpbGRoZSAqIGRhdGEuY29udGVudExpc3QubGVuZ3RoKSA6IHNldGhlKGgpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBkYXRhLmNvbG9yIH19PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgIDxoMj57ZGF0YS5NYWluVHlwZX08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2RhdGEuY29udGVudExpc3QubWFwKChzLCBpKSA9PiAoXHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIG1lc3M9e1BPU0l9XHJcbiAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgZ2FvPXtjaGlsZGhlfVxyXG4gICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgc2V0Z2FvPXtzZXRjaGxpZGhlfVxyXG4gICAgICAgICAgbWVzPXtzfVxyXG4gICAgICAgICAgY29yPXtkYXRhLmNvbG9yfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkpfVxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5saW5rLWN0biB7XHJcbiAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5pY2Uge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYWluIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMyMTIzMjk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYWluID4gLmNvbG9yIHtcclxuICAgICAgICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYWluID4gLnRpdGxlIHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\site\\\\index.js */"));
});

/***/ }),

/***/ "./component/site/link.js":
/*!********************************!*\
  !*** ./component/site/link.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\site\\link.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Link({
  mess,
  open,
  gao,
  setgao,
  mes,
  cor
}) {
  let once = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  let initH = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let {
      current
    } = once;
    current ? open ? zeroEv() : positionEv() : once.current = true;
  }, [open]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (mess) positionEv();
  }, [mess]);

  const positionEv = () => {
    let posi = dom.getBoundingClientRect();
    if (!gao) setgao(dom.offsetHeight);
    !initH.current ? initH.current = -(posi.top - mess.top + 6) : null;
    dom.style.top = initH.current + "px";
  };

  const zeroEv = () => {
    dom.style.top = 0;
  };

  let dom;
  return __jsx("div", {
    ref: ref => dom = ref,
    className: "jsx-1270826209" + " " + "site ani pointer test ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1270826209" + " " + "min-ctn ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      backgroundColor: cor
    },
    className: "jsx-1270826209" + " " + "backcolor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: mes.url,
    target: "_black",
    className: "jsx-1270826209",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-1270826209",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, mes.name)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1270826209",
    __self: this
  }, ".site.jsx-1270826209{width:80%;margin-left:20%;position:relative;padding:20px 0;}.min-ctn.jsx-1270826209{padding:10px;border-radius:4px;background:#212329;}a.jsx-1270826209{-webkit-text-decoration:none;text-decoration:none;}.site.jsx-1270826209 .backcolor.jsx-1270826209{border-radius:4px;text-align:center;padding:10px;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcc2l0ZVxcbGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ2tCLEFBR3FCLEFBTUcsQUFLUSxBQUdILFVBYkYsR0FNRSxLQVFBLFFBYkEsS0FNQyxLQVFOLFFBYkUsS0FjQSxDQVJqQixBQUdBLFNBUkEsS0FjQSIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxjb21wb25lbnRcXHNpdGVcXGxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIExpbmsoeyBtZXNzLCBvcGVuLCBnYW8sIHNldGdhbywgbWVzLCBjb3IgfSkge1xyXG4gIGxldCBvbmNlID0gdXNlUmVmKGZhbHNlKTtcclxuICBsZXQgaW5pdEggPSB1c2VSZWYoMCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB7IGN1cnJlbnQgfSA9IG9uY2U7XHJcbiAgICBjdXJyZW50ID8gKG9wZW4gPyB6ZXJvRXYoKSA6IHBvc2l0aW9uRXYoKSkgOiAob25jZS5jdXJyZW50ID0gdHJ1ZSk7XHJcbiAgfSwgW29wZW5dKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChtZXNzKSBwb3NpdGlvbkV2KCk7XHJcbiAgfSwgW21lc3NdKTtcclxuICBjb25zdCBwb3NpdGlvbkV2ID0gKCkgPT4ge1xyXG4gICAgbGV0IHBvc2kgPSBkb20uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBpZiAoIWdhbykgc2V0Z2FvKGRvbS5vZmZzZXRIZWlnaHQpO1xyXG4gICAgIWluaXRILmN1cnJlbnQgPyAoaW5pdEguY3VycmVudCA9IC0ocG9zaS50b3AgLSBtZXNzLnRvcCArIDYpKSA6IG51bGw7XHJcbiAgICBkb20uc3R5bGUudG9wID0gaW5pdEguY3VycmVudCArIFwicHhcIjtcclxuICB9O1xyXG4gIGNvbnN0IHplcm9FdiA9ICgpID0+IHtcclxuICAgIGRvbS5zdHlsZS50b3AgPSAwO1xyXG4gIH07XHJcbiAgbGV0IGRvbTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZSBhbmkgcG9pbnRlciB0ZXN0IFwiIHJlZj17KHJlZikgPT4gKGRvbSA9IHJlZil9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1jdG4gXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrY29sb3JcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvciB9fT5cclxuICAgICAgICAgIDxhIGhyZWY9e21lcy51cmx9IHRhcmdldD1cIl9ibGFja1wiPlxyXG4gICAgICAgICAgICA8aDM+e21lcy5uYW1lfTwvaDM+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnNpdGUge1xyXG4gICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5taW4tY3RuIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjEyMzI5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNpdGUgLmJhY2tjb2xvciB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGluaztcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\site\\\\link.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./pages/site.js":
/*!***********************!*\
  !*** ./pages/site.js ***!
  \***********************/
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
/* harmony import */ var _component_site_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/site/index */ "./component/site/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\pages\\site.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Home = () => {
  const {
    0: data,
    1: setdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: quit,
    1: setquit
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: error,
    1: seterror
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let reqFunc = async () => {
      try {
        const url = "http://zhengfen.top:4040/" + "site/gotData";
        let res = await axios__WEBPACK_IMPORTED_MODULE_4___default()(url);
        if (!quit) setdata(res.data);
      } catch (err) {
        console.log(err);
        seterror(true);
      }
    };

    reqFunc();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-674064234",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "\u7F51\u7AD9\u6536\u85CF")), __jsx("div", {
    className: "jsx-674064234" + " " + "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-674064234" + " " + "content guodu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, data && data.map(s => __jsx(_component_site_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: s,
    key: s._id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 36
    }
  }))), error && __jsx("h1", {
    className: "jsx-674064234",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 19
    }
  }, " \u7F51\u9875\u51FA\u9519\u4E86 \u5237\u65B0\u8BD5\u8BD5")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "674064234",
    __self: undefined
  }, "*,body{margin:0;padding:0;box-sizing:border-box;color:white;}.container{position:fixed;left:0;top:0;bottom:0;right:0;z-index:2;background:#191b1f;}.content{position:absolute;left:50%;top:50%;width:1080px;min-height:600px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}h1{text-align:center;margin:20px;}.pointer{cursor:pointer;}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}ul{list-style:none;}.ani,.guodu{-webkit-transition:0.5s;transition:0.5s;}.ani:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxzaXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDeUIsQUFJb0IsQUFNTSxBQVNHLEFBUUEsQUFJSCxBQUdGLEFBS0csQUFJQSxBQUdNLFNBekNaLE1BTUgsQUFxQlQsQ0FRQSxFQXBCVyxBQVFHLENBdEJVLEdBTWhCLEtBU0UsQ0FSQyxFQWdCWCxLQVBlLEVBUkwsR0E4QlYsQ0FyQ2MsSUFRRixHQVFPLEtBZm5CLEVBUXFCLFVBUWEsU0FQbEMsQUFrQnlCLElBWXpCLDRGQXRCQSxHQVdxQiw2RkFDckIiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxccGFnZXNcXHNpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFNpdGVJdGVtIGZyb20gXCIuLi9jb21wb25lbnQvc2l0ZS9pbmRleFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldGRhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3F1aXQsIHNldHF1aXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0ZXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgcmVxRnVuYyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5EQVRBX1VSTCArIFwic2l0ZS9nb3REYXRhXCI7XHJcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zKHVybCk7XHJcbiAgICAgICAgaWYgKCFxdWl0KSBzZXRkYXRhKHJlcy5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBzZXRlcnJvcih0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJlcUZ1bmMoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT7nvZHnq5nmlLbol488L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IGd1b2R1XCI+XHJcbiAgICAgICAgICB7ZGF0YSAmJiBkYXRhLm1hcCgocykgPT4gPFNpdGVJdGVtIGRhdGE9e3N9IGtleT17cy5faWR9IC8+KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7ZXJyb3IgJiYgPGgxPiDnvZHpobXlh7rplJnkuoYg5Yi35paw6K+V6K+VPC9oMT59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICosXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzE5MWIxZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICB3aWR0aDogMTA4MHB4O1xyXG4gICAgICAgICAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucG9pbnRlciB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mbGV4IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hbmksXHJcbiAgICAgICAgLmd1b2R1IHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hbmk6aG92ZXIge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\pages\\\\site.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/site.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\newlife\newSite\my-app\pages\site.js */"./pages/site.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=site.js.map