webpackHotUpdate("static\\development\\pages\\component.js",{

/***/ "./component/component/redux/reducer.js":
/*!**********************************************!*\
  !*** ./component/component/redux/reducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");


var ContentReducer = function ContentReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "ALL_CONTENT":
      return action.data.map(function (e) {
        e.filter = false;
        return e;
      });

    case "SHOW_CONTENT":
      return state.map(function (e) {
        e.filter = false;
        return e;
      });

    case "FILTER_CONTENT":
      var result = state.map(function (e) {
        if (e.ComponentType !== action.filterType) {
          e.filter = true;
        } else {
          e.filter = false;
        }

        return e;
      });
      return result;

    case "SEACTH_CONTENT":
      var result2 = state.map(function (e) {
        if (e.ComponentTitle.includes(action.title)) {
          e.filter = false;
        } else {
          e.filter = true;
        }

        return e;
      });
      return result2;

    default:
      return state;
  }
};

var inisitalState = {
  list: [],
  loading: false
};

var TypeReducer = function TypeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : inisitalState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "GET_TYPE":
      return Object.assign({}, state, {
        list: action.list
      });

    case "LADING_CONTENN":
      return Object.assign({}, state, {
        loading: action.loading
      });

    default:
      return state;
  }
};

var ComponentApp = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  ContentReducer: ContentReducer,
  TypeReducer: TypeReducer
});
/* harmony default export */ __webpack_exports__["default"] = (ComponentApp);

/***/ })

})
//# sourceMappingURL=component.js.4d058423709b0ae56e7e.hot-update.js.map