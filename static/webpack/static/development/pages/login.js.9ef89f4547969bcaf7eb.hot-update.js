webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./component/login/addComponenttwo/textarea.js":
/*!*****************************************************!*\
  !*** ./component/login/addComponenttwo/textarea.js ***!
  \*****************************************************/
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


var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\login\\addComponenttwo\\textarea.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var Nav = function Nav(_ref) {
  var restEvent = _ref.restEvent;

  var submitEvent = function submitEvent(e) {
    var data, typeName, typeSort, fileDom, QURL, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function submitEvent$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            data = new FormData(e.target);
            typeName = document.querySelector(".component-code-typeName").textContent;
            typeSort = document.querySelector(".component-sort-name").value;

            if (!(!typeName && !typeSort)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            data.append("type", typeSort);
            _context.prev = 7;
            fileDom = document.querySelector('input[name="photoFile"]');
            data.append("photoFile", fileDom.files[0]);
            QURL = "http://localhost:4040/" + "addComponent/" + typeName;
            _context.next = 13;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(QURL, {
              method: "POST",
              body: data
            }));

          case 13:
            res = _context.sent;

            if (res.ok) {
              restEvent(1);
            } else {
              alert("添加失败");
            }

            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](7);
            console.log(_context.t0);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[7, 17]], Promise);
  };

  return __jsx("form", {
    onSubmit: submitEvent,
    className: "jsx-2080292355" + " " + "row px-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("textarea", {
    name: "code",
    id: "code",
    required: true,
    className: "jsx-2080292355" + " " + "col-10 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("input", {
    type: "text",
    name: "codeTitle",
    placeholder: "\u6807\u9898",
    required: true,
    className: "jsx-2080292355" + " " + "col-6 mx-auto mt-5 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-2080292355" + " " + "col-12 mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2080292355" + " " + "row justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "submit  col-auto",
    className: "jsx-2080292355",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Commit"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2080292355",
    __self: _this
  }, "textarea.jsx-2080292355{height:600px;font-size:2rem;font-weight:600;padding:2rem;}input.jsx-2080292355{padding:1rem 2rem;font-weight:600;font-size:2rem;}button.jsx-2080292355{border:none;background:#4b30c3;color:white;padding:1rem 2rem;font-weight:600;font-size:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcbG9naW5cXGFkZENvbXBvbmVudHR3b1xcdGV4dGFyZWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURTLEFBRzBCLEFBTUssQUFLTixZQUNPLENBWEosS0FNQyxVQUxBLEdBV0osR0FMRyxTQU1HLENBWEwsS0FNZixRQUxBLElBV2tCLGdCQUNELGVBQ2pCIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcbG9naW5cXGFkZENvbXBvbmVudHR3b1xcdGV4dGFyZWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBOYXYgPSAoeyByZXN0RXZlbnQgfSkgPT4ge1xyXG4gIGNvbnN0IHN1Ym1pdEV2ZW50ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XHJcbiAgICBsZXQgdHlwZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXBvbmVudC1jb2RlLXR5cGVOYW1lXCIpXHJcbiAgICAgIC50ZXh0Q29udGVudDtcclxuICAgIGxldCB0eXBlU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcG9uZW50LXNvcnQtbmFtZVwiKS52YWx1ZTtcclxuICAgIGlmICghdHlwZU5hbWUgJiYgIXR5cGVTb3J0KSByZXR1cm47XHJcbiAgICBkYXRhLmFwcGVuZChcInR5cGVcIiwgdHlwZVNvcnQpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGZpbGVEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicGhvdG9GaWxlXCJdJyk7XHJcbiAgICAgIGRhdGEuYXBwZW5kKFwicGhvdG9GaWxlXCIsIGZpbGVEb20uZmlsZXNbMF0pO1xyXG4gICAgICBjb25zdCBRVVJMID0gcHJvY2Vzcy5lbnYuREFUQV9VUkwgKyBcImFkZENvbXBvbmVudC9cIiArIHR5cGVOYW1lO1xyXG4gICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goUVVSTCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICByZXN0RXZlbnQoMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoXCLmt7vliqDlpLHotKVcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGNsYXNzTmFtZT1cInJvdyBweC0wXCIgb25TdWJtaXQ9e3N1Ym1pdEV2ZW50fT5cclxuICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgbmFtZT1cImNvZGVcIlxyXG4gICAgICAgIGlkPVwiY29kZVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEwIG14LWF1dG9cIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgID48L3RleHRhcmVhPlxyXG5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIG5hbWU9XCJjb2RlVGl0bGVcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi5qCH6aKYXCJcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbC02IG14LWF1dG8gbXQtNSB0ZXh0LWNlbnRlclwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtdC01XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0ICBjb2wtYXV0b1wiPkNvbW1pdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRiMzBjMztcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\login\\\\addComponenttwo\\\\textarea.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=login.js.9ef89f4547969bcaf7eb.hot-update.js.map