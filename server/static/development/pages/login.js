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

/***/ "./component/login/addComponenttwo/left-root.js":
/*!******************************************************!*\
  !*** ./component/login/addComponenttwo/left-root.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./component/login/addComponenttwo/nav.js");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort */ "./component/login/addComponenttwo/sort.js");
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo */ "./component/login/addComponenttwo/photo.js");
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\login\\addComponenttwo\\left-root.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const LeftRoot = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    reqData();
  }, []);

  const reqData = async () => {
    let res = await fetch('http://localhost:4040/getComponentList/all');

    if (res.ok) {
      let data = await res.json();
      setTypeList(data);
      setSortList(data[0].typeList);
    }
  };

  const {
    0: sortList,
    1: setSortList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: typeList,
    1: setTypeList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const changeList = data => {
    if (Array.isArray(data)) {
      setSortList(data);
    }
  };

  return __jsx("div", {
    className: "left-root row justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, typeList.length > 0 && __jsx(_nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    list: typeList,
    setList: changeList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "col-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(_sort__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selectList: sortList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  })), __jsx(_photo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 12
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LeftRoot);

/***/ }),

/***/ "./component/login/addComponenttwo/nav.js":
/*!************************************************!*\
  !*** ./component/login/addComponenttwo/nav.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\login\\addComponenttwo\\nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Nav = ({
  list,
  setList
}) => {
  let dom = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const {
    0: Type,
    1: setType
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(list[0].typeName);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    //初步获取首个活动的元素
    setTimeout(() => {
      let selectDom = document.querySelector('.nav .nav-item');
      selectDom.classList.add('seled');
      dom.current = selectDom;
    }, 200);
  }, []);

  const selectContent = (data, e) => {
    try {
      let target = e.target.closest('li'); //选中的元素添加样式

      if (!target) return;
      dom.current.classList.remove('seled');
      target.classList.add('seled');
      dom.current = target;
      setType(() => target.children[0].textContent);
      setList(data.typeList);
    } catch (err) {
      if (err) console.log(err);
    }
  };

  return __jsx("div", {
    className: "jsx-3310359532" + " " + 'nav row',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3310359532" + " " + "col-8 m-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "jsx-3310359532" + " " + 'row justify-content-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "jsx-3310359532" + " " + "col-12 title text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "jsx-3310359532" + " " + 'component-code-typeName',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 24
    }
  }, Type)), list.map(item => __jsx("li", {
    key: item._id,
    onClick: e => selectContent(item, e),
    className: "jsx-3310359532" + " " + "col-10 nav-item text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 41
    }
  }, __jsx("h3", {
    className: "jsx-3310359532",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 45
    }
  }, item.typeName))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3310359532",
    __self: undefined
  }, ".nav.jsx-3310359532{background:white;}ul.jsx-3310359532{list-style:none;}li.jsx-3310359532{padding:2rem;margin:0;-webkit-transition:.4s;transition:.4s;cursor:pointer;margin:4px 0;}li.seled.jsx-3310359532,li.jsx-3310359532:hover{background:#4b30c3;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcbG9naW5cXGFkZENvbXBvbmVudHR3b1xcbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEeUIsQUFHdUMsQUFHSCxBQUdELEFBT00sYUFOVixHQUhaLENBSEEsRUFhZSxHQU5HLFNBT2xCLDZCQU5rQixlQUNGLGFBQ2hCIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcbG9naW5cXGFkZENvbXBvbmVudHR3b1xcbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwgeyB1c2VSZWYgLCB1c2VFZmZlY3QgLHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBOYXYgPSAoeyBsaXN0ICwgc2V0TGlzdCB9KSA9PiB7XHJcbiAgICBcclxuICAgIGxldCBkb20gPSB1c2VSZWYoKTsgIFxyXG4gICAgY29uc3QgW1R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUobGlzdFswXS50eXBlTmFtZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyAgICAgICAgICAgLy/liJ3mraXojrflj5bpppbkuKrmtLvliqjnmoTlhYPntKBcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgIGxldCBzZWxlY3REb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2IC5uYXYtaXRlbScpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIHNlbGVjdERvbS5jbGFzc0xpc3QuYWRkKCdzZWxlZCcpXHJcbiAgICAgICAgICAgICBkb20uY3VycmVudCA9IHNlbGVjdERvbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0sMjAwKVxyXG4gICAgIH0sW10pXHJcbiAgICBjb25zdCBzZWxlY3RDb250ZW50ID0gKGRhdGEsZSkgPT4geyAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldC5jbG9zZXN0KCdsaScpOyAgICAvL+mAieS4reeahOWFg+e0oOa3u+WKoOagt+W8j1xyXG4gICAgICAgICAgICBpZighdGFyZ2V0KSByZXR1cm47XHJcbiAgICAgICAgICAgIGRvbS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVkJyk7XHJcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlZCcpO1xyXG4gICAgICAgICAgICBkb20uY3VycmVudCA9IHRhcmdldDtcclxuICAgICAgICAgICAgc2V0VHlwZSgoKSA9PiB0YXJnZXQuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQpOyAgXHJcbiAgICAgICAgICAgIHNldExpc3QoZGF0YS50eXBlTGlzdClcclxuICAgICAgICB9Y2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgIGlmKGVycikgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9XHJcbiAgfSAgICBcclxuIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2IHJvdyc+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTggbS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbC0xMiB0aXRsZSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2NvbXBvbmVudC1jb2RlLXR5cGVOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBUeXBlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0Lm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0+IDxsaSBjbGFzc05hbWU9XCJjb2wtMTAgbmF2LWl0ZW0gdGV4dC1jZW50ZXJcIiBrZXk9e2l0ZW0uX2lkfSBvbkNsaWNrPXsgZSA9PiBzZWxlY3RDb250ZW50KGl0ZW0sZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udHlwZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvdWw+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeD4ge2BcclxuICAgICAgICAgICAgICAgICAgLm5hdiB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOi40cztcclxuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjRweCAwO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGxpLnNlbGVkLGxpOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojNGIzMGMzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdlxyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\login\\\\addComponenttwo\\\\nav.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./component/login/addComponenttwo/photo.js":
/*!**************************************************!*\
  !*** ./component/login/addComponenttwo/photo.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\login\\addComponenttwo\\photo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Photo = () => {
  const {
    0: photo,
    1: setPhoto
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);

  const fileChange = e => {
    let file = e.target.files[0];

    try {
      let blob = URL.createObjectURL(file);
      setPhoto(blob);
    } catch (err) {
      console.log(err);
    }
  };

  const clickFile = e => {
    e.target.nextElementSibling.click();
  };

  const dbclick = e => {
    setPhoto('');
    e.target.previousElementSibling.value = '';
  };

  return __jsx("div", {
    className: "jsx-2525806831" + " " + "col-10 mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, !photo && __jsx("div", {
    onClick: clickFile,
    className: "jsx-2525806831" + " " + "load-photo row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 30
    }
  }), __jsx("input", {
    type: "file",
    name: "photoFile",
    onChange: fileChange,
    className: "jsx-2525806831" + " " + 'd-none',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 14
    }
  }), photo && __jsx("img", {
    src: photo,
    alt: "code-photo",
    onDoubleClick: dbclick,
    className: "jsx-2525806831",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 27
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2525806831",
    __self: undefined
  }, ".load-photo.jsx-2525806831{height:400px;background:#4b30c3;}img.jsx-2525806831{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcbG9naW5cXGFkZENvbXBvbmVudHR3b1xccGhvdG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0MwQixBQUd5QyxBQUlGLFdBQ2QsRUFKc0IsbUJBQ3RCIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcbG9naW5cXGFkZENvbXBvbmVudHR3b1xccGhvdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBQaG90byA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtwaG90bywgc2V0UGhvdG9dID0gdXNlU3RhdGUobnVsbClcclxuICAgIFxyXG4gICAgY29uc3QgZmlsZUNoYW5nZSA9IChlKSA9PiB7IFxyXG4gICAgICAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGxldCBibG9iID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTsgICAgICAgICBcclxuICAgICAgICAgICAgICBzZXRQaG90byhibG9iKTtcclxuICAgICAgICAgfWNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgfSAgICAgICAgICAgICAgICAgIFxyXG4gICAgfSBcclxuICAgY29uc3QgY2xpY2tGaWxlID0gKCBlICkgPT4geyAgICAgICAgICAgXHJcbiAgICAgICAgICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsaWNrKCk7XHJcbiAgIH1cclxuICAgY29uc3QgZGJjbGljayA9IChlKSA9PiB7XHJcbiAgICAgICBzZXRQaG90bygnJylcclxuICAgICAgIGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudmFsdWU9Jyc7XHJcbiAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG10LTVcIj5cclxuICAgICAgICAgICAgIHsgIFxyXG4gICAgICAgICAgICAgICAgICFwaG90byAmJiAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZC1waG90byByb3dcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrRmlsZX0+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJwaG90b0ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZC1ub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmaWxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICB7IHBob3RvICYmICAgPGltZyBzcmM9e3Bob3RvfSBhbHQ9XCJjb2RlLXBob3RvXCIgb25Eb3VibGVDbGljaz17ZGJjbGlja30vPiB9XHJcbiAgICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubG9hZC1waG90byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiM0YjMwYzM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGhvdG9cclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\login\\\\addComponenttwo\\\\photo.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Photo);

/***/ }),

/***/ "./component/login/addComponenttwo/root.js":
/*!*************************************************!*\
  !*** ./component/login/addComponenttwo/root.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _left_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./left-root */ "./component/login/addComponenttwo/left-root.js");
/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textarea */ "./component/login/addComponenttwo/textarea.js");
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\login\\addComponenttwo\\root.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Root = ({
  rest
}) => {
  return __jsx("div", {
    className: "jsx-2967817067" + " " + 'add-component-new-root row align-items-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2967817067" + " " + "col-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 16
    }
  }, __jsx(_left_root__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 22
    }
  })), __jsx("div", {
    className: "jsx-2967817067" + " " + "col-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 16
    }
  }, __jsx(_textarea__WEBPACK_IMPORTED_MODULE_3__["default"], {
    restEvent: rest,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2967817067",
    __self: undefined
  }, ".add-component-new-root.jsx-2967817067{position:fixed;width:100%;top:0;right:0;left:0;bottom:0;-webkit-animation:show-jsx-2967817067 1s 1;animation:show-jsx-2967817067 1s 1;background-image:url('greed.jpg');background-size:cover;}@-webkit-keyframes show-jsx-2967817067{0%{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}100{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes show-jsx-2967817067{0%{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}100{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcbG9naW5cXGFkZENvbXBvbmVudHR3b1xccm9vdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlNkIsQUFHK0MsQUFhYyxBQUdOLGVBZlosV0FDTCxNQUNFLFFBQ0QsT0FDRSxTQUNhLGFBV2pCLE1BSEEsMkRBUDZCLGtDQUNaLHNCQUV6QiIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxjb21wb25lbnRcXGxvZ2luXFxhZGRDb21wb25lbnR0d29cXHJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGVmdFJvb3QgZnJvbSAnLi9sZWZ0LXJvb3QnXHJcbmltcG9ydCBSaWdodEZvcm0gZnJvbSAnLi90ZXh0YXJlYSdcclxuXHJcblxyXG5jb25zdCBSb290ID0gKHtyZXN0fSkgPT4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhZGQtY29tcG9uZW50LW5ldy1yb290IHJvdyBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxMZWZ0Um9vdC8+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJpZ2h0Rm9ybSByZXN0RXZlbnQ9e3Jlc3R9Lz5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkLWNvbXBvbmVudC1uZXctcm9vdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlOyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206MDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2hvdyAxcyAxIDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCdncmVlZC5qcGcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzaG93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvb3RcclxuXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\login\\\\addComponenttwo\\\\root.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ "./component/login/addComponenttwo/sort.js":
/*!*************************************************!*\
  !*** ./component/login/addComponenttwo/sort.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\login\\addComponenttwo\\sort.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Sort = ({
  selectList
}) => {
  const {
    0: sortValue,
    1: setSortValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: list,
    1: setList
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setList(selectList);
  }, [selectList]);

  const changeValue = () => {
    if (sortValue === '') return;
    setList(preState => [...preState, sortValue]);
    setSortValue('');
    let dom = selectDom;
    setTimeout(() => {
      dom.value = sortValue;
    }, [100]);
  };

  let selectDom;
  return __jsx("div", {
    className: "jsx-1594687254" + " " + 'row sort ml-4',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("select", {
    name: "simple  col-12",
    ref: ref => selectDom = ref,
    className: "jsx-1594687254" + " " + 'component-sort-name',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, list && list.map((e, index) => __jsx("option", {
    value: e,
    key: index,
    className: "jsx-1594687254",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  }, e))), __jsx("div", {
    className: "jsx-1594687254" + " " + "col-12 sortInput px-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "text",
    name: "sortItem",
    id: "sortItem",
    value: sortValue,
    onChange: e => setSortValue(e.target.value),
    onInput: e => setSortValue(e.target.value),
    className: "jsx-1594687254" + " " + ' mt-3',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 16
    }
  })), __jsx("div", {
    className: "jsx-1594687254" + " " + "col-12 px-0 mt-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: changeValue,
    className: "jsx-1594687254",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "Add")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1594687254",
    __self: undefined
  }, "select.jsx-1594687254{border:none;width:100%;text-align:center;padding:1rem;font-size:2rem;font-weight:600;}option.jsx-1594687254{padding:0.5rem;}input.jsx-1594687254{width:100%;border:none;padding:0.5rem;font-size:2rem;}button.jsx-1594687254{width:100%;border:none;background:#4b30c3;color:white;padding:0.5rem;font-size:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcbG9naW5cXGFkZENvbXBvbmVudHR3b1xcc29ydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q3lCLEFBR21DLEFBUUcsQUFHSixBQU1BLFdBTEMsQUFNQSxDQWpCRCxHQVFkLFFBUHFCLEFBV0gsQUFNSSxlQUxKLEdBWEYsQ0FpQkQsV0FMZixDQVhrQixBQWlCQSxlQWhCQyxBQWlCRCxlQUNsQixDQWpCQSIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxjb21wb25lbnRcXGxvZ2luXFxhZGRDb21wb25lbnR0d29cXHNvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLHt1c2VTdGF0ZSAsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFNvcnQgPSAoe3NlbGVjdExpc3R9KSA9PiB7ICAgIFxyXG4gICAgY29uc3QgW3NvcnRWYWx1ZSwgc2V0U29ydFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0TGlzdChzZWxlY3RMaXN0KSAgICBcclxuXHJcbiAgICB9LFtzZWxlY3RMaXN0XSlcclxuICAgIGNvbnN0IGNoYW5nZVZhbHVlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICBpZihzb3J0VmFsdWUgPT09ICcnKSByZXR1cm5cclxuICAgICAgICAgICAgICAgc2V0TGlzdCggcHJlU3RhdGUgPT4gWy4uLnByZVN0YXRlLHNvcnRWYWx1ZV0pICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIHNldFNvcnRWYWx1ZSgnJylcclxuICAgICAgICAgICAgICAgbGV0IGRvbSA9IHNlbGVjdERvbTtcclxuICAgICAgICAgICAgICAgc2V0VGltZW91dCggKCkgPT4geyAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIGRvbS52YWx1ZSA9IHNvcnRWYWx1ZVxyXG4gICAgICAgICAgICAgICB9LFsxMDBdKVxyXG4gICAgfVxyXG4gICAgbGV0IHNlbGVjdERvbVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHNvcnQgbWwtNCc+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgIG5hbWU9XCJzaW1wbGUgIGNvbC0xMlwiIGNsYXNzTmFtZT0nY29tcG9uZW50LXNvcnQtbmFtZScgcmVmPXtyZWYgPT4gc2VsZWN0RG9tID0gcmVmIH0+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsaXN0ICYmICBsaXN0Lm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGUsaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2V9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBzb3J0SW5wdXQgcHgtMFwiPlxyXG4gICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic29ydEl0ZW1cIiBpZD1cInNvcnRJdGVtXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzb3J0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNvcnRWYWx1ZShlLnRhcmdldC52YWx1ZSl9ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e2UgPT4gc2V0U29ydFZhbHVlKGUudGFyZ2V0LnZhbHVlKX0gICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPScgbXQtMycvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcHgtMCBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NoYW5nZVZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+IHtgXHJcbiAgICAgICAgICAgICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgb3B0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzRiMzBjMztcclxuICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MnJlbTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb3J0XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\login\\\\addComponenttwo\\\\sort.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Sort);

/***/ }),

/***/ "./component/login/addComponenttwo/textarea.js":
/*!*****************************************************!*\
  !*** ./component/login/addComponenttwo/textarea.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\login\\addComponenttwo\\textarea.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Nav = ({
  restEvent
}) => {
  const submitEvent = async e => {
    e.preventDefault();
    let data = new FormData(e.target);
    let typeName = document.querySelector('.component-code-typeName').textContent;
    let typeSort = document.querySelector(".component-sort-name").value;
    if (!typeName && !typeSort) return;
    data.append('type', typeSort);

    try {
      const QURL = 'http://localhost:4040/addComponent/' + typeName;
      let res = await fetch(QURL, {
        method: 'POST',
        body: data
      });

      if (res.ok) {
        restEvent(1);
      } else {
        alert('添加失败');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return __jsx("form", {
    onSubmit: submitEvent,
    className: "jsx-1052715655" + " " + 'row px-0',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("textarea", {
    name: "code",
    id: "code",
    required: true,
    className: "jsx-1052715655" + " " + 'col-10 mx-auto',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 14
    }
  }), __jsx("input", {
    type: "text",
    name: "codeTitle",
    placeholder: "\u6807\u9898",
    required: true,
    className: "jsx-1052715655" + " " + 'col-6 mx-auto mt-5 text-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 14
    }
  }), __jsx("div", {
    className: "jsx-1052715655" + " " + "col-12 mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 14
    }
  }, __jsx("div", {
    className: "jsx-1052715655" + " " + "row justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 18
    }
  }, __jsx("button", {
    type: "submit  col-auto",
    className: "jsx-1052715655",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, "Commit"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1052715655",
    __self: undefined
  }, "textarea.jsx-1052715655{height:600px;font-size:2rem;font-weight:600;padding:2rem;}input.jsx-1052715655{padding:1rem 2rem;font-weight:600;font-size:2rem;}button.jsx-1052715655{border:none;background:#4b30c3;color:white;padding:1rem 2rem;font-weight:600;font-size:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcbG9naW5cXGFkZENvbXBvbmVudHR3b1xcdGV4dGFyZWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0MwQixBQUdxQyxBQU1LLEFBS1AsWUFDTyxDQVhGLEtBTUEsVUFMQSxHQVdMLEdBTEksU0FNRSxDQVhKLEtBTWhCLFFBTEEsSUFXa0IsZ0JBQ0QsZUFDakIiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxsb2dpblxcYWRkQ29tcG9uZW50dHdvXFx0ZXh0YXJlYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IE5hdiA9ICh7cmVzdEV2ZW50fSkgPT4ge1xyXG4gICAgY29uc3Qgc3VibWl0RXZlbnQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgICAgICAgICAgICBcclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7ICAgICAgICBcclxuICAgICAgICBsZXQgdHlwZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcG9uZW50LWNvZGUtdHlwZU5hbWUnKS50ZXh0Q29udGVudDsgICAgICAgIFxyXG4gICAgICAgIGxldCB0eXBlU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcG9uZW50LXNvcnQtbmFtZVwiKS52YWx1ZTtcclxuICAgICAgICBpZiggIXR5cGVOYW1lICYmICF0eXBlU29ydCkgcmV0dXJuIDsgICAgICAgIFxyXG4gICAgICAgIGRhdGEuYXBwZW5kKCd0eXBlJyx0eXBlU29ydCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IFFVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo0MDQwL2FkZENvbXBvbmVudC8nK3R5cGVOYW1lICBcclxuICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaCggUVVSTCx7XHJcbiAgICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgICAgICAgYm9keTpkYXRhLFxyXG4gICAgICAgICB9KSAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICBpZihyZXMub2spIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIHJlc3RFdmVudCgxKSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICB9ZWxzZXsgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgYWxlcnQoJ+a3u+WKoOWksei0pScpXHJcbiAgICAgICAgIH1cclxuICAgICB9Y2F0Y2goZXJyKSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgfSAgICAgIFxyXG4gfSAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT0ncm93IHB4LTAnIG9uU3VibWl0PXtzdWJtaXRFdmVudH0+XHJcbiAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImNvZGVcIiBpZD1cImNvZGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjb2wtMTAgbXgtYXV0bydcclxuICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNvZGVUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfmoIfpopgnXHJcbiAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY29sLTYgbXgtYXV0byBtdC01IHRleHQtY2VudGVyJy8+XHJcblxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXQgIGNvbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbW1pdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjYwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxcmVtIDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjJyZW07ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBidXR0b24geyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojNGIzMGMzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MXJlbSAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MnJlbTsgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdlxyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\login\\\\addComponenttwo\\\\textarea.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./component/login/addPhoto/file.js":
/*!******************************************!*\
  !*** ./component/login/addPhoto/file.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\login\\addPhoto\\file.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const File = ({
  setSrc
}) => {
  let fileRef;
  const {
    0: filename,
    1: setFilename
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const upfileBU = e => {
    e.preventDefault();
    fileRef.click();
  };

  const fileChange = e => {
    let file = e.target.files[0];

    try {
      let blob = URL.createObjectURL(file);
      setFilename(file.name);
      setSrc(blob);
    } catch (err) {
      console.log(err);
    }
  };

  const changeValue = e => {
    setFilename(e.target.value);
  };

  const clearValue = e => {
    e.preventDefault();
    e.target.previousElementSibling.value = '';
  };

  return __jsx("div", {
    className: "jsx-2392000649" + " " + 'row align-content-between h-100',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "jsx-2392000649" + " " + "col-12 title d-flex align-items-center p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 18
    }
  }, __jsx("input", {
    type: "text",
    name: "photoTitle",
    placeholder: "title",
    id: "photoTitle",
    className: "jsx-2392000649" + " " + 'm-0 p-0 pb-2 text-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "jsx-2392000649" + " " + "filebu col-12 p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-2392000649" + " " + "row justify-content-between p-0 m-0 my-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    name: "fileName",
    value: filename,
    onChange: changeValue,
    onInput: changeValue,
    id: "fileName",
    className: "jsx-2392000649" + " " + 'col px-4 py-2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }), __jsx("button", {
    onClick: upfileBU,
    className: "jsx-2392000649" + " " + 'col-4 offset-1',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, "Load Photo")), __jsx("div", {
    className: "jsx-2392000649" + " " + "row justify-content-between p-0 m-0 my-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    name: "linkUrl",
    id: "linkUrl",
    className: "jsx-2392000649" + " " + 'col px-4 py-2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }), __jsx("button", {
    onClick: clearValue,
    className: "jsx-2392000649" + " " + 'col-4 offset-1',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, "Clear Link"))), __jsx("input", {
    type: "file",
    ref: ref => fileRef = ref,
    onChange: fileChange,
    name: "photofile",
    id: "photofile",
    className: "jsx-2392000649" + " " + 'd-none',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2392000649",
    __self: undefined
  }, "input[name='file-text-title'].jsx-2392000649{width:60%;border:none;border-bottom:solid 2px white;}.title.jsx-2392000649{height:50%;}.gongneng.jsx-2392000649{height:50%;}input.jsx-2392000649{background:none;border:solid 2px white;color:black;font-size:3rem;}.filebu.jsx-2392000649 input.jsx-2392000649{border-radius:6px;}button.jsx-2392000649{background:white;border:none;font-size:2rem;font-weight:600;padding:0 1.2rem;border-radius:6px;-webkit-transition:background .4s;transition:background .4s;}button.jsx-2392000649:hover{padding:0 1rem;background:none;border:solid 2px white;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcbG9naW5cXGFkZFBob3RvXFxmaWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEMEIsQUFJaUMsQUFLRSxBQUdELEFBR0ssQUFNRyxBQUdGLEFBU0QsVUE1QkosQ0FLZixBQUdBLElBcUJvQixDQWxCTSxDQVNYLENBSGYsSUFoQmlDLE9Bb0JmLEVBU1MsUUFsQlosS0FVSSxPQVRELENBWGxCLEVBNkJnQixNQVJJLE1BVHBCLEFBa0JBLFdBUnFCLGtCQUNTLDREQUM5QiIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxjb21wb25lbnRcXGxvZ2luXFxhZGRQaG90b1xcZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRmlsZSA9ICh7c2V0U3JjfSkgPT4ge1xyXG4gICAgbGV0IGZpbGVSZWY7XHJcbiAgICBjb25zdCBbZmlsZW5hbWUsIHNldEZpbGVuYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgdXBmaWxlQlUgPSAoZSkgPT4geyAgICAgICBcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZmlsZVJlZi5jbGljaygpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZmlsZUNoYW5nZSA9IChlKSA9PiB7IFxyXG4gICAgICAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgYmxvYiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XHJcbiAgICAgICAgICAgIHNldEZpbGVuYW1lKGZpbGUubmFtZSk7XHJcbiAgICAgICAgICAgIHNldFNyYyhibG9iKTtcclxuICAgICAgICAgfWNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICB9ICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlVmFsdWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEZpbGVuYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNsZWFyVmFsdWUgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudmFsdWUgPSAnJztcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGFsaWduLWNvbnRlbnQtYmV0d2VlbiBoLTEwMCc+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGl0bGUgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGhvdG9UaXRsZVwiIHBsYWNlaG9sZGVyPSd0aXRsZScgaWQ9XCJwaG90b1RpdGxlXCIgY2xhc3NOYW1lPSdtLTAgcC0wIHBiLTIgdGV4dC1jZW50ZXInICAvPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGVidSBjb2wtMTIgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWJldHdlZW4gcC0wIG0tMCBteS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbGVOYW1lXCIgdmFsdWU9e2ZpbGVuYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e2NoYW5nZVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGVOYW1lXCIgY2xhc3NOYW1lPSdjb2wgcHgtNCBweS0yJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdjb2wtNCBvZmZzZXQtMScgb25DbGljaz17dXBmaWxlQlV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWQgUGhvdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWJldHdlZW4gcC0wIG0tMCBteS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsaW5rVXJsXCIgaWQ9XCJsaW5rVXJsXCIgY2xhc3NOYW1lPSdjb2wgcHgtNCBweS0yJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdjb2wtNCBvZmZzZXQtMScgb25DbGljaz17Y2xlYXJWYWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xlYXIgTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiBmaWxlUmVmID0gcmVmIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2ZpbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob3RvZmlsZVwiIGlkPVwicGhvdG9maWxlXCIgY2xhc3NOYW1lPSdkLW5vbmUnLz5cclxuICAgICAgICAgICAgIDxzdHlsZSBqc3g+IHtgXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgaW5wdXRbbmFtZT0nZmlsZS10ZXh0LXRpdGxlJ10ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjYwJTsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTpzb2xpZCAycHggd2hpdGU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjUwJTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIC5nb25nbmVuZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjUwJTsgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6c29saWQgMnB4IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozcmVtOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIC5maWxlYnUgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjZweDtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC40cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjpzb2xpZCAycHggd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgPC9zdHlsZT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\login\\\\addPhoto\\\\file.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (File);

/***/ }),

/***/ "./component/login/addPhoto/photo.js":
/*!*******************************************!*\
  !*** ./component/login/addPhoto/photo.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\login\\addPhoto\\photo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Photo = ({
  file,
  clear
}) => {
  return __jsx("div", {
    className: "jsx-2132967920" + " " + "col-auto h-100 p-0 position-relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "jsx-2132967920" + " " + "photo-root",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "jsx-2132967920" + " " + "photo-bg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 16
    }
  }, file && __jsx("img", {
    src: file,
    alt: "newPhoto",
    className: "jsx-2132967920",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "jsx-2132967920" + " " + "gongneng-root justify-content-around",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2132967920" + " " + "delete-photo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("i", {
    onClick: () => clear(),
    className: "jsx-2132967920" + " " + 'iconfont icon-trash-',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "jsx-2132967920" + " " + "upload-photo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("button", {
    type: "submit",
    className: "jsx-2132967920",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "jsx-2132967920" + " " + 'iconfont icon-cloud-upload',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2132967920",
    __self: undefined
  }, "img.jsx-2132967920{width:100%;}button.jsx-2132967920{background:none;border:none;}.gongneng-root.jsx-2132967920{width:100%;height:100px;position:absolute;bottom:-100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.delete-photo.jsx-2132967920,.upload-photo.jsx-2132967920{height:60px;width:60px;border-radius:6px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:.4s;transition:.4s;cursor:pointer;}.delete-photo.jsx-2132967920:hover,.upload-photo.jsx-2132967920:hover{border:solid 2px white;}.delete-photo.jsx-2132967920:hover>i.jsx-2132967920,.upload-photo.jsx-2132967920:hover i.jsx-2132967920{font-size:40px;}i.jsx-2132967920{color:white;font-size:20px;-webkit-transition:.2s;transition:.2s;}.photo-root.jsx-2132967920{width:600px;height:600px;background:white;padding:50px;}.photo-bg.jsx-2132967920{width:500px;height:500px;background:black;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:auto;}.photo-bg.jsx-2132967920::-webkit-scrollbar{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcbG9naW5cXGFkZFBob3RvXFxwaG90by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QnlCLEFBSzZCLEFBR0ksQUFJTCxBQVFDLEFBVVUsQUFHUixBQUdGLEFBS0EsQUFNQSxBQVNDLFdBbERoQixBQU9nQixDQVFGLEFBZ0JJLEFBS0YsQUFNQSxDQVNoQixFQXZCQSxDQXpCZSxPQWFNLEFBU3JCLENBakJxQixDQTZCRCxBQU1BLEVBWEYsQ0E1QmxCLGFBYWdCLENBUkMsQUE2QkQsQUFNQSxhQUxoQixDQTdCZ0IsU0F1QmhCLGtEQWZzQixDQTJCSSxjQWxDSiw4RUFRSSxPQTJCSixRQWxDdEIsb0ZBUWtCLENBMkJELGNBQ2pCLHVCQTNCa0IsZUFDbEIiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxsb2dpblxcYWRkUGhvdG9cXHBob3RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgUGhvdG8gPSAoe2ZpbGUsY2xlYXJ9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBoLTEwMCBwLTAgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob3RvLXJvb3RcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG90by1iZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAge2ZpbGUgJiYgPGltZyBzcmM9e2ZpbGV9IGFsdD1cIm5ld1Bob3RvXCIvPiB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbmduZW5nLXJvb3QganVzdGlmeS1jb250ZW50LWFyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWxldGUtcGhvdG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ljb25mb250IGljb24tdHJhc2gtJyBvbkNsaWNrPXsoKSA9PiBjbGVhcigpfT4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1waG90b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ljb25mb250IGljb24tY2xvdWQtdXBsb2FkJz4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD4ge2BcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAuZ29uZ25lbmctcm9vdCB7XHJcbiAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwcHg7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICBib3R0b206LTEwMHB4O1xyXG4gICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgLmRlbGV0ZS1waG90bywudXBsb2FkLXBob3RvIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgaGVpZ2h0OjYwcHg7XHJcbiAgICAgICAgICAgICAgICAgd2lkdGg6NjBweDsgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NnB4O1xyXG4gICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjouNHM7XHJcbiAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAuZGVsZXRlLXBob3RvOmhvdmVyLC51cGxvYWQtcGhvdG86aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOnNvbGlkIDJweCB3aGl0ZTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIC5kZWxldGUtcGhvdG86aG92ZXI+aSwudXBsb2FkLXBob3RvOmhvdmVyIGkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjQwcHg7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOi4ycztcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIC5waG90by1yb290IHtcclxuICAgICAgICAgICAgICAgICB3aWR0aDo2MDBweDtcclxuICAgICAgICAgICAgICAgICBoZWlnaHQ6NjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICBwYWRkaW5nOjUwcHg7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAucGhvdG8tYmcge1xyXG4gICAgICAgICAgICAgICAgIHdpZHRoOjUwMHB4O1xyXG4gICAgICAgICAgICAgICAgIGhlaWdodDo1MDBweDtcclxuICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG4gICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjsgXHJcbiAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6YXV0bzsgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgLnBob3RvLWJnOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaG90b1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\login\\\\addPhoto\\\\photo.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Photo);

/***/ }),

/***/ "./component/login/addPhoto/upPhoto.js":
/*!*********************************************!*\
  !*** ./component/login/addPhoto/upPhoto.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file */ "./component/login/addPhoto/file.js");
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo */ "./component/login/addPhoto/photo.js");
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\login\\addPhoto\\upPhoto.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const UpPhoto = ({
  rest
}) => {
  const submitEvent = async e => {
    e.preventDefault();
    console.log(e.target.tagName);
    let data = new FormData(e.target);

    try {
      let res = await fetch('http://localhost:4040/addPhoto/photo', {
        method: 'POST',
        body: data
      });
      let result = await res.json();

      if (res.ok) {
        rest(3);
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const {
    0: SRC,
    1: setSRC
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("form", {
    onSubmit: submitEvent,
    className: "jsx-2635148866",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "jsx-2635148866" + " " + " row justify-content-center photo-main-root",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2635148866" + " " + "col-9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-2635148866" + " " + "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, __jsx(_photo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    file: SRC,
    clear: () => setSRC(null),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "jsx-2635148866" + " " + "col offset-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 33
    }
  }, __jsx(_file__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setSrc: setSRC,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 41
    }
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2635148866",
    __self: undefined
  }, ".photo-main-root.jsx-2635148866{margin:0;width:100%;background:#85c0d2;position:fixed;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);-webkit-animation:show-jsx-2635148866 1s 1;animation:show-jsx-2635148866 1s 1;}@-webkit-keyframes show-jsx-2635148866{0%{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}100{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes show-jsx-2635148866{0%{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}100{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcbG9naW5cXGFkZFBob3RvXFx1cFBob3RvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDbUIsQUFHeUIsQUFVNEIsQUFHSixTQVp0QixXQUNRLG1CQUNKLGVBQ1AsUUFDbUIsT0FTZCxNQUhBLGdGQUxTLDhFQUM3QiIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxjb21wb25lbnRcXGxvZ2luXFxhZGRQaG90b1xcdXBQaG90by5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEZpbGUgZnJvbSAnLi9maWxlJ1xyXG5pbXBvcnQgUGhvdG8gZnJvbSAnLi9waG90bydcclxuXHJcbmNvbnN0IFVwUGhvdG8gPSAoe3Jlc3R9KSA9PiB7XHJcbiAgXHJcbiAgY29uc3Qgc3VibWl0RXZlbnQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnRhZ05hbWUpOyAgICAgIFxyXG4gICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XHJcbiAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwNDAvYWRkUGhvdG8vcGhvdG8nLHtcclxuICAgICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgICAgICAgIGJvZHk6ZGF0YSxcclxuICAgICAgICAgIH0pICAgICAgICAgXHJcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgIHJlcy5qc29uKCk7ICAgIFxyXG4gICAgICAgICAgaWYocmVzLm9rKSB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgcmVzdCgzKTtcclxuICAgICAgICAgIH1lbHNleyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgfWNhdGNoKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSAgXHJcbiAgICAgICAgIFxyXG4gIH0gXHJcbiAgY29uc3QgW1NSQywgc2V0U1JDXSA9IHVzZVN0YXRlKCcnKTtcclxuIFxyXG4gIHJldHVybiggIFxyXG4gIDw+ICAgICAgICAgIFxyXG4gICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0RXZlbnR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiByb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwaG90by1tYWluLXJvb3RcIj4gXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC05XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+ICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGhvdG8gZmlsZT17U1JDfSBjbGVhcj17KCkgPT4gc2V0U1JDKG51bGwpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgb2Zmc2V0LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWxlIHNldFNyYyA9IHsgc2V0U1JDIH0vPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZm9ybT5cclxuICAgICAgXHJcbiAgICAgIDxzdHlsZSBqc3g+IHtgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgLnBob3RvLW1haW4tcm9vdCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiM4NWMwZDI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgICAgICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2hvdyAxcyAxIDtcclxuICAgICAgICB9ICBcclxuICAgICAgIEBrZXlmcmFtZXMgc2hvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICA8L3N0eWxlPlxyXG4gIFxyXG4gIDwvPlxyXG4pfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBQaG90b1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\login\\\\addPhoto\\\\upPhoto.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (UpPhoto);

/***/ }),

/***/ "./component/login/addVideo/UpVideo.js":
/*!*********************************************!*\
  !*** ./component/login/addVideo/UpVideo.js ***!
  \*********************************************/
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
/* harmony import */ var _show_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-video */ "./component/login/addVideo/show-video.js");
/* harmony import */ var _upload_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload-video */ "./component/login/addVideo/upload-video.js");
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\login\\addVideo\\UpVideo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const UpVideo = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {}, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1426833608" + " " + "video-root row justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(_show_video__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 20
    }
  }), __jsx(_upload_video__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 20
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1426833608",
    __self: undefined
  }, "html.jsx-1426833608{font-size:10px;background:#334a52;}.video-root.jsx-1426833608{margin:0;width:100%;position:fixed;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);-webkit-animation:show-jsx-1426833608 1s 1;animation:show-jsx-1426833608 1s 1;}@-webkit-keyframes show-jsx-1426833608{0%{-webkit-transform:translate(0,-120%);-ms-transform:translate(0,-120%);transform:translate(0,-120%);}100{-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);}}@keyframes show-jsx-1426833608{0%{-webkit-transform:translate(0,-120%);-ms-transform:translate(0,-120%);transform:translate(0,-120%);}100{-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcbG9naW5cXGFkZFZpZGVvXFxVcFZpZGVvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCaUIsQUFJeUIsQUFJQSxBQVNvQyxBQUdELFNBWGpDLE1BSkUsS0FLRSxjQUp0QixDQUtlLFFBQ21CLHFEQVNkLEdBSEEscUNBTFMsOEVBQzdCIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcbG9naW5cXGFkZFZpZGVvXFxVcFZpZGVvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBTaG93IGZyb20gJy4vc2hvdy12aWRlbydcclxuaW1wb3J0IFVwbG9hZCBmcm9tICcuL3VwbG9hZC12aWRlbydcclxuXHJcbmNvbnN0IFVwVmlkZW8gPSAoKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgfSxbXSlcclxuICByZXR1cm4oICBcclxuICA8PlxyXG4gICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tcm9vdCByb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPiBcclxuICAgICAgICAgICAgICAgICAgIDxTaG93Lz4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgPFVwbG9hZC8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICA8c3R5bGUganN4ID57YFxyXG4gICAgICAgICBcclxuICAgICAgICBodG1sIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDojMzM0YTUyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudmlkZW8tcm9vdCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgICAgICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTsgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2hvdyAxcyAxIDsgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBrZXlmcmFtZXMgc2hvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLC0xMjAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICBcclxuICA8Lz5cclxuKX1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwVmlkZW9cclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\login\\\\addVideo\\\\UpVideo.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (UpVideo);

/***/ }),

/***/ "./component/login/addVideo/show-video.js":
/*!************************************************!*\
  !*** ./component/login/addVideo/show-video.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\login\\addVideo\\show-video.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const ShowVideo = () => {
  return __jsx("div", {
    className: "jsx-1564866248" + " " + "col-4 show",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "jsx-1564866248" + " " + "row h-100 justify-content-center align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 22
    }
  }, __jsx("div", {
    className: "jsx-1564866248" + " " + "show-logo d-flex justify-content-center align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 27
    }
  }, __jsx("i", {
    className: "jsx-1564866248" + " " + 'iconfont icon-video',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 31
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1564866248",
    __self: undefined
  }, ".show.jsx-1564866248{background:black;height:660px;border-radius:20px 0 0 20px;position:relative;}.show.jsx-1564866248::after{content:'';position:absolute;right:-20px;top:0;bottom:0;left:80%;background:black;}.show-logo.jsx-1564866248{height:180px;width:180px;background:#4b4b4b;border-radius:20px;}i.jsx-1564866248{color:white;font-size:90px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcbG9naW5cXGFkZFZpZGVvXFxzaG93LXZpZGVvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdrQyxBQUc4QyxBQU1MLEFBVUUsQUFNRCxXQWZNLENBZ0JILENBTkgsSUFoQkEsUUFpQk8sRUFNdEIsRUFoQmUsQ0FOZ0IsV0FPdEIsR0FVYSxHQVRWLFNBQ0EsRUFSUSxLQWlCcEIsRUFSb0IsV0FScEIsTUFVQSIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxjb21wb25lbnRcXGxvZ2luXFxhZGRWaWRlb1xcc2hvdy12aWRlby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFNob3dWaWRlbyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IHNob3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaC0xMDAganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctbG9nbyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdpY29uZm9udCBpY29uLXZpZGVvJz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD4ge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc2hvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NjYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoyMHB4IDAgIDAgMjBweDsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zaG93OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDotMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zaG93LWxvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjE4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiM0YjRiNGI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6OTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICA8L3N0eWxlPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgPC9kaXY+IFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG93VmlkZW9cclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\login\\\\addVideo\\\\show-video.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ShowVideo);

/***/ }),

/***/ "./component/login/addVideo/upload-video.js":
/*!**************************************************!*\
  !*** ./component/login/addVideo/upload-video.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\login\\addVideo\\upload-video.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const ShowVideo = () => {
  return __jsx("div", {
    className: "jsx-602073891" + " " + "col-4 show",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 8
    }
  }, __jsx(Form, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 22
    }
  }), __jsx("div", {
    className: "jsx-602073891" + " " + "row h-100 flex-column justify-content-center align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 22
    }
  }, __jsx("div", {
    className: "jsx-602073891" + " " + "show-logo d-flex justify-content-center align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 27
    }
  }, __jsx("i", {
    className: "jsx-602073891" + " " + 'iconfont icon-cloud-upload',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 31
    }
  })), __jsx("h1", {
    className: "jsx-602073891" + " " + 'my-5',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 27
    }
  }, "Upload a New Video"), __jsx("button", {
    className: "jsx-602073891",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 27
    }
  }, "Upload a File")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "602073891",
    __self: undefined
  }, ".show.jsx-602073891{background:white;height:660px;border-radius:20px;position:relative;overflow:hidden;}.show-logo.jsx-602073891{height:120px;width:120px;background:#e9e9eb;border-radius:20px;}i.jsx-602073891{color:#9192a4;font-size:90px;}button.jsx-602073891{padding:1rem 1.5rem;font-size:2rem;background:black;border-radius:10px;-webkit-transition:.2s;transition:.2s;font-weight:700;color:white;border:2px solid black;border-color:rgba(0,0,0,0);}button.jsx-602073891:hover{color:black;border:2px solid black;background:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcbG9naW5cXGFkZFZpZGVvXFx1cGxvYWQtdmlkZW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJrQyxBQUc4QyxBQU9ILEFBTUMsQUFJUSxBQVdSLFlBQ1csQ0FyQmIsQ0FNRyxHQWJILEdBaUJLLEtBVEUsSUFNdEIsQ0FicUIsS0FpQkMsQUFXRCxTQXBCQyxLQVBGLEVBNEJ0QixDQVgwQixXQVR4QixJQVBrQixJQWlCRSxZQWhCcEIsMEJBaUJxQixnQkFDSixZQUNXLHVCQUNJLDJCQUM5QiIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxjb21wb25lbnRcXGxvZ2luXFxhZGRWaWRlb1xcdXBsb2FkLXZpZGVvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgU2hvd1ZpZGVvID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgc2hvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Rm9ybS8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGgtMTAwIGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LWxvZ28gZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbi1jbG91ZC11cGxvYWQnPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdteS01Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIGEgTmV3IFZpZGVvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIGEgRmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zaG93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo2NjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnNob3ctbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2U5ZTllYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzkxOTJhNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjkwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxcmVtIDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOmJsYWNrOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOi4ycztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6cmdiYSgwLDAsMCwwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOm5vbmU7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgPC9zdHlsZT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgIDwvZGl2PiBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd1ZpZGVvXHJcblxyXG5cclxuY29uc3QgRm9ybSA9ICgpID0+IHtcclxuICAgIHJldHVybiggICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGZvcm0tcm9vdCBzaGFkb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGgtMTAwIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24tY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCIgY2xhc3NOYW1lPSdoMSBteS00IGNvbC0xMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpZGVvIFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT0nY29sLTEwJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGNsYXNzTmFtZT0naDIgbXktNSBjb2wtMTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWaWRlbyBJbnRyb2R1Y3Rpb25cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPiBcclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIkludHJvZHVjdGlvblwiIGlkPVwiSW50cm9kdWN0aW9uXCIgY2xhc3NOYW1lPScgY29sLTEwJz48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdtdC01Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIGEgRmlsZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1yb290IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjouNHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDExMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOnNvbGlkIGJsYWNrIDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6c29saWQgMnB4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MXJlbSAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpibGFjazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjouMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpub25lOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\login\\\\addVideo\\\\upload-video.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ShowVideo);

const Form = () => {
  return __jsx("div", {
    className: "jsx-2896574129" + " " + "col-12 form-root shadow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2896574129" + " " + "row h-100 justify-content-center align-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "title",
    className: "jsx-2896574129" + " " + 'h1 my-4 col-10',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, "Video Title"), __jsx("input", {
    type: "text",
    name: "title",
    id: "title",
    className: "jsx-2896574129" + " " + 'col-10',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }), __jsx("label", {
    htmlFor: "title",
    className: "jsx-2896574129" + " " + 'h2 my-5 col-10',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, "Video Introduction"), __jsx("textarea", {
    name: "Introduction",
    id: "Introduction",
    className: "jsx-2896574129" + " " + ' col-10',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "jsx-2896574129" + " " + 'mt-5',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, "Upload a File")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2896574129",
    __self: undefined
  }, ".form-root.jsx-2896574129{position:absolute;right:0;top:0;bottom:0;left:0;background:white;z-index:3;border-radius:20px;-webkit-transition:.4s;transition:.4s;-webkit-transform:translateX(110%);-ms-transform:translateX(110%);transform:translateX(110%);}input.jsx-2896574129{font-size:3rem;border-radius:12px;border:solid black 2px;padding:1rem;}textarea.jsx-2896574129{height:200px;border:solid 2px black;border-radius:12px;font-size:2rem;padding:2rem;}button.jsx-2896574129{padding:1rem 1.5rem;font-size:2rem;background:black;border-radius:10px;-webkit-transition:.2s;transition:.2s;font-weight:700;color:white;border:2px solid black;border-color:rgba(0,0,0,0);}button.jsx-2896574129:hover{color:black;border:2px solid black;background:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcbG9naW5cXGFkZFZpZGVvXFx1cGxvYWQtdmlkZW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEU2QixBQUdnRCxBQVlMLEFBT0YsQUFRVyxBQVdSLFlBQ1csQ0FuQkosRUFQSixHQVpULEVBMkJTLE1BMUJYLE1BQ0csRUFXWSxDQWVGLEFBV0QsQ0FuQkQsS0FqQlYsT0FDVSxHQW9DdEIsQ0FYMEIsR0FSUixFQVBGLFFBVEQsS0FXZixBQU1nQixDQVFNLElBeEJFLFFBa0J4QixXQWpCb0IsZUF3QkcsZ0JBQ0osT0F4QmEsS0F5QkYsdUJBQ0ksMkJBQzlCLHNDQTFCSiIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxjb21wb25lbnRcXGxvZ2luXFxhZGRWaWRlb1xcdXBsb2FkLXZpZGVvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgU2hvd1ZpZGVvID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgc2hvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Rm9ybS8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGgtMTAwIGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LWxvZ28gZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0naWNvbmZvbnQgaWNvbi1jbG91ZC11cGxvYWQnPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdteS01Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIGEgTmV3IFZpZGVvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIGEgRmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zaG93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo2NjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnNob3ctbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2U5ZTllYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzkxOTJhNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjkwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxcmVtIDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOmJsYWNrOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOi4ycztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6cmdiYSgwLDAsMCwwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOm5vbmU7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgPC9zdHlsZT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgIDwvZGl2PiBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd1ZpZGVvXHJcblxyXG5cclxuY29uc3QgRm9ybSA9ICgpID0+IHtcclxuICAgIHJldHVybiggICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGZvcm0tcm9vdCBzaGFkb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGgtMTAwIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24tY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCIgY2xhc3NOYW1lPSdoMSBteS00IGNvbC0xMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpZGVvIFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT0nY29sLTEwJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGNsYXNzTmFtZT0naDIgbXktNSBjb2wtMTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWaWRlbyBJbnRyb2R1Y3Rpb25cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPiBcclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIkludHJvZHVjdGlvblwiIGlkPVwiSW50cm9kdWN0aW9uXCIgY2xhc3NOYW1lPScgY29sLTEwJz48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdtdC01Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIGEgRmlsZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1yb290IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjouNHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDExMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOnNvbGlkIGJsYWNrIDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6c29saWQgMnB4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MXJlbSAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpibGFjazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjouMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpub25lOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\login\\\\addVideo\\\\upload-video.js */"));
};

/***/ }),

/***/ "./component/login/index.js":
/*!**********************************!*\
  !*** ./component/login/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/loading */ "./component/public/loading.js");
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\login\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Index = ({
  openEvent
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    //自动输入账号
    let account = localStorage.getItem('user-account');

    if (account) {
      let input = document.querySelector("input[name='account']");
      input.value = account;
      document.querySelector("input[name='password']").focus();
    }
  }, []);

  const submitEv = async e => {
    e.preventDefault();
    let data = new FormData(e.target);
    setLoading(true);

    try {
      let res = await fetch('http://localhost:4040/login', {
        method: 'POST',
        body: data
      });
      let result = await res.json();

      if (res.ok) {
        localStorage.setItem('user-account', data.get('account'));
        document.documentElement.style.background = '#f7f7f7';
        openEvent(result);
      } else {
        setLoading(false);
        alert(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const {
    0: Loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return __jsx("div", {
    className: "jsx-1419307597" + " " + 'row m-0',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1419307597" + " " + "main-root shadow-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1419307597" + " " + "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1419307597" + " " + "animation col-12 d-flex align-items-center justify-content-center ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, Loading ? __jsx(_public_loading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "#97cad9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 38
    }
  }) : __jsx("i", {
    className: "jsx-1419307597" + " " + 'iconfont icon-suo',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 63
    }
  })), __jsx("form", {
    onSubmit: submitEv,
    className: "jsx-1419307597" + " " + "form-root col-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "jsx-1419307597" + " " + 'title my-5',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 26
    }
  }, "Login"), __jsx("label", {
    htmlFor: "account",
    className: "jsx-1419307597" + " " + 'col-12 h3 my-4',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 26
    }
  }, "Account"), __jsx("input", {
    type: "text",
    name: "account",
    id: "account",
    autoFocus: true,
    required: true,
    className: "jsx-1419307597" + " " + 'w-100',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 26
    }
  }), __jsx("label", {
    htmlFor: "password",
    className: "jsx-1419307597" + " " + 'col-12 h3 my-4',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 26
    }
  }, "Password"), __jsx("input", {
    type: "password",
    name: "password",
    id: "password",
    required: true,
    className: "jsx-1419307597" + " " + 'w-100',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }), __jsx("button", {
    type: "submit",
    className: "jsx-1419307597" + " " + 'my-5 h2 shadow-sm',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, "LOGIN")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1419307597",
    __self: undefined
  }, ".main-root.jsx-1419307597{width:480px;position:fixed;top:50%;left:50%;border-radius:20px;overflow:hidden;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:white;}.animation.jsx-1419307597{height:200px;background:#fafeff;}.form-root.jsx-1419307597{padding:10%;padding-top:0;}i.jsx-1419307597{font-size:60px;color:#97cad9;}input.jsx-1419307597{font-size:3rem;border-radius:20px;border:solid #e5e5e5 2px;padding:1rem;}label.jsx-1419307597{margin:0;padding:0;color:#d5d6d9;}button.jsx-1419307597{width:100%;padding:1rem;font-size:3rem;background:#f3fcfe;border:none;color:#97cad9;font-weight:700;border-radius:10px;-webkit-transition:.2s;transition:.2s;}button.jsx-1419307597:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}h1.jsx-1419307597{color:#97cad9;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcbG9naW5cXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFeUIsQUFHbUMsQUFVRixBQUlELEFBSUcsQUFJQSxBQU1OLEFBS0UsQUFXVSxBQUdQLFNBbEJKLEVBS0csQ0FqQ0ssQUFjSixDQUpLLENBcUN0QixDQTdCaUIsQUFJSyxJQU9MLEtBS0MsRUFuQmxCLENBZGMsRUFrQmQsR0FSQSxDQW1CQSxDQVA0QixDQXJCYixJQWlDTyxLQWhDRyxjQWlDVixDQVpDLElBcEJNLE9BaUNMLEVBWmpCLEdBbUJBLElBdkNxQyxLQWlDbEIsZ0JBQ0csbUJBQ0osc0NBQ2xCLDJCQW5DdUIsaUJBQ3ZCIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcbG9naW5cXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG9hZCBmcm9tICcuLi9wdWJsaWMvbG9hZGluZydcclxuXHJcbmNvbnN0IEluZGV4ID0gKHtvcGVuRXZlbnR9KSA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/oh6rliqjovpPlhaXotKblj7dcclxuICAgICAgICBsZXQgYWNjb3VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyLWFjY291bnQnKTtcclxuICAgICAgICBpZihhY2NvdW50KSB7XHJcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdhY2NvdW50J11cIik7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gYWNjb3VudDtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3Bhc3N3b3JkJ11cIikuZm9jdXMoKTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH0sIFtdKVxyXG4gICAgY29uc3Qgc3VibWl0RXYgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwNDAvbG9naW4nLHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OmRhdGEsXHJcbiAgICAgICAgICAgIH0pICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCAgcmVzLmpzb24oKTsgICAgXHJcbiAgICAgICAgICAgIGlmKHJlcy5vaykgeyAgIFxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXItYWNjb3VudCcsZGF0YS5nZXQoJ2FjY291bnQnKSk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCAgPSAnI2Y3ZjdmNyc7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb3BlbkV2ZW50KHJlc3VsdCk7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ZWxzZXsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgXHJcbiAgICAgICAgICAgICAgICBhbGVydChyZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWNhdGNoKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICB9ICAgIFxyXG4gICAgY29uc3QgW0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgbS0wJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXJvb3Qgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0aW9uIGNvbC0xMiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZyA/IDxMb2FkIGNvbG9yPScjOTdjYWQ5Jy8+IDo8aSBjbGFzc05hbWU9J2ljb25mb250IGljb24tc3VvJz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0tcm9vdCBjb2wtMTJcIiBvblN1Ym1pdD17c3VibWl0RXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGl0bGUgbXktNSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpbiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWNjb3VudFwiIGNsYXNzTmFtZT0nY29sLTEyIGgzIG15LTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWNjb3VudFwiIGlkPVwiYWNjb3VudFwiIGF1dG9Gb2N1cyByZXF1aXJlZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctMTAwJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPSdjb2wtMTIgaDMgbXktNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIiByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTEwMCcvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9J215LTUgaDIgc2hhZG93LXNtJz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMT0dJTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAgICAgLm1haW4tcm9vdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6NDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgICAgIC5hbmltYXRpb257XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZhZmVmZjtcclxuICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgLmZvcm0tcm9vdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTo2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiM5N2NhZDk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjpzb2xpZCAjZTVlNWU1IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjFyZW07XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjojZDVkNmQ5O1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6M3JlbTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmM2ZjZmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6Izk3Y2FkOTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246LjJzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjojOTdjYWQ5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFxyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\login\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./component/login/sidebar.js":
/*!************************************!*\
  !*** ./component/login/sidebar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\login\\sidebar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Sidebar = ({
  selectEv
}) => {
  const clickEv = e => {
    let value = e.target.closest('li').children[0].textContent;
    let id = value === 'Component' ? 1 : value === 'Video' ? 2 : value === 'Photo' ? 3 : false;
    selectEv(id);
  };

  return __jsx("ul", {
    onClick: clickEv,
    className: "jsx-3163982633" + " " + 'col-4 sidebar  m-0 p-0',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3163982633" + " " + "row justify-content-center px-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 16
    }
  }, __jsx("li", {
    className: "jsx-3163982633" + " " + 'col p-4 ',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 20
    }
  }, __jsx("h2", {
    className: "jsx-3163982633" + " " + 'text-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 24
    }
  }, "Component")), __jsx("li", {
    className: "jsx-3163982633" + " " + 'col p-4 ',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 20
    }
  }, __jsx("h2", {
    className: "jsx-3163982633" + " " + 'text-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 24
    }
  }, "Video")), __jsx("li", {
    className: "jsx-3163982633" + " " + 'col p-4 ',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 20
    }
  }, __jsx("h2", {
    className: "jsx-3163982633" + " " + 'text-center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 24
    }
  }, "Photo"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3163982633",
    __self: undefined
  }, ".sidebar.jsx-3163982633{background:#85c0d2;position:fixed;left:50%;top:0%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);-webkit-animation:show-jsx-3163982633 1s 1;animation:show-jsx-3163982633 1s 1;}@-webkit-keyframes show-jsx-3163982633{0%{-webkit-transform:translate(-50%,-120%);-ms-transform:translate(-50%,-120%);transform:translate(-50%,-120%);}100{-webkit-transform:translate(-50%,0%);-ms-transform:translate(-50%,0%);transform:translate(-50%,0%);}}@keyframes show-jsx-3163982633{0%{-webkit-transform:translate(-50%,-120%);-ms-transform:translate(-50%,-120%);transform:translate(-50%,-120%);}100{-webkit-transform:translate(-50%,0%);-ms-transform:translate(-50%,0%);transform:translate(-50%,0%);}}ul.jsx-3163982633{list-style:none;color:white;overflow:hidden;}li.jsx-3163982633{cursor:pointer;}li.jsx-3163982633:hover{background:#589baf;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcbG9naW5cXHNpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEI0QixBQUcrQyxBQVNpQixBQUdILEFBSWpCLEFBS0QsQUFHSSxlQUZ0QixDQUxlLEdBaEJHLEFBd0JsQixTQVBtQixNQWhCUCxTQUNGLENBZ0JWLE1BZjhCLGlEQVMxQixTQUhBLG1DQUxxQiw4RUFDekIiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxsb2dpblxcc2lkZWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoe3NlbGVjdEV2fSkgPT4ge1xyXG4gICAgY29uc3QgY2xpY2tFdiA9IChlKSA9PiB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKS5jaGlsZHJlblswXS50ZXh0Q29udGVudFxyXG4gICAgICAgIGxldCBpZCA9IHZhbHVlICA9PT0gJ0NvbXBvbmVudCcgPyAxIDogdmFsdWUgID09PSAnVmlkZW8nID8gMiA6dmFsdWUgID09PSAnUGhvdG8nID8zIDogZmFsc2U7XHJcbiAgICAgICAgc2VsZWN0RXYoaWQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nY29sLTQgc2lkZWJhciAgbS0wIHAtMCcgb25DbGljaz17Y2xpY2tFdn0+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgcHgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZSA9ICdjb2wgcC00ICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0gJ3RleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZSA9ICdjb2wgcC00ICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0gJ3RleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZGVvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lID0gJ2NvbCBwLTQgJz5cclxuICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSAndGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGhvdG9cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+IHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6Izg1YzBkMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2hvdyAxcyAxIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHNob3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtMTIwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzU4OWJhZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICBcclxuICAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhclxyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\login\\\\sidebar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./component/public/loading.js":
/*!*************************************!*\
  !*** ./component/public/loading.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\public\\loading.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Loading({
  color,
  size
}) {
  let rgba = color || '#72BDE8';
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3746841954", [size, size, rgba]]]) + " " + "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3746841954", [size, size, rgba]]]) + " " + "one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3746841954", [size, size, rgba]]]) + " " + "two",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3746841954", [size, size, rgba]]]) + " " + "three",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3746841954",
    dynamic: [size, size, rgba],
    __self: this
  }, `.content.__jsx-style-dynamic-selector{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.content.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:${size}px;height:${size}px;border-radius:20px;background:${rgba};margin:0 6px;}.one.__jsx-style-dynamic-selector{-webkit-animation:go-__jsx-style-dynamic-selector 2s infinite;animation:go-__jsx-style-dynamic-selector 2s infinite;}.two.__jsx-style-dynamic-selector{-webkit-animation:go-__jsx-style-dynamic-selector 2s 0.2s infinite;animation:go-__jsx-style-dynamic-selector 2s 0.2s infinite;}.three.__jsx-style-dynamic-selector{-webkit-animation:go-__jsx-style-dynamic-selector 2s 0.4s infinite;animation:go-__jsx-style-dynamic-selector 2s 0.4s infinite;}@-webkit-keyframes go-__jsx-style-dynamic-selector{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}50%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}}@keyframes go-__jsx-style-dynamic-selector{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}50%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxccHVibGljXFxsb2FkaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVtQixBQUlvQyxBQU95QixBQU9WLEFBR0ksQUFHQSxBQUlSLEFBR0EsQUFHQSxZQTdCWixXQUNFLGNBTXlCLGdDQWlCckMsQUFHQSxBQUdBLE1BdEJrQixtQkFDcUIsR0FQakIsbUJBWTFCLFVBR0EsQUFHQSxRQVZnQixhQUNoQixpREFSc0IsNkZBQ3RCIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxccHVibGljXFxsb2FkaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gTG9hZGluZyh7Y29sb3Isc2l6ZX0pIHtcclxuICAgIGxldCByZ2JhID0gY29sb3IgfHwgJyM3MkJERTgnO1xyXG4gICAgcmV0dXJuICggICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3b1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRocmVlXCI+PC9kaXY+ICAgICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudD5kaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoke3NpemV9cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoke3NpemV9cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDoke3JnYmF9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCA2cHg7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGdvIDJzICBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnR3byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZ28gMnMgMC4ycyBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRocmVlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBnbyAycyAwLjRzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGdvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdcclxuIl19 */
/*@ sourceURL=C:\\newlife\\newSite\\my-app\\component\\public\\loading.js */`));
}

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
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
/* harmony import */ var _component_login_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/login/index */ "./component/login/index.js");
/* harmony import */ var _component_login_addComponenttwo_root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/login/addComponenttwo/root */ "./component/login/addComponenttwo/root.js");
/* harmony import */ var _component_login_addPhoto_upPhoto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/login/addPhoto/upPhoto */ "./component/login/addPhoto/upPhoto.js");
/* harmony import */ var _component_login_addVideo_UpVideo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/login/addVideo/UpVideo */ "./component/login/addVideo/UpVideo.js");
/* harmony import */ var _component_login_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/login/sidebar */ "./component/login/sidebar.js");
var _jsxFileName = "C:\\newlife\\newSite\\my-app\\pages\\login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const Home = () => {
  const {
    0: Key,
    1: setKey
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: CentId,
    1: setCentId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);

  const openEvent = key => {
    setKey(key);
    setCentId(1);
  };

  const seleceWindow = id => {
    if (id === false) return;
    let BGColor = id === 3 ? "#85c0d2" : id === 2 ? "#334a52" : "#f7f7f7";
    document.documentElement.style.background = BGColor;
    if (id === CentId) return;
    setCentId(id);
  };

  const resizeLoad = index => {
    setCentId(() => 5);
    setCentId(() => index);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-1325390890",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "\u540E\u53F0"), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css",
    integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
    crossorigin: "anonymous",
    className: "jsx-1325390890",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "//at.alicdn.com/t/font_1748919_7p01375xskx.css",
    className: "jsx-1325390890",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-1325390890" + " " + "container-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, CentId === 0 && __jsx(_component_login_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    openEvent: openEvent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 26
    }
  }), CentId === 1 && __jsx(_component_login_addComponenttwo_root__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rest: resizeLoad,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 26
    }
  }), CentId === 2 && __jsx(_component_login_addVideo_UpVideo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 26
    }
  }), CentId === 3 && __jsx(_component_login_addPhoto_upPhoto__WEBPACK_IMPORTED_MODULE_5__["default"], {
    rest: resizeLoad,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 26
    }
  }), CentId > 0 && __jsx(_component_login_sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectEv: seleceWindow,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 24
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1325390890",
    __self: undefined
  }, "*,body{margin:0;padding:0;box-sizing:border-box;}html{font-size:10px;background:#f7f7f7;background:#383636;-webkit-transition:0.5s;transition:0.5s;}.container-fluid{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxsb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRHlCLEFBSW9CLEFBS00sQUFPTCxTQVhBLENBWVosS0FQcUIsSUFKRyxlQUtILE9BSnJCLFlBTWtCLHdDQUNsQiIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxwYWdlc1xcbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEluZGV4IGZyb20gXCIuLi9jb21wb25lbnQvbG9naW4vaW5kZXhcIjtcclxuaW1wb3J0IEFkZENvbSBmcm9tIFwiLi4vY29tcG9uZW50L2xvZ2luL2FkZENvbXBvbmVudHR3by9yb290XCI7XHJcbmltcG9ydCBBZGRQaG90byBmcm9tIFwiLi4vY29tcG9uZW50L2xvZ2luL2FkZFBob3RvL3VwUGhvdG9cIjtcclxuaW1wb3J0IEFkZFZpZGVvIGZyb20gXCIuLi9jb21wb25lbnQvbG9naW4vYWRkVmlkZW8vVXBWaWRlb1wiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50L2xvZ2luL3NpZGViYXJcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW0tleSwgc2V0S2V5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtDZW50SWQsIHNldENlbnRJZF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBvcGVuRXZlbnQgPSAoa2V5KSA9PiB7XHJcbiAgICBzZXRLZXkoa2V5KTtcclxuICAgIHNldENlbnRJZCgxKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZWxlY2VXaW5kb3cgPSAoaWQpID0+IHtcclxuICAgIGlmIChpZCA9PT0gZmFsc2UpIHJldHVybjtcclxuICAgIGxldCBCR0NvbG9yID0gaWQgPT09IDMgPyBcIiM4NWMwZDJcIiA6IGlkID09PSAyID8gXCIjMzM0YTUyXCIgOiBcIiNmN2Y3ZjdcIjtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gQkdDb2xvcjtcclxuICAgIGlmIChpZCA9PT0gQ2VudElkKSByZXR1cm47XHJcbiAgICBzZXRDZW50SWQoaWQpO1xyXG4gIH07XHJcbiAgY29uc3QgcmVzaXplTG9hZCA9IChpbmRleCkgPT4ge1xyXG4gICAgc2V0Q2VudElkKCgpID0+IDUpO1xyXG4gICAgc2V0Q2VudElkKCgpID0+IGluZGV4KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+5ZCO5Y+wPC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANC40LjEvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LVZrb284eDRDR3NPMytIaHh2OFQvUTVQYVh0a0t0dTZ1ZzVUT2VOVjZnQmlGZVdQR0ZOOU11aE9mMjNROUlmamhcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTc0ODkxOV83cDAxMzc1eHNreC5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICB7Q2VudElkID09PSAwICYmIDxJbmRleCBvcGVuRXZlbnQ9e29wZW5FdmVudH0gLz59XHJcbiAgICAgICAge0NlbnRJZCA9PT0gMSAmJiA8QWRkQ29tIHJlc3Q9e3Jlc2l6ZUxvYWR9IC8+fVxyXG4gICAgICAgIHtDZW50SWQgPT09IDIgJiYgPEFkZFZpZGVvIC8+fVxyXG4gICAgICAgIHtDZW50SWQgPT09IDMgJiYgPEFkZFBob3RvIHJlc3Q9e3Jlc2l6ZUxvYWR9IC8+fVxyXG4gICAgICAgIHtDZW50SWQgPiAwICYmIDxTaWRlYmFyIHNlbGVjdEV2PXtzZWxlY2VXaW5kb3d9IC8+fVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgKixcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICBodG1sIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzgzNjM2O1xyXG5cclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\pages\\\\login.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\newlife\newSite\my-app\pages\login.js */"./pages/login.js");


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
//# sourceMappingURL=login.js.map