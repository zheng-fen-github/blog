webpackHotUpdate("static\\development\\pages\\component.js",{

/***/ "./component/component/root.js":
/*!*************************************!*\
  !*** ./component/component/root.js ***!
  \*************************************/
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
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content */ "./component/component/content.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar */ "./component/component/Sidebar.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\component\\root.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Root = function Root(_ref) {
  var action = _ref.action,
      contentType = _ref.contentType;
  var value = contentType === "none" ? "React" : contentType;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(value),
      type = _useState[0],
      setType = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getphoto(value);
  }, []);

  var selectType = function selectType(e) {
    var dom = e.target.closest("h3");

    if (dom) {
      setType(function () {
        return dom.textContent;
      });
      getphoto(dom.textContent);
    }
  };

  var getphoto = function getphoto(typeV) {
    var QURL, get, message;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getphoto$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            QURL = "http://localhost:4040/" + "getComponentList/all/" + typeV;
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(QURL));

          case 4:
            get = _context.sent;

            if (!get.ok) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(get.json());

          case 8:
            message = _context.sent;
            action({
              type: "GET_TYPE",
              list: message.typeList
            });

          case 10:
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 12]], Promise);
  };

  var scrollTop = function scrollTop() {
    var navDom = document.querySelector(".component-nav");
    navDom.scrollIntoView(true);
  };

  return __jsx("div", {
    className: "jsx-3641391907" + " " + "row root",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3641391907" + " " + "col-10 offset-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3641391907" + " " + "row p-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3641391907" + " " + "offset-0 offset-xl-3 col",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("ul", {
    onClick: selectType,
    className: "jsx-3641391907" + " " + "d-flex component-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-3641391907" + " " + ((type === "React" ? "seled" : "") || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-3641391907",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, "React")), __jsx("li", {
    className: "jsx-3641391907" + " " + ((type === "JS" ? "seled" : "") || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-3641391907",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, "JS")), __jsx("li", {
    className: "jsx-3641391907" + " " + ((type === "CSS" ? "seled" : "") || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-3641391907",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "CSS")), __jsx("li", {
    className: "jsx-3641391907" + " " + ((type === "Node" ? "seled" : "") || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-3641391907",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, "Node"))))), __jsx("div", {
    onClick: scrollTop,
    className: "jsx-3641391907" + " " + "goTop position-fixed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "jsx-3641391907" + " " + "iconfont icon-arrow-forward",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-3641391907" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3641391907" + " " + "col-12 col-xl-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-3641391907" + " " + "offset-0 offset-xl-1 col-12 col-xl-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx(_content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3641391907",
    __self: _this
  }, ".root.jsx-3641391907{margin:0;margin-bottom:20rem;z-index:1001;}.goTop.jsx-3641391907{top:50%;right:10px;-webkit-transform:rotate(-90deg) translateZ(0);-ms-transform:rotate(-90deg) translateZ(0);transform:rotate(-90deg) translateZ(0);background:black;color:white;width:4rem;height:4rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:6px;overflow:hidden;cursor:pointer;}.goTop.jsx-3641391907:hover{background:white;color:black;}.goTop.jsx-3641391907 i.jsx-3641391907{font-size:3rem;}ul.jsx-3641391907{list-style:none;background:black;color:white;margin-bottom:10rem;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);position:-webkit-sticky;position:sticky;top:200px;z-index:1001;}li.jsx-3641391907{-webkit-flex:1;-ms-flex:1;flex:1;cursor:pointer;-webkit-transition:0.4s;transition:0.4s;z-index:1001;}li.seled.jsx-3641391907{opacity:0.5;z-index:1001;}li.jsx-3641391907:hover{opacity:0.5;-webkit-transform:translateY(-25%);-ms-transform:translateY(-25%);transform:translateY(-25%);}h3.jsx-3641391907{padding:2rem;font-size:2.5rem;text-align:center;z-index:1001;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcY29tcG9uZW50XFxyb290LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdFUyxBQUdzQixBQUtELEFBZVMsQUFJRixBQUdDLEFBVVQsQUFNSyxBQUlBLEFBSUMsUUE3Q0YsQ0FMUyxHQTJDUCxBQUljLENBSVYsRUEzQm5CLENBR21CLENBUEwsRUFkMkIsTUFzQ3pDLElBM0NlLEFBb0JmLENBK0JvQixHQXhCTixBQVNHLFNBbkNqQixHQTJCc0IsR0FTSixBQWVILGFBQ2YsSUF4QjZCLHVCQVNkLGFBQ2YsSUFRQSwyQ0F6Q21CLFVBd0JELE9BdkJKLFlBQ0QsV0FDQyxVQXNCRixFQXJCRyxRQXNCQSxhQUNmLHFEQXRCeUIsbUdBQ0osNkZBQ0Qsa0JBQ0YsZ0JBQ0QsZUFDakIiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxjb21wb25lbnRcXHJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb250ZW50IGZyb20gXCIuL2NvbnRlbnRcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vU2lkZWJhclwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5jb25zdCBSb290ID0gKHsgYWN0aW9uLCBjb250ZW50VHlwZSB9KSA9PiB7XHJcbiAgbGV0IHZhbHVlID0gY29udGVudFR5cGUgPT09IFwibm9uZVwiID8gXCJSZWFjdFwiIDogY29udGVudFR5cGU7XHJcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUodmFsdWUpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRwaG90byh2YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHNlbGVjdFR5cGUgPSAoZSkgPT4ge1xyXG4gICAgbGV0IGRvbSA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJoM1wiKTtcclxuICAgIGlmIChkb20pIHtcclxuICAgICAgc2V0VHlwZSgoKSA9PiBkb20udGV4dENvbnRlbnQpO1xyXG4gICAgICBnZXRwaG90byhkb20udGV4dENvbnRlbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgZ2V0cGhvdG8gPSBhc3luYyAodHlwZVYpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IFFVUkwgPSBwcm9jZXNzLmVudi5EQVRBX1VSTCArIFwiZ2V0Q29tcG9uZW50TGlzdC9hbGwvXCIgKyB0eXBlVjtcclxuICAgICAgbGV0IGdldCA9IGF3YWl0IGZldGNoKFFVUkwpO1xyXG4gICAgICBpZiAoZ2V0Lm9rKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBhd2FpdCBnZXQuanNvbigpO1xyXG4gICAgICAgIGFjdGlvbih7XHJcbiAgICAgICAgICB0eXBlOiBcIkdFVF9UWVBFXCIsXHJcbiAgICAgICAgICBsaXN0OiBtZXNzYWdlLnR5cGVMaXN0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHNjcm9sbFRvcCA9ICgpID0+IHtcclxuICAgIGxldCBuYXZEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXBvbmVudC1uYXZcIik7XHJcbiAgICBuYXZEb20uc2Nyb2xsSW50b1ZpZXcodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgb2Zmc2V0LTFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwLTBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2Zmc2V0LTAgb2Zmc2V0LXhsLTMgY29sXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWZsZXggY29tcG9uZW50LW5hdlwiIG9uQ2xpY2s9e3NlbGVjdFR5cGV9PlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3R5cGUgPT09IFwiUmVhY3RcIiA/IFwic2VsZWRcIiA6IFwiXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGgzPlJlYWN0PC9oMz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3R5cGUgPT09IFwiSlNcIiA/IFwic2VsZWRcIiA6IFwiXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGgzPkpTPC9oMz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3R5cGUgPT09IFwiQ1NTXCIgPyBcInNlbGVkXCIgOiBcIlwifT5cclxuICAgICAgICAgICAgICAgIDxoMz5DU1M8L2gzPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dHlwZSA9PT0gXCJOb2RlXCIgPyBcInNlbGVkXCIgOiBcIlwifT5cclxuICAgICAgICAgICAgICAgIDxoMz5Ob2RlPC9oMz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb1RvcCBwb3NpdGlvbi1maXhlZFwiIG9uQ2xpY2s9e3Njcm9sbFRvcH0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLWFycm93LWZvcndhcmRcIj48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC14bC0zXCI+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2Zmc2V0LTAgb2Zmc2V0LXhsLTEgY29sLTEyIGNvbC14bC04XCI+XHJcbiAgICAgICAgICAgIDxDb250ZW50IHR5cGU9e3ZhbHVlfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjByZW07XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZ29Ub3Age1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDRyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmdvVG9wOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5nb1RvcCBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICB0b3A6IDIwMHB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsaS5zZWxlZCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxpOmhvdmVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1JSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IHN0YXRlID0gKHN0b3JlKSA9PiAoeyBkYXRhOiBzdG9yZSB9KTtcclxuY29uc3QgZGlzcGF0Y2ggPSAoZGlzcGF0Y2gpID0+ICh7IGFjdGlvbjogZGlzcGF0Y2ggfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlLCBkaXNwYXRjaCkoUm9vdCk7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\component\\\\root.js */"));
};

var state = function state(store) {
  return {
    data: store
  };
};

var dispatch = function dispatch(_dispatch) {
  return {
    action: _dispatch
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(state, dispatch)(Root));

/***/ })

})
//# sourceMappingURL=component.js.71b89d14819129cbcbd8.hot-update.js.map