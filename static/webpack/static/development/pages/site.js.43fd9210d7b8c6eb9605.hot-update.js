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
      sethe(heightDom.offsetHeight + 10); //获取最低高度

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
      !open ? sethe(h + childhe * data.contentList.length) : sethe(h);
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
  }, ".link-ctn.jsx-236287195{width:80%;margin:20px auto;position:relative;-webkit-transition:0.5s;transition:0.5s;overflow:hidden;}.nice.jsx-236287195{position:absolute;left:0;top:0;width:100%;z-index:10;}.main.jsx-236287195{padding:10px 20px;background:#212329;border-radius:6px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.main.jsx-236287195>.color.jsx-236287195{width:66px;height:40px;border-radius:4px;margin:0 20px;}.main.jsx-236287195>.title.jsx-236287195{-webkit-flex:1;-ms-flex:1;flex:1;font-size:30px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcc2l0ZVxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RrQixBQUdxQixBQU9RLEFBT0EsQUFRUCxBQU1KLFVBM0JVLENBc0JMLE9BZkwsQUFPWSxLQVNELEVBZlosRUFQWSxJQVFQLEVBbUJJLElBYkcsSUFTSixDQWRILEdBUkssR0EyQkUsS0FsQnBCLEVBS2UsQUFTZixXQUtBLG1CQTNCa0IsZ0JBQ2xCLDRCQWFxQiw2RkFDckIiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxzaXRlXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4vbGlua1wiO1xyXG5leHBvcnQgZGVmYXVsdCAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCBbUE9TSSwgc2V0UE9TSV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbb3Blbiwgc2V0b3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2hlLCBzZXRoZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY2hpbGRoZSwgc2V0Y2hsaWRoZV0gPSB1c2VTdGF0ZSgwKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGxldCBNYWluUG9zaSA9IG1haW5Eb20uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGluaXRIZWlnaHQuY3VycmVudCA9IGhlaWdodERvbS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIHNldGhlKGhlaWdodERvbS5vZmZzZXRIZWlnaHQgKyAxMCk7IC8v6I635Y+W5pyA5L2O6auY5bqmXHJcbiAgICAgIHNldFBPU0koTWFpblBvc2kpOyAvLyDojrflj5bkvY3nva7kv6Hmga9cclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICBsZXQgbWFpbkRvbTtcclxuICBsZXQgaGVpZ2h0RG9tO1xyXG4gIGxldCBpbml0SGVpZ2h0ID0gdXNlUmVmKDApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImxpbmstY3RuXCJcclxuICAgICAgcmVmPXsocmVmKSA9PiAobWFpbkRvbSA9IHJlZil9XHJcbiAgICAgIHN0eWxlPXt7IGhlaWdodDogaGUgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluIHBvaW50ZXIgYW5pXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvclwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgIDxoMj57ZGF0YS5NYWluVHlwZX08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1haW4gcG9pbnRlciBhbmkgbmljZVwiXHJcbiAgICAgICAgcmVmPXsocmVmKSA9PiAoaGVpZ2h0RG9tID0gcmVmKX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBsZXQgaCA9IGluaXRIZWlnaHQuY3VycmVudDtcclxuICAgICAgICAgIHNldG9wZW4oKHByZSkgPT4gIXByZSk7XHJcbiAgICAgICAgICAhb3BlbiA/IHNldGhlKGggKyBjaGlsZGhlICogZGF0YS5jb250ZW50TGlzdC5sZW5ndGgpIDogc2V0aGUoaCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3JcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEuY29sb3IgfX0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgPGgyPntkYXRhLk1haW5UeXBlfTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7ZGF0YS5jb250ZW50TGlzdC5tYXAoKHMsIGkpID0+IChcclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgbWVzcz17UE9TSX1cclxuICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICBnYW89e2NoaWxkaGV9XHJcbiAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICBzZXRnYW89e3NldGNobGlkaGV9XHJcbiAgICAgICAgICBtZXM9e3N9XHJcbiAgICAgICAgICBjb3I9e2RhdGEuY29sb3J9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSl9XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmxpbmstY3RuIHtcclxuICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmljZSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1haW4ge1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzIxMjMyOTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1haW4gPiAuY29sb3Ige1xyXG4gICAgICAgICAgd2lkdGg6IDY2cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1haW4gPiAudGl0bGUge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\site\\\\index.js */"));
});

/***/ })

})
//# sourceMappingURL=site.js.43fd9210d7b8c6eb9605.hot-update.js.map