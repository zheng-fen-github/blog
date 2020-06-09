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
    if (value === 0) return setshowData(AllData.current);

    if (value === 1) {
      var _newData = AllData.current.filter(function (e) {
        console.log(e);
        var PhotoTime = +new Date(Number(e.createTime));
        var liveTime = Date.now();

        if (liveTime - PhotoTime >= 1000 * 60 * 60 * 24 * value) {
          return e;
        }
      });
    }

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
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-78461996",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
      lineNumber: 60,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "//at.alicdn.com/t/font_1748919_jonwjrvk6jq.css",
    className: "jsx-78461996",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), __jsx("title", {
    className: "jsx-78461996",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, " \u56FE\u7247\u6536\u85CF ")), __jsx("div", {
    className: "jsx-78461996" + " " + "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx("nav", {
    className: "jsx-78461996",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(_component_public_nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "photo-bg.jpg",
    alt: "bg",
    className: "jsx-78461996",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }))), showData.map(function (e) {
    return __jsx(_component_photo_item__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: e._id
    }, e, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }
    }));
  }), showData.length === 0 && __jsx("h1", {
    className: "jsx-78461996" + " " + "text-center mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, " \u6CA1\u6709\u76F8\u5173\u5185\u5BB9 "), __jsx(_component_photo_min_nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    filter: filterEvent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }), routerStatus && __jsx("div", {
    className: "jsx-78461996" + " " + "loadAnima",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, " ")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2898754504",
    __self: _this
  }, "*,body{margin:0;padding:0;box-sizing:border-box;}html{font-size:10px;}img{width:100%;height:auto;}.container-fluid{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxwaG90by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRnlCLEFBSW9CLEFBS00sQUFHSixBQUlELFNBWEEsQ0FZWixDQUpjLElBSGQsSUFKd0IsSUFReEIsa0JBUEEiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxccGFnZXNcXHBob3RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudC9wdWJsaWMvbmF2XCI7XHJcbmltcG9ydCBNaW5OYXYgZnJvbSBcIi4uL2NvbXBvbmVudC9waG90by9taW4tbmF2XCI7XHJcbmltcG9ydCBJdGVtIGZyb20gXCIuLi9jb21wb25lbnQvcGhvdG8vaXRlbVwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFBob3RvID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgW3Nob3dEYXRhLCBzZXRzaG93RGF0YV0gPSB1c2VTdGF0ZShkYXRhKTtcclxuICBjb25zdCBBbGxEYXRhID0gdXNlUmVmKCk7XHJcbiAgQWxsRGF0YS5jdXJyZW50ID0gZGF0YTtcclxuICBjb25zdCBmaWx0ZXJFdmVudCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlID09PSAwKSByZXR1cm4gc2V0c2hvd0RhdGEoQWxsRGF0YS5jdXJyZW50KTtcclxuICAgIGlmICh2YWx1ZSA9PT0gMSkge1xyXG4gICAgICBsZXQgbmV3RGF0YSA9IEFsbERhdGEuY3VycmVudC5maWx0ZXIoKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICBsZXQgUGhvdG9UaW1lID0gK25ldyBEYXRlKE51bWJlcihlLmNyZWF0ZVRpbWUpKTtcclxuICAgICAgICBsZXQgbGl2ZVRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGlmIChsaXZlVGltZSAtIFBob3RvVGltZSA+PSAxMDAwICogNjAgKiA2MCAqIDI0ICogdmFsdWUpIHtcclxuICAgICAgICAgIHJldHVybiBlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3RGF0YSA9IEFsbERhdGEuY3VycmVudC5maWx0ZXIoKGUpID0+IHtcclxuICAgICAgbGV0IFBob3RvVGltZSA9ICtuZXcgRGF0ZShOdW1iZXIoZS5jcmVhdGVUaW1lKSk7XHJcbiAgICAgIGxldCBsaXZlVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgIGlmIChsaXZlVGltZSAtIFBob3RvVGltZSA+PSAxMDAwICogNjAgKiA2MCAqIDI0ICogdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBzZXRzaG93RGF0YShuZXdEYXRhKTtcclxuICB9O1xyXG4gIGNvbnN0IFtyb3V0ZXJTdGF0dXMsIHNldFJvdXRlclN0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIOi3r+eUseWPmOWMluS6i+S7tlxyXG4gIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xyXG4gICAgc2V0Um91dGVyU3RhdHVzKHRydWUpO1xyXG4gIH07XHJcbiAgUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG5cclxuICBjb25zdCBmb250c2l6ZUV2ZW50ID0gKCkgPT4ge1xyXG4gICAgbGV0IHN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgOTYwKSB7XHJcbiAgICAgIHN0eWxlLmZvbnRTaXplID0gXCI2cHhcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0eWxlLmZvbnRTaXplID0gXCIxMHB4XCI7XHJcbiAgICB9XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZm9udHNpemVFdmVudCgpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG4gICAgICBmb250c2l6ZUV2ZW50KCk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UGhvdG88L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA0LjQuMS9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtVmtvbzh4NENHc08zK0hoeHY4VC9RNVBhWHRrS3R1NnVnNVRPZU5WNmdCaUZlV1BHRk45TXVoT2YyM1E5SWZqaFwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgPjwvbGluaz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xNzQ4OTE5X2pvbndqcnZrNmpxLmNzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8dGl0bGU+IOWbvueJh+aUtuiXjyA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDxOYXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwicGhvdG8tYmcuanBnXCIgYWx0PVwiYmdcIiAvPlxyXG4gICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAge3Nob3dEYXRhLm1hcCgoZSkgPT4gKFxyXG4gICAgICAgICAgPEl0ZW0ga2V5PXtlLl9pZH0gey4uLmV9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAge3Nob3dEYXRhLmxlbmd0aCA9PT0gMCAmJiAoXHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNVwiPiDmsqHmnInnm7jlhbPlhoXlrrkgPC9oMT5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxNaW5OYXYgZmlsdGVyPXtmaWx0ZXJFdmVudH0gLz5cclxuXHJcbiAgICAgICAge3JvdXRlclN0YXR1cyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRBbmltYVwiPiB7LyogIOi3r+eUseWPmOWMluaXtiDmj5DnpLrliqjnlLsgKi99PC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICosXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxvYWRBbmltYSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBMb2FkaW5nIDJzIDEwO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGtleWZyYW1lcyBMb2FkaW5nIHtcclxuICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICBjb25zdCBSVVJMID0gcHJvY2Vzcy5lbnYuREFUQV9VUkwgKyBcImFkZHBob3RvL3Bob3Rvc1wiO1xyXG4gIGxldCByZXEgPSBhd2FpdCBmZXRjaChSVVJMKTtcclxuICBsZXQgZGF0YSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGRhdGEgfSxcclxuICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBob3RvO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\pages\\\\photo.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2332455341",
    __self: _this
  }, "img.jsx-78461996{width:100%;height:auto;}.loadAnima.jsx-78461996{position:fixed;left:0;top:0;right:0;bottom:0;background:black;-webkit-animation:Loading-jsx-78461996 2s 10;animation:Loading-jsx-78461996 2s 10;z-index:9999;}@-webkit-keyframes Loading-jsx-78461996{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}@keyframes Loading-jsx-78461996{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxwaG90by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2R1MsQUFHd0IsQUFJSSxBQVdILEFBR0EsQUFHQSxVQUxaLEFBR0EsQUFHQSxDQXJCWSxJQUlMLE9BQ0QsQ0FKUixLQUtVLFFBQ0MsU0FDUSxpQkFDTyxrRkFDWCxhQUNmIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxwaG90by5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnQvcHVibGljL25hdlwiO1xyXG5pbXBvcnQgTWluTmF2IGZyb20gXCIuLi9jb21wb25lbnQvcGhvdG8vbWluLW5hdlwiO1xyXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vY29tcG9uZW50L3Bob3RvL2l0ZW1cIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBQaG90byA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93RGF0YSwgc2V0c2hvd0RhdGFdID0gdXNlU3RhdGUoZGF0YSk7XHJcbiAgY29uc3QgQWxsRGF0YSA9IHVzZVJlZigpO1xyXG4gIEFsbERhdGEuY3VycmVudCA9IGRhdGE7XHJcbiAgY29uc3QgZmlsdGVyRXZlbnQgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIGlmICh2YWx1ZSA9PT0gMCkgcmV0dXJuIHNldHNob3dEYXRhKEFsbERhdGEuY3VycmVudCk7XHJcbiAgICBpZiAodmFsdWUgPT09IDEpIHtcclxuICAgICAgbGV0IG5ld0RhdGEgPSBBbGxEYXRhLmN1cnJlbnQuZmlsdGVyKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgbGV0IFBob3RvVGltZSA9ICtuZXcgRGF0ZShOdW1iZXIoZS5jcmVhdGVUaW1lKSk7XHJcbiAgICAgICAgbGV0IGxpdmVUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBpZiAobGl2ZVRpbWUgLSBQaG90b1RpbWUgPj0gMTAwMCAqIDYwICogNjAgKiAyNCAqIHZhbHVlKSB7XHJcbiAgICAgICAgICByZXR1cm4gZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbGV0IG5ld0RhdGEgPSBBbGxEYXRhLmN1cnJlbnQuZmlsdGVyKChlKSA9PiB7XHJcbiAgICAgIGxldCBQaG90b1RpbWUgPSArbmV3IERhdGUoTnVtYmVyKGUuY3JlYXRlVGltZSkpO1xyXG4gICAgICBsZXQgbGl2ZVRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICBpZiAobGl2ZVRpbWUgLSBQaG90b1RpbWUgPj0gMTAwMCAqIDYwICogNjAgKiAyNCAqIHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgc2V0c2hvd0RhdGEobmV3RGF0YSk7XHJcbiAgfTtcclxuICBjb25zdCBbcm91dGVyU3RhdHVzLCBzZXRSb3V0ZXJTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyDot6/nlLHlj5jljJbkuovku7ZcclxuICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmwpID0+IHtcclxuICAgIHNldFJvdXRlclN0YXR1cyh0cnVlKTtcclxuICB9O1xyXG4gIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuXHJcbiAgY29uc3QgZm9udHNpemVFdmVudCA9ICgpID0+IHtcclxuICAgIGxldCBzdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDk2MCkge1xyXG4gICAgICBzdHlsZS5mb250U2l6ZSA9IFwiNnB4XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdHlsZS5mb250U2l6ZSA9IFwiMTBweFwiO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZvbnRzaXplRXZlbnQoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuICAgICAgZm9udHNpemVFdmVudCgpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlBob3RvPC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANC40LjEvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LVZrb284eDRDR3NPMytIaHh2OFQvUTVQYVh0a0t0dTZ1ZzVUT2VOVjZnQmlGZVdQR0ZOOU11aE9mMjNROUlmamhcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTc0ODkxOV9qb253anJ2azZqcS5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHRpdGxlPiDlm77niYfmlLbol48gPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICA8TmF2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cInBob3RvLWJnLmpwZ1wiIGFsdD1cImJnXCIgLz5cclxuICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIHtzaG93RGF0YS5tYXAoKGUpID0+IChcclxuICAgICAgICAgIDxJdGVtIGtleT17ZS5faWR9IHsuLi5lfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIHtzaG93RGF0YS5sZW5ndGggPT09IDAgJiYgKFxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTVcIj4g5rKh5pyJ55u45YWz5YaF5a65IDwvaDE+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8TWluTmF2IGZpbHRlcj17ZmlsdGVyRXZlbnR9IC8+XHJcblxyXG4gICAgICAgIHtyb3V0ZXJTdGF0dXMgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkQW5pbWFcIj4gey8qICDot6/nlLHlj5jljJbml7Yg5o+Q56S65Yqo55S7ICovfTwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAqLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2FkQW5pbWEge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogTG9hZGluZyAycyAxMDtcclxuICAgICAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBrZXlmcmFtZXMgTG9hZGluZyB7XHJcbiAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgUlVSTCA9IHByb2Nlc3MuZW52LkRBVEFfVVJMICsgXCJhZGRwaG90by9waG90b3NcIjtcclxuICBsZXQgcmVxID0gYXdhaXQgZmV0Y2goUlVSTCk7XHJcbiAgbGV0IGRhdGEgPSBhd2FpdCByZXEuanNvbigpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBkYXRhIH0sXHJcbiAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQaG90bztcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\pages\\\\photo.js */"));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Photo);

/***/ })

})
//# sourceMappingURL=photo.js.8f9eb9b30c90eaff88af.hot-update.js.map