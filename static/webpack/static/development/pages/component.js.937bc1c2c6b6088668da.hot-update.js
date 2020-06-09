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
      docH - scrH - 30 <= winH ? setShow(true) : setShow(false);
    };

    window.addEventListener("scroll", Event);
  }, []);
  return __jsx("footer", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3437612258", [color]]]) + " " + "row mx-0 p-0 ".concat(show ? "show" : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3437612258", [color]]]) + " " + "col-12 py-5 m-0 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3437612258", [color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "In the END")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3437612258",
    dynamic: [color],
    __self: _this
  }, "footer.__jsx-style-dynamic-selector{background:".concat(color, ";color:white;right:0;left:0;bottom:0;position:fixed;opacity:0;-webkit-transition:0.5s;transition:0.5s;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);}.show.__jsx-style-dynamic-selector{opacity:1;}h3.__jsx-style-dynamic-selector{font-size:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcY29tcG9uZW50XFxmb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJTLEFBR3FELEFBVzlCLEFBR0ssVUFGakIsS0FHQSx5QkFkYyxZQUNKLFFBQ0QsT0FDRSxTQUNNLGVBQ0wsVUFDTSx3Q0FDUSxvRkFDMUIiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxjb21wb25lbnRcXGZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoeyBjb2xvciB9KSA9PiB7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBFdmVudCA9ICgpID0+IHtcclxuICAgICAgbGV0IHdpbkggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgICBsZXQgZG9jSCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICBsZXQgc2NySCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgIGRvY0ggLSBzY3JIIC0gMzAgPD0gd2luSCA/IHNldFNob3codHJ1ZSkgOiBzZXRTaG93KGZhbHNlKTtcclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBFdmVudCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17YHJvdyBteC0wIHAtMCAke3Nob3cgPyBcInNob3dcIiA6IFwiXCJ9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHB5LTUgbS0wIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPGgzPkluIHRoZSBFTkQ8L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcn07XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2hvdyB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\component\\\\footer.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=component.js.937bc1c2c6b6088668da.hot-update.js.map