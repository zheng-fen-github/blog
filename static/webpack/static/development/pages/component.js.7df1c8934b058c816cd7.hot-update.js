webpackHotUpdate("static\\development\\pages\\component.js",{

/***/ "./component/component/root.js":
/*!*************************************!*\
  !*** ./component/component/root.js ***!
  \*************************************/
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
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content */ "./component/component/content.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar */ "./component/component/Sidebar.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var _this = undefined,
    _jsxFileName = "C:\\newlife\\newSite\\my-app\\component\\component\\root.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Root = function Root(_ref) {
  var action = _ref.action,
      contentType = _ref.contentType;
  var value = contentType === "none" ? "React" : contentType;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(value),
      type = _useState[0],
      setType = _useState[1];

  var selectType = function selectType(e) {
    var dom = e.target.closest("h3");

    if (dom) {
      setType(dom.textContent);
    }
  };

  var getphoto = function getphoto() {
    var QURL, get, message;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getphoto$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            QURL = "http://localhost:4040/" + "getComponentList/all/";
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(QURL + type));

          case 4:
            get = _context.sent;

            if (!get.ok) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(get.json());

          case 8:
            message = _context.sent;
            action({
              type: "GET_TYPE",
              list: message.typeList
            });

          case 10:
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 12]], Promise);
  };

  var scrollTop = function scrollTop() {
    var navDom = document.querySelector(".component-nav");
    navDom.scrollIntoView(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getphoto();
  }, []);
  return __jsx("div", {
    className: "jsx-2895504486" + " " + "row root",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2895504486" + " " + "col-10 offset-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2895504486" + " " + "row p-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2895504486" + " " + "offset-0 offset-xl-3 col",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx("ul", {
    onClick: selectType,
    className: "jsx-2895504486" + " " + "d-flex component-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-2895504486" + " " + ((type === "React" ? "seled" : "") || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-2895504486",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "React")), __jsx("li", {
    className: "jsx-2895504486" + " " + ((type === "JS" ? "seled" : "") || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-2895504486",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "JS")), __jsx("li", {
    className: "jsx-2895504486" + " " + ((type === "CSS" ? "seled" : "") || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-2895504486",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "CSS")), __jsx("li", {
    className: "jsx-2895504486" + " " + ((type === "HtmlBoostrap" ? "seled" : "") || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-2895504486",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, "HtmlBoostrap"))))), __jsx("div", {
    onClick: scrollTop,
    className: "jsx-2895504486" + " " + "goTop position-fixed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "jsx-2895504486" + " " + "iconfont icon-arrow-forward",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-2895504486" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2895504486" + " " + "col-12 col-xl-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-2895504486" + " " + "offset-0 offset-xl-1 col-12 col-xl-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx(_content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: type,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2895504486",
    __self: _this
  }, ".root.jsx-2895504486{margin:0;margin-bottom:20rem;z-index:1000;}.goTop.jsx-2895504486{top:50%;right:10px;-webkit-transform:rotate(-90deg) translateZ(0);-ms-transform:rotate(-90deg) translateZ(0);transform:rotate(-90deg) translateZ(0);background:black;color:white;width:4rem;height:4rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:6px;overflow:hidden;cursor:pointer;}.goTop.jsx-2895504486:hover{background:white;color:black;}.goTop.jsx-2895504486 i.jsx-2895504486{font-size:3rem;}ul.jsx-2895504486{list-style:none;background:black;color:white;margin-bottom:10rem;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);position:-webkit-sticky;position:sticky;top:200px;z-index:5;}li.jsx-2895504486{-webkit-flex:1;-ms-flex:1;flex:1;cursor:pointer;-webkit-transition:0.4s;transition:0.4s;}li.seled.jsx-2895504486{opacity:0.5;}li.jsx-2895504486:hover{opacity:0.5;-webkit-transform:translateY(-25%);-ms-transform:translateY(-25%);transform:translateY(-25%);}h3.jsx-2895504486{padding:2rem;font-size:2.5rem;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcY29tcG9uZW50XFxyb290LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFUyxBQUdzQixBQUtELEFBZVMsQUFJRixBQUdDLEFBVVQsQUFLSyxBQUdBLEFBSUMsUUEzQ0YsQ0FMUyxHQTBDdEIsQUFHNkIsQ0FJVixFQXpCbkIsQ0FHbUIsQ0FQTCxFQWQyQixVQUwxQixBQW9CZixDQTZCb0IsR0F0Qk4sQUFTRyxTQW5DakIsR0EyQnNCLEdBU0osQUFhbEIsaUJBckI2Qix1QkFTN0IsaUJBT0EsMkNBdkNtQixVQXdCRCxPQXZCSixZQUNELFdBQ0MsVUFzQkYsRUFyQkcsUUFzQkgsVUFDWix3REF0QnlCLG1HQUNKLDZGQUNELGtCQUNGLGdCQUNELGVBQ2pCIiwiZmlsZSI6IkM6XFxuZXdsaWZlXFxuZXdTaXRlXFxteS1hcHBcXGNvbXBvbmVudFxcY29tcG9uZW50XFxyb290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29udGVudCBmcm9tIFwiLi9jb250ZW50XCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL1NpZGViYXJcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuY29uc3QgUm9vdCA9ICh7IGFjdGlvbiwgY29udGVudFR5cGUgfSkgPT4ge1xyXG4gIGxldCB2YWx1ZSA9IGNvbnRlbnRUeXBlID09PSBcIm5vbmVcIiA/IFwiUmVhY3RcIiA6IGNvbnRlbnRUeXBlO1xyXG4gIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKHZhbHVlKTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0VHlwZSA9IChlKSA9PiB7XHJcbiAgICBsZXQgZG9tID0gZS50YXJnZXQuY2xvc2VzdChcImgzXCIpO1xyXG4gICAgaWYgKGRvbSkge1xyXG4gICAgICBzZXRUeXBlKGRvbS50ZXh0Q29udGVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBnZXRwaG90byA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IFFVUkwgPSBwcm9jZXNzLmVudi5EQVRBX1VSTCArIFwiZ2V0Q29tcG9uZW50TGlzdC9hbGwvXCI7XHJcbiAgICAgIGxldCBnZXQgPSBhd2FpdCBmZXRjaChRVVJMICsgdHlwZSk7XHJcbiAgICAgIGlmIChnZXQub2spIHtcclxuICAgICAgICBsZXQgbWVzc2FnZSA9IGF3YWl0IGdldC5qc29uKCk7XHJcbiAgICAgICAgYWN0aW9uKHtcclxuICAgICAgICAgIHR5cGU6IFwiR0VUX1RZUEVcIixcclxuICAgICAgICAgIGxpc3Q6IG1lc3NhZ2UudHlwZUxpc3QsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3Qgc2Nyb2xsVG9wID0gKCkgPT4ge1xyXG4gICAgbGV0IG5hdkRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcG9uZW50LW5hdlwiKTtcclxuICAgIG5hdkRvbS5zY3JvbGxJbnRvVmlldyh0cnVlKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRwaG90bygpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm9vdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBvZmZzZXQtMVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHAtMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZzZXQtMCBvZmZzZXQteGwtMyBjb2xcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtZmxleCBjb21wb25lbnQtbmF2XCIgb25DbGljaz17c2VsZWN0VHlwZX0+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dHlwZSA9PT0gXCJSZWFjdFwiID8gXCJzZWxlZFwiIDogXCJcIn0+XHJcbiAgICAgICAgICAgICAgICA8aDM+UmVhY3Q8L2gzPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dHlwZSA9PT0gXCJKU1wiID8gXCJzZWxlZFwiIDogXCJcIn0+XHJcbiAgICAgICAgICAgICAgICA8aDM+SlM8L2gzPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dHlwZSA9PT0gXCJDU1NcIiA/IFwic2VsZWRcIiA6IFwiXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGgzPkNTUzwvaDM+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0eXBlID09PSBcIkh0bWxCb29zdHJhcFwiID8gXCJzZWxlZFwiIDogXCJcIn0+XHJcbiAgICAgICAgICAgICAgICA8aDM+SHRtbEJvb3N0cmFwPC9oMz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb1RvcCBwb3NpdGlvbi1maXhlZFwiIG9uQ2xpY2s9e3Njcm9sbFRvcH0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLWFycm93LWZvcndhcmRcIj48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC14bC0zXCI+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2Zmc2V0LTAgb2Zmc2V0LXhsLTEgY29sLTEyIGNvbC14bC04XCI+XHJcbiAgICAgICAgICAgIDxDb250ZW50IHR5cGU9e3R5cGV9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHJlbTtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5nb1RvcCB7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogNHJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZ29Ub3A6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmdvVG9wIGkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcmVtO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgIHRvcDogMjAwcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxpLnNlbGVkIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGk6aG92ZXIge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjUlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuY29uc3Qgc3RhdGUgPSAoc3RvcmUpID0+ICh7IGRhdGE6IHN0b3JlIH0pO1xyXG5jb25zdCBkaXNwYXRjaCA9IChkaXNwYXRjaCkgPT4gKHsgYWN0aW9uOiBkaXNwYXRjaCB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUsIGRpc3BhdGNoKShSb290KTtcclxuIl19 */\n/*@ sourceURL=C:\\\\newlife\\\\newSite\\\\my-app\\\\component\\\\component\\\\root.js */"));
};

var state = function state(store) {
  return {
    data: store
  };
};

var dispatch = function dispatch(_dispatch) {
  return {
    action: _dispatch
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(state, dispatch)(Root));

/***/ })

})
//# sourceMappingURL=component.js.7df1c8934b058c816cd7.hot-update.js.map