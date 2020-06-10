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
  }, message.length, " Comments"), __jsx("input", {
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
  }, __jsx("img", {
    src: "images/site_05.jpg",
    alt: "",
    className: "jsx-2726780744" + " " + "col-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }), __jsx("textarea", {
    type: "text",
    name: "message",
    id: "comment",
    onInput: inputAutoHeight,
    className: "jsx-2726780744" + " " + "col px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }), __jsx("button", {
    type: "submit",
    className: "jsx-2726780744",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "jsx-2726780744" + " " + "iconfont icon-cloud-upload col-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
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
      lineNumber: 96,
      columnNumber: 9
    }
  }, message.length > 0 ? __jsx(_domList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }) : __jsx("h3", {
    className: "jsx-2726780744",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, " Be the first to comment\u3002 "), __jsx("h4", {
    onClick: function onClick() {
      return setState(message);
    },
    className: "jsx-2726780744" + " " + "position-absolute look-more",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, "look more"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2726780744",
    __self: _this
  }, ".comment.jsx-2726780744{padding:10rem 0;}h2.jsx-2726780744{font-weight:700;}.look-more.jsx-2726780744{right:70px;top:10px;color:#007bff;cursor:pointer;}i.jsx-2726780744{font-size:40px;cursor:pointer;-webkit-transition:0.2s;transition:0.2s;}i.jsx-2726780744:hover{color:#007bff;}.col-8.jsx-2726780744>.row.jsx-2726780744:nth-child(1){border-bottom:2px solid #eaeaea;}img.jsx-2726780744{height:40px;border-radius:50%;}.comment-item.jsx-2726780744{border-bottom:2px solid black;position:relative;top:2px;}.comment-list.jsx-2726780744{min-height:20vh;border-bottom:2px solid #eaeaea;}input.jsx-2726780744,textarea.jsx-2726780744{font-size:2rem;font-weight:500;}input[name=\"username\"].jsx-2726780744{border:none;}button.jsx-2726780744{background:none;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZVxcY29tbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSFMsQUFHNkIsQUFHQSxBQUdMLEFBTUksQUFLRCxBQUdrQixBQUdwQixBQUlrQixBQUtkLEFBS0QsQUFLSCxBQUdJLFdBdENQLENBaUJTLEFBbUJwQixFQXpCQSxDQUxpQixBQXlCQyxDQXJDbEIsQUFHQSxBQTZCa0MsQUFhcEIsSUF0Q0UsUUF1Q2hCLEVBakNrQixBQVdsQixBQUdvQixDQVdwQixDQWxCQSxFQVppQixjQW9CUCxBQUtWLENBeEJBLE9Bb0JBLGNBZkEiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxhcnRpY2xlXFxjb21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gXCIuL2RvbUxpc3RcIjtcclxuXHJcbmNvbnN0IENvbW1lbnQgPSAoeyBtZXNzYWdlLCBpZCB9KSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8v6I635Y+W55So5oi35L+h5oGvXHJcbiAgICBsZXQgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLWlkXCIpO1xyXG4gICAgbGV0IHVzZXJOYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLW5hbWVcIik7XHJcbiAgICBpZiAoIXVzZXJJZCkge1xyXG4gICAgICB1c2VySWQgPSBcInlvdWtlXCIgKyBEYXRlLm5vdygpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXItaWRcIiwgdXNlcklkKTtcclxuICAgIH1cclxuICAgIGlmICghdXNlck5hbWUpIHtcclxuICAgICAgdXNlck5hbWUgPSBcIua4uOWuolwiICsgU3RyaW5nKERhdGUubm93KCkpLnNsaWNlKC01KTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLW5hbWVcIiwgdXNlck5hbWUpO1xyXG4gICAgfVxyXG4gICAgc2V0VXNlck5hbWUodXNlck5hbWUpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGNoYW5nZVVzZXJOYW1lID0gKGUpID0+IHtcclxuICAgIC8v55So5oi36Ieq5a6a5LmJ5ZCN5a2XXHJcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHNldFVzZXJOYW1lKHZhbHVlKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci1uYW1lXCIsIHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdWJtaXRFdmVudCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAvL+aPkOS6pOS6i+S7tlxyXG4gICAgdHJ5IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XHJcbiAgICAgIGNvbnN0IFFVUkwgPSBwcm9jZXNzLmVudi5EQVRBX1VSTCArIFwiYWRkQXJ0aWNsZS9hcnRpY2xlQ29tbWVudC9cIiArIGlkO1xyXG4gICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goUVVSTCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBzZXRTdGF0ZShyZXN1bHQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KFwi5re75Yqg5Ye66ZSZ77yM5pyN5Yqh5Zmo5Y6755yL5aa55a2Q5LqG44CCXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBpbnB1dEF1dG9IZWlnaHQgPSAoZSkgPT4ge1xyXG4gICAgbGV0IGRvbSA9IGUudGFyZ2V0OyAvLyDlhoXlrrnpq5jluqboh6rliqjpgILlupRcclxuICAgIGRvbS5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICBkb20uc2Nyb2xsSGVpZ2h0ID4gZG9tLm9mZnNldEhlaWdodFxyXG4gICAgICAgID8gZG9tLnNjcm9sbEhlaWdodCArIDEwICsgXCJweFwiXHJcbiAgICAgICAgOiBkb20ub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUobWVzc2FnZS5zbGljZSgwLCAzKSk7IC8v6K+E6K665YiX6KGoXHJcblxyXG4gIC8vICAgbGV0IGRvbUxpc3QgPSBzdGF0ZS5tYXAoKGl0ZW0pID0+IChcclxuICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIiBrZXk9e2l0ZW0uY3JlYXRlVGltZX0+XHJcbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAvLyAgICAgICAgIDxoMz57aXRlbS51c2VybmFtZSArIFwiIDogXCIgKyBpdGVtLm1lc3NhZ2V9PC9oMz5cclxuICAvLyAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgPC9kaXY+XHJcbiAgLy8gICApKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm1cclxuICAgICAgY2xhc3NOYW1lPVwicm93IGNvbW1lbnQgbS0wIHAtMCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcclxuICAgICAgb25TdWJtaXQ9e3N1Ym1pdEV2ZW50fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBjb2wtbGctOCBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb21tZW50LWl0ZW0gbS0wIHB5LTNcIj57bWVzc2FnZS5sZW5ndGh9IENvbW1lbnRzPC9oMj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VyTmFtZSA/IHVzZXJOYW1lIDogXCJcIn1cclxuICAgICAgICAgICAgb25JbnB1dD17Y2hhbmdlVXNlck5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VVc2VyTmFtZX1cclxuICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgdXNlbmFtZSB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTUgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9zaXRlXzA1LmpwZ1wiIGNsYXNzTmFtZT1cImNvbC1hdXRvXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgaWQ9XCJjb21tZW50XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sIHB4LTQgcHktMlwiXHJcbiAgICAgICAgICAgIG9uSW5wdXQ9e2lucHV0QXV0b0hlaWdodH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbi1jbG91ZC11cGxvYWQgY29sLWF1dG9cIj48L2k+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgY29tbWVudC1saXN0IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHBvc2l0aW9uLXJlbGF0aXZlXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweCA4MHB4XCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bWVzc2FnZS5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICA8Q29tbWVudExpc3QgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxoMz4gQmUgdGhlIGZpcnN0IHRvIGNvbW1lbnTjgIIgPC9oMz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8aDRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zaXRpb24tYWJzb2x1dGUgbG9vay1tb3JlXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U3RhdGUobWVzc2FnZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIGxvb2sgbW9yZVxyXG4gICAgICAgICAgPC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5jb21tZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTByZW0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb29rLW1vcmUge1xyXG4gICAgICAgICAgICByaWdodDogNzBweDtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbC04ID4gLnJvdzpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbW1lbnQtaXRlbSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb21tZW50LWxpc3Qge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyMHZoO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXRbbmFtZT1cInVzZXJuYW1lXCJdIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\article\\\\comment.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ }),

/***/ "./component/article/domList.js":
/*!**************************************!*\
  !*** ./component/article/domList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\article\\domList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var DomList = function DomList(_ref) {
  var list = _ref.list;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, list.map(function (com) {
    return __jsx("div", {
      className: "col-12",
      key: com.createTime,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 11
      }
    }, com.username + " : " + com.message)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DomList);

/***/ })

})
//# sourceMappingURL=article.js.01a63920ca8d112c3862.hot-update.js.map