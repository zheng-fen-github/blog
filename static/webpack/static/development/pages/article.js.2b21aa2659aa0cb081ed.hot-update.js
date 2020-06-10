webpackHotUpdate("static\\development\\pages\\article.js",{

/***/ "./component/article/articleContent.js":
/*!*********************************************!*\
  !*** ./component/article/articleContent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_getPhoto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/getPhoto */ "./component/public/getPhoto.js");
var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\article\\articleContent.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var ArtContent = function ArtContent(_ref) {
  var content = _ref.content;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      load = _useState[0],
      setload = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return setload(true);
  }, []);

  var shareEvent = function shareEvent() {
    var textDom = document.querySelector(".share-dom");

    if (textDom) {
      var range = new Range();
      range.setStart(textDom, 0);
      range.setEnd(textDom, 1);
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(range);
      document.execCommand("Copy");
      document.getSelection().removeAllRanges();
      alert("复制成功");
    }
  };

  return __jsx("div", {
    className: "jsx-697571046" + " " + "row Content mx-0 justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-697571046" + " " + "col-10 col-ls-6 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, content.map(function (item) {
    if (item.type === "text") {
      return __jsx("div", {
        key: item.key,
        className: "jsx-697571046" + " " + "row content-item",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 15
        }
      }, __jsx("h3", {
        className: "jsx-697571046",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }
      }, item.value));
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        key: item.key,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "jsx-697571046" + " " + "row content-item-title justify-content-center",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }
      }, __jsx("h3", {
        className: "jsx-697571046" + " " + "title ",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 19
        }
      }, item.title)), __jsx("div", {
        className: "jsx-697571046" + " " + "row photo",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }
      }, __jsx(_public_getPhoto__WEBPACK_IMPORTED_MODULE_2__["default"], {
        id: "addArticle/gotArticlePhoto/" + item.filePath,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 19
        }
      })));
    }
  }), __jsx("div", {
    className: "jsx-697571046" + " " + "row align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-697571046",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "\u5206\u4EAB"), __jsx("h3", {
    style: {
      left: "-10000px"
    },
    className: "jsx-697571046" + " " + "share-dom position-fixed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, load && window.origin + window.history.state.url), __jsx("div", {
    className: "jsx-697571046",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("i", {
    onClick: shareEvent,
    className: "jsx-697571046" + " " + "iconfont mx-4 icon-attach",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "697571046",
    __self: _this
  }, ".Content.jsx-697571046{margin-top:10rem;border-bottom:2px solid #eaeaea;}.content-item.jsx-697571046{margin-bottom:5rem;}.content-item-title.jsx-697571046{margin-bottom:3rem;}h2.jsx-697571046{font-size:3rem;line-height:2;}h3.jsx-697571046{font-size:2.5rem;line-height:2;}i.jsx-697571046{color:white;font-size:2rem;padding:0.5rem;background:#3a5999;border-radius:50%;cursor:pointer;}.title.jsx-697571046{font-size:4rem;font-weight:700;}.photo.jsx-697571046{margin-bottom:3rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZVxcYXJ0aWNsZUNvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RTLEFBRzhCLEFBSUUsQUFHQSxBQUdKLEFBSUUsQUFJTCxBQVFHLEFBSUksWUFYSixHQVJELEFBZ0JFLEVBMUJnQixBQWNsQixFQVZoQixBQUdBLEFBdUJlLFFBWEUsRUFSakIsRUFJQSxBQVlBLFdBUHFCLE9BbkJyQixZQW9Cb0Isa0JBQ0gsY0FTakIsQ0FSQSIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxjb21wb25lbnRcXGFydGljbGVcXGFydGljbGVDb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBob3RvIGZyb20gXCIuLi9wdWJsaWMvZ2V0UGhvdG9cIjtcclxuY29uc3QgQXJ0Q29udGVudCA9ICh7IGNvbnRlbnQgfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkLCBzZXRsb2FkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4gc2V0bG9hZCh0cnVlKSwgW10pO1xyXG5cclxuICBjb25zdCBzaGFyZUV2ZW50ID0gKCkgPT4ge1xyXG4gICAgbGV0IHRleHREb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoYXJlLWRvbVwiKTtcclxuICAgIGlmICh0ZXh0RG9tKSB7XHJcbiAgICAgIGxldCByYW5nZSA9IG5ldyBSYW5nZSgpO1xyXG4gICAgICByYW5nZS5zZXRTdGFydCh0ZXh0RG9tLCAwKTtcclxuICAgICAgcmFuZ2Uuc2V0RW5kKHRleHREb20sIDEpO1xyXG4gICAgICBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkuYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcIkNvcHlcIik7XHJcbiAgICAgIGRvY3VtZW50LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xyXG5cclxuICAgICAgYWxlcnQoXCLlpI3liLbmiJDlip9cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgQ29udGVudCBteC0wIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgY29sLWxzLTYgXCI+XHJcbiAgICAgICAge2NvbnRlbnQubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSBcInRleHRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbnRlbnQtaXRlbVwiIGtleT17aXRlbS5rZXl9PlxyXG4gICAgICAgICAgICAgICAgPGgzPntpdGVtLnZhbHVlfTwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l0ZW0ua2V5fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbnRlbnQtaXRlbS10aXRsZSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBcIj57aXRlbS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwaG90b1wiPlxyXG4gICAgICAgICAgICAgICAgICA8UGhvdG8gaWQ9e1wiYWRkQXJ0aWNsZS9nb3RBcnRpY2xlUGhvdG8vXCIgKyBpdGVtLmZpbGVQYXRofSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMj7liIbkuqs8L2gyPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNoYXJlLWRvbSBwb3NpdGlvbi1maXhlZFwiIHN0eWxlPXt7IGxlZnQ6IFwiLTEwMDAwcHhcIiB9fT5cclxuICAgICAgICAgICAge2xvYWQgJiYgd2luZG93Lm9yaWdpbiArIHdpbmRvdy5oaXN0b3J5LnN0YXRlLnVybH1cclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uZm9udCBteC00IGljb24tYXR0YWNoXCIgb25DbGljaz17c2hhcmVFdmVudH0+PC9pPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuQ29udGVudCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcmVtO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb250ZW50LWl0ZW0ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbnRlbnQtaXRlbS10aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjM2E1OTk5O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5waG90byB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRDb250ZW50O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\article\\\\articleContent.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ArtContent);

/***/ })

})
//# sourceMappingURL=article.js.2b21aa2659aa0cb081ed.hot-update.js.map