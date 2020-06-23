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
    className: "jsx-236287195" + " " + "link-ctn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-236287195" + " " + "main pointer ani",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-236287195" + " " + "color",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-236287195" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-236287195",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
      !open ? sethe(h + childhe * (data.contentList.length + 1)) : sethe(h);
    },
    className: "jsx-236287195" + " " + "main pointer ani nice",
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-236287195" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-236287195",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, data.MainType))), data.contentList.map(function (s, i) {
    return __jsx(_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      mess: POSI,
      open: open,
      gao: childhe,
      key: i,
      setgao: setchlidhe,
      mes: s,
      cor: data.color,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "236287195",
    __self: _this
  }, ".link-ctn.jsx-236287195{width:80%;margin:20px auto;position:relative;-webkit-transition:0.5s;transition:0.5s;overflow:hidden;}.nice.jsx-236287195{position:absolute;left:0;top:0;width:100%;z-index:10;}.main.jsx-236287195{padding:10px 20px;background:#212329;border-radius:6px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.main.jsx-236287195>.color.jsx-236287195{width:66px;height:40px;border-radius:4px;margin:0 20px;}.main.jsx-236287195>.title.jsx-236287195{-webkit-flex:1;-ms-flex:1;flex:1;font-size:30px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcc2l0ZVxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RrQixBQUdxQixBQU9RLEFBT0EsQUFRUCxBQU1KLFVBM0JVLENBc0JMLE9BZkwsQUFPWSxLQVNELEVBZlosRUFQWSxJQVFQLEVBbUJJLElBYkcsSUFTSixDQWRILEdBUkssR0EyQkUsS0FsQnBCLEVBS2UsQUFTZixXQUtBLG1CQTNCa0IsZ0JBQ2xCLDRCQWFxQiw2RkFDckIiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxzaXRlXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4vbGlua1wiO1xyXG5leHBvcnQgZGVmYXVsdCAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCBbUE9TSSwgc2V0UE9TSV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbb3Blbiwgc2V0b3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2hlLCBzZXRoZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY2hpbGRoZSwgc2V0Y2hsaWRoZV0gPSB1c2VTdGF0ZSgwKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGxldCBNYWluUG9zaSA9IG1haW5Eb20uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGluaXRIZWlnaHQuY3VycmVudCA9IGhlaWdodERvbS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIHNldGhlKGhlaWdodERvbS5vZmZzZXRIZWlnaHQpOyAvL+iOt+WPluacgOS9jumrmOW6plxyXG4gICAgICBzZXRQT1NJKE1haW5Qb3NpKTsgLy8g6I635Y+W5L2N572u5L+h5oGvXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgbGV0IG1haW5Eb207XHJcbiAgbGV0IGhlaWdodERvbTtcclxuICBsZXQgaW5pdEhlaWdodCA9IHVzZVJlZigwKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJsaW5rLWN0blwiXHJcbiAgICAgIHJlZj17KHJlZikgPT4gKG1haW5Eb20gPSByZWYpfVxyXG4gICAgICBzdHlsZT17eyBoZWlnaHQ6IGhlIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbiBwb2ludGVyIGFuaVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3JcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICA8aDI+e2RhdGEuTWFpblR5cGV9PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJtYWluIHBvaW50ZXIgYW5pIG5pY2VcIlxyXG4gICAgICAgIHJlZj17KHJlZikgPT4gKGhlaWdodERvbSA9IHJlZil9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgbGV0IGggPSBpbml0SGVpZ2h0LmN1cnJlbnQ7XHJcbiAgICAgICAgICBzZXRvcGVuKChwcmUpID0+ICFwcmUpO1xyXG4gICAgICAgICAgIW9wZW4gPyBzZXRoZShoICsgY2hpbGRoZSAqIChkYXRhLmNvbnRlbnRMaXN0Lmxlbmd0aCArIDEpKSA6IHNldGhlKGgpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBkYXRhLmNvbG9yIH19PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgIDxoMj57ZGF0YS5NYWluVHlwZX08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2RhdGEuY29udGVudExpc3QubWFwKChzLCBpKSA9PiAoXHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIG1lc3M9e1BPU0l9XHJcbiAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgZ2FvPXtjaGlsZGhlfVxyXG4gICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgc2V0Z2FvPXtzZXRjaGxpZGhlfVxyXG4gICAgICAgICAgbWVzPXtzfVxyXG4gICAgICAgICAgY29yPXtkYXRhLmNvbG9yfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkpfVxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5saW5rLWN0biB7XHJcbiAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5pY2Uge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYWluIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMyMTIzMjk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYWluID4gLmNvbG9yIHtcclxuICAgICAgICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYWluID4gLnRpdGxlIHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\site\\\\index.js */"));
});

/***/ })

})
//# sourceMappingURL=site.js.9e2dcd180088630c6c3b.hot-update.js.map