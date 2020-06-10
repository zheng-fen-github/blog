webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/home/component.js":
/*!*************************************!*\
  !*** ./component/home/component.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\home\\component.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Componetn = function Componetn() {
  var scrollEv = function scrollEv() {
    //滚动动画事件
    var dom = componentRef.current;

    if (dom) {
      if (dom.getBoundingClientRect().top < window.innerHeight / 2) {
        var domList = dom.querySelectorAll(".cnt-item");
        Array.from(domList).map(function (e) {
          return e.classList.add("cnt-item-show");
        });
      }
    }
  };

  var componentRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener("scroll", scrollEv);
  }, []);
  return __jsx("div", {
    ref: componentRef,
    className: "jsx-1051284099" + " " + "row justify-content-center mx-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1051284099" + " " + "col-10 col-sm-6 m-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "jsx-1051284099" + " " + "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "\u67E5\u770B\u4E00\u4E9B\u6211\u5E38\u7528\u7684\u7EC4\u4EF6(\u2EA3\u25E1\u2EA3)\u2661")), __jsx("div", {
    className: "jsx-1051284099" + " " + "col-10 col-sm-8 cnt-item shadow-sm my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "/component?type=React",
    className: "jsx-1051284099",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1051284099" + " " + "col-12 d-flex justify-content-between p-4 pl-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-1051284099",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, " React Component "), __jsx("i", {
    className: "jsx-1051284099" + " " + "iconfont icon-arrow-forward",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "jsx-1051284099" + " " + "col-10 col-sm-8 cnt-item shadow-sm my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "/component?type=JS",
    className: "jsx-1051284099",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1051284099" + " " + "col-12 d-flex justify-content-between p-4 pl-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-1051284099",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, " JS Component "), __jsx("i", {
    className: "jsx-1051284099" + " " + "iconfont icon-arrow-forward",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "jsx-1051284099" + " " + "col-10 col-sm-8 cnt-item shadow-sm my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "/component?type=CSS",
    className: "jsx-1051284099",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1051284099" + " " + "col-12 d-flex justify-content-between p-4 pl-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-1051284099",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, " CSS Component "), __jsx("i", {
    className: "jsx-1051284099" + " " + "iconfont icon-arrow-forward",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "jsx-1051284099" + " " + "col-10 col-sm-8 cnt-item shadow-sm my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "/component?type=Node",
    className: "jsx-1051284099",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1051284099" + " " + "col-12  d-flex justify-content-between p-4 pl-5 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-1051284099",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, " Node Component "), __jsx("i", {
    className: "jsx-1051284099" + " " + "iconfont icon-arrow-forward",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "jsx-1051284099" + " " + "col-8 my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "jsx-1051284099" + " " + "text-center more",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "\u67E5\u770B\u66F4\u591A\u7EC4\u4EF6\uFF1F \u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u8DF3\u8F6C(\u0E07 \u2022_\u2022)\u0E07")), __jsx("div", {
    className: "jsx-1051284099" + " " + "col-10 col-sm-8 d-flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "/component",
    className: "jsx-1051284099",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "jsx-1051284099",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, "\u70B9\u51FB \u8DF3\u8F6C "))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1051284099",
    __self: _this
  }, ".justify-content-center.jsx-1051284099{background:#ebeef5;background:linear-gradient(45deg,#eff2f7,white);background:radial-gradient(#f4f7fc,white);padding:6rem;}.cnt-item.jsx-1051284099{background:white;border-radius:6px;-webkit-transition:0.4s;transition:0.4s;cursor:pointer;-webkit-transform:translateX(20%);-ms-transform:translateX(20%);transform:translateX(20%);}.cnt-item-show.jsx-1051284099{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}.cnt-item.jsx-1051284099:hover{-webkit-transform:scale(1,1.1);-ms-transform:scale(1,1.1);transform:scale(1,1.1);}.cnt-item.jsx-1051284099:hover h3.jsx-1051284099{color:#309cfe;padding-left:5rem;}.cnt-item.jsx-1051284099:hover i.jsx-1051284099{color:#309cfe;margin-right:5rem;}h2.jsx-1051284099{font-size:4rem;font-weight:700;}h3.jsx-1051284099{font-size:2rem;font-weight:700;line-height:2;-webkit-transition:0.4s;transition:0.4s;}h3.more.jsx-1051284099{color:#a0a7af;}a.jsx-1051284099,a.jsx-1051284099:hover{color:black;-webkit-text-decoration:none;text-decoration:none;}i.jsx-1051284099{font-size:3rem;margin-right:3rem;-webkit-transition:0.4s;transition:0.4s;}button.jsx-1051284099{background:black;border:none;border-radius:6px;color:white;padding:1rem 2rem;font-size:2rem;font-weight:700;-webkit-transition:0.2s;transition:0.2s;}button.jsx-1051284099:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);box-shadow:0 0 4px black;}@media (max-width:960px){.cnt-item.jsx-1051284099{-webkit-transform:translateX(5%);-ms-transform:translateX(5%);transform:translateX(5%);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcaG9tZVxcY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFUyxBQUdnQyxBQU1GLEFBT08sQUFHQSxBQUdWLEFBSUEsQUFJQyxBQUlBLEFBTUQsQUFJRixBQUlHLEFBS0UsQUFVSSxBQUtNLFlBdkJOLEVBdEJILEFBSUEsQUFjcEIsQ0FWa0IsQUFJQSxBQWNFLEVBdkNBLEFBNENOLEVBbERzQyxVQW1EaEMsRUF2QnBCLEFBSWdCLENBWmhCLEFBSUEsQ0FzQmtCLEVBdkNBLFVBMEJBLEVBbUJKLFlBQ00sR0FYcEIsS0F6QzZDLE1BOEM3QyxFQXZDaUIsQUFvRFUsRUFOVixJQXRDakIsR0FIQSxDQXFCQSxFQStCRSxHQXhEMEIsRUE4Q1YsUUFNbEIsUUFMa0IsQ0F0REgsYUFDZiwwQkFzREEsZ0NBL0NBIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcaG9tZVxcY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ29tcG9uZXRuID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNjcm9sbEV2ID0gKCkgPT4ge1xyXG4gICAgLy/mu5rliqjliqjnlLvkuovku7ZcclxuICAgIGxldCBkb20gPSBjb21wb25lbnRSZWYuY3VycmVudDtcclxuICAgIGlmIChkb20pIHtcclxuICAgICAgaWYgKGRvbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSB7XHJcbiAgICAgICAgbGV0IGRvbUxpc3QgPSBkb20ucXVlcnlTZWxlY3RvckFsbChcIi5jbnQtaXRlbVwiKTtcclxuICAgICAgICBBcnJheS5mcm9tKGRvbUxpc3QpLm1hcCgoZSkgPT4gZS5jbGFzc0xpc3QuYWRkKFwiY250LWl0ZW0tc2hvd1wiKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGxldCBjb21wb25lbnRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsRXYpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBteC0wXCIgcmVmPXtjb21wb25lbnRSZWZ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBjb2wtc20tNiBtLTVcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj7mn6XnnIvkuIDkupvmiJHluLjnlKjnmoTnu4Tku7Yo4rqj4peh4rqjKeKZoTwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBjb2wtc20tOCBjbnQtaXRlbSBzaGFkb3ctc20gbXktNFwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvY29tcG9uZW50P3R5cGU9UmVhY3RcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBwLTQgcGwtNVwiPlxyXG4gICAgICAgICAgICA8aDM+IFJlYWN0IENvbXBvbmVudCA8L2gzPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLWFycm93LWZvcndhcmRcIj48L2k+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBjb2wtc20tOCBjbnQtaXRlbSBzaGFkb3ctc20gbXktNFwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvY29tcG9uZW50P3R5cGU9SlNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBwLTQgcGwtNVwiPlxyXG4gICAgICAgICAgICA8aDM+IEpTIENvbXBvbmVudCA8L2gzPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLWFycm93LWZvcndhcmRcIj48L2k+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBjb2wtc20tOCBjbnQtaXRlbSBzaGFkb3ctc20gbXktNFwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvY29tcG9uZW50P3R5cGU9Q1NTXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gcC00IHBsLTVcIj5cclxuICAgICAgICAgICAgPGgzPiBDU1MgQ29tcG9uZW50IDwvaDM+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25mb250IGljb24tYXJyb3ctZm9yd2FyZFwiPjwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIGNvbC1zbS04IGNudC1pdGVtIHNoYWRvdy1zbSBteS00XCI+XHJcbiAgICAgICAgPGEgaHJlZj1cIi9jb21wb25lbnQ/dHlwZT1Ob2RlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHAtNCBwbC01IFwiPlxyXG4gICAgICAgICAgICA8aDM+IE5vZGUgQ29tcG9uZW50IDwvaDM+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25mb250IGljb24tYXJyb3ctZm9yd2FyZFwiPjwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTggbXktNFwiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtb3JlXCI+XHJcbiAgICAgICAgICDmn6XnnIvmm7TlpJrnu4Tku7bvvJ8g54K55Ye75LiL6Z2i55qE5oyJ6ZKu6Lez6L2sKOC4hyDigKJf4oCiKeC4h1xyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBjb2wtc20tOCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvY29tcG9uZW50XCI+XHJcbiAgICAgICAgICA8YnV0dG9uPueCueWHuyDot7PovawgPC9idXR0b24+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmp1c3RpZnktY29udGVudC1jZW50ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWJlZWY1O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNlZmYyZjcsIHdoaXRlKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCNmNGY3ZmMsIHdoaXRlKTtcclxuICAgICAgICAgICAgcGFkZGluZzogNnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jbnQtaXRlbSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY250LWl0ZW0tc2hvdyB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jbnQtaXRlbTpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMS4xKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jbnQtaXRlbTpob3ZlciBoMyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzA5Y2ZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY250LWl0ZW06aG92ZXIgaSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzA5Y2ZlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgzLm1vcmUge1xyXG4gICAgICAgICAgICBjb2xvcjogI2EwYTdhZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGEsXHJcbiAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA0cHggYmxhY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICAgICAgLmNudC1pdGVtIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNSUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25ldG47XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\home\\\\component.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Componetn);

/***/ })

})
//# sourceMappingURL=index.js.3ee7e9cbad982c31509f.hot-update.js.map