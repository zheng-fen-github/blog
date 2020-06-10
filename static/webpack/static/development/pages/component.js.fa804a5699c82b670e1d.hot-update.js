webpackHotUpdate("static\\development\\pages\\component.js",{

/***/ "./component/component/Pagination.js":
/*!*******************************************!*\
  !*** ./component/component/Pagination.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./component/component/item.js");
var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\component\\Pagination.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Pagination = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref) {
  var codeList = _ref.codeList,
      setCode = _ref.setCode,
      type = _ref.type;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(2),
      count = _useState[0],
      setCount = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      List = _useState2[0],
      setList = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("scroll", function () {
      //     设置滚动事件
      scrollE();
    });
    return function () {
      return window.removeEventListener("scroll", scrollE);
    };
  }, [List]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setList(codeList.slice(0, 8)); //     设置初始数
  }, [codeList]);

  var addList = function addList() {
    setList(codeList.slice(0, count * 8));
    setCount(function (pre) {
      return pre += 1;
    });
  };

  var eventId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var scrollE = function scrollE() {
    //滚动事件定义
    if (eventId.current) return;
    eventId.current = setTimeout(function () {
      try {
        var scrollCount = Math.round(window.pageYOffset + window.innerHeight);

        if (scrollCount >= document.documentElement.scrollHeight - 2) {
          document.getElementById("loadmore").click();
        }
      } catch (err) {
        console.log(err);
      }

      eventId.current = null;
    }, 500);
  };

  var typevalue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(type === "JS" ? "js" : type === "React" ? "react" : type === "CSS" ? "css" : type === "nodejs" ? "node" : null, [type]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, List.map(function (e) {
    return __jsx(_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      setCode: setCode,
      type: typevalue,
      key: e._id,
      message: e,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }
    });
  }), __jsx("button", {
    onClick: addList,
    id: "loadmore",
    className: "d-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, "click"));
});
/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ })

})
//# sourceMappingURL=component.js.fa804a5699c82b670e1d.hot-update.js.map