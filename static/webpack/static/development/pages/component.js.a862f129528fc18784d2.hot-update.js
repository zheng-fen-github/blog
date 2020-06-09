webpackHotUpdate("static\\development\\pages\\component.js",{

/***/ "./component/component/footer.js":
/*!***************************************!*\
  !*** ./component/component/footer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\component\\footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Footer = function Footer(_ref) {
  var color = _ref.color;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      show = _useState[0],
      setShow = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var Event = function Event() {
      var winH = window.innerHeight;
      var docH = document.documentElement.offsetHeight;
      var scrH = document.documentElement.scrollTop;

      if (docH - scrH - 30 <= winH) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", Event);
  }, []);
  return __jsx("footer", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3437612258", [color]]]) + " " + "row mx-0 p-0 ".concat(show ? "show" : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3437612258", [color]]]) + " " + "col-12 py-5 m-0 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3437612258", [color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "In the END")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3437612258",
    dynamic: [color],
    __self: _this
  }, "footer.__jsx-style-dynamic-selector{background:".concat(color, ";color:white;right:0;left:0;bottom:0;position:fixed;opacity:0;-webkit-transition:0.5s;transition:0.5s;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);}.show.__jsx-style-dynamic-selector{opacity:1;}h3.__jsx-style-dynamic-selector{font-size:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcY29tcG9uZW50XFxmb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJTLEFBR3FELEFBVzlCLEFBR0ssVUFGakIsS0FHQSx5QkFkYyxZQUNKLFFBQ0QsT0FDRSxTQUNNLGVBQ0wsVUFDTSx3Q0FDUSxvRkFDMUIiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxjb21wb25lbnRcXGZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoeyBjb2xvciB9KSA9PiB7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBFdmVudCA9ICgpID0+IHtcclxuICAgICAgbGV0IHdpbkggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgICBsZXQgZG9jSCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICBsZXQgc2NySCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgIGlmIChkb2NIIC0gc2NySCAtIDMwIDw9IHdpbkgpIHtcclxuICAgICAgICBzZXRTaG93KHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFNob3coZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgRXZlbnQpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e2Byb3cgbXgtMCBwLTAgJHtzaG93ID8gXCJzaG93XCIgOiBcIlwifWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBweS01IG0tMCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxoMz5JbiB0aGUgRU5EPC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3J9O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnNob3cge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\component\\\\footer.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=component.js.a862f129528fc18784d2.hot-update.js.map