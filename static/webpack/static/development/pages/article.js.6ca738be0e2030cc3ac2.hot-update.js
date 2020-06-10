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
    className: "jsx-3457298377" + " " + "row author mx-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3457298377" + " " + "col-10 offset-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3457298377" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3457298377" + " " + "col-12 col-ls-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-3457298377" + " " + "my-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "\u4F5C\u8005"), __jsx("div", {
    className: "jsx-3457298377" + " " + "author-message d-flex align-items-around",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3457298377" + " " + "author-photo-cts",
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
    className: "jsx-3457298377" + " " + "message ml-4 d-flex flex-column justify-content-around",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "jsx-3457298377",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, ArticleAuthor), __jsx("h3", {
    className: "jsx-3457298377" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, ArticleTitle)))), __jsx("div", {
    className: "jsx-3457298377" + " " + "col-6 col-ls-3 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-3457298377" + " " + "my-0 mt-5 my-ls-5 mt-ls-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "\u53D1\u5E03\u4E8E"), __jsx("h2", {
    className: "jsx-3457298377" + " " + "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "jsx-3457298377",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }), time)), __jsx("div", {
    className: "jsx-3457298377" + " " + "col-6 col-ls-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-3457298377" + " " + "my-0 mt-5 my-ls-5 mt-ls-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "\u8BC4\u8BBA"), __jsx("h2", {
    className: "jsx-3457298377",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "jsx-3457298377",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }), comment.length, " \u8BC4\u8BBA")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3457298377",
    __self: _this
  }, ".author.jsx-3457298377{margin:10rem 0;padding-bottom:8rem;border-bottom:2px solid #eaeaea;}.author-photo-cts.jsx-3457298377{height:80px;width:80px;}@media (max-width:860px){.message.jsx-3457298377 h3.jsx-3457298377{line-height:1.1;}.author.jsx-3457298377{margin-top:4rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZVxcYXV0aG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEUyxBQUc0QixBQUtILEFBS00sQUFHQSxZQVBQLEdBTFMsQ0FVcEIsQUFHQSxPQVBGLFlBTGtDLGdDQUNsQyIsImZpbGUiOiJDOlxcbmV3bGlmZVxcbmV3U2l0ZVxcbXktYXBwXFxjb21wb25lbnRcXGFydGljbGVcXGF1dGhvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBob3RvIGZyb20gXCIuLi9wdWJsaWMvZ2V0UGhvdG9cIjtcclxuXHJcbmNvbnN0IEF1dGhvciA9ICh7XHJcbiAgQXJ0aWNsZUF1dGhvcixcclxuICBBcnRpY2xlVGl0bGUsXHJcbiAgQXJ0aWNsZUF1dGhvclBob3RvLFxyXG4gIGNyZWF0ZVRpbWUsXHJcbiAgY29tbWVudCxcclxufSkgPT4ge1xyXG4gIGxldCB0aW1lID0gU3RyaW5nKG5ldyBEYXRlKE51bWJlcihjcmVhdGVUaW1lKSkpLnNsaWNlKDAsIDE1KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGF1dGhvciBteC0wXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwIG9mZnNldC0xXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1scy02XCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJteS01XCI+5L2c6ICFPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3ItbWVzc2FnZSBkLWZsZXggYWxpZ24taXRlbXMtYXJvdW5kXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3ItcGhvdG8tY3RzXCI+XHJcbiAgICAgICAgICAgICAgICA8UGhvdG9cclxuICAgICAgICAgICAgICAgICAgaWQ9e1wiYWRkQXJ0aWNsZS9nb3RBcnRpY2xlUGhvdG8vXCIgKyBBcnRpY2xlQXV0aG9yUGhvdG99XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UgbWwtNCBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWFyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPntBcnRpY2xlQXV0aG9yfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiXCI+e0FydGljbGVUaXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbHMtMyBcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm15LTAgbXQtNSBteS1scy01IG10LWxzLTBcIj7lj5HluIPkuo48L2gzPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPGk+PC9pPlxyXG4gICAgICAgICAgICAgIHt0aW1lfVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1scy0zXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJteS0wIG10LTUgbXktbHMtNSBtdC1scy0wXCI+6K+E6K66PC9oMz5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgIDxpPjwvaT5cclxuICAgICAgICAgICAgICB7Y29tbWVudC5sZW5ndGh9IOivhOiuulxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuYXV0aG9yIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHJlbSAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXV0aG9yLXBob3RvLWN0cyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODYwcHgpIHtcclxuICAgICAgICAgICAgLm1lc3NhZ2UgaDMge1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmF1dGhvciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aG9yO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\article\\\\author.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Author);

/***/ })

})
//# sourceMappingURL=article.js.6ca738be0e2030cc3ac2.hot-update.js.map