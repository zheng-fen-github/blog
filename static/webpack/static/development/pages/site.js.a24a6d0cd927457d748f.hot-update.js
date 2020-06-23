webpackHotUpdate("static\\development\\pages\\site.js",{

/***/ "./pages/site.js":
/*!***********************!*\
  !*** ./pages/site.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_site_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/site/index */ "./component/site/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\pages\\site.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      data = _useState[0],
      setdata = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      quit = _useState2[0],
      setquit = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      error = _useState3[0],
      seterror = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var reqFunc = function reqFunc() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function reqFunc$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_5___default()("http://localhost:4040/site/gotData"));

            case 3:
              res = _context.sent;
              if (!quit) setdata(res.data);
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              seterror(true);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 7]], Promise);
    };

    reqFunc();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-674064234",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "\u7F51\u7AD9\u6536\u85CF")), __jsx("div", {
    className: "jsx-674064234" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-674064234" + " " + "content guodu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, data && data.map(function (s) {
    return __jsx(_component_site_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
      data: s,
      key: s._id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 36
      }
    });
  })), error && __jsx("h1", {
    className: "jsx-674064234",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 19
    }
  }, " \u7F51\u9875\u51FA\u9519\u4E86 \u5237\u65B0\u8BD5\u8BD5")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "674064234",
    __self: _this
  }, "*,body{margin:0;padding:0;box-sizing:border-box;color:white;}.container{position:fixed;left:0;top:0;bottom:0;right:0;z-index:2;background:#191b1f;}.content{position:absolute;left:50%;top:50%;width:1080px;min-height:600px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}h1{text-align:center;margin:20px;}.pointer{cursor:pointer;}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}ul{list-style:none;}.ani,.guodu{-webkit-transition:0.5s;transition:0.5s;}.ani:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxzaXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDeUIsQUFJb0IsQUFNTSxBQVNHLEFBUUEsQUFJSCxBQUdGLEFBS0csQUFJQSxBQUdNLFNBekNaLE1BTUgsQUFxQlQsQ0FRQSxFQXBCVyxBQVFHLENBdEJVLEdBTWhCLEtBU0UsQ0FSQyxFQWdCWCxLQVBlLEVBUkwsR0E4QlYsQ0FyQ2MsSUFRRixHQVFPLEtBZm5CLEVBUXFCLFVBUWEsU0FQbEMsQUFrQnlCLElBWXpCLDRGQXRCQSxHQVdxQiw2RkFDckIiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxccGFnZXNcXHNpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFNpdGVJdGVtIGZyb20gXCIuLi9jb21wb25lbnQvc2l0ZS9pbmRleFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldGRhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3F1aXQsIHNldHF1aXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0ZXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgcmVxRnVuYyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MoXCJodHRwOi8vbG9jYWxob3N0OjQwNDAvc2l0ZS9nb3REYXRhXCIpO1xyXG5cclxuICAgICAgICBpZiAoIXF1aXQpIHNldGRhdGEocmVzLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHNldGVycm9yKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmVxRnVuYygpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPue9keermeaUtuiXjzwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgZ3VvZHVcIj5cclxuICAgICAgICAgIHtkYXRhICYmIGRhdGEubWFwKChzKSA9PiA8U2l0ZUl0ZW0gZGF0YT17c30ga2V5PXtzLl9pZH0gLz4pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtlcnJvciAmJiA8aDE+IOe9kemhteWHuumUmeS6hiDliLfmlrDor5Xor5U8L2gxPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgKixcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTkxYjFmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMDgwcHg7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wb2ludGVyIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZsZXgge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFuaSxcclxuICAgICAgICAuZ3VvZHUge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFuaTpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\pages\\\\site.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=site.js.a24a6d0cd927457d748f.hot-update.js.map