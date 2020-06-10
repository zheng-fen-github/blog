webpackHotUpdate("static\\development\\pages\\article-list.js",{

/***/ "./component/articleList/contentList.js":
/*!**********************************************!*\
  !*** ./component/articleList/contentList.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_anima__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/anima */ "./component/public/anima.js");
/* harmony import */ var _public_getPhoto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/getPhoto */ "./component/public/getPhoto.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page */ "./component/articleList/page.js");
var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\articleList\\contentList.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var ContentList = function ContentList(_ref) {
  var setState = _ref.setState,
      type = _ref.type,
      state = _ref.state,
      loading = _ref.loading,
      count = _ref.count;
  return __jsx("div", {
    className: "jsx-3390328514" + " " + "row m-0 article-list-root",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, state.map(function (item) {
    return __jsx("div", {
      key: item._id,
      className: "jsx-3390328514" + " " + "col-10 offset-1 my-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, __jsx(Item, {
      content: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    }));
  }), state.length === 0 && __jsx("div", {
    className: "jsx-3390328514" + " " + "col-12 col-md-10 offset-0 offset-md-1 my-5 not-article-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3390328514" + " " + "row justify-content-center align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, loading ? __jsx(_public_anima__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }) : __jsx("h1", {
    className: "jsx-3390328514" + " " + "col-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, " \u6CA1\u6709\u76F8\u5173\u6587\u7AE0 "))), count > 10 && __jsx(_page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: type,
    count: count,
    setState: setState,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 22
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3390328514",
    __self: _this
  }, ".not-article-container.jsx-3390328514 .row.jsx-3390328514{height:50vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZUxpc3RcXGNvbnRlbnRMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCUyxBQUd5QixZQUNkIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZUxpc3RcXGNvbnRlbnRMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vcHVibGljL2FuaW1hXCI7XHJcbmltcG9ydCBQaG90byBmcm9tIFwiLi4vcHVibGljL2dldFBob3RvXCI7XHJcbmltcG9ydCBQYWdlIGZyb20gXCIuL3BhZ2VcIjtcclxuXHJcbmNvbnN0IENvbnRlbnRMaXN0ID0gKHsgc2V0U3RhdGUsIHR5cGUsIHN0YXRlLCBsb2FkaW5nLCBjb3VudCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG0tMCBhcnRpY2xlLWxpc3Qtcm9vdFwiPlxyXG4gICAgICB7c3RhdGUubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgb2Zmc2V0LTEgbXktNVwiIGtleT17aXRlbS5faWR9PlxyXG4gICAgICAgICAgPEl0ZW0gY29udGVudD17aXRlbX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIHtzdGF0ZS5sZW5ndGggPT09IDAgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0xMCBvZmZzZXQtMCBvZmZzZXQtbWQtMSBteS01IG5vdC1hcnRpY2xlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29sLWF1dG9cIj4g5rKh5pyJ55u45YWz5paH56ugIDwvaDE+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAge2NvdW50ID4gMTAgJiYgPFBhZ2UgdHlwZT17dHlwZX0gY291bnQ9e2NvdW50fSBzZXRTdGF0ZT17c2V0U3RhdGV9IC8+fVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubm90LWFydGljbGUtY29udGFpbmVyIC5yb3cge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBJdGVtID0gKHsgY29udGVudCB9KSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBTdHJpbmcobmV3IERhdGUoTnVtYmVyKGNvbnRlbnQuY3JlYXRlVGltZSkpKTtcclxuICBsZXQgaWQgPSBjb250ZW50LkFydGljbGVDb250ZW50LmZpbmQoKGl0ZW0pID0+IGl0ZW0udHlwZSA9PT0gXCJwaG90b1wiKTtcclxuICBsZXQgcGF0aCA9IGlkID8gaWQuZmlsZVBhdGggOiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInR5cGVcIj57Y29udGVudC5BcnRpY2xlVHlwZX08L2g0PlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIG15LTVcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj17XCIvYXJ0aWNsZT9pZD1cIiArIGNvbnRlbnQuX2lkfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICB7Y29udGVudC5BcnRpY2xlVGl0bGV9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY3JlYXRlLXRpbWVcIj5cclxuICAgICAgICAgICAge3RpbWUuc2xpY2UoMCwgMTApICsgXCIsXCIgKyB0aW1lLnNsaWNlKDEwLCAxNSl9XHJcbiAgICAgICAgICA8L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBoLTEwMFwiPlxyXG4gICAgICAgICAgICA8UGhvdG8gaWQ9e1wiYWRkQXJ0aWNsZS9nb3RBcnRpY2xlUGhvdG8vXCIgKyBwYXRofSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuY29sLTEyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0ZjczOGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlNjVlMmM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgICAgICAgY29sb3I6ICM4NzhjOGI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50TGlzdDtcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\articleList\\\\contentList.js */"));
};

var Item = function Item(_ref2) {
  var content = _ref2.content;
  var time = String(new Date(Number(content.createTime)));
  var id = content.ArticleContent.find(function (item) {
    return item.type === "photo";
  });
  var path = id ? id.filePath : null;
  return __jsx("div", {
    className: "jsx-4228235842" + " " + "col-12 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-4228235842" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-4228235842" + " " + "col-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("h4", {
    className: "jsx-4228235842" + " " + "type",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, content.ArticleType), __jsx("h3", {
    className: "jsx-4228235842" + " " + "title my-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "/article?id=" + content._id,
    target: "_blank",
    className: "jsx-4228235842",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, content.ArticleTitle)), __jsx("h4", {
    className: "jsx-4228235842" + " " + "create-time",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, time.slice(0, 10) + "," + time.slice(10, 15))), __jsx("div", {
    className: "jsx-4228235842" + " " + "col-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-4228235842" + " " + "row align-items-center h-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(_public_getPhoto__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "addArticle/gotArticlePhoto/" + path,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4228235842",
    __self: _this
  }, ".col-12.jsx-4228235842{border-bottom:2px solid #eaeaea;padding-bottom:5rem;}img.jsx-4228235842{width:100%;}a.jsx-4228235842{color:#4f738d;}a.jsx-4228235842:hover{color:#e65e2c;}h3.jsx-4228235842{font-size:3rem;}h4.jsx-4228235842{font-size:2rem;margin:1rem 0;color:#878c8b;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZUxpc3RcXGNvbnRlbnRMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEUyxBQUc2QyxBQUlyQixBQUdHLEFBR0EsQUFHQyxBQUdBLFdBWGpCLEdBR0EsQUFHQSxDQUdBLEFBR2dCLGNBQ0EsR0FqQk0sV0FrQnRCLFNBakJBIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZUxpc3RcXGNvbnRlbnRMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vcHVibGljL2FuaW1hXCI7XHJcbmltcG9ydCBQaG90byBmcm9tIFwiLi4vcHVibGljL2dldFBob3RvXCI7XHJcbmltcG9ydCBQYWdlIGZyb20gXCIuL3BhZ2VcIjtcclxuXHJcbmNvbnN0IENvbnRlbnRMaXN0ID0gKHsgc2V0U3RhdGUsIHR5cGUsIHN0YXRlLCBsb2FkaW5nLCBjb3VudCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG0tMCBhcnRpY2xlLWxpc3Qtcm9vdFwiPlxyXG4gICAgICB7c3RhdGUubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgb2Zmc2V0LTEgbXktNVwiIGtleT17aXRlbS5faWR9PlxyXG4gICAgICAgICAgPEl0ZW0gY29udGVudD17aXRlbX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIHtzdGF0ZS5sZW5ndGggPT09IDAgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0xMCBvZmZzZXQtMCBvZmZzZXQtbWQtMSBteS01IG5vdC1hcnRpY2xlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29sLWF1dG9cIj4g5rKh5pyJ55u45YWz5paH56ugIDwvaDE+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAge2NvdW50ID4gMTAgJiYgPFBhZ2UgdHlwZT17dHlwZX0gY291bnQ9e2NvdW50fSBzZXRTdGF0ZT17c2V0U3RhdGV9IC8+fVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubm90LWFydGljbGUtY29udGFpbmVyIC5yb3cge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBJdGVtID0gKHsgY29udGVudCB9KSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBTdHJpbmcobmV3IERhdGUoTnVtYmVyKGNvbnRlbnQuY3JlYXRlVGltZSkpKTtcclxuICBsZXQgaWQgPSBjb250ZW50LkFydGljbGVDb250ZW50LmZpbmQoKGl0ZW0pID0+IGl0ZW0udHlwZSA9PT0gXCJwaG90b1wiKTtcclxuICBsZXQgcGF0aCA9IGlkID8gaWQuZmlsZVBhdGggOiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInR5cGVcIj57Y29udGVudC5BcnRpY2xlVHlwZX08L2g0PlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIG15LTVcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj17XCIvYXJ0aWNsZT9pZD1cIiArIGNvbnRlbnQuX2lkfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICB7Y29udGVudC5BcnRpY2xlVGl0bGV9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY3JlYXRlLXRpbWVcIj5cclxuICAgICAgICAgICAge3RpbWUuc2xpY2UoMCwgMTApICsgXCIsXCIgKyB0aW1lLnNsaWNlKDEwLCAxNSl9XHJcbiAgICAgICAgICA8L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBoLTEwMFwiPlxyXG4gICAgICAgICAgICA8UGhvdG8gaWQ9e1wiYWRkQXJ0aWNsZS9nb3RBcnRpY2xlUGhvdG8vXCIgKyBwYXRofSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuY29sLTEyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0ZjczOGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlNjVlMmM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgICAgICAgY29sb3I6ICM4NzhjOGI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50TGlzdDtcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\articleList\\\\contentList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ContentList);

/***/ })

})
//# sourceMappingURL=article-list.js.cc8629a2af623c19c24f.hot-update.js.map