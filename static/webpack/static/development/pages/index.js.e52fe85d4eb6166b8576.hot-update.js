webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/home/skill.js":
/*!*********************************!*\
  !*** ./component/home/skill.js ***!
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
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\home\\skill.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Skill = function Skill() {
  var scrollEv = function scrollEv() {
    if (skillRef) {
      if (!DomList.current) return;
      var height = window.innerHeight / 2;
      var top = skillRef.getBoundingClientRect().top;

      if (top < height) {
        DomList.current.map(function (e) {
          return e.classList.remove("jin");
        });
      } else {
        DomList.current.map(function (e) {
          return e.classList.add("jin");
        });
      }
    }
  };

  var DomList = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener("scroll", scrollEv);
    DomList.current = Array.from(skillRef.querySelectorAll(".img"));
  }, []);
  var skillRef;
  return __jsx("div", {
    ref: function ref(_ref) {
      return skillRef = _ref;
    },
    className: "jsx-2423493719" + " " + "skill row justify-content-center mx-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2423493719" + " " + "col-6 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "jsx-2423493719" + " " + "text-center m-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "\u6280\u80FD")), __jsx("div", {
    className: "jsx-2423493719" + " " + "col-10 my-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2423493719" + " " + "row justify-content-center mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2423493719" + " " + "skill-photos d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-2423493719" + " " + "img jin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/kuangjia/react.png",
    alt: "",
    className: "jsx-2423493719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-2423493719" + " " + "img jin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/kuangjia/js.png",
    alt: "",
    className: "jsx-2423493719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-2423493719" + " " + "img jin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/kuangjia/vue.png",
    alt: "",
    className: "jsx-2423493719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-2423493719" + " " + "img jin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/kuangjia/html.png",
    alt: "",
    className: "jsx-2423493719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-2423493719" + " " + "img jin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/kuangjia/css.png",
    alt: "",
    className: "jsx-2423493719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-2423493719" + " " + "img jin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/kuangjia/boot.png",
    alt: "",
    className: "jsx-2423493719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-2423493719" + " " + "img jin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/kuangjia/next.png",
    alt: "",
    className: "jsx-2423493719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-2423493719" + " " + "img jin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/kuangjia/mongo.png",
    alt: "",
    className: "jsx-2423493719",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2423493719",
    __self: _this
  }, ".skill.jsx-2423493719{padding:14rem 0;}h2.jsx-2423493719{font-size:4rem;}.img.jsx-2423493719{height:100px;width:50px;margin-left:20px;-webkit-transition:0.5s;transition:0.5s;}.skill-photos.jsx-2423493719{padding-right:60px;}@media (max-width:960px){.img.jsx-2423493719{height:75px;width:37.5px;}.skill-photos.jsx-2423493719{padding-right:60px;}}@media (max-width:520px){.img.jsx-2423493719{height:40px;width:20px;}.skill-photos.jsx-2423493719{padding-right:40px;}}@media (max-width:360px){.img.jsx-2423493719{height:34px;width:17px;}.skill-photos.jsx-2423493719{padding-right:34px;}}.jin.jsx-2423493719{width:2px;}.img.jsx-2423493719:hover{z-index:2;-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}img.jsx-2423493719{height:100%;-webkit-filter:drop-shadow(0 0 2px #c1c1c2);filter:drop-shadow(0 0 2px #c1c1c2);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcaG9tZVxcc2tpbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNERTLEFBRzZCLEFBR0QsQUFHRixBQU9NLEFBSUwsQUFJTyxBQUtQLEFBSU8sQUFLUCxBQUlPLEFBSVgsQUFHQSxBQUlFLFVBTmQsQUFHdUIsRUE3Qk4sQUFTRixBQVNBLEFBZXVCLENBNUN6QixFQUhiLENBSEEsR0FhQSxBQVFFLEFBU0EsQUFTQSxJQVpBLEFBU0EsQ0E3QmlCLENBV2pCLGdCQVZnQix3Q0FDbEIsSUFzQ0EsT0FJQSIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxjb21wb25lbnRcXGhvbWVcXHNraWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU2tpbGwgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2Nyb2xsRXYgPSAoKSA9PiB7XHJcbiAgICBpZiAoc2tpbGxSZWYpIHtcclxuICAgICAgaWYgKCFEb21MaXN0LmN1cnJlbnQpIHJldHVybjtcclxuICAgICAgbGV0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XHJcbiAgICAgIGxldCB0b3AgPSBza2lsbFJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICAgIGlmICh0b3AgPCBoZWlnaHQpIHtcclxuICAgICAgICBEb21MaXN0LmN1cnJlbnQubWFwKChlKSA9PiBlLmNsYXNzTGlzdC5yZW1vdmUoXCJqaW5cIikpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIERvbUxpc3QuY3VycmVudC5tYXAoKGUpID0+IGUuY2xhc3NMaXN0LmFkZChcImppblwiKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGxldCBEb21MaXN0ID0gdXNlUmVmKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEV2KTtcclxuICAgIERvbUxpc3QuY3VycmVudCA9IEFycmF5LmZyb20oc2tpbGxSZWYucXVlcnlTZWxlY3RvckFsbChcIi5pbWdcIikpO1xyXG4gIH0sIFtdKTtcclxuICBsZXQgc2tpbGxSZWY7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwic2tpbGwgcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXgtMFwiXHJcbiAgICAgIHJlZj17KHJlZikgPT4gKHNraWxsUmVmID0gcmVmKX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbS01XCI+5oqA6IO9PC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG15LTVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtcGhvdG9zIGQtZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZyBqaW5cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9rdWFuZ2ppYS9yZWFjdC5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWcgamluXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIva3VhbmdqaWEvanMucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nIGppblwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2t1YW5namlhL3Z1ZS5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWcgamluXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIva3VhbmdqaWEvaHRtbC5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWcgamluXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIva3VhbmdqaWEvY3NzLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZyBqaW5cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9rdWFuZ2ppYS9ib290LnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZyBqaW5cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9rdWFuZ2ppYS9uZXh0LnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZyBqaW5cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9rdWFuZ2ppYS9tb25nby5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLnNraWxsIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTRyZW0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2tpbGwtcGhvdG9zIHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgICAgICAgICAuaW1nIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDM3LjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2tpbGwtcGhvdG9zIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAgICAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5za2lsbC1waG90b3Mge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgICAgICAgICAuaW1nIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNraWxsLXBob3RvcyB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmppbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaW1nOmhvdmVyIHtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAycHggI2MxYzFjMik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTa2lsbDtcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\home\\\\skill.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Skill);

/***/ })

})
//# sourceMappingURL=index.js.e52fe85d4eb6166b8576.hot-update.js.map