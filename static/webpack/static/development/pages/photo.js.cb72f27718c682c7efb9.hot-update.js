webpackHotUpdate("static\\development\\pages\\photo.js",{

/***/ "./component/photo/photo.js":
/*!**********************************!*\
  !*** ./component/photo/photo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\photo\\photo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Photo = function Photo(_ref) {
  var id = _ref.id,
      name = _ref.name;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      bolb = _useState[0],
      setBolb = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      error = _useState2[0],
      setError = _useState2[1];

  var getphoto = function getphoto() {
    var QURL, get, blob, src;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getphoto$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            QURL = "http://localhost:4040/" + "addphoto/getphoto/" + id;
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(QURL));

          case 4:
            get = _context.sent;

            if (!get.ok) {
              _context.next = 11;
              break;
            }

            _context.next = 8;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(get.blob());

          case 8:
            blob = _context.sent;
            src = URL.createObjectURL(blob);
            setBolb(src);

          case 11:
            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            setError(true);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 13]], Promise);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getphoto();
  }, [id]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, bolb && __jsx("img", {
    src: bolb,
    alt: name,
    className: "w-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 16
    }
  }), error && __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, " Wron "));
};

/* harmony default export */ __webpack_exports__["default"] = (Photo);

/***/ })

})
//# sourceMappingURL=photo.js.cb72f27718c682c7efb9.hot-update.js.map