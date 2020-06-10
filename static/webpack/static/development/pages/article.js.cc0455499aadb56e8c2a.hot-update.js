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
    localStorage.setItem("user-name", userName);
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


  var domList = state.map(function (item) {
    return __jsx("div", {
      className: "col-12",
      key: item.createTime,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 7
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }
    }, item.username + " : " + item.message)));
  });
  return __jsx("form", {
    onSubmit: submitEvent,
    className: "jsx-2726780744" + " " + "row comment m-0 p-0 justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2726780744" + " " + "col-10 col-lg-8 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2726780744" + " " + "row justify-content-between ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-2726780744" + " " + "comment-item m-0 py-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
      lineNumber: 72,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-2726780744" + " " + "row mt-5 align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "images/site_05.jpg",
    alt: "",
    className: "jsx-2726780744" + " " + "col-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
  }, message.length > 0 ? domList : __jsx("h3", {
    className: "jsx-2726780744",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 43
    }
  }, " Be the first to comment\u3002 "), __jsx("h4", {
    onClick: function onClick() {
      return setState(message);
    },
    className: "jsx-2726780744" + " " + "position-absolute look-more",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, "look more"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2726780744",
    __self: _this
  }, ".comment.jsx-2726780744{padding:10rem 0;}h2.jsx-2726780744{font-weight:700;}.look-more.jsx-2726780744{right:70px;top:10px;color:#007bff;cursor:pointer;}i.jsx-2726780744{font-size:40px;cursor:pointer;-webkit-transition:0.2s;transition:0.2s;}i.jsx-2726780744:hover{color:#007bff;}.col-8.jsx-2726780744>.row.jsx-2726780744:nth-child(1){border-bottom:2px solid #eaeaea;}img.jsx-2726780744{height:40px;border-radius:50%;}.comment-item.jsx-2726780744{border-bottom:2px solid black;position:relative;top:2px;}.comment-list.jsx-2726780744{min-height:20vh;border-bottom:2px solid #eaeaea;}input.jsx-2726780744,textarea.jsx-2726780744{font-size:2rem;font-weight:500;}input[name=\"username\"].jsx-2726780744{border:none;}button.jsx-2726780744{background:none;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcYXJ0aWNsZVxcY29tbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0R1MsQUFHNkIsQUFHQSxBQUdMLEFBTUksQUFLRCxBQUdrQixBQUdwQixBQUlrQixBQUtkLEFBS0QsQUFLSCxBQUdJLFdBdENQLENBaUJTLEFBbUJwQixFQXpCQSxDQUxpQixBQXlCQyxDQXJDbEIsQUFHQSxBQTZCa0MsQUFhcEIsSUF0Q0UsUUF1Q2hCLEVBakNrQixBQVdsQixBQUdvQixDQVdwQixDQWxCQSxFQVppQixjQW9CUCxBQUtWLENBeEJBLE9Bb0JBLGNBZkEiLCJmaWxlIjoiQzpcXG5ld2xpZmVcXG5ld1NpdGVcXG15LWFwcFxcY29tcG9uZW50XFxhcnRpY2xlXFxjb21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENvbW1lbnQgPSAoeyBtZXNzYWdlLCBpZCB9KSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8v6I635Y+W55So5oi35L+h5oGvXHJcbiAgICBsZXQgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLWlkXCIpO1xyXG4gICAgbGV0IHVzZXJOYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLW5hbWVcIik7XHJcbiAgICBpZiAoIXVzZXJJZCkge1xyXG4gICAgICB1c2VySWQgPSBcInlvdWtlXCIgKyBEYXRlLm5vdygpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXItaWRcIiwgdXNlcklkKTtcclxuICAgIH1cclxuICAgIGlmICghdXNlck5hbWUpIHtcclxuICAgICAgdXNlck5hbWUgPSBcIua4uOWuolwiICsgU3RyaW5nKERhdGUubm93KCkpLnNsaWNlKC01KTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLW5hbWVcIiwgdXNlck5hbWUpO1xyXG4gICAgfVxyXG4gICAgc2V0VXNlck5hbWUodXNlck5hbWUpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGNoYW5nZVVzZXJOYW1lID0gKGUpID0+IHtcclxuICAgIC8v55So5oi36Ieq5a6a5LmJ5ZCN5a2XXHJcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHNldFVzZXJOYW1lKHZhbHVlKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci1uYW1lXCIsIHVzZXJOYW1lKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdWJtaXRFdmVudCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAvL+aPkOS6pOS6i+S7tlxyXG4gICAgdHJ5IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XHJcbiAgICAgIGNvbnN0IFFVUkwgPSBwcm9jZXNzLmVudi5EQVRBX1VSTCArIFwiYWRkQXJ0aWNsZS9hcnRpY2xlQ29tbWVudC9cIiArIGlkO1xyXG4gICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goUVVSTCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBzZXRTdGF0ZShyZXN1bHQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KFwi5re75Yqg5Ye66ZSZ77yM5pyN5Yqh5Zmo5Y6755yL5aa55a2Q5LqG44CCXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBpbnB1dEF1dG9IZWlnaHQgPSAoZSkgPT4ge1xyXG4gICAgbGV0IGRvbSA9IGUudGFyZ2V0OyAvLyDlhoXlrrnpq5jluqboh6rliqjpgILlupRcclxuICAgIGRvbS5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICBkb20uc2Nyb2xsSGVpZ2h0ID4gZG9tLm9mZnNldEhlaWdodFxyXG4gICAgICAgID8gZG9tLnNjcm9sbEhlaWdodCArIDEwICsgXCJweFwiXHJcbiAgICAgICAgOiBkb20ub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUobWVzc2FnZS5zbGljZSgwLCAzKSk7IC8v6K+E6K665YiX6KGoXHJcblxyXG4gIGxldCBkb21MaXN0ID0gc3RhdGUubWFwKChpdGVtKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiIGtleT17aXRlbS5jcmVhdGVUaW1lfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8aDM+e2l0ZW0udXNlcm5hbWUgKyBcIiA6IFwiICsgaXRlbS5tZXNzYWdlfTwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtXHJcbiAgICAgIGNsYXNzTmFtZT1cInJvdyBjb21tZW50IG0tMCBwLTAganVzdGlmeS1jb250ZW50LWNlbnRlclwiXHJcbiAgICAgIG9uU3VibWl0PXtzdWJtaXRFdmVudH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTAgY29sLWxnLTggXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWJldHdlZW4gXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY29tbWVudC1pdGVtIG0tMCBweS0zXCI+e21lc3NhZ2UubGVuZ3RofSBDb21tZW50czwvaDI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlck5hbWUgPyB1c2VyTmFtZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIG9uSW5wdXQ9e2NoYW5nZVVzZXJOYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlVXNlck5hbWV9XHJcbiAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHVzZW5hbWUgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC01IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvc2l0ZV8wNS5qcGdcIiBjbGFzc05hbWU9XCJjb2wtYXV0b1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgIGlkPVwiY29tbWVudFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbCBweC00IHB5LTJcIlxyXG4gICAgICAgICAgICBvbklucHV0PXtpbnB1dEF1dG9IZWlnaHR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25mb250IGljb24tY2xvdWQtdXBsb2FkIGNvbC1hdXRvXCI+PC9pPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm93IGNvbW1lbnQtbGlzdCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBwb3NpdGlvbi1yZWxhdGl2ZVwiXHJcbiAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHggODBweFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge21lc3NhZ2UubGVuZ3RoID4gMCA/IGRvbUxpc3QgOiA8aDM+IEJlIHRoZSBmaXJzdCB0byBjb21tZW5044CCIDwvaDM+fVxyXG4gICAgICAgICAgPGg0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlIGxvb2stbW9yZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFN0YXRlKG1lc3NhZ2UpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBsb29rIG1vcmVcclxuICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuY29tbWVudCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcmVtIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9vay1tb3JlIHtcclxuICAgICAgICAgICAgcmlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGk6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb2wtOCA+IC5yb3c6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb21tZW50LWl0ZW0ge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29tbWVudC1saXN0IHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMjB2aDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0W25hbWU9XCJ1c2VybmFtZVwiXSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\article\\\\comment.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ })

})
//# sourceMappingURL=article.js.cc0455499aadb56e8c2a.hot-update.js.map