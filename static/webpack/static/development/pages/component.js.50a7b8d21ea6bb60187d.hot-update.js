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
  var color = _ref.color,
      loading = _ref.loading;
  console.log(color);
  console.log(loading);

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
  }, "2020 Have a good night")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3437612258",
    dynamic: [color],
    __self: _this
  }, "footer.__jsx-style-dynamic-selector{background:".concat(color, ";color:white;right:0;left:0;bottom:0;position:fixed;opacity:0;-webkit-transition:0.5s;transition:0.5s;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);}.show.__jsx-style-dynamic-selector{opacity:1;}h3.__jsx-style-dynamic-selector{font-size:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcY29tcG9uZW50XFxmb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJTLEFBR3FELEFBVzlCLEFBR0ssVUFGakIsS0FHQSx5QkFkYyxZQUNKLFFBQ0QsT0FDRSxTQUNNLGVBQ0wsVUFDTSx3Q0FDUSxvRkFDMUIiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxjb21wb25lbnRcXGZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoeyBjb2xvciwgbG9hZGluZyB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coY29sb3IpO1xyXG4gIGNvbnNvbGUubG9nKGxvYWRpbmcpO1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgRXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgIGxldCB3aW5IID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICBsZXQgZG9jSCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIGxldCBzY3JIID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgZG9jSCAtIHNjckggLSAzMCA8PSB3aW5IID8gc2V0U2hvdyh0cnVlKSA6IHNldFNob3coZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIEV2ZW50KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtgcm93IG14LTAgcC0wICR7c2hvdyA/IFwic2hvd1wiIDogXCJcIn1gfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcHktNSBtLTAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8aDM+MjAyMCBIYXZlIGEgZ29vZCBuaWdodDwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yfTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zaG93IHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59O1xyXG5jb25zdCBzdGF0ZUV2ZW50ID0gKHN0YXRlKSA9PiAoe1xyXG4gIGxvYWRpbmc6IHN0YXRlLlR5cGVSZWR1Y2VyLmxvYWRpbmcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZUV2ZW50KShGb290ZXIpO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\component\\\\footer.js */")));
};

var stateEvent = function stateEvent(state) {
  return {
    loading: state.TypeReducer.loading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (connect(stateEvent)(Footer));

/***/ })

})
//# sourceMappingURL=component.js.50a7b8d21ea6bb60187d.hot-update.js.map