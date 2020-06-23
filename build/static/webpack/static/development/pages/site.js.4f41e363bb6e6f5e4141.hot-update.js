webpackHotUpdate("static\\development\\pages\\site.js",{

/***/ "./component/site/index.js":
/*!*********************************!*\
  !*** ./component/site/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link */ "./component/site/link.js");
var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\site\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var data = _ref.data;
  var arr = [1, 3, 4];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      POSI = _useState[0],
      setPOSI = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      open = _useState2[0],
      setopen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      he = _useState3[0],
      sethe = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      childhe = _useState4[0],
      setchlidhe = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setTimeout(function () {
      var MainPosi = mainDom.getBoundingClientRect();
      initHeight.current = heightDom.offsetHeight;
      sethe(heightDom.offsetHeight); //获取最低高度

      setPOSI(MainPosi); // 获取位置信息
    });
  }, []);
  var mainDom;
  var heightDom;
  var initHeight = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);
  return __jsx("div", {
    ref: function ref(_ref3) {
      return mainDom = _ref3;
    },
    style: {
      height: he
    },
    className: "jsx-824778694" + " " + "link-ctn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-824778694" + " " + "main pointer ani",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-824778694" + " " + "color",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-824778694" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-824778694",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, data.MainType))), __jsx("div", {
    ref: function ref(_ref2) {
      return heightDom = _ref2;
    },
    onClick: function onClick() {
      var h = initHeight.current;
      setopen(function (pre) {
        return !pre;
      });
      !open ? sethe(h + childhe * (arr.length + 1)) : sethe(h);
    },
    className: "jsx-824778694" + " " + "main pointer ani nice",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-824778694" + " " + "color",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-824778694" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-824778694",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "CSS"))), arr.map(function (a, i) {
    return __jsx(_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      mess: POSI,
      open: open,
      gao: childhe,
      key: i,
      setgao: setchlidhe,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "824778694",
    __self: _this
  }, ".link-ctn.jsx-824778694{width:80%;margin:20px auto;position:relative;-webkit-transition:0.5s;transition:0.5s;overflow:hidden;}.nice.jsx-824778694{position:absolute;left:0;top:0;width:100%;z-index:10;}.main.jsx-824778694{padding:10px 20px;background:#212329;border-radius:6px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.main.jsx-824778694>.color.jsx-824778694{width:66px;height:40px;border-radius:4px;margin:0 20px;background:#4eac6d;}.main.jsx-824778694>.title.jsx-824778694{-webkit-flex:1;-ms-flex:1;flex:1;font-size:30px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcc2l0ZVxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURrQixBQUdxQixBQU9RLEFBT0EsQUFRUCxBQU9KLFVBNUJVLENBc0JMLE9BZkwsQUFPWSxLQVNELEVBZlosRUFQWSxJQVFQLEVBb0JJLElBZEcsSUFTSixDQWRILEdBUkssR0E0QkUsS0FuQnBCLEVBS2UsQUFTTSxXQU1yQixRQUxBLFdBdkJrQixnQkFDbEIsNEJBYXFCLDZGQUNyQiIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxjb21wb25lbnRcXHNpdGVcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiLi9saW5rXCI7XHJcbmV4cG9ydCBkZWZhdWx0ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGxldCBhcnIgPSBbMSwgMywgNF07XHJcbiAgY29uc3QgW1BPU0ksIHNldFBPU0ldID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW29wZW4sIHNldG9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtoZSwgc2V0aGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2NoaWxkaGUsIHNldGNobGlkaGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBsZXQgTWFpblBvc2kgPSBtYWluRG9tLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBpbml0SGVpZ2h0LmN1cnJlbnQgPSBoZWlnaHREb20ub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICBzZXRoZShoZWlnaHREb20ub2Zmc2V0SGVpZ2h0KTsgLy/ojrflj5bmnIDkvY7pq5jluqZcclxuICAgICAgc2V0UE9TSShNYWluUG9zaSk7IC8vIOiOt+WPluS9jee9ruS/oeaBr1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIGxldCBtYWluRG9tO1xyXG4gIGxldCBoZWlnaHREb207XHJcbiAgbGV0IGluaXRIZWlnaHQgPSB1c2VSZWYoMCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwibGluay1jdG5cIlxyXG4gICAgICByZWY9eyhyZWYpID0+IChtYWluRG9tID0gcmVmKX1cclxuICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBoZSB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4gcG9pbnRlciBhbmlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgPGgyPntkYXRhLk1haW5UeXBlfTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWFpbiBwb2ludGVyIGFuaSBuaWNlXCJcclxuICAgICAgICByZWY9eyhyZWYpID0+IChoZWlnaHREb20gPSByZWYpfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGxldCBoID0gaW5pdEhlaWdodC5jdXJyZW50O1xyXG4gICAgICAgICAgc2V0b3BlbigocHJlKSA9PiAhcHJlKTtcclxuICAgICAgICAgICFvcGVuID8gc2V0aGUoaCArIGNoaWxkaGUgKiAoYXJyLmxlbmd0aCArIDEpKSA6IHNldGhlKGgpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgPGgyPkNTUzwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7YXJyLm1hcCgoYSwgaSkgPT4gKFxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBtZXNzPXtQT1NJfVxyXG4gICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgIGdhbz17Y2hpbGRoZX1cclxuICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgIHNldGdhbz17c2V0Y2hsaWRoZX1cclxuICAgICAgICAvPlxyXG4gICAgICApKX1cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubGluay1jdG4ge1xyXG4gICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uaWNlIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWFpbiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjEyMzI5O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWFpbiA+IC5jb2xvciB7XHJcbiAgICAgICAgICB3aWR0aDogNjZweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzRlYWM2ZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1haW4gPiAudGl0bGUge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\site\\\\index.js */"));
});

/***/ })

})
//# sourceMappingURL=site.js.4f41e363bb6e6f5e4141.hot-update.js.map