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
    className: "jsx-2454106373" + " " + "row Content mx-0 justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2454106373" + " " + "col-10 col-ls-6 ",
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
        className: "jsx-2454106373" + " " + "row content-item",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 15
        }
      }, __jsx("h3", {
        className: "jsx-2454106373",
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
        className: "jsx-2454106373" + " " + "row content-item-title justify-content-center",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }
      }, __jsx("h3", {
        className: "jsx-2454106373" + " " + "title ",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 19
        }
      }, item.title)), __jsx("div", {
        className: "jsx-2454106373" + " " + "row photo",
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
    className: "jsx-2454106373" + " " + "row align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-2454106373",
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
    className: "jsx-2454106373" + " " + "share-dom position-fixed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, load && window.origin + window.history.state.url), __jsx("div", {
    className: "jsx-2454106373",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("i", {
    onClick: shareEvent,
    className: "jsx-2454106373" + " " + "iconfont mx-4 icon-attach",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2454106373",
    __self: _this
  }, ".Content.jsx-2454106373{margin-top:10rem;border-bottom:2px solid #eaeaea;}.content-item.jsx-2454106373{margin-bottom:5rem;}.content-item-title.jsx-2454106373{margin-bottom:3rem;}h2.jsx-2454106373{font-size:3rem;line-height:2;}h3.jsx-2454106373{font-size:2.5rem;line-height:2;}i.jsx-2454106373{color:white;font-size:2rem;padding:0.5rem;background:#3a5999;border-radius:50%;cursor:pointer;}.title.jsx-2454106373{font-size:4rem;font-weight:700;}.photo.jsx-2454106373{margin-bottom:3rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.photo.jsx-2454106373 img.jsx-2454106373{max-width:100%;width:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZVxcYXJ0aWNsZUNvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RTLEFBRzhCLEFBSUUsQUFHQSxBQUdKLEFBSUUsQUFJTCxBQVFHLEFBSUksQUFNSixZQWpCQSxHQVJELEFBZ0JFLEFBVUwsRUFwQ3FCLEFBY2xCLEVBVmhCLEFBR0EsQUF1QmUsT0FPZixDQWxCaUIsRUFSakIsRUFJQSxBQVlBLFdBUHFCLE9BbkJyQixZQW9Cb0Isa0JBQ0gsY0FTUSxDQVJ6QixrR0FTcUIsNkZBQ3JCIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZVxcYXJ0aWNsZUNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGhvdG8gZnJvbSBcIi4uL3B1YmxpYy9nZXRQaG90b1wiO1xyXG5jb25zdCBBcnRDb250ZW50ID0gKHsgY29udGVudCB9KSA9PiB7XHJcbiAgY29uc3QgW2xvYWQsIHNldGxvYWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiBzZXRsb2FkKHRydWUpLCBbXSk7XHJcblxyXG4gIGNvbnN0IHNoYXJlRXZlbnQgPSAoKSA9PiB7XHJcbiAgICBsZXQgdGV4dERvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hhcmUtZG9tXCIpO1xyXG4gICAgaWYgKHRleHREb20pIHtcclxuICAgICAgbGV0IHJhbmdlID0gbmV3IFJhbmdlKCk7XHJcbiAgICAgIHJhbmdlLnNldFN0YXJ0KHRleHREb20sIDApO1xyXG4gICAgICByYW5nZS5zZXRFbmQodGV4dERvbSwgMSk7XHJcbiAgICAgIGRvY3VtZW50LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiQ29weVwiKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcblxyXG4gICAgICBhbGVydChcIuWkjeWItuaIkOWKn1wiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBDb250ZW50IG14LTAganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBjb2wtbHMtNiBcIj5cclxuICAgICAgICB7Y29udGVudC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09IFwidGV4dFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY29udGVudC1pdGVtXCIga2V5PXtpdGVtLmtleX0+XHJcbiAgICAgICAgICAgICAgICA8aDM+e2l0ZW0udmFsdWV9PC9oMz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aXRlbS5rZXl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY29udGVudC1pdGVtLXRpdGxlIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIFwiPntpdGVtLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHBob3RvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxQaG90byBpZD17XCJhZGRBcnRpY2xlL2dvdEFydGljbGVQaG90by9cIiArIGl0ZW0uZmlsZVBhdGh9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGgyPuWIhuS6qzwvaDI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2hhcmUtZG9tIHBvc2l0aW9uLWZpeGVkXCIgc3R5bGU9e3sgbGVmdDogXCItMTAwMDBweFwiIH19PlxyXG4gICAgICAgICAgICB7bG9hZCAmJiB3aW5kb3cub3JpZ2luICsgd2luZG93Lmhpc3Rvcnkuc3RhdGUudXJsfVxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25mb250IG14LTQgaWNvbi1hdHRhY2hcIiBvbkNsaWNrPXtzaGFyZUV2ZW50fT48L2k+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5Db250ZW50IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTByZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbnRlbnQtaXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29udGVudC1pdGVtLXRpdGxlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzYTU5OTk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBob3RvIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGhvdG8gaW1nIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydENvbnRlbnQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\article\\\\articleContent.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ArtContent);

/***/ })

})
//# sourceMappingURL=article.js.249bf0eb524e83b92f2e.hot-update.js.map