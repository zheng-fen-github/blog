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
  }, "\u5982\u679C\u9700\u8981\u6211\u7684\u5E2E\u52A9\uFF0C\u70B9\u51FB\u53F3\u65B9\u6309\u94AE\u544A\u8BC9\u6211\u3002")), __jsx("div", {
    className: "jsx-1563436005" + " " + "col-12 col-lg-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1563436005" + " " + "row h-100  align-items-end justify-content-lg-end justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
      lineNumber: 44,
      columnNumber: 15
    }
  }, "\u53D1\u9001\u4FE1\u606F"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1563436005",
    __self: _this
  }, ".introd.jsx-1563436005{margin-top:16rem;}.text-root.jsx-1563436005{-webkit-transform:translateY(400px);-ms-transform:translateY(400px);transform:translateY(400px);}h2.jsx-1563436005{width:100%;font-size:4rem;}p.jsx-1563436005{font-size:2rem;font-weight:600;-webkit-text-decoration:underline;text-decoration:underline;}.introd-bu.jsx-1563436005{border:none;background:black;color:white;border-radius:6px;font-size:2rem;font-weight:700;-webkit-transition:0.2s;transition:0.2s;}.introd-bu.jsx-1563436005:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);box-shadow:0 0 4px black;}@media (max-width:960px){.introd-bu.jsx-1563436005{margin:5rem 0;}}@media (max-width:660px){h2.jsx-1563436005{font-size:3rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcaG9tZVxcaW50cm9kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEUyxBQUc4QixBQUdXLEFBR2pCLEFBSUksQUFLSCxBQVNTLEFBS0wsQUFLQyxXQTNCRixDQVNFLEVBY2pCLENBbkJnQixBQXdCaEIsRUFsQ0YsU0FPQSxHQVNjLEVBTGMsVUFNUixrQkFDSCxlQUNDLENBS1MsZUFKVCxDQVJsQixLQVRBLElBc0JBLDhCQUpBIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcaG9tZVxcaW50cm9kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdpbmRvd01lc3NhZ2UgZnJvbSBcIi4vbWVzc2FnZVdpbmRvd1wiO1xyXG5jb25zdCBJbnRyb2QgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2Nyb2xsRXYgPSAoKSA9PiB7XHJcbiAgICBsZXQgdmFsdWUgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICBpZiAodmFsdWUgPiA2MDApIHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsRXYpO1xyXG4gICAgICBpZiAoIXRleHREb20pIHJldHVybjtcclxuICAgICAgdGV4dERvbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKDAgLDApYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBjb3VudCA9IDYwMCAtIHZhbHVlO1xyXG4gICAgICBjb3VudCA9IGNvdW50IDwgMCA/IDAgOiBjb3VudDtcclxuICAgICAgaWYgKCF0ZXh0RG9tKSByZXR1cm47XHJcbiAgICAgIHRleHREb20uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgwICwke2NvdW50fXB4KWA7XHJcbiAgICB9XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTIwMCkge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxFdik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ZXh0RG9tLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoMCAsMClgO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICBsZXQgdGV4dERvbTtcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBpbnRyb2QganVzdGlmeS1jb250ZW50LWNlbnRlciBteC0wXCI+XHJcbiAgICAgIHtzdGF0dXMgJiYgPFdpbmRvd01lc3NhZ2Ugc2V0PXtzZXRTdGF0dXN9IC8+fVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgY29sLXhsLTggIHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy04IHRleHQtY2VudGVyIHRleHQtbGctbGVmdCB0ZXh0LXJvb3RcIlxyXG4gICAgICAgICAgICByZWY9eyhyZWYpID0+ICh0ZXh0RG9tID0gcmVmKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgIOaIkeWPq+mDkeWli++8jOadpeiHque+juS4veeahOW5v+S4nOecgeaPremYs+W4guOAgiA8YnIgLz5cclxuICAgICAgICAgICAgICDnhp/mgonlvIDlj5HnvZHnq5nlkozlm77lg4/lpITnkIbjgIIg6KeG6aKR5aSE55CG562J562JIDxiciAvPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC01XCI+5aaC5p6c6ZyA6KaB5oiR55qE5biu5Yqp77yM54K55Ye75Y+z5pa55oyJ6ZKu5ZGK6K+J5oiR44CCPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBoLTEwMCAgYWxpZ24taXRlbXMtZW5kIGp1c3RpZnktY29udGVudC1sZy1lbmQganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImludHJvZC1idSAgIHAtNCBzaGFkb3ctc21cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U3RhdHVzKHRydWUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIOWPkemAgeS/oeaBr1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5pbnRyb2Qge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZXh0LXJvb3Qge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDAwcHgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaW50cm9kLWJ1IHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pbnRyb2QtYnU6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA0cHggYmxhY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICAgICAgLmludHJvZC1idSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cmVtIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnRyb2Q7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\home\\\\introd.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Introd);

/***/ })

})
//# sourceMappingURL=index.js.b56b6c4339db657a3c2a.hot-update.js.map