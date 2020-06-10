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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\component\\footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Footer = function Footer(_ref) {
  var color = _ref.color,
      loading = _ref.loading;

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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3437612258", [color]]]) + " " + "row mx-0 p-0 ".concat(show && !loading ? "show" : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3437612258", [color]]]) + " " + "col-12 py-5 m-0 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3437612258", [color]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "2020 Have a good night")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3437612258",
    dynamic: [color],
    __self: _this
  }, "footer.__jsx-style-dynamic-selector{background:".concat(color, ";color:white;right:0;left:0;bottom:0;position:fixed;opacity:0;-webkit-transition:0.5s;transition:0.5s;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);}.show.__jsx-style-dynamic-selector{opacity:1;}h3.__jsx-style-dynamic-selector{font-size:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcY29tcG9uZW50XFxmb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JTLEFBR3FELEFBVzlCLEFBR0ssVUFGakIsS0FHQSx5QkFkYyxZQUNKLFFBQ0QsT0FDRSxTQUNNLGVBQ0wsVUFDTSx3Q0FDUSxvRkFDMUIiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxjb21wb25lbnRcXGZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICh7IGNvbG9yLCBsb2FkaW5nIH0pID0+IHtcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IEV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICBsZXQgd2luSCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgbGV0IGRvY0ggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICBsZXQgc2NySCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgIGRvY0ggLSBzY3JIIC0gMzAgPD0gd2luSCA/IHNldFNob3codHJ1ZSkgOiBzZXRTaG93KGZhbHNlKTtcclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBFdmVudCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17YHJvdyBteC0wIHAtMCAke3Nob3cgJiYgIWxvYWRpbmcgPyBcInNob3dcIiA6IFwiXCJ9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHB5LTUgbS0wIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPGgzPjIwMjAgSGF2ZSBhIGdvb2QgbmlnaHQ8L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcn07XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2hvdyB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufTtcclxuY29uc3Qgc3RhdGVFdmVudCA9IChzdGF0ZSkgPT4gKHtcclxuICBsb2FkaW5nOiBzdGF0ZS5UeXBlUmVkdWNlci5sb2FkaW5nLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGVFdmVudCkoRm9vdGVyKTtcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\component\\\\footer.js */")));
};

var stateEvent = function stateEvent(state) {
  return {
    loading: state.TypeReducer.loading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(stateEvent)(Footer));

/***/ })

})
//# sourceMappingURL=component.js.f7872a4dcb63580549ca.hot-update.js.map