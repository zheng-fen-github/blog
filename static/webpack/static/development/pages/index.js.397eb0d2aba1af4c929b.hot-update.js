webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/home/PostPhoto.js":
/*!*************************************!*\
  !*** ./component/home/PostPhoto.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo */ "./component/home/photo.js");
var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\home\\PostPhoto.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var PostPhoto = function PostPhoto(_ref) {
  var data = _ref.data;

  var scrollEv = function scrollEv() {
    var dom = photosDom.current;

    if (dom) {
      var top = dom.getBoundingClientRect().top;

      if (top < 300) {
        dom.querySelector(".left-photos").classList.add("left-photos-show");
      }

      if (top > window.innerHeight - 200) {
        dom.querySelector(".left-photos").classList.remove("left-photos-show");
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener("scroll", scrollEv);
  }, []);
  var photosDom = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  return __jsx("div", {
    ref: photosDom,
    className: "jsx-3193592364" + " " + "row justify-content-center mx-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3193592364" + " " + "col-10 col-xl-8 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "jsx-3193592364" + " " + "text-lg-left text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "\u4E00\u4E9B\u559C\u6B22\u7684\u56FE\u7247 \uFE3D\u2299_\u2299\uFE3D "), __jsx("div", {
    className: "jsx-3193592364" + " " + "row overflow-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3193592364" + " " + "col-12 col-md-6 mx-0 left-photos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-3193592364" + " " + "row justify-content-between ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, data && data.list.map(function (photo) {
    return __jsx("div", {
      key: photo,
      className: "jsx-3193592364" + " " + "col-6 ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 19
      }
    }, __jsx(_photo__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "\u56FE\u7247",
      id: photo,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }
    }));
  }))), __jsx("div", {
    className: "jsx-3193592364" + " " + "col-12 col-md-6 max-photo mx-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx(_photo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "\u56FE\u7247",
    id: data.first,
    classname: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3193592364",
    __self: _this
  }, "h2.jsx-3193592364{font-size:4rem;margin:5% 0;font-weight:700;}.left-photos.jsx-3193592364{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);-webkit-transition:1s;transition:1s;}.left-photos-show.jsx-3193592364{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}.justify-content-between.jsx-3193592364{margin-bottom:30px;}.justify-content-between.jsx-3193592364 .col-6.jsx-3193592364:nth-child(n + 3){margin-top:30px;}.max-photo.jsx-3193592364 img.jsx-3193592364{height:calc(100% - 30px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcaG9tZVxcUG9zdFBob3RvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDUyxBQUc0QixBQUtZLEFBSUgsQUFHTCxBQUdILEFBSVMsZUFsQmIsQ0FlZCxHQUhBLE1BT0EsRUFsQmtCLGdCQUNsQix5Q0FPQSxTQUpnQixvQ0FDaEIiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxob21lXFxQb3N0UGhvdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQaG90byBmcm9tIFwiLi9waG90b1wiO1xyXG5cclxuY29uc3QgUG9zdFBob3RvID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3Qgc2Nyb2xsRXYgPSAoKSA9PiB7XHJcbiAgICBsZXQgZG9tID0gcGhvdG9zRG9tLmN1cnJlbnQ7XHJcbiAgICBpZiAoZG9tKSB7XHJcbiAgICAgIGxldCB0b3AgPSBkb20uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgICBpZiAodG9wIDwgMzAwKSB7XHJcbiAgICAgICAgZG9tLnF1ZXJ5U2VsZWN0b3IoXCIubGVmdC1waG90b3NcIikuY2xhc3NMaXN0LmFkZChcImxlZnQtcGhvdG9zLXNob3dcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRvcCA+IHdpbmRvdy5pbm5lckhlaWdodCAtIDIwMCkge1xyXG4gICAgICAgIGRvbS5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtcGhvdG9zXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJsZWZ0LXBob3Rvcy1zaG93XCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEV2KTtcclxuICB9LCBbXSk7XHJcbiAgbGV0IHBob3Rvc0RvbSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG14LTBcIiByZWY9e3Bob3Rvc0RvbX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIGNvbC14bC04IFwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnLWxlZnQgdGV4dC1jZW50ZXJcIj7kuIDkupvllpzmrKLnmoTlm77niYcg77i94oqZX+KKme+4vSA8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgbXgtMCBsZWZ0LXBob3Rvc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBcIj5cclxuICAgICAgICAgICAgICB7ZGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgZGF0YS5saXN0Lm1hcCgocGhvdG8pID0+IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBcIiBrZXk9e3Bob3RvfT5cclxuICAgICAgICAgICAgICAgICAgICA8UGhvdG8gbmFtZT1cIuWbvueJh1wiIGlkPXtwaG90b30gLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IG1heC1waG90byBteC0wXCI+XHJcbiAgICAgICAgICAgIDxQaG90byBuYW1lPVwi5Zu+54mHXCIgaWQ9e2RhdGEuZmlyc3R9IGNsYXNzbmFtZT1cInJpZ2h0XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogNSUgMDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sZWZ0LXBob3RvcyB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGVmdC1waG90b3Mtc2hvdyB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuanVzdGlmeS1jb250ZW50LWJldHdlZW4gLmNvbC02Om50aC1jaGlsZChuICsgMykge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tYXgtcGhvdG8gaW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RQaG90bztcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\home\\\\PostPhoto.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (PostPhoto);

/***/ })

})
//# sourceMappingURL=index.js.397eb0d2aba1af4c929b.hot-update.js.map