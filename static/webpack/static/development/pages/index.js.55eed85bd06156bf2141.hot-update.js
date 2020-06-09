webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/home/video.js":
/*!*********************************!*\
  !*** ./component/home/video.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\home\\video.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Video = function Video() {
  var positionEvent = function positionEvent(count, dom) {
    try {
      dom.children[0].style.marginLeft = count + "px";
    } catch (err) {
      console.log(err);
    }
  };

  var leaveEv = function leaveEv(e) {
    positionEvent(0, e.currentTarget);
  };

  var enterEv = function enterEv(e) {
    var dom = e.currentTarget;
    var count = dom.clientWidth - dom.children[0].offsetWidth;
    positionEvent(count, dom);
  };

  var scrollEv = function scrollEv() {
    //滚动动画事件
    var dom = videoRef.current;

    if (dom) {
      if (dom.getBoundingClientRect().top < window.innerHeight - 600) {
        var domList = dom.querySelectorAll("img");
        Array.from(domList).map(function (e) {
          return e.classList.add("show");
        });
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener("scroll", scrollEv);
  }, []);
  var videoRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  return __jsx("div", {
    ref: videoRef,
    className: "jsx-327649679" + " " + "row video justify-content-center mx-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-327649679" + " " + "col-12 col-sm-10 col-xl-8 my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-327649679" + " " + "row video-ctn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-327649679" + " " + "col-12 col-xl-4 text-xl-left text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "jsx-327649679",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "\u7CFB\u5217\u89C6\u9891"), __jsx("h3", {
    className: "jsx-327649679" + " " + "my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "\u70B9\u51FB\u60A8\u611F\u5174\u8DA3\u7684\uFF01(\u6682\u65F6\u6CA1\u5185\u5BB9)")), __jsx("div", {
    className: "jsx-327649679" + " " + "col-12 col-xl-8 mt-5 mt-xl-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-327649679" + " " + "row video-root justify-content-center my-xl-4 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("div", {
    onMouseLeave: leaveEv,
    onMouseEnter: enterEv,
    className: "jsx-327649679" + " " + "col-5 video-item shadow-sm mx-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "app-logo/ar.jpg",
    alt: "ae",
    className: "jsx-327649679",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  })), __jsx("div", {
    onMouseLeave: leaveEv,
    onMouseEnter: enterEv,
    className: "jsx-327649679" + " " + "col-5 video-item shadow-sm mx-4 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "app-logo/pr.jpg",
    alt: "pr",
    className: "jsx-327649679",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-327649679" + " " + "row video-root justify-content-center my-xl-4 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("div", {
    onMouseLeave: leaveEv,
    onMouseEnter: enterEv,
    className: "jsx-327649679" + " " + "col-5 video-item shadow-sm mx-4 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "app-logo/ps.jpg",
    alt: "ps",
    className: "jsx-327649679",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  })), __jsx("div", {
    onMouseLeave: leaveEv,
    onMouseEnter: enterEv,
    className: "jsx-327649679" + " " + "col-5 video-item shadow-sm mx-4 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "app-logo/all.jpg",
    alt: "all",
    className: "jsx-327649679",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "327649679",
    __self: _this
  }, ".video-ctn.jsx-327649679{border-bottom:2px solid #eaeaea;padding:20rem 0;}img.jsx-327649679{height:100%;-webkit-transition:0.5s;transition:0.5s;margin-left:25px;}img.show.jsx-327649679{margin-left:0;}.photo.jsx-327649679{width:16vh;margin-left:0;-webkit-transition:1.5s;transition:1.5s;}h2.jsx-327649679{font-size:4rem;font-weight:700;-webkit-animation:text-jsx-327649679 0.6s 1 0s;animation:text-jsx-327649679 0.6s 1 0s;}h3.jsx-327649679{-webkit-text-decoration:underline;text-decoration:underline;-webkit-animation:text-jsx-327649679 0.6s 1 0.2s;animation:text-jsx-327649679 0.6s 1 0.2s;}.video-item.jsx-327649679{height:16vh;padding:0;cursor:pointer;background:rgba(0,0,0,0.8);margin-bottom:4rem;}@-webkit-keyframes text-jsx-327649679{0%{-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}@keyframes text-jsx-327649679{0%{-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}.video.jsx-327649679{background:#eff2f7;background:linear-gradient(45deg,white,#fbfcfe);background:radial-gradient(#f4f7fc,white);margin-top:4rem;}@media (max-width:960px){.video-root.jsx-327649679{margin:4rem;}}@media (max-width:480px){.video-item.jsx-327649679{height:auto;}img.jsx-327649679{width:100%;height:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcaG9tZVxcdmlkZW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0VTLEFBRzZDLEFBSXBCLEFBS0UsQUFHSCxBQUtJLEFBS1csQUFJZCxBQVNpQixBQUlILEFBTVAsQUFPTCxBQU1BLEFBR0QsV0FoREMsQUFpREEsQ0F6REUsQUFzQk4sQUEwQlYsQUFNQSxFQWpERixDQVFrQixJQTRCa0MsR0FsQm5DLENBbUNmLEVBakRnQixNQUtTLENBbEJULEtBNEJjLFdBM0JoQyxJQUltQixRQWlCVSxJQU9SLENBZnJCLEVBZ0M2QyxFQXhDN0MsY0F3QkEsQ0FTYyxTQUpBLENBS1osU0FKQSxNQVdnQixRQTVCbEIsUUE2QkEseUJBekJBIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcaG9tZVxcdmlkZW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFZpZGVvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBvc2l0aW9uRXZlbnQgPSAoY291bnQsIGRvbSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZG9tLmNoaWxkcmVuWzBdLnN0eWxlLm1hcmdpbkxlZnQgPSBjb3VudCArIFwicHhcIjtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgbGVhdmVFdiA9IChlKSA9PiB7XHJcbiAgICBwb3NpdGlvbkV2ZW50KDAsIGUuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuICBjb25zdCBlbnRlckV2ID0gKGUpID0+IHtcclxuICAgIGxldCBkb20gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBsZXQgY291bnQgPSBkb20uY2xpZW50V2lkdGggLSBkb20uY2hpbGRyZW5bMF0ub2Zmc2V0V2lkdGg7XHJcbiAgICBwb3NpdGlvbkV2ZW50KGNvdW50LCBkb20pO1xyXG4gIH07XHJcbiAgY29uc3Qgc2Nyb2xsRXYgPSAoKSA9PiB7XHJcbiAgICAvL+a7muWKqOWKqOeUu+S6i+S7tlxyXG4gICAgbGV0IGRvbSA9IHZpZGVvUmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAoZG9tKSB7XHJcbiAgICAgIGlmIChkb20uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDwgd2luZG93LmlubmVySGVpZ2h0IC0gNjAwKSB7XHJcbiAgICAgICAgbGV0IGRvbUxpc3QgPSBkb20ucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKTtcclxuICAgICAgICBBcnJheS5mcm9tKGRvbUxpc3QpLm1hcCgoZSkgPT4gZS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsRXYpO1xyXG4gIH0sIFtdKTtcclxuICBsZXQgdmlkZW9SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdmlkZW8ganVzdGlmeS1jb250ZW50LWNlbnRlciBteC0wXCIgcmVmPXt2aWRlb1JlZn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMCBjb2wteGwtOCBteS00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdmlkZW8tY3RuXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wteGwtNCB0ZXh0LXhsLWxlZnQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGgyPuezu+WIl+inhumikTwvaDI+XHJcblxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXktNFwiPueCueWHu+aCqOaEn+WFtOi2o+eahO+8gSjmmoLml7bmsqHlhoXlrrkpPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXhsLTggbXQtNSBtdC14bC0wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHZpZGVvLXJvb3QganVzdGlmeS1jb250ZW50LWNlbnRlciBteS14bC00IFwiPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC01IHZpZGVvLWl0ZW0gc2hhZG93LXNtIG14LTRcIlxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtsZWF2ZUV2fVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtlbnRlckV2fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXBwLWxvZ28vYXIuanBnXCIgYWx0PVwiYWVcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC01IHZpZGVvLWl0ZW0gc2hhZG93LXNtIG14LTQgXCJcclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17bGVhdmVFdn1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17ZW50ZXJFdn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFwcC1sb2dvL3ByLmpwZ1wiIGFsdD1cInByXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHZpZGVvLXJvb3QganVzdGlmeS1jb250ZW50LWNlbnRlciBteS14bC00IFwiPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC01IHZpZGVvLWl0ZW0gc2hhZG93LXNtIG14LTQgXCJcclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17bGVhdmVFdn1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17ZW50ZXJFdn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFwcC1sb2dvL3BzLmpwZ1wiIGFsdD1cInBzXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtNSB2aWRlby1pdGVtIHNoYWRvdy1zbSBteC00IFwiXHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2xlYXZlRXZ9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2VudGVyRXZ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhcHAtbG9nby9hbGwuanBnXCIgYWx0PVwiYWxsXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC52aWRlby1jdG4ge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgICAgcGFkZGluZzogMjByZW0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbWcuc2hvdyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBob3RvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE2dmg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAxLjVzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogdGV4dCAwLjZzIDEgMHM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IHRleHQgMC42cyAxIDAuMnM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudmlkZW8taXRlbSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTZ2aDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGtleWZyYW1lcyB0ZXh0IHtcclxuICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnZpZGVvIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VmZjJmNztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB3aGl0ZSwgI2ZiZmNmZSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjZjRmN2ZjLCB3aGl0ZSk7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICAgICAgLnZpZGVvLXJvb3Qge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogNHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICAgICAgICAudmlkZW8taXRlbSB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWRlbztcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\home\\\\video.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ })

})
//# sourceMappingURL=index.js.55eed85bd06156bf2141.hot-update.js.map