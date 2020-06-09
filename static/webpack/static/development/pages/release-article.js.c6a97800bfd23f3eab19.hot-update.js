webpackHotUpdate("static\\development\\pages\\release-article.js",{

/***/ "./component/release-article/nav.js":
false,

/***/ "./pages/release-article.js":
/*!**********************************!*\
  !*** ./pages/release-article.js ***!
  \**********************************/
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_public_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/public/nav */ "./component/public/nav.js");
/* harmony import */ var _component_release_article_author__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/release-article/author */ "./component/release-article/author.js");
/* harmony import */ var _component_release_article_articleContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/release-article/articleContent */ "./component/release-article/articleContent.js");
/* harmony import */ var _component_release_article_about__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/release-article/about */ "./component/release-article/about.js");
/* harmony import */ var _component_release_article_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/release-article/footer */ "./component/release-article/footer.js");


var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\pages\\release-article.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var Home = function Home() {
  var uploadData = function uploadData(data) {
    var QURL, res, result, keys, _i, _keys, key, openRequest;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function uploadData$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            QURL = "http://localhost:4040/" + "addArticle/add";
            _context2.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(QURL, {
              method: "POST",
              body: data
            }));

          case 4:
            res = _context2.sent;
            _context2.next = 7;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

          case 7:
            result = _context2.sent;

            if (res.ok) {
              keys = Object.keys(localStorage);

              for (_i = 0, _keys = keys; _i < _keys.length; _i++) {
                key = _keys[_i];

                if (key !== "author-name" && key !== "article-key") {
                  localStorage.removeItem(key);
                }
              }

              openRequest = indexedDB.open("article-store", 2);

              openRequest.onsuccess = function _callee() {
                var db, tx, store, keys;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        db = openRequest.result;
                        tx = db.transaction("photoBuffer", "readwrite");
                        store = tx.objectStore("photoBuffer");
                        keys = store.getAllKeys();

                        keys.onsuccess = function () {
                          keys.result.map(function (key) {
                            if (key !== "article-author-photo") {
                              store["delete"](key);
                              console.log("delete");
                            }
                          });
                          window.location.reload();
                        };

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, null, null, null, Promise);
              };
            } else {
              alert(result);
            }

            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 11]], Promise);
  };

  var submitForm = function submitForm(e) {
    e.preventDefault();
    var data = new FormData(e.target);
    var content = localStorage.getItem("article-content-object");
    var fileList = JSON.parse(content).filter(function (item) {
      return item.type === "photo";
    });
    fileList.push({
      key: "article-author-photo"
    });
    var openRequest = indexedDB.open("article-store", 2);

    openRequest.onsuccess = function _callee2() {
      var db, tx, store, reqs;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              db = openRequest.result;
              tx = db.transaction("photoBuffer");
              store = tx.objectStore("photoBuffer");
              reqs = fileList.map(function (item) {
                return new Promise(function (resolve, reject) {
                  var photo = store.get(item.key);

                  photo.onsuccess = function () {
                    if (photo.result) {
                      resolve({
                        file: photo.result.file,
                        name: item.key
                      });
                    } else {
                      reject("有一个图片板块没有文件。请上传或是删除点这个板块");
                    }
                  };
                });
              });
              Promise.all(reqs).then(function (items) {
                items.map(function (item) {
                  data.append(item.name, item.file);
                });
                data.append("article-content-main", content);
                data.append("link-count", LinkList.length);
                uploadData(data);
              })["catch"](alert);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    };
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(["a"]),
      LinkList = _useState[0],
      setLinkList = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-680210942",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, "\u7F16\u5199\u6587\u7AE0"), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css",
    integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
    crossorigin: "anonymous",
    className: "jsx-680210942",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "//at.alicdn.com/t/font_1748919_7p01375xskx.css",
    className: "jsx-680210942",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "icon",
    href: "/logo.jpg",
    type: "image/x-icon",
    className: "jsx-680210942",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-680210942" + " " + "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx("nav", {
    className: "jsx-680210942",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx(_component_public_nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "article-bg.jpg",
    alt: "bg",
    className: "jsx-680210942",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }))), __jsx("form", {
    onSubmit: submitForm,
    className: "jsx-680210942",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx(_component_release_article_author__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }), __jsx(_component_release_article_articleContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setLinkList: setLinkList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }), __jsx(_component_release_article_about__WEBPACK_IMPORTED_MODULE_7__["default"], {
    List: LinkList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  })), __jsx(_component_release_article_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "680210942",
    __self: _this
  }, "*,body{margin:0;padding:0;box-sizing:border-box;}html{font-size:10px;}.container-fluid{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxyZWxlYXNlLWFydGljbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0h5QixBQUlvQixBQUtNLEFBR0wsU0FQQSxDQVFaLEtBSEEsSUFKd0Isc0JBQ3hCIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxyZWxlYXNlLWFydGljbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnQvcHVibGljL25hdlwiO1xyXG5pbXBvcnQgQXV0aG9yIGZyb20gXCIuLi9jb21wb25lbnQvcmVsZWFzZS1hcnRpY2xlL2F1dGhvclwiO1xyXG5pbXBvcnQgQXJ0Q29udGVudCBmcm9tIFwiLi4vY29tcG9uZW50L3JlbGVhc2UtYXJ0aWNsZS9hcnRpY2xlQ29udGVudFwiO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4uL2NvbXBvbmVudC9yZWxlYXNlLWFydGljbGUvYWJvdXRcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50L3JlbGVhc2UtYXJ0aWNsZS9mb290ZXJcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdXBsb2FkRGF0YSA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBRVVJMID0gcHJvY2Vzcy5lbnYuREFUQV9VUkwgKyBcImFkZEFydGljbGUvYWRkXCI7XHJcbiAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaChRVVJMLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBkYXRhLFxyXG4gICAgICB9KTtcclxuICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSk7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGtleXMpIHtcclxuICAgICAgICAgIGlmIChrZXkgIT09IFwiYXV0aG9yLW5hbWVcIiAmJiBrZXkgIT09IFwiYXJ0aWNsZS1rZXlcIikge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb3BlblJlcXVlc3QgPSBpbmRleGVkREIub3BlbihcImFydGljbGUtc3RvcmVcIiwgMik7XHJcbiAgICAgICAgb3BlblJlcXVlc3Qub25zdWNjZXNzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgbGV0IGRiID0gb3BlblJlcXVlc3QucmVzdWx0O1xyXG4gICAgICAgICAgbGV0IHR4ID0gZGIudHJhbnNhY3Rpb24oXCJwaG90b0J1ZmZlclwiLCBcInJlYWR3cml0ZVwiKTtcclxuICAgICAgICAgIGxldCBzdG9yZSA9IHR4Lm9iamVjdFN0b3JlKFwicGhvdG9CdWZmZXJcIik7XHJcbiAgICAgICAgICBsZXQga2V5cyA9IHN0b3JlLmdldEFsbEtleXMoKTtcclxuICAgICAgICAgIGtleXMub25zdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBrZXlzLnJlc3VsdC5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChrZXkgIT09IFwiYXJ0aWNsZS1hdXRob3ItcGhvdG9cIikge1xyXG4gICAgICAgICAgICAgICAgc3RvcmUuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZVwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQocmVzdWx0KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XHJcbiAgICBsZXQgY29udGVudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXJ0aWNsZS1jb250ZW50LW9iamVjdFwiKTtcclxuXHJcbiAgICBsZXQgZmlsZUxpc3QgPSBKU09OLnBhcnNlKGNvbnRlbnQpLmZpbHRlcigoaXRlbSkgPT4gaXRlbS50eXBlID09PSBcInBob3RvXCIpO1xyXG4gICAgZmlsZUxpc3QucHVzaCh7XHJcbiAgICAgIGtleTogXCJhcnRpY2xlLWF1dGhvci1waG90b1wiLFxyXG4gICAgfSk7XHJcbiAgICBsZXQgb3BlblJlcXVlc3QgPSBpbmRleGVkREIub3BlbihcImFydGljbGUtc3RvcmVcIiwgMik7XHJcbiAgICBvcGVuUmVxdWVzdC5vbnN1Y2Nlc3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGxldCBkYiA9IG9wZW5SZXF1ZXN0LnJlc3VsdDtcclxuICAgICAgbGV0IHR4ID0gZGIudHJhbnNhY3Rpb24oXCJwaG90b0J1ZmZlclwiKTtcclxuICAgICAgbGV0IHN0b3JlID0gdHgub2JqZWN0U3RvcmUoXCJwaG90b0J1ZmZlclwiKTtcclxuICAgICAgbGV0IHJlcXMgPSBmaWxlTGlzdC5tYXAoXHJcbiAgICAgICAgKGl0ZW0pID0+XHJcbiAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwaG90byA9IHN0b3JlLmdldChpdGVtLmtleSk7XHJcbiAgICAgICAgICAgIHBob3RvLm9uc3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocGhvdG8ucmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgZmlsZTogcGhvdG8ucmVzdWx0LmZpbGUsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ua2V5LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChcIuacieS4gOS4quWbvueJh+adv+Wdl+ayoeacieaWh+S7tuOAguivt+S4iuS8oOaIluaYr+WIoOmZpOeCuei/meS4quadv+Wdl1wiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICBQcm9taXNlLmFsbChyZXFzKVxyXG4gICAgICAgIC50aGVuKChpdGVtcykgPT4ge1xyXG4gICAgICAgICAgaXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKGl0ZW0ubmFtZSwgaXRlbS5maWxlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZGF0YS5hcHBlbmQoXCJhcnRpY2xlLWNvbnRlbnQtbWFpblwiLCBjb250ZW50KTtcclxuICAgICAgICAgIGRhdGEuYXBwZW5kKFwibGluay1jb3VudFwiLCBMaW5rTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgdXBsb2FkRGF0YShkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChhbGVydCk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtMaW5rTGlzdCwgc2V0TGlua0xpc3RdID0gdXNlU3RhdGUoW1wiYVwiXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+57yW5YaZ5paH56ugPC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANC40LjEvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LVZrb284eDRDR3NPMytIaHh2OFQvUTVQYVh0a0t0dTZ1ZzVUT2VOVjZnQmlGZVdQR0ZOOU11aE9mMjNROUlmamhcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTc0ODkxOV83cDAxMzc1eHNreC5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvbG9nby5qcGdcIiB0eXBlPVwiaW1hZ2UveC1pY29uXCI+PC9saW5rPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDxOYXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiYXJ0aWNsZS1iZy5qcGdcIiBhbHQ9XCJiZ1wiIC8+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0Rm9ybX0+XHJcbiAgICAgICAgICA8QXV0aG9yIC8+XHJcblxyXG4gICAgICAgICAgPEFydENvbnRlbnQgc2V0TGlua0xpc3Q9e3NldExpbmtMaXN0fSAvPlxyXG5cclxuICAgICAgICAgIDxBYm91dCBMaXN0PXtMaW5rTGlzdH0gLz5cclxuICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICosXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\pages\\\\release-article.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=release-article.js.c6a97800bfd23f3eab19.hot-update.js.map