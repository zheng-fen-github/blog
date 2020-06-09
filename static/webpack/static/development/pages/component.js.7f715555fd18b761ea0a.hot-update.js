webpackHotUpdate("static\\development\\pages\\component.js",{

/***/ "./component/component/Sidebar.js":
/*!****************************************!*\
  !*** ./component/component/Sidebar.js ***!
  \****************************************/
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
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\component\\Sidebar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Sidebar = function Sidebar(_ref) {
  var list = _ref.list,
      action = _ref.action;

  var filterEvent = function filterEvent(value) {
    action({
      type: "FILTER_CONTENT",
      filterType: value
    });
  };

  var search = function search(e) {
    var value = e.target.previousElementSibling.value;

    if (value === "" || value === " ") {
      action({
        type: "SHOW_CONTENT",
        title: value
      });
    }

    action({
      type: "SEACTH_CONTENT",
      title: value
    });
  };

  return __jsx("div", {
    className: "jsx-2383047095" + " " + "row sidebar shadow justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2383047095" + " " + "col-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    name: "search",
    placeholder: "Search",
    id: "search",
    className: "jsx-2383047095" + " " + "w-100 p-2 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx("i", {
    onClick: search,
    className: "jsx-2383047095" + " " + "iconfont icon-search",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-2383047095" + " " + " col-10 col-xs-12 mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2383047095" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, list.map(function (e, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-2383047095" + " " + "col-auto col-xs-10 my-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-2383047095" + " " + "row align-items-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }
    }, __jsx("button", {
      onClick: function onClick() {
        return filterEvent(e);
      },
      className: "jsx-2383047095",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }, __jsx("h3", {
      className: "jsx-2383047095",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 19
      }
    }, e))));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2383047095",
    __self: _this
  }, ".sidebar.jsx-2383047095{padding:8rem 1rem;background:white;border-radius:10px;position:-webkit-sticky;position:sticky;top:200px;-webkit-transform:translateY(-200px);-ms-transform:translateY(-200px);transform:translateY(-200px);z-index:1000;}@media (max-width:1200px){.sidebar.jsx-2383047095{-webkit-transform:translateY(-100px);-ms-transform:translateY(-100px);transform:translateY(-100px);padding:8rem 1rem;top:100px;}}i.jsx-2383047095{position:absolute;left:12%;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);font-size:3rem;color:#b1b9be;cursor:pointer;z-index:1000;}i.jsx-2383047095:hover{color:#fdd303;}.col-10.jsx-2383047095>.row.jsx-2383047095{padding-left:20px;z-index:1000;}input[name=\"search\"].jsx-2383047095{height:6vh;font-size:2rem;font-weight:600;border-radius:2vh;border:solid #e7eaec 2px;z-index:1000;}button.jsx-2383047095{padding:0.5rem 1.5rem;border:#e7eaec solid 2px;border-radius:0.4rem;margin:0 2rem;background:#ffffff;z-index:1000;}button.jsx-2383047095:hover{background:#fdd303;border-color:#fdd303;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcY29tcG9uZW50XFxTaWRlYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEUyxBQUcrQixBQVVhLEFBTWIsQUFVSixBQUdJLEFBSVAsQUFTVyxBQVFILFdBaEJKLEdBUGpCLElBMUJtQixBQWdCUixBQWFJLENBcUJRLEdBUkksSUFSVCxDQWpCUixJQWFWLElBN0JxQixBQWlCUSxLQWlDZixFQWhCTSxLQVFHLEtBU3ZCLEVBbERrQixNQWtDUyxRQVFYLGNBQ0ssR0FSTixTQWxDSCxJQW1DWixDQTVCc0IsRUFvQ1AsR0ExQ2dCLFVBMkMvQixHQXBDYyxVQUNaLENBT2UsZUFDRCxjQUNDLGVBQ0YsYUFDZixrQkFsQmUsYUFDZiIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxjb21wb25lbnRcXGNvbXBvbmVudFxcU2lkZWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuY29uc3QgU2lkZWJhciA9ICh7IGxpc3QsIGFjdGlvbiB9KSA9PiB7XHJcbiAgY29uc3QgZmlsdGVyRXZlbnQgPSAodmFsdWUpID0+IHtcclxuICAgIGFjdGlvbih7XHJcbiAgICAgIHR5cGU6IFwiRklMVEVSX0NPTlRFTlRcIixcclxuICAgICAgZmlsdGVyVHlwZTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IHNlYXJjaCA9IChlKSA9PiB7XHJcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnZhbHVlO1xyXG4gICAgaWYgKHZhbHVlID09PSBcIlwiIHx8IHZhbHVlID09PSBcIiBcIikge1xyXG4gICAgICBhY3Rpb24oe1xyXG4gICAgICAgIHR5cGU6IFwiU0hPV19DT05URU5UXCIsXHJcbiAgICAgICAgdGl0bGU6IHZhbHVlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGFjdGlvbih7XHJcbiAgICAgIHR5cGU6IFwiU0VBQ1RIX0NPTlRFTlRcIixcclxuICAgICAgdGl0bGU6IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc2lkZWJhciBzaGFkb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMFwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICBpZD1cInNlYXJjaFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBwLTIgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbi1zZWFyY2hcIiBvbkNsaWNrPXtzZWFyY2h9PjwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNvbC0xMCBjb2wteHMtMTIgbXQtNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICB7bGlzdC5tYXAoKGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gY29sLXhzLTEwIG15LTRcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZmlsdGVyRXZlbnQoZSl9PlxyXG4gICAgICAgICAgICAgICAgICA8aDM+e2V9PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLnNpZGViYXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cmVtIDFyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICB0b3A6IDIwMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMHB4KTtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgLnNpZGViYXIge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhyZW0gMXJlbTtcclxuICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAxMiU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgICAgY29sb3I6ICNiMWI5YmU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGk6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZkZDMwMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb2wtMTAgPiAucm93IHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXRbbmFtZT1cInNlYXJjaFwiXSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNnZoO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJ2aDtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjZTdlYWVjIDJweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xyXG4gICAgICAgICAgICBib3JkZXI6ICNlN2VhZWMgc29saWQgMnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAycmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZkZDMwMztcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmRkMzAzO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IHN0YXRlID0gKHN0b3JlKSA9PiAoeyBsaXN0OiBzdG9yZS5UeXBlUmVkdWNlci5saXN0IH0pO1xyXG5jb25zdCBkaXNwYXRjaCA9IChkaXNwYXRjaCkgPT4gKHsgYWN0aW9uOiBkaXNwYXRjaCB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUsIGRpc3BhdGNoKShTaWRlYmFyKTtcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\component\\\\Sidebar.js */"));
};

var state = function state(store) {
  return {
    list: store.TypeReducer.list
  };
};

var dispatch = function dispatch(_dispatch) {
  return {
    action: _dispatch
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state, dispatch)(Sidebar));

/***/ })

})
//# sourceMappingURL=component.js.7f715555fd18b761ea0a.hot-update.js.map