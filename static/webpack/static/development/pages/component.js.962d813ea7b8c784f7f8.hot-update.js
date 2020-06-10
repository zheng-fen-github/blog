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
            });
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
      lineNumber: 52,
      columnNumber: 5
    }
  }, data.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-5814691" + " " + "col-12 code-count",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "jsx-5814691",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "\u663E\u793A ", arrayResult.length, " \u4E2A\u7EC4\u4EF6")), __jsx(_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: type,
    codeList: arrayResult,
    setCode: setCode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  })), data.length === 0 && !loading && __jsx("h1", {
    className: "jsx-5814691",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 41
    }
  }, " 0 \u7EC4\u4EF6 "), loading && __jsx("div", {
    className: "jsx-5814691" + " " + "col-12 my-5 d-flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(_public_anima__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "#fdd303",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  })), code && __jsx(_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: code,
    clear: shareEvent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 16
    }
  }), shareS && __jsx("div", {
    className: "jsx-5814691" + " " + "sussWindow d-flex align-items-center justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-5814691",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, "\u590D\u5236\u6210\u529F\u3002")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "5814691",
    __self: _this
  }, "h3.jsx-5814691{margin:2rem 1rem;font-size:2rem;}.code-count.jsx-5814691{margin-bottom:10rem;}.sussWindow.jsx-5814691{position:fixed;left:50%;top:50%;width:160px;height:160px;background:rgba(0,0,0,0.8);color:white;border-radius:10px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcY29tcG9uZW50XFxjb250ZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFUyxBQUc4QixBQUlHLEFBR0wsZUFDTixFQVBNLEdBSWpCLElBSVUsUUFQVixBQVFjLFlBQ0MsYUFDaUIsMkJBQ2xCLFlBQ08sbUJBQ2EseUdBQ2hCLGdCQUNsQiIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxjb21wb25lbnRcXGNvbXBvbmVudFxcY29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29kZSBmcm9tIFwiLi9jb2RlXCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuL1BhZ2luYXRpb25cIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQW5pbWEgZnJvbSBcIi4uL3B1YmxpYy9hbmltYVwiO1xyXG5jb25zdCBDb250ZW50ID0gKHsgdHlwZSwgYWN0aW9uLCBkYXRhLCBsb2FkaW5nIH0pID0+IHtcclxuICBjb25zdCBbY29kZSwgc2V0Q29kZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc2hhcmVTLCBzZXRTaGFyZVNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGdldHBob3RvID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYWN0aW9uKHtcclxuICAgICAgICB0eXBlOiBcIkxBRElOR19DT05URU5OXCIsXHJcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICAgIGFjdGlvbih7XHJcbiAgICAgICAgdHlwZTogXCJBTExfQ09OVEVOVFwiLFxyXG4gICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgUVVSTCA9IHByb2Nlc3MuZW52LkRBVEFfVVJMICsgXCJnZXRDb21wb25lbnQvZ2V0L1wiICsgdHlwZTtcclxuICAgICAgbGV0IGdldCA9IGF3YWl0IGZldGNoKFFVUkwpO1xyXG4gICAgICBpZiAoZ2V0Lm9rKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBhd2FpdCBnZXQuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgICAgIGFjdGlvbih7XHJcbiAgICAgICAgICB0eXBlOiBcIkFMTF9DT05URU5UXCIsXHJcbiAgICAgICAgICBkYXRhOiBtZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFjdGlvbih7XHJcbiAgICAgICAgICB0eXBlOiBcIkxBRElOR19DT05URU5OXCIsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBhcnJheVJlc3VsdCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgZGF0YS5maWx0ZXIoKGUpID0+ICFlLmZpbHRlciksXHJcbiAgICBbZGF0YV1cclxuICApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRwaG90bygpO1xyXG4gIH0sIFt0eXBlXSk7XHJcbiAgY29uc3Qgc2hhcmVFdmVudCA9IChib29iKSA9PiB7XHJcbiAgICBzZXRDb2RlKGZhbHNlKTtcclxuICAgIGlmIChib29iKSB7XHJcbiAgICAgIHNldFNoYXJlUyh0cnVlKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRTaGFyZVMoZmFsc2UpLCAxNTAwKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb2RlLWNvbnRlbnRcIj5cclxuICAgICAge2RhdGEubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvZGUtY291bnRcIj5cclxuICAgICAgICAgICAgPGgxPuaYvuekuiB7YXJyYXlSZXN1bHQubGVuZ3RofSDkuKrnu4Tku7Y8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8UGFnaW5hdGlvbiB0eXBlPXt0eXBlfSBjb2RlTGlzdD17YXJyYXlSZXN1bHR9IHNldENvZGU9e3NldENvZGV9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7ZGF0YS5sZW5ndGggPT09IDAgJiYgIWxvYWRpbmcgJiYgPGgxPiAwIOe7hOS7tiA8L2gxPn1cclxuXHJcbiAgICAgIHtsb2FkaW5nICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBteS01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8QW5pbWEgY29sb3I9XCIjZmRkMzAzXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAge2NvZGUgJiYgPENvZGUgZGF0YT17Y29kZX0gY2xlYXI9e3NoYXJlRXZlbnR9IC8+fVxyXG4gICAgICB7c2hhcmVTICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1c3NXaW5kb3cgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aDI+5aSN5Yi25oiQ5Yqf44CCPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAycmVtIDFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb2RlLWNvdW50IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTByZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3Vzc1dpbmRvdyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IHN0YXRlRXZlbnQgPSAoc3RhdGUpID0+ICh7XHJcbiAgZGF0YTogc3RhdGUuQ29udGVudFJlZHVjZXIsXHJcbiAgbG9hZGluZzogc3RhdGUuVHlwZVJlZHVjZXIubG9hZGluZyxcclxufSk7XHJcbmNvbnN0IGRpc3BhdGNoID0gKGRpc3BhdGNoKSA9PiAoeyBhY3Rpb246IGRpc3BhdGNoIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZUV2ZW50LCBkaXNwYXRjaCkoQ29udGVudCk7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\component\\\\content.js */"));
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
//# sourceMappingURL=component.js.962d813ea7b8c784f7f8.hot-update.js.map