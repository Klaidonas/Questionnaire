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

/***/ "./components/questionnaire/Options.tsx":
/*!**********************************************!*\
  !*** ./components/questionnaire/Options.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/firebase */ \"./utils/firebase.ts\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Options = ()=>{\n    _s();\n    const path = \"sriubos questionnaire/cx2sakw0vjV5mRorA78i/question1/uQCmIQnxoLqwcwILDcv0/options/\";\n    const query = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_utils_firebase__WEBPACK_IMPORTED_MODULE_1__.db, path);\n    const [docs, loading, error] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__.useCollectionData)(query);\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    if (docs) {\n        for(let i = 0; i < docs.length; i++){\n            docs.map(doc);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"OPTIONS\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Klaidas\\\\Desktop\\\\programavimas\\\\reactjs\\\\questionnaire\\\\components\\\\questionnaire\\\\Options.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            docs === null || docs === void 0 ? void 0 : docs.map((doc1, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: doc1.options\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Klaidas\\\\Desktop\\\\programavimas\\\\reactjs\\\\questionnaire\\\\components\\\\questionnaire\\\\Options.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Klaidas\\\\Desktop\\\\programavimas\\\\reactjs\\\\questionnaire\\\\components\\\\questionnaire\\\\Options.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, i, true, {\n                    fileName: \"C:\\\\Users\\\\Klaidas\\\\Desktop\\\\programavimas\\\\reactjs\\\\questionnaire\\\\components\\\\questionnaire\\\\Options.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Klaidas\\\\Desktop\\\\programavimas\\\\reactjs\\\\questionnaire\\\\components\\\\questionnaire\\\\Options.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Options, \"dC42Siza9aPFSEMrSz3B0cXJE/A=\", false, function() {\n    return [\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__.useCollectionData\n    ];\n});\n_c = Options;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Options);\nvar _c;\n$RefreshReg$(_c, \"Options\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3F1ZXN0aW9ubmFpcmUvT3B0aW9ucy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzQztBQUNtQjtBQUNqQjtBQUMyQjtBQUVuRSxNQUFNSyxVQUFVLElBQU07O0lBRXRCLE1BQU1DLE9BQU87SUFDYixNQUFNQyxRQUFRTiw4REFBVUEsQ0FBQ0QsK0NBQUVBLEVBQUVNO0lBQzdCLE1BQU0sQ0FBQ0UsTUFBTUMsU0FBU0MsTUFBTSxHQUFHTixpRkFBaUJBLENBQUNHO0lBQ2pELE1BQU0sQ0FBQ0ksU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBVyxFQUFFO0lBSW5ELE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNuQyxJQUFHSyxNQUFNO1FBQ1AsSUFBSSxJQUFJTyxJQUFFLEdBQUdBLElBQUVQLEtBQUtRLE1BQU0sRUFBRUQsSUFBSztZQUMvQlAsS0FBS1MsR0FBRyxDQUFFQztRQUNaO0lBQ0YsQ0FBQztJQUVDLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7WUFDSFosaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNUyxHQUFHLENBQUMsQ0FBQ0MsTUFBU0gsa0JBQ25CLDhEQUFDTTs7c0NBQ0QsOERBQUNDO3NDQUFJSixLQUFJUCxPQUFPOzs7Ozs7c0NBQ2hCLDhEQUFDWTs7Ozs7O21CQUZRUjs7Ozs7Ozs7Ozs7QUFPakI7R0EzQk1WOztRQUl5QkQsNkVBQWlCQTs7O0tBSjFDQztBQTZCTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3F1ZXN0aW9ubmFpcmUvT3B0aW9ucy50c3g/ZWNkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gJ0AvdXRpbHMvZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VDb2xsZWN0aW9uRGF0YSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZSc7XHJcblxyXG5jb25zdCBPcHRpb25zID0gKCkgPT4ge1xyXG4gIFxyXG5jb25zdCBwYXRoID0gXCJzcml1Ym9zIHF1ZXN0aW9ubmFpcmUvY3gyc2FrdzB2alY1bVJvckE3OGkvcXVlc3Rpb24xL3VRQ21JUW54b0xxd2N3SUxEY3YwL29wdGlvbnMvXCJcclxuY29uc3QgcXVlcnkgPSBjb2xsZWN0aW9uKGRiLCBwYXRoKTtcclxuY29uc3QgW2RvY3MsIGxvYWRpbmcsIGVycm9yXSA9IHVzZUNvbGxlY3Rpb25EYXRhKHF1ZXJ5KTtcclxuY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuXHJcblxyXG5cclxuY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuaWYoZG9jcykge1xyXG4gIGZvcihsZXQgaT0wOyBpPGRvY3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGRvY3MubWFwKChkb2MpKVxyXG4gIH1cclxufVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPk9QVElPTlM8L2gxPlxyXG4gICAgICB7ZG9jcz8ubWFwKChkb2M6YW55LCBpKSA9PiAoXHJcbiAgICAgICAgPHVsIGtleT17aX0+XHJcbiAgICAgICAgPGxpPntkb2Mub3B0aW9uc308L2xpPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wdGlvbnM7Il0sIm5hbWVzIjpbImRiIiwiY29sbGVjdGlvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDb2xsZWN0aW9uRGF0YSIsIk9wdGlvbnMiLCJwYXRoIiwicXVlcnkiLCJkb2NzIiwibG9hZGluZyIsImVycm9yIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJjb3VudCIsInNldENvdW50IiwiaSIsImxlbmd0aCIsIm1hcCIsImRvYyIsImRpdiIsImgxIiwidWwiLCJsaSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/questionnaire/Options.tsx\n"));

/***/ })

});