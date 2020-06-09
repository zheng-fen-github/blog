webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/home/introd.js":
/*!**********************************!*\
  !*** ./component/home/introd.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _messageWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messageWindow */ "./component/home/messageWindow.js");
var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\home\\introd.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Introd = function Introd() {
  var scrollEv = function scrollEv() {
    var value = window.pageYOffset;

    if (value > 600) {
      window.removeEventListener("scroll", scrollEv);
      if (!textDom) return;
      textDom.style.transform = "translate(0 ,0)";
    } else {
      var count = 600 - value;
      count = count < 0 ? 0 : count;
      if (!textDom) return;
      textDom.style.transform = "translate(0 ,".concat(count, "px)");
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (window.innerWidth > 1200) {
      window.addEventListener("scroll", scrollEv);
    } else {
      textDom.style.transform = "translate(0 ,0)";
    }
  }, []);
  var textDom;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      status = _useState[0],
      setStatus = _useState[1];

  return __jsx("div", {
    className: "jsx-1563436005" + " " + "row introd justify-content-center mx-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, status && __jsx(_messageWindow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    set: setStatus,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 18
    }
  }), __jsx("div", {
    className: "jsx-1563436005" + " " + "col-10 col-xl-8  position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1563436005" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    ref: function ref(_ref) {
      return textDom = _ref;
    },
    className: "jsx-1563436005" + " " + "col-12 col-lg-8 text-center text-lg-left text-root",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "jsx-1563436005",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "\u6211\u53EB\u90D1\u594B\uFF0C\u6765\u81EA\u7F8E\u4E3D\u7684\u5E7F\u4E1C\u7701\u63ED\u9633\u5E02\u3002 ", __jsx("br", {
    className: "jsx-1563436005",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 33
    }
  }), "\u719F\u6089\u5F00\u53D1\u7F51\u7AD9\u548C\u56FE\u50CF\u5904\u7406\u3002 \u89C6\u9891\u5904\u7406\u7B49\u7B49 ", __jsx("br", {
    className: "jsx-1563436005",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 35
    }
  })), __jsx("p", {
    className: "jsx-1563436005" + " " + "mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "Please click the right button to send me a message.")), __jsx("div", {
    className: "jsx-1563436005" + " " + "col-12 col-lg-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1563436005" + " " + "row h-100  align-items-end justify-content-lg-end justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return setStatus(true);
    },
    className: "jsx-1563436005" + " " + "introd-bu   p-4 shadow-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, "\u53D1\u9001\u4FE1\u606F"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1563436005",
    __self: _this
  }, ".introd.jsx-1563436005{margin-top:16rem;}.text-root.jsx-1563436005{-webkit-transform:translateY(400px);-ms-transform:translateY(400px);transform:translateY(400px);}h2.jsx-1563436005{width:100%;font-size:4rem;}p.jsx-1563436005{font-size:2rem;font-weight:600;-webkit-text-decoration:underline;text-decoration:underline;}.introd-bu.jsx-1563436005{border:none;background:black;color:white;border-radius:6px;font-size:2rem;font-weight:700;-webkit-transition:0.2s;transition:0.2s;}.introd-bu.jsx-1563436005:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);box-shadow:0 0 4px black;}@media (max-width:960px){.introd-bu.jsx-1563436005{margin:5rem 0;}}@media (max-width:660px){h2.jsx-1563436005{font-size:3rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcaG9tZVxcaW50cm9kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEUyxBQUc4QixBQUdXLEFBR2pCLEFBSUksQUFLSCxBQVNTLEFBS0wsQUFLQyxXQTNCRixDQVNFLEVBY2pCLENBbkJnQixBQXdCaEIsRUFsQ0YsU0FPQSxHQVNjLEVBTGMsVUFNUixrQkFDSCxlQUNDLENBS1MsZUFKVCxDQVJsQixLQVRBLElBc0JBLDhCQUpBIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcaG9tZVxcaW50cm9kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdpbmRvd01lc3NhZ2UgZnJvbSBcIi4vbWVzc2FnZVdpbmRvd1wiO1xyXG5jb25zdCBJbnRyb2QgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2Nyb2xsRXYgPSAoKSA9PiB7XHJcbiAgICBsZXQgdmFsdWUgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICBpZiAodmFsdWUgPiA2MDApIHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsRXYpO1xyXG4gICAgICBpZiAoIXRleHREb20pIHJldHVybjtcclxuICAgICAgdGV4dERvbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKDAgLDApYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBjb3VudCA9IDYwMCAtIHZhbHVlO1xyXG4gICAgICBjb3VudCA9IGNvdW50IDwgMCA/IDAgOiBjb3VudDtcclxuICAgICAgaWYgKCF0ZXh0RG9tKSByZXR1cm47XHJcbiAgICAgIHRleHREb20uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgwICwke2NvdW50fXB4KWA7XHJcbiAgICB9XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTIwMCkge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxFdik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ZXh0RG9tLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoMCAsMClgO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICBsZXQgdGV4dERvbTtcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBpbnRyb2QganVzdGlmeS1jb250ZW50LWNlbnRlciBteC0wXCI+XHJcbiAgICAgIHtzdGF0dXMgJiYgPFdpbmRvd01lc3NhZ2Ugc2V0PXtzZXRTdGF0dXN9IC8+fVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgY29sLXhsLTggIHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy04IHRleHQtY2VudGVyIHRleHQtbGctbGVmdCB0ZXh0LXJvb3RcIlxyXG4gICAgICAgICAgICByZWY9eyhyZWYpID0+ICh0ZXh0RG9tID0gcmVmKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgIOaIkeWPq+mDkeWli++8jOadpeiHque+juS4veeahOW5v+S4nOecgeaPremYs+W4guOAgiA8YnIgLz5cclxuICAgICAgICAgICAgICDnhp/mgonlvIDlj5HnvZHnq5nlkozlm77lg4/lpITnkIbjgIIg6KeG6aKR5aSE55CG562J562JIDxiciAvPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC01XCI+XHJcbiAgICAgICAgICAgICAgUGxlYXNlIGNsaWNrIHRoZSByaWdodCBidXR0b24gdG8gc2VuZCBtZSBhIG1lc3NhZ2UuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaC0xMDAgIGFsaWduLWl0ZW1zLWVuZCBqdXN0aWZ5LWNvbnRlbnQtbGctZW5kIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnRyb2QtYnUgICBwLTQgc2hhZG93LXNtXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFN0YXR1cyh0cnVlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDlj5HpgIHkv6Hmga9cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuaW50cm9kIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGV4dC1yb290IHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwMHB4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmludHJvZC1idSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaW50cm9kLWJ1OmhvdmVyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNHB4IGJsYWNrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgICAgIC5pbnRyb2QtYnUge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogNXJlbSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW50cm9kO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\home\\\\introd.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Introd);

/***/ })

})
//# sourceMappingURL=index.js.9de91986c6eae784366c.hot-update.js.map