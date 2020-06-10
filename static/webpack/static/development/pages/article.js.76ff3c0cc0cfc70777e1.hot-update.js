webpackHotUpdate("static\\development\\pages\\article.js",{

/***/ "./component/article/comment.js":
/*!**************************************!*\
  !*** ./component/article/comment.js ***!
  \**************************************/
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
/* harmony import */ var _domList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domList */ "./component/article/domList.js");


var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\article\\comment.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Comment = function Comment(_ref) {
  var message = _ref.message,
      id = _ref.id;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //获取用户信息
    var userId = localStorage.getItem("user-id");
    var userName = localStorage.getItem("user-name");

    if (!userId) {
      userId = "youke" + Date.now();
      localStorage.setItem("user-id", userId);
    }

    if (!userName) {
      userName = "游客" + String(Date.now()).slice(-5);
      localStorage.setItem("user-name", userName);
    }

    setUserName(userName);
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      userName = _useState[0],
      setUserName = _useState[1];

  var changeUserName = function changeUserName(e) {
    //用户自定义名字
    var value = e.target.value;
    setUserName(value);
    localStorage.setItem("user-name", value);
  };

  var submitEvent = function submitEvent(e) {
    var data, QURL, res, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function submitEvent$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            e.preventDefault();
            data = new FormData(e.target);
            QURL = "http://localhost:4040/" + "addArticle/articleComment/" + id;
            _context.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(QURL, {
              method: "POST",
              body: data
            }));

          case 6:
            res = _context.sent;

            if (!res.ok) {
              _context.next = 14;
              break;
            }

            _context.next = 10;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

          case 10:
            result = _context.sent;
            setState(result);
            _context.next = 16;
            break;

          case 14:
            alert("添加出错，服务器去看妹子了。");
            console.log(error);

          case 16:
            _context.next = 21;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 18]], Promise);
  };

  var inputAutoHeight = function inputAutoHeight(e) {
    var dom = e.target; // 内容高度自动适应

    dom.style.height = dom.scrollHeight > dom.offsetHeight ? dom.scrollHeight + 10 + "px" : dom.offsetHeight + "px";
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(message.slice(0, 3)),
      state = _useState2[0],
      setState = _useState2[1]; //评论列表
  //   let domList = state.map((item) => (
  //     <div className="col-12" key={item.createTime}>
  //       <div className="row">
  //         <h3>{item.username + " : " + item.message}</h3>
  //       </div>
  //     </div>
  //   ));


  return __jsx("form", {
    onSubmit: submitEvent,
    className: "jsx-2726780744" + " " + "row comment m-0 p-0 justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2726780744" + " " + "col-10 col-lg-8 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2726780744" + " " + "row justify-content-between ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-2726780744" + " " + "comment-item m-0 py-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, message.length, " \u8BC4\u8BBA"), __jsx("input", {
    type: "text",
    name: "username",
    value: userName ? userName : "",
    onInput: changeUserName,
    onChange: changeUserName,
    id: "username",
    className: "jsx-2726780744" + " " + "px-4 usename text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-2726780744" + " " + "row mt-5 align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx("textarea", {
    type: "text",
    name: "message",
    id: "comment",
    onInput: inputAutoHeight,
    className: "jsx-2726780744" + " " + "col px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }), __jsx("button", {
    type: "submit",
    className: "jsx-2726780744",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "jsx-2726780744" + " " + "iconfont icon-cloud-upload col-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }))), __jsx("div", {
    style: {
      padding: "20px 80px"
    },
    className: "jsx-2726780744" + " " + "row comment-list justify-content-center align-items-center position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, message.length > 0 ? __jsx(_domList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    list: state,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }) : __jsx("h3", {
    className: "jsx-2726780744",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, " \u505A\u7B2C\u4E00\u4E2A\u8BC4\u8BBA\uFF1F "))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2726780744",
    __self: _this
  }, ".comment.jsx-2726780744{padding:10rem 0;}h2.jsx-2726780744{font-weight:700;}.look-more.jsx-2726780744{right:70px;top:10px;color:#007bff;cursor:pointer;}i.jsx-2726780744{font-size:40px;cursor:pointer;-webkit-transition:0.2s;transition:0.2s;}i.jsx-2726780744:hover{color:#007bff;}.col-8.jsx-2726780744>.row.jsx-2726780744:nth-child(1){border-bottom:2px solid #eaeaea;}img.jsx-2726780744{height:40px;border-radius:50%;}.comment-item.jsx-2726780744{border-bottom:2px solid black;position:relative;top:2px;}.comment-list.jsx-2726780744{min-height:20vh;border-bottom:2px solid #eaeaea;}input.jsx-2726780744,textarea.jsx-2726780744{font-size:2rem;font-weight:500;}input[name=\"username\"].jsx-2726780744{border:none;}button.jsx-2726780744{background:none;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZVxcY29tbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSFMsQUFHNkIsQUFHQSxBQUdMLEFBTUksQUFLRCxBQUdrQixBQUdwQixBQUlrQixBQUtkLEFBS0QsQUFLSCxBQUdJLFdBdENQLENBaUJTLEFBbUJwQixFQXpCQSxDQUxpQixBQXlCQyxDQXJDbEIsQUFHQSxBQTZCa0MsQUFhcEIsSUF0Q0UsUUF1Q2hCLEVBakNrQixBQVdsQixBQUdvQixDQVdwQixDQWxCQSxFQVppQixjQW9CUCxBQUtWLENBeEJBLE9Bb0JBLGNBZkEiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxhcnRpY2xlXFxjb21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gXCIuL2RvbUxpc3RcIjtcclxuXHJcbmNvbnN0IENvbW1lbnQgPSAoeyBtZXNzYWdlLCBpZCB9KSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8v6I635Y+W55So5oi35L+h5oGvXHJcbiAgICBsZXQgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLWlkXCIpO1xyXG4gICAgbGV0IHVzZXJOYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLW5hbWVcIik7XHJcbiAgICBpZiAoIXVzZXJJZCkge1xyXG4gICAgICB1c2VySWQgPSBcInlvdWtlXCIgKyBEYXRlLm5vdygpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXItaWRcIiwgdXNlcklkKTtcclxuICAgIH1cclxuICAgIGlmICghdXNlck5hbWUpIHtcclxuICAgICAgdXNlck5hbWUgPSBcIua4uOWuolwiICsgU3RyaW5nKERhdGUubm93KCkpLnNsaWNlKC01KTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLW5hbWVcIiwgdXNlck5hbWUpO1xyXG4gICAgfVxyXG4gICAgc2V0VXNlck5hbWUodXNlck5hbWUpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGNoYW5nZVVzZXJOYW1lID0gKGUpID0+IHtcclxuICAgIC8v55So5oi36Ieq5a6a5LmJ5ZCN5a2XXHJcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHNldFVzZXJOYW1lKHZhbHVlKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci1uYW1lXCIsIHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdWJtaXRFdmVudCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAvL+aPkOS6pOS6i+S7tlxyXG4gICAgdHJ5IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XHJcbiAgICAgIGNvbnN0IFFVUkwgPSBwcm9jZXNzLmVudi5EQVRBX1VSTCArIFwiYWRkQXJ0aWNsZS9hcnRpY2xlQ29tbWVudC9cIiArIGlkO1xyXG4gICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goUVVSTCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBzZXRTdGF0ZShyZXN1bHQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KFwi5re75Yqg5Ye66ZSZ77yM5pyN5Yqh5Zmo5Y6755yL5aa55a2Q5LqG44CCXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBpbnB1dEF1dG9IZWlnaHQgPSAoZSkgPT4ge1xyXG4gICAgbGV0IGRvbSA9IGUudGFyZ2V0OyAvLyDlhoXlrrnpq5jluqboh6rliqjpgILlupRcclxuICAgIGRvbS5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICBkb20uc2Nyb2xsSGVpZ2h0ID4gZG9tLm9mZnNldEhlaWdodFxyXG4gICAgICAgID8gZG9tLnNjcm9sbEhlaWdodCArIDEwICsgXCJweFwiXHJcbiAgICAgICAgOiBkb20ub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUobWVzc2FnZS5zbGljZSgwLCAzKSk7IC8v6K+E6K665YiX6KGoXHJcblxyXG4gIC8vICAgbGV0IGRvbUxpc3QgPSBzdGF0ZS5tYXAoKGl0ZW0pID0+IChcclxuICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIiBrZXk9e2l0ZW0uY3JlYXRlVGltZX0+XHJcbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAvLyAgICAgICAgIDxoMz57aXRlbS51c2VybmFtZSArIFwiIDogXCIgKyBpdGVtLm1lc3NhZ2V9PC9oMz5cclxuICAvLyAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgPC9kaXY+XHJcbiAgLy8gICApKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm1cclxuICAgICAgY2xhc3NOYW1lPVwicm93IGNvbW1lbnQgbS0wIHAtMCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcclxuICAgICAgb25TdWJtaXQ9e3N1Ym1pdEV2ZW50fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBjb2wtbGctOCBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb21tZW50LWl0ZW0gbS0wIHB5LTNcIj57bWVzc2FnZS5sZW5ndGh9IOivhOiuujwvaDI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlck5hbWUgPyB1c2VyTmFtZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIG9uSW5wdXQ9e2NoYW5nZVVzZXJOYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlVXNlck5hbWV9XHJcbiAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHVzZW5hbWUgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC01IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICBpZD1cImNvbW1lbnRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wgcHgtNCBweS0yXCJcclxuICAgICAgICAgICAgb25JbnB1dD17aW5wdXRBdXRvSGVpZ2h0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLWNsb3VkLXVwbG9hZCBjb2wtYXV0b1wiPjwvaT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBjb21tZW50LWxpc3QganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgcG9zaXRpb24tcmVsYXRpdmVcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCIyMHB4IDgwcHhcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHttZXNzYWdlLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgIDxDb21tZW50TGlzdCBsaXN0PXtzdGF0ZX0gLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxoMz4g5YGa56ys5LiA5Liq6K+E6K6677yfIDwvaDM+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgey8qIDxoNFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwb3NpdGlvbi1hYnNvbHV0ZSBsb29rLW1vcmVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0ZShtZXNzYWdlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg5p+l55yL5pu05aSaXHJcbiAgICAgICAgICA8L2g0PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5jb21tZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTByZW0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb29rLW1vcmUge1xyXG4gICAgICAgICAgICByaWdodDogNzBweDtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbC04ID4gLnJvdzpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbW1lbnQtaXRlbSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb21tZW50LWxpc3Qge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyMHZoO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXRbbmFtZT1cInVzZXJuYW1lXCJdIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\article\\\\comment.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ })

})
//# sourceMappingURL=article.js.76ff3c0cc0cfc70777e1.hot-update.js.map