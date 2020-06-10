webpackHotUpdate("static\\development\\pages\\article.js",{

/***/ "./component/article/author.js":
/*!*************************************!*\
  !*** ./component/article/author.js ***!
  \*************************************/
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
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\article\\author.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Author = function Author(_ref) {
  var ArticleAuthor = _ref.ArticleAuthor,
      ArticleTitle = _ref.ArticleTitle,
      ArticleAuthorPhoto = _ref.ArticleAuthorPhoto,
      createTime = _ref.createTime,
      comment = _ref.comment;
  var time = String(new Date(Number(createTime))).slice(0, 15);
  return __jsx("div", {
    className: "jsx-1863652391" + " " + "row author mx-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1863652391" + " " + "col-10 offset-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1863652391" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1863652391" + " " + "col-12 col-ls-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-1863652391" + " " + "my-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "\u4F5C\u8005"), __jsx("div", {
    className: "jsx-1863652391" + " " + "author-message d-flex align-items-around",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1863652391" + " " + "author-photo-cts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, __jsx(_public_getPhoto__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "addArticle/gotArticlePhoto/" + ArticleAuthorPhoto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-1863652391" + " " + "message ml-4 d-flex flex-column justify-content-around",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "jsx-1863652391",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, ArticleAuthor), __jsx("h3", {
    className: "jsx-1863652391" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, ArticleTitle)))), __jsx("div", {
    className: "jsx-1863652391" + " " + "col-6 col-ls-3 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-1863652391" + " " + "my-0 mt-5 my-ls-5 mt-ls-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "PUBLISHED"), __jsx("h2", {
    className: "jsx-1863652391" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "jsx-1863652391",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }), time)), __jsx("div", {
    className: "jsx-1863652391" + " " + "col-6 col-ls-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-1863652391" + " " + "my-0 mt-5 my-ls-5 mt-ls-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "CINNEBTS"), __jsx("h2", {
    className: "jsx-1863652391",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "jsx-1863652391",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }), comment.length, " comments")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1863652391",
    __self: _this
  }, ".author.jsx-1863652391{margin-top:10rem;padding-bottom:8rem;border-bottom:2px solid #eaeaea;}.author-photo-cts.jsx-1863652391{height:80px;width:80px;}@media (max-width:860px){.message.jsx-1863652391 h3.jsx-1863652391{line-height:1.1;}.author.jsx-1863652391{margin-top:4rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZVxcYXV0aG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEUyxBQUc4QixBQUtMLEFBS00sQUFHQSxZQVBQLElBS1gsQUFHQSxDQWJvQixNQU10QixjQUxrQyxnQ0FDbEMiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxhcnRpY2xlXFxhdXRob3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQaG90byBmcm9tIFwiLi4vcHVibGljL2dldFBob3RvXCI7XHJcblxyXG5jb25zdCBBdXRob3IgPSAoe1xyXG4gIEFydGljbGVBdXRob3IsXHJcbiAgQXJ0aWNsZVRpdGxlLFxyXG4gIEFydGljbGVBdXRob3JQaG90byxcclxuICBjcmVhdGVUaW1lLFxyXG4gIGNvbW1lbnQsXHJcbn0pID0+IHtcclxuICBsZXQgdGltZSA9IFN0cmluZyhuZXcgRGF0ZShOdW1iZXIoY3JlYXRlVGltZSkpKS5zbGljZSgwLCAxNSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhdXRob3IgbXgtMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBvZmZzZXQtMVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbHMtNlwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXktNVwiPuS9nOiAhTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yLW1lc3NhZ2UgZC1mbGV4IGFsaWduLWl0ZW1zLWFyb3VuZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yLXBob3RvLWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgPFBob3RvXHJcbiAgICAgICAgICAgICAgICAgIGlkPXtcImFkZEFydGljbGUvZ290QXJ0aWNsZVBob3RvL1wiICsgQXJ0aWNsZUF1dGhvclBob3RvfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlIG1sLTQgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1hcm91bmRcIj5cclxuICAgICAgICAgICAgICAgIDxoMj57QXJ0aWNsZUF1dGhvcn08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIlwiPntBcnRpY2xlVGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLWxzLTMgXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJteS0wIG10LTUgbXktbHMtNSBtdC1scy0wXCI+UFVCTElTSEVEPC9oMz5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxpPjwvaT5cclxuICAgICAgICAgICAgICB7dGltZX1cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbHMtM1wiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXktMCBtdC01IG15LWxzLTUgbXQtbHMtMFwiPkNJTk5FQlRTPC9oMz5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgIDxpPjwvaT5cclxuICAgICAgICAgICAgICB7Y29tbWVudC5sZW5ndGh9IGNvbW1lbnRzXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5hdXRob3Ige1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHJlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF1dGhvci1waG90by1jdHMge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg2MHB4KSB7XHJcbiAgICAgICAgICAgIC5tZXNzYWdlIGgzIHtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hdXRob3Ige1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhvcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\article\\\\author.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Author);

/***/ })

})
//# sourceMappingURL=article.js.cf593f13544bcd2319a5.hot-update.js.map