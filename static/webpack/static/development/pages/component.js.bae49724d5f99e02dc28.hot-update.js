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
    className: "jsx-2341467943" + " " + "row code shadow justify-content-center  align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("div", {
    onClick: stopEv,
    className: "jsx-2341467943" + " " + "col-10 \n        code-content col-md-6 p-5 \n        d-flex justify-content-center \n        ".concat(cls ? "start" : "", " "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2341467943" + " " + "row code-content-ctn",
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
    className: "jsx-2341467943",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, data))), __jsx("div", {
    className: "jsx-2341467943" + " " + "col-8 justify-content-center row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: share,
    className: "jsx-2341467943" + " " + "col-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Cody")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2341467943",
    __self: _this
  }, "h2.jsx-2341467943{white-space:pre;overflow:auto;}h2.jsx-2341467943::-webkit-scrollbar{display:none;}.code.jsx-2341467943{background:rgba(0,0,0,0.8);position:fixed;left:0;top:0;bottom:0;right:0;z-index:9999;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.code-content.jsx-2341467943{background:white;overflow:auto;min-height:50%;max-height:80%;border-radius:20px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.start.jsx-2341467943{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}button.jsx-2341467943{padding:0.5rem 3rem;font-size:2rem;font-weight:600;border:none;border-radius:0.6rem;margin:0 2rem;background:#0c82db;color:white;-webkit-transition:0.4s;transition:0.4s;}button.jsx-2341467943:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcY29tcG9uZW50XFxjb2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEUyxBQUc2QixBQUlILEFBSWlCLEFBVWIsQUFRTSxBQUdILEFBV0MsYUFuQ3ZCLEdBSmdCLENBa0JBLEdBV0MsT0FyQkEsR0FQakIsQ0FrQmlCLElBV0MsT0FyQlQsSUFXUSxHQVZULEVBcUJNLElBcEJILE1BVVUsRUFXRSxDQXBCYixRQUNLLEdBMkJmLEtBbEJxQixJQVdMLENBbkJELGFBb0JNLFdBUnJCLFFBU2MsWUFDSSw4QkFyQmxCLFVBc0JBLElBZEEiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxjb21wb25lbnRcXGNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ29kZSA9ICh7IGRhdGEsIGNsZWFyIH0pID0+IHtcclxuICBjb25zdCBbY2xzLCBzZXRDbHNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB7IG9mZnNldEhlaWdodDogSCB9ID0gdGV4dFJlZi5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBsZXQgeyBvZmZzZXRIZWlnaHQ6IFdpbkggfSA9IHRleHRSZWYucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBpZiAoSCA+IFdpbkgpIHtcclxuICAgICAgICBzZXRDbHModHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICBjb25zdCBjbGVhckV2ID0gKGJvb2IpID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xyXG4gICAgY2xlYXIoYm9vYik7XHJcbiAgfTtcclxuICBjb25zdCBzaGFyZSA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgbGV0IHJhbmdlID0gbmV3IFJhbmdlKCk7XHJcbiAgICByYW5nZS5zZXRTdGFydCh0ZXh0UmVmLCAwKTtcclxuICAgIHJhbmdlLnNldEVuZCh0ZXh0UmVmLCAxKTtcclxuICAgIGRvY3VtZW50LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkuYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJDb3B5XCIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBjbGVhckV2KHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGxldCB0ZXh0UmVmO1xyXG4gIGNvbnN0IHN0b3BFdiA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwicm93IGNvZGUgc2hhZG93IGp1c3RpZnktY29udGVudC1jZW50ZXIgIGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IGNsZWFyRXYoZmFsc2UpfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgY29sLTEwIFxyXG4gICAgICAgIGNvZGUtY29udGVudCBjb2wtbWQtNiBwLTUgXHJcbiAgICAgICAgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgXHJcbiAgICAgICAgJHtjbHMgPyBcInN0YXJ0XCIgOiBcIlwifSBgfVxyXG4gICAgICAgIG9uQ2xpY2s9e3N0b3BFdn1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvZGUtY29udGVudC1jdG5cIj5cclxuICAgICAgICAgIDxoMiByZWY9eyhyZWYpID0+ICh0ZXh0UmVmID0gcmVmKX0+e2RhdGF9PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTgganVzdGlmeS1jb250ZW50LWNlbnRlciByb3dcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbC1hdXRvXCIgb25DbGljaz17c2hhcmV9PlxyXG4gICAgICAgICAgQ29keVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvZGUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvZGUtY29udGVudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNTAlO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RhcnQge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAzcmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMnJlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzBjODJkYjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29kZTtcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\component\\\\code.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Code);

/***/ })

})
//# sourceMappingURL=component.js.bae49724d5f99e02dc28.hot-update.js.map