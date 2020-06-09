webpackHotUpdate("static\\development\\pages\\component.js",{

/***/ "./component/component/code.js":
/*!*************************************!*\
  !*** ./component/component/code.js ***!
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
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\component\\code.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Code = function Code(_ref) {
  var data = _ref.data,
      clear = _ref.clear;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      cls = _useState[0],
      setCls = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.body.style.overflow = "hidden";

    try {
      var H = textRef.parentElement.offsetHeight;
      var WinH = textRef.parentElement.parentElement.offsetHeight;

      if (H > WinH) {
        setCls(true);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  var clearEv = function clearEv(boob) {
    document.body.style.overflow = "";
    clear(boob);
  };

  var share = function share(e) {
    e.stopPropagation();
    var range = new Range();
    range.setStart(textRef, 0);
    range.setEnd(textRef, 1);
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(range);
    document.execCommand("Copy");
    document.getSelection().removeAllRanges();
    clearEv(true);
  };

  var textRef;

  var stopEv = function stopEv(e) {
    e.stopPropagation();
  };

  return __jsx("div", {
    onClick: function onClick() {
      return clearEv(false);
    },
    className: "jsx-1445197357" + " " + "row code shadow justify-content-center  align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("div", {
    onClick: stopEv,
    className: "jsx-1445197357" + " " + "col-10 \n        code-content col-md-6 p-5 \n        d-flex justify-content-center \n        ".concat(cls ? "start" : "", " "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1445197357" + " " + "row code-content-ctn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("h2", {
    ref: function ref(_ref2) {
      return textRef = _ref2;
    },
    className: "jsx-1445197357",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, data))), __jsx("div", {
    className: "jsx-1445197357" + " " + "col-8 justify-content-center row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: share,
    className: "jsx-1445197357" + " " + "col-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Cody")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1445197357",
    __self: _this
  }, "h2.jsx-1445197357{white-space:pre;overflow:auto;}h2.jsx-1445197357::-webkit-scrollbar{display:none;}.code.jsx-1445197357{background:rgba(0,0,0,0.8);position:fixed;left:0;top:0;bottom:0;right:0;z-index:9999;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.code-content.jsx-1445197357{background:white;overflow:auto;min-height:50%;max-height:80%;border-radius:20px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.code-content-ctn.jsx-1445197357{max-width:100%;padding:1rem;}.start.jsx-1445197357{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}button.jsx-1445197357{padding:0.5rem 3rem;font-size:2rem;font-weight:600;border:none;border-radius:0.6rem;margin:0 2rem;background:#0c82db;color:white;-webkit-transition:0.4s;transition:0.4s;}button.jsx-1445197357:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcY29tcG9uZW50XFxjb2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEUyxBQUc2QixBQUlILEFBSWlCLEFBVWIsQUFRRixBQUlRLEFBR0gsQUFXQyxhQXZDdkIsRUFzQmUsQ0ExQkMsQ0FrQkEsR0FlQyxPQXpCQSxDQW1CakIsRUExQkEsQ0FrQmlCLElBZUMsT0F6QlQsSUFXUSxHQVZULEVBeUJNLElBeEJILE1BVVUsRUFlRSxDQXhCYixRQUNLLEdBK0JmLEtBdEJxQixJQWVMLENBdkJELGFBd0JNLFdBUnJCLFFBU2MsWUFDSSw4QkF6QmxCLFVBMEJBLElBbEJBIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcY29tcG9uZW50XFxjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENvZGUgPSAoeyBkYXRhLCBjbGVhciB9KSA9PiB7XHJcbiAgY29uc3QgW2Nscywgc2V0Q2xzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgeyBvZmZzZXRIZWlnaHQ6IEggfSA9IHRleHRSZWYucGFyZW50RWxlbWVudDtcclxuICAgICAgbGV0IHsgb2Zmc2V0SGVpZ2h0OiBXaW5IIH0gPSB0ZXh0UmVmLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgaWYgKEggPiBXaW5IKSB7XHJcbiAgICAgICAgc2V0Q2xzKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgY29uc3QgY2xlYXJFdiA9IChib29iKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcclxuICAgIGNsZWFyKGJvb2IpO1xyXG4gIH07XHJcbiAgY29uc3Qgc2hhcmUgPSAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGxldCByYW5nZSA9IG5ldyBSYW5nZSgpO1xyXG4gICAgcmFuZ2Uuc2V0U3RhcnQodGV4dFJlZiwgMCk7XHJcbiAgICByYW5nZS5zZXRFbmQodGV4dFJlZiwgMSk7XHJcbiAgICBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIGRvY3VtZW50LmdldFNlbGVjdGlvbigpLmFkZFJhbmdlKHJhbmdlKTtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiQ29weVwiKTtcclxuICAgIGRvY3VtZW50LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgY2xlYXJFdih0cnVlKTtcclxuICB9O1xyXG5cclxuICBsZXQgdGV4dFJlZjtcclxuICBjb25zdCBzdG9wRXYgPSAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cInJvdyBjb2RlIHNoYWRvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyICBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBjbGVhckV2KGZhbHNlKX1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YGNvbC0xMCBcclxuICAgICAgICBjb2RlLWNvbnRlbnQgY29sLW1kLTYgcC01IFxyXG4gICAgICAgIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIFxyXG4gICAgICAgICR7Y2xzID8gXCJzdGFydFwiIDogXCJcIn0gYH1cclxuICAgICAgICBvbkNsaWNrPXtzdG9wRXZ9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb2RlLWNvbnRlbnQtY3RuXCI+XHJcbiAgICAgICAgICA8aDIgcmVmPXsocmVmKSA9PiAodGV4dFJlZiA9IHJlZil9PntkYXRhfTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04IGp1c3RpZnktY29udGVudC1jZW50ZXIgcm93XCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb2wtYXV0b1wiIG9uQ2xpY2s9e3NoYXJlfT5cclxuICAgICAgICAgIENvZHlcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jb2RlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb2RlLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogODAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvZGUtY29udGVudC1jdG4ge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RhcnQge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAzcmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMnJlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzBjODJkYjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29kZTtcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\component\\\\code.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Code);

/***/ })

})
//# sourceMappingURL=component.js.fee71e290c966d10a2c7.hot-update.js.map