webpackHotUpdate("static\\development\\pages\\photo.js",{

/***/ "./pages/photo.js":
/*!************************!*\
  !*** ./pages/photo.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_public_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/public/nav */ "./component/public/nav.js");
/* harmony import */ var _component_photo_min_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/photo/min-nav */ "./component/photo/min-nav.js");
/* harmony import */ var _component_photo_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/photo/item */ "./component/photo/item.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);


var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\pages\\photo.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var Photo = function Photo(_ref) {
  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(data),
      showData = _useState[0],
      setshowData = _useState[1];

  var AllData = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  AllData.current = data;

  var filterEvent = function filterEvent(value) {
    console.log(value);
    if (value == 0) return setshowData(AllData.current);

    if (value == 1) {}

    var newData = AllData.current.filter(function (e) {
      var PhotoTime = +new Date(Number(e.createTime));
      var liveTime = Date.now();

      if (liveTime - PhotoTime >= 1000 * 60 * 60 * 24 * value) {
        return e;
      }
    });
    setshowData(newData);
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      routerStatus = _useState2[0],
      setRouterStatus = _useState2[1]; // 路由变化事件


  var handleRouteChange = function handleRouteChange(url) {
    setRouterStatus(true);
  };

  next_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.on("routeChangeStart", handleRouteChange);

  var fontsizeEvent = function fontsizeEvent() {
    var style = document.documentElement.style;

    if (window.innerWidth < 960) {
      style.fontSize = "6px";
    } else {
      style.fontSize = "10px";
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fontsizeEvent();
    window.addEventListener("resize", function () {
      fontsizeEvent();
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-78461996",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "Photo"), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css",
    integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
    crossorigin: "anonymous",
    className: "jsx-78461996",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "//at.alicdn.com/t/font_1748919_jonwjrvk6jq.css",
    className: "jsx-78461996",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), __jsx("title", {
    className: "jsx-78461996",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, " \u56FE\u7247\u6536\u85CF ")), __jsx("div", {
    className: "jsx-78461996" + " " + "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx("nav", {
    className: "jsx-78461996",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(_component_public_nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "photo-bg.jpg",
    alt: "bg",
    className: "jsx-78461996",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }))), showData.map(function (e) {
    return __jsx(_component_photo_item__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: e._id
    }, e, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }
    }));
  }), showData.length === 0 && __jsx("h1", {
    className: "jsx-78461996" + " " + "text-center mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, " \u6CA1\u6709\u76F8\u5173\u5185\u5BB9 "), __jsx(_component_photo_min_nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    filter: filterEvent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }), routerStatus && __jsx("div", {
    className: "jsx-78461996" + " " + "loadAnima",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, " ")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2898754504",
    __self: _this
  }, "*,body{margin:0;padding:0;box-sizing:border-box;}html{font-size:10px;}img{width:100%;height:auto;}.container-fluid{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxwaG90by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRnlCLEFBSW9CLEFBS00sQUFHSixBQUlELFNBWEEsQ0FZWixDQUpjLElBSGQsSUFKd0IsSUFReEIsa0JBUEEiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxccGFnZXNcXHBob3RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudC9wdWJsaWMvbmF2XCI7XHJcbmltcG9ydCBNaW5OYXYgZnJvbSBcIi4uL2NvbXBvbmVudC9waG90by9taW4tbmF2XCI7XHJcbmltcG9ydCBJdGVtIGZyb20gXCIuLi9jb21wb25lbnQvcGhvdG8vaXRlbVwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFBob3RvID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgW3Nob3dEYXRhLCBzZXRzaG93RGF0YV0gPSB1c2VTdGF0ZShkYXRhKTtcclxuICBjb25zdCBBbGxEYXRhID0gdXNlUmVmKCk7XHJcbiAgQWxsRGF0YS5jdXJyZW50ID0gZGF0YTtcclxuICBjb25zdCBmaWx0ZXJFdmVudCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlID09IDApIHJldHVybiBzZXRzaG93RGF0YShBbGxEYXRhLmN1cnJlbnQpO1xyXG4gICAgaWYgKHZhbHVlID09IDEpIHtcclxuICAgIH1cclxuICAgIGxldCBuZXdEYXRhID0gQWxsRGF0YS5jdXJyZW50LmZpbHRlcigoZSkgPT4ge1xyXG4gICAgICBsZXQgUGhvdG9UaW1lID0gK25ldyBEYXRlKE51bWJlcihlLmNyZWF0ZVRpbWUpKTtcclxuICAgICAgbGV0IGxpdmVUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgaWYgKGxpdmVUaW1lIC0gUGhvdG9UaW1lID49IDEwMDAgKiA2MCAqIDYwICogMjQgKiB2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHNldHNob3dEYXRhKG5ld0RhdGEpO1xyXG4gIH07XHJcbiAgY29uc3QgW3JvdXRlclN0YXR1cywgc2V0Um91dGVyU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8g6Lev55Sx5Y+Y5YyW5LqL5Lu2XHJcbiAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsKSA9PiB7XHJcbiAgICBzZXRSb3V0ZXJTdGF0dXModHJ1ZSk7XHJcbiAgfTtcclxuICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcblxyXG4gIGNvbnN0IGZvbnRzaXplRXZlbnQgPSAoKSA9PiB7XHJcbiAgICBsZXQgc3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA5NjApIHtcclxuICAgICAgc3R5bGUuZm9udFNpemUgPSBcIjZweFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3R5bGUuZm9udFNpemUgPSBcIjEwcHhcIjtcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmb250c2l6ZUV2ZW50KCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcbiAgICAgIGZvbnRzaXplRXZlbnQoKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5QaG90bzwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDQuNC4xL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1Wa29vOHg0Q0dzTzMrSGh4djhUL1E1UGFYdGtLdHU2dWc1VE9lTlY2Z0JpRmVXUEdGTjlNdWhPZjIzUTlJZmpoXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzE3NDg5MTlfam9ud2pydms2anEuY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDx0aXRsZT4g5Zu+54mH5pS26JePIDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgPE5hdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJwaG90by1iZy5qcGdcIiBhbHQ9XCJiZ1wiIC8+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICB7c2hvd0RhdGEubWFwKChlKSA9PiAoXHJcbiAgICAgICAgICA8SXRlbSBrZXk9e2UuX2lkfSB7Li4uZX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgICB7c2hvd0RhdGEubGVuZ3RoID09PSAwICYmIChcclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC01XCI+IOayoeacieebuOWFs+WGheWuuSA8L2gxPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPE1pbk5hdiBmaWx0ZXI9e2ZpbHRlckV2ZW50fSAvPlxyXG5cclxuICAgICAgICB7cm91dGVyU3RhdHVzICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZEFuaW1hXCI+IHsvKiAg6Lev55Sx5Y+Y5YyW5pe2IOaPkOekuuWKqOeUuyAqL308L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgKixcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICBodG1sIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9hZEFuaW1hIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IExvYWRpbmcgMnMgMTA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAa2V5ZnJhbWVzIExvYWRpbmcge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIGNvbnN0IFJVUkwgPSBwcm9jZXNzLmVudi5EQVRBX1VSTCArIFwiYWRkcGhvdG8vcGhvdG9zXCI7XHJcbiAgbGV0IHJlcSA9IGF3YWl0IGZldGNoKFJVUkwpO1xyXG4gIGxldCBkYXRhID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgZGF0YSB9LFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGhvdG87XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\pages\\\\photo.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2332455341",
    __self: _this
  }, "img.jsx-78461996{width:100%;height:auto;}.loadAnima.jsx-78461996{position:fixed;left:0;top:0;right:0;bottom:0;background:black;-webkit-animation:Loading-jsx-78461996 2s 10;animation:Loading-jsx-78461996 2s 10;z-index:9999;}@-webkit-keyframes Loading-jsx-78461996{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}@keyframes Loading-jsx-78461996{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxwaG90by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxR1MsQUFHd0IsQUFJSSxBQVdILEFBR0EsQUFHQSxVQUxaLEFBR0EsQUFHQSxDQXJCWSxJQUlMLE9BQ0QsQ0FKUixLQUtVLFFBQ0MsU0FDUSxpQkFDTyxrRkFDWCxhQUNmIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxwaG90by5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnQvcHVibGljL25hdlwiO1xyXG5pbXBvcnQgTWluTmF2IGZyb20gXCIuLi9jb21wb25lbnQvcGhvdG8vbWluLW5hdlwiO1xyXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vY29tcG9uZW50L3Bob3RvL2l0ZW1cIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBQaG90byA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93RGF0YSwgc2V0c2hvd0RhdGFdID0gdXNlU3RhdGUoZGF0YSk7XHJcbiAgY29uc3QgQWxsRGF0YSA9IHVzZVJlZigpO1xyXG4gIEFsbERhdGEuY3VycmVudCA9IGRhdGE7XHJcbiAgY29uc3QgZmlsdGVyRXZlbnQgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIGlmICh2YWx1ZSA9PSAwKSByZXR1cm4gc2V0c2hvd0RhdGEoQWxsRGF0YS5jdXJyZW50KTtcclxuICAgIGlmICh2YWx1ZSA9PSAxKSB7XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3RGF0YSA9IEFsbERhdGEuY3VycmVudC5maWx0ZXIoKGUpID0+IHtcclxuICAgICAgbGV0IFBob3RvVGltZSA9ICtuZXcgRGF0ZShOdW1iZXIoZS5jcmVhdGVUaW1lKSk7XHJcbiAgICAgIGxldCBsaXZlVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgIGlmIChsaXZlVGltZSAtIFBob3RvVGltZSA+PSAxMDAwICogNjAgKiA2MCAqIDI0ICogdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBzZXRzaG93RGF0YShuZXdEYXRhKTtcclxuICB9O1xyXG4gIGNvbnN0IFtyb3V0ZXJTdGF0dXMsIHNldFJvdXRlclN0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIOi3r+eUseWPmOWMluS6i+S7tlxyXG4gIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xyXG4gICAgc2V0Um91dGVyU3RhdHVzKHRydWUpO1xyXG4gIH07XHJcbiAgUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG5cclxuICBjb25zdCBmb250c2l6ZUV2ZW50ID0gKCkgPT4ge1xyXG4gICAgbGV0IHN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgOTYwKSB7XHJcbiAgICAgIHN0eWxlLmZvbnRTaXplID0gXCI2cHhcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0eWxlLmZvbnRTaXplID0gXCIxMHB4XCI7XHJcbiAgICB9XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZm9udHNpemVFdmVudCgpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG4gICAgICBmb250c2l6ZUV2ZW50KCk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UGhvdG88L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA0LjQuMS9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtVmtvbzh4NENHc08zK0hoeHY4VC9RNVBhWHRrS3R1NnVnNVRPZU5WNmdCaUZlV1BHRk45TXVoT2YyM1E5SWZqaFwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgPjwvbGluaz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xNzQ4OTE5X2pvbndqcnZrNmpxLmNzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8dGl0bGU+IOWbvueJh+aUtuiXjyA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDxOYXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwicGhvdG8tYmcuanBnXCIgYWx0PVwiYmdcIiAvPlxyXG4gICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAge3Nob3dEYXRhLm1hcCgoZSkgPT4gKFxyXG4gICAgICAgICAgPEl0ZW0ga2V5PXtlLl9pZH0gey4uLmV9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAge3Nob3dEYXRhLmxlbmd0aCA9PT0gMCAmJiAoXHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNVwiPiDmsqHmnInnm7jlhbPlhoXlrrkgPC9oMT5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxNaW5OYXYgZmlsdGVyPXtmaWx0ZXJFdmVudH0gLz5cclxuXHJcbiAgICAgICAge3JvdXRlclN0YXR1cyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRBbmltYVwiPiB7LyogIOi3r+eUseWPmOWMluaXtiDmj5DnpLrliqjnlLsgKi99PC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICosXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxvYWRBbmltYSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBMb2FkaW5nIDJzIDEwO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGtleWZyYW1lcyBMb2FkaW5nIHtcclxuICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICBjb25zdCBSVVJMID0gcHJvY2Vzcy5lbnYuREFUQV9VUkwgKyBcImFkZHBob3RvL3Bob3Rvc1wiO1xyXG4gIGxldCByZXEgPSBhd2FpdCBmZXRjaChSVVJMKTtcclxuICBsZXQgZGF0YSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGRhdGEgfSxcclxuICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBob3RvO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\pages\\\\photo.js */"));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Photo);

/***/ })

})
//# sourceMappingURL=photo.js.a68adf888ce441dd7c03.hot-update.js.map