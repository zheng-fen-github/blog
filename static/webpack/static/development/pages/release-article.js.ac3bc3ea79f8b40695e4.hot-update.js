webpackHotUpdate("static\\development\\pages\\release-article.js",{

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
/* harmony import */ var _component_release_article_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/release-article/nav */ "./component/release-article/nav.js");
/* harmony import */ var _component_release_article_author__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/release-article/author */ "./component/release-article/author.js");
/* harmony import */ var _component_release_article_articleContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/release-article/articleContent */ "./component/release-article/articleContent.js");
/* harmony import */ var _component_release_article_about__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/release-article/about */ "./component/release-article/about.js");
/* harmony import */ var _component_release_article_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/release-article/footer */ "./component/release-article/footer.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);


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
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-680210942",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
      lineNumber: 100,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "//at.alicdn.com/t/font_1748919_7p01375xskx.css",
    className: "jsx-680210942",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
      lineNumber: 110,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-680210942" + " " + "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, __jsx("nav", {
    className: "jsx-680210942",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx(_component_release_article_nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  })), __jsx("form", {
    onSubmit: submitForm,
    className: "jsx-680210942",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx(_component_release_article_author__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }), __jsx(_component_release_article_articleContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setLinkList: setLinkList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }), __jsx(_component_release_article_about__WEBPACK_IMPORTED_MODULE_7__["default"], {
    List: LinkList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  })), __jsx(_component_release_article_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "680210942",
    __self: _this
  }, "*,body{margin:0;padding:0;box-sizing:border-box;}html{font-size:10px;}.container-fluid{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxyZWxlYXNlLWFydGljbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEh5QixBQUlvQixBQUtNLEFBR0wsU0FQQSxDQVFaLEtBSEEsSUFKd0Isc0JBQ3hCIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXHBhZ2VzXFxyZWxlYXNlLWFydGljbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnQvcmVsZWFzZS1hcnRpY2xlL25hdlwiO1xyXG5pbXBvcnQgQXV0aG9yIGZyb20gXCIuLi9jb21wb25lbnQvcmVsZWFzZS1hcnRpY2xlL2F1dGhvclwiO1xyXG5pbXBvcnQgQXJ0Q29udGVudCBmcm9tIFwiLi4vY29tcG9uZW50L3JlbGVhc2UtYXJ0aWNsZS9hcnRpY2xlQ29udGVudFwiO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4uL2NvbXBvbmVudC9yZWxlYXNlLWFydGljbGUvYWJvdXRcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50L3JlbGVhc2UtYXJ0aWNsZS9mb290ZXJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHVwbG9hZERhdGEgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgUVVSTCA9IHByb2Nlc3MuZW52LkRBVEFfVVJMICsgXCJhZGRBcnRpY2xlL2FkZFwiO1xyXG4gICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goUVVSTCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpO1xyXG4gICAgICAgIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICBpZiAoa2V5ICE9PSBcImF1dGhvci1uYW1lXCIgJiYga2V5ICE9PSBcImFydGljbGUta2V5XCIpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG9wZW5SZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oXCJhcnRpY2xlLXN0b3JlXCIsIDIpO1xyXG4gICAgICAgIG9wZW5SZXF1ZXN0Lm9uc3VjY2VzcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGxldCBkYiA9IG9wZW5SZXF1ZXN0LnJlc3VsdDtcclxuICAgICAgICAgIGxldCB0eCA9IGRiLnRyYW5zYWN0aW9uKFwicGhvdG9CdWZmZXJcIiwgXCJyZWFkd3JpdGVcIik7XHJcbiAgICAgICAgICBsZXQgc3RvcmUgPSB0eC5vYmplY3RTdG9yZShcInBob3RvQnVmZmVyXCIpO1xyXG4gICAgICAgICAgbGV0IGtleXMgPSBzdG9yZS5nZXRBbGxLZXlzKCk7XHJcbiAgICAgICAgICBrZXlzLm9uc3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAga2V5cy5yZXN1bHQubWFwKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoa2V5ICE9PSBcImFydGljbGUtYXV0aG9yLXBob3RvXCIpIHtcclxuICAgICAgICAgICAgICAgIHN0b3JlLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGVcIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KHJlc3VsdCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEZvcm0gPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xyXG4gICAgbGV0IGNvbnRlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFydGljbGUtY29udGVudC1vYmplY3RcIik7XHJcblxyXG4gICAgbGV0IGZpbGVMaXN0ID0gSlNPTi5wYXJzZShjb250ZW50KS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udHlwZSA9PT0gXCJwaG90b1wiKTtcclxuICAgIGZpbGVMaXN0LnB1c2goe1xyXG4gICAgICBrZXk6IFwiYXJ0aWNsZS1hdXRob3ItcGhvdG9cIixcclxuICAgIH0pO1xyXG4gICAgbGV0IG9wZW5SZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oXCJhcnRpY2xlLXN0b3JlXCIsIDIpO1xyXG4gICAgb3BlblJlcXVlc3Qub25zdWNjZXNzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBsZXQgZGIgPSBvcGVuUmVxdWVzdC5yZXN1bHQ7XHJcbiAgICAgIGxldCB0eCA9IGRiLnRyYW5zYWN0aW9uKFwicGhvdG9CdWZmZXJcIik7XHJcbiAgICAgIGxldCBzdG9yZSA9IHR4Lm9iamVjdFN0b3JlKFwicGhvdG9CdWZmZXJcIik7XHJcbiAgICAgIGxldCByZXFzID0gZmlsZUxpc3QubWFwKFxyXG4gICAgICAgIChpdGVtKSA9PlxyXG4gICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGhvdG8gPSBzdG9yZS5nZXQoaXRlbS5rZXkpO1xyXG4gICAgICAgICAgICBwaG90by5vbnN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHBob3RvLnJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICAgIGZpbGU6IHBob3RvLnJlc3VsdC5maWxlLFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLmtleSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoXCLmnInkuIDkuKrlm77niYfmnb/lnZfmsqHmnInmlofku7bjgILor7fkuIrkvKDmiJbmmK/liKDpmaTngrnov5nkuKrmnb/lnZdcIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgUHJvbWlzZS5hbGwocmVxcylcclxuICAgICAgICAudGhlbigoaXRlbXMpID0+IHtcclxuICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZChpdGVtLm5hbWUsIGl0ZW0uZmlsZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGRhdGEuYXBwZW5kKFwiYXJ0aWNsZS1jb250ZW50LW1haW5cIiwgY29udGVudCk7XHJcbiAgICAgICAgICBkYXRhLmFwcGVuZChcImxpbmstY291bnRcIiwgTGlua0xpc3QubGVuZ3RoKTtcclxuICAgICAgICAgIHVwbG9hZERhdGEoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goYWxlcnQpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbTGlua0xpc3QsIHNldExpbmtMaXN0XSA9IHVzZVN0YXRlKFtcImFcIl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPue8luWGmeaWh+eroDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDQuNC4xL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1Wa29vOHg0Q0dzTzMrSGh4djhUL1E1UGFYdGtLdHU2dWc1VE9lTlY2Z0JpRmVXUEdGTjlNdWhPZjIzUTlJZmpoXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzE3NDg5MTlfN3AwMTM3NXhza3guY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2xvZ28uanBnXCIgdHlwZT1cImltYWdlL3gtaWNvblwiPjwvbGluaz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICA8TmF2IC8+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEZvcm19PlxyXG4gICAgICAgICAgPEF1dGhvciAvPlxyXG5cclxuICAgICAgICAgIDxBcnRDb250ZW50IHNldExpbmtMaXN0PXtzZXRMaW5rTGlzdH0gLz5cclxuXHJcbiAgICAgICAgICA8QWJvdXQgTGlzdD17TGlua0xpc3R9IC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAqLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\pages\\\\release-article.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=release-article.js.ac3bc3ea79f8b40695e4.hot-update.js.map