"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Biography.tsx":
/*!**********************************!*\
  !*** ./components/Biography.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Biography = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-xs md:text-base w-full flex justify-center py-10 px-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: skills.map((skill, i)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"w-80 sm:w-72 md:w-80 lg:w-96 flex justify-between items-center mb-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"w-20 md:36 font-semibold\",\n                            children: skill.name\n                        }, void 0, false, {\n                            fileName: \"/Users/patrykkobylarczyk/Desktop/code/AGM/components/Biography.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-2\",\n                            children: skillRange.map((el)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"w-5 h-2 rounded-lg \".concat(el <= skill.level ? \"bg-slate-700\" : \"bg-slate-300\", \" \")\n                                }, el, false, {\n                                    fileName: \"/Users/patrykkobylarczyk/Desktop/code/AGM/components/Biography.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 21\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/patrykkobylarczyk/Desktop/code/AGM/components/Biography.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                skill.level,\n                                \"/5\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/patrykkobylarczyk/Desktop/code/AGM/components/Biography.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, i, true, {\n                    fileName: \"/Users/patrykkobylarczyk/Desktop/code/AGM/components/Biography.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/patrykkobylarczyk/Desktop/code/AGM/components/Biography.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/patrykkobylarczyk/Desktop/code/AGM/components/Biography.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Biography;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Biography);\nvar _c;\n$RefreshReg$(_c, \"Biography\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jpb2dyYXBoeS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRzFCLE1BQU1DLFlBQVksSUFBTTtJQUN0QixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7c0JBQ0VDLE9BQU9DLEdBQUcsQ0FBQyxDQUFDQyxPQUF3Q0MsSUFBYztnQkFDakUscUJBQ0UsOERBQUNDO29CQUVDTixXQUFVOztzQ0FFViw4REFBQ087NEJBQUVQLFdBQVU7c0NBQTRCSSxNQUFNSSxJQUFJOzs7Ozs7c0NBQ25ELDhEQUFDVDs0QkFBSUMsV0FBVTtzQ0FDWlMsV0FBV04sR0FBRyxDQUFDLENBQUNPLEtBQWU7Z0NBQzlCLHFCQUNFLDhEQUFDQztvQ0FFQ1gsV0FBVyxzQkFFVixPQURDVSxNQUFNTixNQUFNUSxLQUFLLEdBQUcsaUJBQWlCLGNBQWMsRUFDcEQ7bUNBSElGOzs7Ozs0QkFNWDs7Ozs7O3NDQUVGLDhEQUFDSDs7Z0NBQUdILE1BQU1RLEtBQUs7Z0NBQUM7Ozs7Ozs7O21CQWhCWFA7Ozs7O1lBbUJYOzs7Ozs7Ozs7OztBQUlSO0tBOUJNUDtBQWdDTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jpb2dyYXBoeS50c3g/Y2M2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cblxuY29uc3QgQmlvZ3JhcGh5ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBtZDp0ZXh0LWJhc2Ugdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgcHktMTAgcHgtNVwiPlxuICAgICAgPHVsPlxuICAgICAgICB7c2tpbGxzLm1hcCgoc2tpbGw6IHsgbmFtZTogc3RyaW5nOyBsZXZlbDogbnVtYmVyIH0sIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTgwIHNtOnctNzIgbWQ6dy04MCBsZzp3LTk2IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi0yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy0yMCBtZDozNiBmb250LXNlbWlib2xkXCI+e3NraWxsLm5hbWV9PC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICB7c2tpbGxSYW5nZS5tYXAoKGVsOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtlbH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTUgaC0yIHJvdW5kZWQtbGcgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsIDw9IHNraWxsLmxldmVsID8gXCJiZy1zbGF0ZS03MDBcIiA6IFwiYmctc2xhdGUtMzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICB9IGB9XG4gICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHA+e3NraWxsLmxldmVsfS81PC9wPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCaW9ncmFwaHk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCaW9ncmFwaHkiLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsInNraWxscyIsIm1hcCIsInNraWxsIiwiaSIsImxpIiwicCIsIm5hbWUiLCJza2lsbFJhbmdlIiwiZWwiLCJzcGFuIiwibGV2ZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Biography.tsx\n"));

/***/ })

});