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
  console.log(value);

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
            console.log(typeV);
            _context.prev = 1;
            QURL = "http://localhost:4040/" + "getComponentList/all/" + typeV;
            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(QURL));

          case 5:
            get = _context.sent;

            if (!get.ok) {
              _context.next = 12;
              break;
            }

            _context.next = 9;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(get.json());

          case 9:
            message = _context.sent;
            console.log(message);
            action({
              type: "GET_TYPE",
              list: message.typeList
            });

          case 12:
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 14]], Promise);
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
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3641391907" + " " + "col-10 offset-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3641391907" + " " + "row p-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3641391907" + " " + "offset-0 offset-xl-3 col",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("ul", {
    onClick: selectType,
    className: "jsx-3641391907" + " " + "d-flex component-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-3641391907" + " " + ((type === "React" ? "seled" : "") || ""),
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
  }, "React")), __jsx("li", {
    className: "jsx-3641391907" + " " + ((type === "JS" ? "seled" : "") || ""),
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
  }, "JS")), __jsx("li", {
    className: "jsx-3641391907" + " " + ((type === "CSS" ? "seled" : "") || ""),
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
  }, "CSS")), __jsx("li", {
    className: "jsx-3641391907" + " " + ((type === "Node" ? "seled" : "") || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-3641391907",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, "Node"))))), __jsx("div", {
    onClick: scrollTop,
    className: "jsx-3641391907" + " " + "goTop position-fixed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "jsx-3641391907" + " " + "iconfont icon-arrow-forward",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-3641391907" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3641391907" + " " + "col-12 col-xl-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-3641391907" + " " + "offset-0 offset-xl-1 col-12 col-xl-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx(_content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3641391907",
    __self: _this
  }, ".root.jsx-3641391907{margin:0;margin-bottom:20rem;z-index:1001;}.goTop.jsx-3641391907{top:50%;right:10px;-webkit-transform:rotate(-90deg) translateZ(0);-ms-transform:rotate(-90deg) translateZ(0);transform:rotate(-90deg) translateZ(0);background:black;color:white;width:4rem;height:4rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:6px;overflow:hidden;cursor:pointer;}.goTop.jsx-3641391907:hover{background:white;color:black;}.goTop.jsx-3641391907 i.jsx-3641391907{font-size:3rem;}ul.jsx-3641391907{list-style:none;background:black;color:white;margin-bottom:10rem;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);position:-webkit-sticky;position:sticky;top:200px;z-index:1001;}li.jsx-3641391907{-webkit-flex:1;-ms-flex:1;flex:1;cursor:pointer;-webkit-transition:0.4s;transition:0.4s;z-index:1001;}li.seled.jsx-3641391907{opacity:0.5;z-index:1001;}li.jsx-3641391907:hover{opacity:0.5;-webkit-transform:translateY(-25%);-ms-transform:translateY(-25%);transform:translateY(-25%);}h3.jsx-3641391907{padding:2rem;font-size:2.5rem;text-align:center;z-index:1001;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcY29tcG9uZW50XFxyb290LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFUyxBQUdzQixBQUtELEFBZVMsQUFJRixBQUdDLEFBVVQsQUFNSyxBQUlBLEFBSUMsUUE3Q0YsQ0FMUyxHQTJDUCxBQUljLENBSVYsRUEzQm5CLENBR21CLENBUEwsRUFkMkIsTUFzQ3pDLElBM0NlLEFBb0JmLENBK0JvQixHQXhCTixBQVNHLFNBbkNqQixHQTJCc0IsR0FTSixBQWVILGFBQ2YsSUF4QjZCLHVCQVNkLGFBQ2YsSUFRQSwyQ0F6Q21CLFVBd0JELE9BdkJKLFlBQ0QsV0FDQyxVQXNCRixFQXJCRyxRQXNCQSxhQUNmLHFEQXRCeUIsbUdBQ0osNkZBQ0Qsa0JBQ0YsZ0JBQ0QsZUFDakIiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxjb21wb25lbnRcXHJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb250ZW50IGZyb20gXCIuL2NvbnRlbnRcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vU2lkZWJhclwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5jb25zdCBSb290ID0gKHsgYWN0aW9uLCBjb250ZW50VHlwZSB9KSA9PiB7XHJcbiAgbGV0IHZhbHVlID0gY29udGVudFR5cGUgPT09IFwibm9uZVwiID8gXCJSZWFjdFwiIDogY29udGVudFR5cGU7XHJcbiAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKHZhbHVlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0cGhvdG8odmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBzZWxlY3RUeXBlID0gKGUpID0+IHtcclxuICAgIGxldCBkb20gPSBlLnRhcmdldC5jbG9zZXN0KFwiaDNcIik7XHJcbiAgICBpZiAoZG9tKSB7XHJcbiAgICAgIHNldFR5cGUoKCkgPT4gZG9tLnRleHRDb250ZW50KTtcclxuICAgICAgZ2V0cGhvdG8oZG9tLnRleHRDb250ZW50KTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGdldHBob3RvID0gYXN5bmMgKHR5cGVWKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlVik7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBRVVJMID0gcHJvY2Vzcy5lbnYuREFUQV9VUkwgKyBcImdldENvbXBvbmVudExpc3QvYWxsL1wiICsgdHlwZVY7XHJcbiAgICAgIGxldCBnZXQgPSBhd2FpdCBmZXRjaChRVVJMKTtcclxuICAgICAgaWYgKGdldC5vaykge1xyXG4gICAgICAgIGxldCBtZXNzYWdlID0gYXdhaXQgZ2V0Lmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgICAgICBhY3Rpb24oe1xyXG4gICAgICAgICAgdHlwZTogXCJHRVRfVFlQRVwiLFxyXG4gICAgICAgICAgbGlzdDogbWVzc2FnZS50eXBlTGlzdCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBzY3JvbGxUb3AgPSAoKSA9PiB7XHJcbiAgICBsZXQgbmF2RG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wb25lbnQtbmF2XCIpO1xyXG4gICAgbmF2RG9tLnNjcm9sbEludG9WaWV3KHRydWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb290XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG9mZnNldC0xXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcC0wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZnNldC0wIG9mZnNldC14bC0zIGNvbFwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1mbGV4IGNvbXBvbmVudC1uYXZcIiBvbkNsaWNrPXtzZWxlY3RUeXBlfT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0eXBlID09PSBcIlJlYWN0XCIgPyBcInNlbGVkXCIgOiBcIlwifT5cclxuICAgICAgICAgICAgICAgIDxoMz5SZWFjdDwvaDM+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0eXBlID09PSBcIkpTXCIgPyBcInNlbGVkXCIgOiBcIlwifT5cclxuICAgICAgICAgICAgICAgIDxoMz5KUzwvaDM+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0eXBlID09PSBcIkNTU1wiID8gXCJzZWxlZFwiIDogXCJcIn0+XHJcbiAgICAgICAgICAgICAgICA8aDM+Q1NTPC9oMz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3R5cGUgPT09IFwiTm9kZVwiID8gXCJzZWxlZFwiIDogXCJcIn0+XHJcbiAgICAgICAgICAgICAgICA8aDM+Tm9kZTwvaDM+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29Ub3AgcG9zaXRpb24tZml4ZWRcIiBvbkNsaWNrPXtzY3JvbGxUb3B9PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbi1hcnJvdy1mb3J3YXJkXCI+PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wteGwtM1wiPlxyXG4gICAgICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZnNldC0wIG9mZnNldC14bC0xIGNvbC0xMiBjb2wteGwtOFwiPlxyXG4gICAgICAgICAgICA8Q29udGVudCB0eXBlPXt2YWx1ZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcmVtO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmdvVG9wIHtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5nb1RvcDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZ29Ub3AgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTByZW07XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICAgICAgdG9wOiAyMDBweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGkuc2VsZWQge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsaTpob3ZlciB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNSUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5jb25zdCBzdGF0ZSA9IChzdG9yZSkgPT4gKHsgZGF0YTogc3RvcmUgfSk7XHJcbmNvbnN0IGRpc3BhdGNoID0gKGRpc3BhdGNoKSA9PiAoeyBhY3Rpb246IGRpc3BhdGNoIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSwgZGlzcGF0Y2gpKFJvb3QpO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\component\\\\root.js */"));
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
//# sourceMappingURL=component.js.83ff57da2497756b2ae7.hot-update.js.map