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
    className: "jsx-2035538086" + " " + "row sidebar shadow justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2035538086" + " " + "col-10",
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
    className: "jsx-2035538086" + " " + "w-100 p-2 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx("i", {
    onClick: search,
    className: "jsx-2035538086" + " " + "iconfont icon-search",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-2035538086" + " " + " col-10 col-xs-12 mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2035538086" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, list.map(function (e, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-2035538086" + " " + "col-auto col-xs-10 my-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-2035538086" + " " + "row align-items-center",
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
      className: "jsx-2035538086",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }, __jsx("h3", {
      className: "jsx-2035538086",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 19
      }
    }, e))));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2035538086",
    __self: _this
  }, ".sidebar.jsx-2035538086{padding:8rem 1rem;background:white;border-radius:10px;position:-webkit-sticky;position:sticky;top:200px;-webkit-transform:translateY(-200px);-ms-transform:translateY(-200px);transform:translateY(-200px);z-index:1000;}@media (max-width:1200px){.sidebar.jsx-2035538086{-webkit-transform:translateY(-100px);-ms-transform:translateY(-100px);transform:translateY(-100px);padding:8rem 1rem;top:100px;}}i.jsx-2035538086{position:absolute;left:12%;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);font-size:3rem;color:#b1b9be;cursor:pointer;}i.jsx-2035538086:hover{color:#fdd303;}.col-10.jsx-2035538086>.row.jsx-2035538086{padding-left:20px;}input[name=\"search\"].jsx-2035538086{height:6vh;font-size:2rem;font-weight:600;border-radius:2vh;border:solid #e7eaec 2px;}button.jsx-2035538086{padding:0.5rem 1.5rem;border:#e7eaec solid 2px;border-radius:0.4rem;margin:0 2rem;background:#ffffff;}button.jsx-2035538086:hover{background:#fdd303;border-color:#fdd303;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcY29tcG9uZW50XFxTaWRlYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEUyxBQUcrQixBQVVhLEFBTWIsQUFTSixBQUdJLEFBR1AsQUFRVyxBQU9ILFdBZEosR0FOakIsSUF6Qm1CLEFBZ0JSLEFBWVgsQ0FrQnVCLEdBUEksSUFQVCxDQWZSLFFBaEJXLEFBaUJRLEtBNkJmLEVBZE0sS0FPRyxLQVF2QixFQTlDa0IsTUFnQ1MsUUFPWCxjQUNLLEdBUHJCLFNBaENZLEtBT1UsRUFpQ3RCLEdBdkMrQixhQU9qQixVQUNaLENBT2UsZUFDRCxjQUNDLGVBQ2pCLCtCQWpCZSxhQUNmIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcY29tcG9uZW50XFxTaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKHsgbGlzdCwgYWN0aW9uIH0pID0+IHtcclxuICBjb25zdCBmaWx0ZXJFdmVudCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgYWN0aW9uKHtcclxuICAgICAgdHlwZTogXCJGSUxURVJfQ09OVEVOVFwiLFxyXG4gICAgICBmaWx0ZXJUeXBlOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3Qgc2VhcmNoID0gKGUpID0+IHtcclxuICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudmFsdWU7XHJcbiAgICBpZiAodmFsdWUgPT09IFwiXCIgfHwgdmFsdWUgPT09IFwiIFwiKSB7XHJcbiAgICAgIGFjdGlvbih7XHJcbiAgICAgICAgdHlwZTogXCJTSE9XX0NPTlRFTlRcIixcclxuICAgICAgICB0aXRsZTogdmFsdWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYWN0aW9uKHtcclxuICAgICAgdHlwZTogXCJTRUFDVEhfQ09OVEVOVFwiLFxyXG4gICAgICB0aXRsZTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzaWRlYmFyIHNoYWRvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgIGlkPVwic2VhcmNoXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIHAtMiB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLXNlYXJjaFwiIG9uQ2xpY2s9e3NlYXJjaH0+PC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY29sLTEwIGNvbC14cy0xMiBtdC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHtsaXN0Lm1hcCgoZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBjb2wteHMtMTAgbXktNFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBmaWx0ZXJFdmVudChlKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz57ZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhyZW0gMXJlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgIHRvcDogMjAwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwcHgpO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogOHJlbSAxcmVtO1xyXG4gICAgICAgICAgICAgIHRvcDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEyJTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogI2IxYjliZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmRkMzAzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbC0xMCA+IC5yb3cge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbnB1dFtuYW1lPVwic2VhcmNoXCJdIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2dmg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnZoO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkICNlN2VhZWMgMnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XHJcbiAgICAgICAgICAgIGJvcmRlcjogI2U3ZWFlYyBzb2xpZCAycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDJyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmRkMzAzO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZGQzMDM7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuY29uc3Qgc3RhdGUgPSAoc3RvcmUpID0+ICh7IGxpc3Q6IHN0b3JlLlR5cGVSZWR1Y2VyLmxpc3QgfSk7XHJcbmNvbnN0IGRpc3BhdGNoID0gKGRpc3BhdGNoKSA9PiAoeyBhY3Rpb246IGRpc3BhdGNoIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSwgZGlzcGF0Y2gpKFNpZGViYXIpO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\component\\\\Sidebar.js */"));
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
//# sourceMappingURL=component.js.b01d780d3eac93dae878.hot-update.js.map