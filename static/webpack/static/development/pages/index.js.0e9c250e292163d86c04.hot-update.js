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
  }, "\u67E5\u770B\u4E00\u4E9B\u6211\u5E38\u7528\u7684\u7EC4\u4EF6")), __jsx("div", {
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
    href: "/component?type=nodejs",
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
  }, "See more components? Click the button below to jump")), __jsx("div", {
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
  }, ".justify-content-center.jsx-1051284099{background:#ebeef5;background:linear-gradient(45deg,#eff2f7,white);background:radial-gradient(#f4f7fc,white);padding:6rem;}.cnt-item.jsx-1051284099{background:white;border-radius:6px;-webkit-transition:0.4s;transition:0.4s;cursor:pointer;-webkit-transform:translateX(20%);-ms-transform:translateX(20%);transform:translateX(20%);}.cnt-item-show.jsx-1051284099{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}.cnt-item.jsx-1051284099:hover{-webkit-transform:scale(1,1.1);-ms-transform:scale(1,1.1);transform:scale(1,1.1);}.cnt-item.jsx-1051284099:hover h3.jsx-1051284099{color:#309cfe;padding-left:5rem;}.cnt-item.jsx-1051284099:hover i.jsx-1051284099{color:#309cfe;margin-right:5rem;}h2.jsx-1051284099{font-size:4rem;font-weight:700;}h3.jsx-1051284099{font-size:2rem;font-weight:700;line-height:2;-webkit-transition:0.4s;transition:0.4s;}h3.more.jsx-1051284099{color:#a0a7af;}a.jsx-1051284099,a.jsx-1051284099:hover{color:black;-webkit-text-decoration:none;text-decoration:none;}i.jsx-1051284099{font-size:3rem;margin-right:3rem;-webkit-transition:0.4s;transition:0.4s;}button.jsx-1051284099{background:black;border:none;border-radius:6px;color:white;padding:1rem 2rem;font-size:2rem;font-weight:700;-webkit-transition:0.2s;transition:0.2s;}button.jsx-1051284099:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);box-shadow:0 0 4px black;}@media (max-width:960px){.cnt-item.jsx-1051284099{-webkit-transform:translateX(5%);-ms-transform:translateX(5%);transform:translateX(5%);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcaG9tZVxcY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFUyxBQUdnQyxBQU1GLEFBT08sQUFHQSxBQUdWLEFBSUEsQUFJQyxBQUlBLEFBTUQsQUFJRixBQUlHLEFBS0UsQUFVSSxBQUtNLFlBdkJOLEVBdEJILEFBSUEsQUFjcEIsQ0FWa0IsQUFJQSxBQWNFLEVBdkNBLEFBNENOLEVBbERzQyxVQW1EaEMsRUF2QnBCLEFBSWdCLENBWmhCLEFBSUEsQ0FzQmtCLEVBdkNBLFVBMEJBLEVBbUJKLFlBQ00sR0FYcEIsS0F6QzZDLE1BOEM3QyxFQXZDaUIsQUFvRFUsRUFOVixJQXRDakIsR0FIQSxDQXFCQSxFQStCRSxHQXhEMEIsRUE4Q1YsUUFNbEIsUUFMa0IsQ0F0REgsYUFDZiwwQkFzREEsZ0NBL0NBIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcaG9tZVxcY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ29tcG9uZXRuID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNjcm9sbEV2ID0gKCkgPT4ge1xyXG4gICAgLy/mu5rliqjliqjnlLvkuovku7ZcclxuICAgIGxldCBkb20gPSBjb21wb25lbnRSZWYuY3VycmVudDtcclxuICAgIGlmIChkb20pIHtcclxuICAgICAgaWYgKGRvbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSB7XHJcbiAgICAgICAgbGV0IGRvbUxpc3QgPSBkb20ucXVlcnlTZWxlY3RvckFsbChcIi5jbnQtaXRlbVwiKTtcclxuICAgICAgICBBcnJheS5mcm9tKGRvbUxpc3QpLm1hcCgoZSkgPT4gZS5jbGFzc0xpc3QuYWRkKFwiY250LWl0ZW0tc2hvd1wiKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGxldCBjb21wb25lbnRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsRXYpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBteC0wXCIgcmVmPXtjb21wb25lbnRSZWZ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBjb2wtc20tNiBtLTVcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj7mn6XnnIvkuIDkupvmiJHluLjnlKjnmoTnu4Tku7Y8L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgY29sLXNtLTggY250LWl0ZW0gc2hhZG93LXNtIG15LTRcIj5cclxuICAgICAgICA8YSBocmVmPVwiL2NvbXBvbmVudD90eXBlPVJlYWN0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gcC00IHBsLTVcIj5cclxuICAgICAgICAgICAgPGgzPiBSZWFjdCBDb21wb25lbnQgPC9oMz5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbi1hcnJvdy1mb3J3YXJkXCI+PC9pPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgY29sLXNtLTggY250LWl0ZW0gc2hhZG93LXNtIG15LTRcIj5cclxuICAgICAgICA8YSBocmVmPVwiL2NvbXBvbmVudD90eXBlPUpTXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gcC00IHBsLTVcIj5cclxuICAgICAgICAgICAgPGgzPiBKUyBDb21wb25lbnQgPC9oMz5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbi1hcnJvdy1mb3J3YXJkXCI+PC9pPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgY29sLXNtLTggY250LWl0ZW0gc2hhZG93LXNtIG15LTRcIj5cclxuICAgICAgICA8YSBocmVmPVwiL2NvbXBvbmVudD90eXBlPUNTU1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHAtNCBwbC01XCI+XHJcbiAgICAgICAgICAgIDxoMz4gQ1NTIENvbXBvbmVudCA8L2gzPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLWFycm93LWZvcndhcmRcIj48L2k+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBjb2wtc20tOCBjbnQtaXRlbSBzaGFkb3ctc20gbXktNFwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvY29tcG9uZW50P3R5cGU9bm9kZWpzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHAtNCBwbC01IFwiPlxyXG4gICAgICAgICAgICA8aDM+IE5vZGUgQ29tcG9uZW50IDwvaDM+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25mb250IGljb24tYXJyb3ctZm9yd2FyZFwiPjwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTggbXktNFwiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtb3JlXCI+XHJcbiAgICAgICAgICBTZWUgbW9yZSBjb21wb25lbnRzPyBDbGljayB0aGUgYnV0dG9uIGJlbG93IHRvIGp1bXBcclxuICAgICAgICA8L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgY29sLXNtLTggZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICA8YSBocmVmPVwiL2NvbXBvbmVudFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbj7ngrnlh7sg6Lez6L2sIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ViZWVmNTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZWZmMmY3LCB3aGl0ZSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjZjRmN2ZjLCB3aGl0ZSk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDZyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY250LWl0ZW0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNudC1pdGVtLXNob3cge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY250LWl0ZW06aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEuMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY250LWl0ZW06aG92ZXIgaDMge1xyXG4gICAgICAgICAgICBjb2xvcjogIzMwOWNmZTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNudC1pdGVtOmhvdmVyIGkge1xyXG4gICAgICAgICAgICBjb2xvcjogIzMwOWNmZTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMy5tb3JlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNhMGE3YWY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhLFxyXG4gICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNHB4IGJsYWNrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgICAgIC5jbnQtaXRlbSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZXRuO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\home\\\\component.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Componetn);

/***/ })

})
//# sourceMappingURL=index.js.0e9c250e292163d86c04.hot-update.js.map