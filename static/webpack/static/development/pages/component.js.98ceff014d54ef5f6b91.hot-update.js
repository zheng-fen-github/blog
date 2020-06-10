webpackHotUpdate("static\\development\\pages\\component.js",{

/***/ "./component/component/content.js":
/*!****************************************!*\
  !*** ./component/component/content.js ***!
  \****************************************/
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
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./component/component/code.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pagination */ "./component/component/Pagination.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _public_anima__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/anima */ "./component/public/anima.js");


var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\component\\content.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var Content = function Content(_ref) {
  var type = _ref.type,
      action = _ref.action,
      data = _ref.data,
      loading = _ref.loading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      code = _useState[0],
      setCode = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      shareS = _useState2[0],
      setShareS = _useState2[1];

  var getphoto = function getphoto() {
    var QURL, get, message;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getphoto$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            action({
              type: "LADING_CONTENN",
              loading: true
            });
            action({
              type: "ALL_CONTENT",
              data: []
            });
            QURL = "http://localhost:4040/" + "getComponent/get/" + type;
            _context.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(QURL));

          case 6:
            get = _context.sent;

            if (!get.ok) {
              _context.next = 14;
              break;
            }

            _context.next = 10;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(get.json());

          case 10:
            message = _context.sent;
            console.log(message);
            action({
              type: "ALL_CONTENT",
              data: message
            }); // action({
            //   type: "GET_TYPE",
            //   list: ,
            // });

            action({
              type: "LADING_CONTENN",
              loading: false
            });

          case 14:
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 16]], Promise);
  };

  var arrayResult = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(data.filter(function (e) {
    return !e.filter;
  }), [data]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getphoto();
  }, [type]);

  var shareEvent = function shareEvent(boob) {
    setCode(false);

    if (boob) {
      setShareS(true);
      setTimeout(function () {
        return setShareS(false);
      }, 1500);
    }
  };

  return __jsx("div", {
    className: "jsx-5814691" + " " + "row code-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, data.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-5814691" + " " + "col-12 code-count",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "jsx-5814691",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "\u663E\u793A ", arrayResult.length, " \u4E2A\u7EC4\u4EF6")), __jsx(_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: type,
    codeList: arrayResult,
    setCode: setCode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  })), data.length === 0 && !loading && __jsx("h1", {
    className: "jsx-5814691",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 41
    }
  }, " 0 \u7EC4\u4EF6 "), loading && __jsx("div", {
    className: "jsx-5814691" + " " + "col-12 my-5 d-flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(_public_anima__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "#fdd303",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  })), code && __jsx(_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: code,
    clear: shareEvent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 16
    }
  }), shareS && __jsx("div", {
    className: "jsx-5814691" + " " + "sussWindow d-flex align-items-center justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-5814691",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, "\u590D\u5236\u6210\u529F\u3002")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "5814691",
    __self: _this
  }, "h3.jsx-5814691{margin:2rem 1rem;font-size:2rem;}.code-count.jsx-5814691{margin-bottom:10rem;}.sussWindow.jsx-5814691{position:fixed;left:50%;top:50%;width:160px;height:160px;background:rgba(0,0,0,0.8);color:white;border-radius:10px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcY29tcG9uZW50XFxjb250ZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGUyxBQUc4QixBQUlHLEFBR0wsZUFDTixFQVBNLEdBSWpCLElBSVUsUUFQVixBQVFjLFlBQ0MsYUFDaUIsMkJBQ2xCLFlBQ08sbUJBQ2EseUdBQ2hCLGdCQUNsQiIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxjb21wb25lbnRcXGNvbXBvbmVudFxcY29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29kZSBmcm9tIFwiLi9jb2RlXCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuL1BhZ2luYXRpb25cIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQW5pbWEgZnJvbSBcIi4uL3B1YmxpYy9hbmltYVwiO1xyXG5jb25zdCBDb250ZW50ID0gKHsgdHlwZSwgYWN0aW9uLCBkYXRhLCBsb2FkaW5nIH0pID0+IHtcclxuICBjb25zdCBbY29kZSwgc2V0Q29kZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc2hhcmVTLCBzZXRTaGFyZVNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGdldHBob3RvID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYWN0aW9uKHtcclxuICAgICAgICB0eXBlOiBcIkxBRElOR19DT05URU5OXCIsXHJcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICAgIGFjdGlvbih7XHJcbiAgICAgICAgdHlwZTogXCJBTExfQ09OVEVOVFwiLFxyXG4gICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgUVVSTCA9IHByb2Nlc3MuZW52LkRBVEFfVVJMICsgXCJnZXRDb21wb25lbnQvZ2V0L1wiICsgdHlwZTtcclxuICAgICAgbGV0IGdldCA9IGF3YWl0IGZldGNoKFFVUkwpO1xyXG4gICAgICBpZiAoZ2V0Lm9rKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBhd2FpdCBnZXQuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgICAgIGFjdGlvbih7XHJcbiAgICAgICAgICB0eXBlOiBcIkFMTF9DT05URU5UXCIsXHJcbiAgICAgICAgICBkYXRhOiBtZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGFjdGlvbih7XHJcbiAgICAgICAgLy8gICB0eXBlOiBcIkdFVF9UWVBFXCIsXHJcbiAgICAgICAgLy8gICBsaXN0OiAsXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgYWN0aW9uKHtcclxuICAgICAgICAgIHR5cGU6IFwiTEFESU5HX0NPTlRFTk5cIixcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGFycmF5UmVzdWx0ID0gdXNlQ2FsbGJhY2soXHJcbiAgICBkYXRhLmZpbHRlcigoZSkgPT4gIWUuZmlsdGVyKSxcclxuICAgIFtkYXRhXVxyXG4gICk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldHBob3RvKCk7XHJcbiAgfSwgW3R5cGVdKTtcclxuICBjb25zdCBzaGFyZUV2ZW50ID0gKGJvb2IpID0+IHtcclxuICAgIHNldENvZGUoZmFsc2UpO1xyXG4gICAgaWYgKGJvb2IpIHtcclxuICAgICAgc2V0U2hhcmVTKHRydWUpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFNoYXJlUyhmYWxzZSksIDE1MDApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvZGUtY29udGVudFwiPlxyXG4gICAgICB7ZGF0YS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29kZS1jb3VudFwiPlxyXG4gICAgICAgICAgICA8aDE+5pi+56S6IHthcnJheVJlc3VsdC5sZW5ndGh9IOS4que7hOS7tjwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxQYWdpbmF0aW9uIHR5cGU9e3R5cGV9IGNvZGVMaXN0PXthcnJheVJlc3VsdH0gc2V0Q29kZT17c2V0Q29kZX0gLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtkYXRhLmxlbmd0aCA9PT0gMCAmJiAhbG9hZGluZyAmJiA8aDE+IDAg57uE5Lu2IDwvaDE+fVxyXG5cclxuICAgICAge2xvYWRpbmcgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG15LTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxBbmltYSBjb2xvcj1cIiNmZGQzMDNcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7Y29kZSAmJiA8Q29kZSBkYXRhPXtjb2RlfSBjbGVhcj17c2hhcmVFdmVudH0gLz59XHJcbiAgICAgIHtzaGFyZVMgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Vzc1dpbmRvdyBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMj7lpI3liLbmiJDlip/jgII8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBtYXJnaW46IDJyZW0gMXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvZGUtY291bnQge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdXNzV2luZG93IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuY29uc3Qgc3RhdGVFdmVudCA9IChzdGF0ZSkgPT4gKHtcclxuICBkYXRhOiBzdGF0ZS5Db250ZW50UmVkdWNlcixcclxuICBsb2FkaW5nOiBzdGF0ZS5UeXBlUmVkdWNlci5sb2FkaW5nLFxyXG59KTtcclxuY29uc3QgZGlzcGF0Y2ggPSAoZGlzcGF0Y2gpID0+ICh7IGFjdGlvbjogZGlzcGF0Y2ggfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlRXZlbnQsIGRpc3BhdGNoKShDb250ZW50KTtcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\component\\\\content.js */"));
};

var stateEvent = function stateEvent(state) {
  return {
    data: state.ContentReducer,
    loading: state.TypeReducer.loading
  };
};

var dispatch = function dispatch(_dispatch) {
  return {
    action: _dispatch
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(stateEvent, dispatch)(Content));

/***/ })

})
//# sourceMappingURL=component.js.98ceff014d54ef5f6b91.hot-update.js.map