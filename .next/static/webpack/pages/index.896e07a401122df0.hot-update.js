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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/firebase */ \"./utils/firebase.ts\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Options = ()=>{\n    _s();\n    const path = \"sriubos questionnaire/cx2sakw0vjV5mRorA78i/question1/uQCmIQnxoLqwcwILDcv0/options/\";\n    const query = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_utils_firebase__WEBPACK_IMPORTED_MODULE_1__.db, path);\n    const [docs, loading, error] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__.useCollectionData)(query);\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const fetchUsersFromFirestore = async ()=>{\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(usersColl);\n        if (docs) {\n            for(let i = 0; i < docs.length; i++){}\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"OPTIONS\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Klaidas\\\\Desktop\\\\programavimas\\\\reactjs\\\\questionnaire\\\\components\\\\questionnaire\\\\Options.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            docs === null || docs === void 0 ? void 0 : docs.map((doc, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: doc.options\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Klaidas\\\\Desktop\\\\programavimas\\\\reactjs\\\\questionnaire\\\\components\\\\questionnaire\\\\Options.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: i\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Klaidas\\\\Desktop\\\\programavimas\\\\reactjs\\\\questionnaire\\\\components\\\\questionnaire\\\\Options.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Klaidas\\\\Desktop\\\\programavimas\\\\reactjs\\\\questionnaire\\\\components\\\\questionnaire\\\\Options.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, i, true, {\n                    fileName: \"C:\\\\Users\\\\Klaidas\\\\Desktop\\\\programavimas\\\\reactjs\\\\questionnaire\\\\components\\\\questionnaire\\\\Options.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Klaidas\\\\Desktop\\\\programavimas\\\\reactjs\\\\questionnaire\\\\components\\\\questionnaire\\\\Options.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Options, \"5SEgzgbtFQ6XHbb1OlBMmDaYGzw=\", false, function() {\n    return [\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__.useCollectionData\n    ];\n});\n_c = Options;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Options);\nvar _c;\n$RefreshReg$(_c, \"Options\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3F1ZXN0aW9ubmFpcmUvT3B0aW9ucy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzQztBQUNtQjtBQUNqQjtBQUMyQjtBQUVuRSxNQUFNTSxVQUFVLElBQU07O0lBRXRCLE1BQU1DLE9BQU87SUFDYixNQUFNQyxRQUFRUCw4REFBVUEsQ0FBQ0QsK0NBQUVBLEVBQUVPO0lBQzdCLE1BQU0sQ0FBQ0UsTUFBTUMsU0FBU0MsTUFBTSxHQUFHTixpRkFBaUJBLENBQUNHO0lBRWpELE1BQU0sQ0FBQ0ksU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBVyxFQUFFO0lBRW5ELE1BQU1VLDBCQUEwQixVQUFXO1FBQ3pDLE1BQU1aLDJEQUFPQSxDQUFDYTtRQUNoQixJQUFHTixNQUFNO1lBQ1AsSUFBSSxJQUFJTyxJQUFJLEdBQUdBLElBQUdQLEtBQUtRLE1BQU0sRUFBRUQsSUFBSyxDQUVwQztRQUNGLENBQUM7SUFFRDtJQU9FLHFCQUNFLDhEQUFDRTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7WUFDSFYsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNVyxHQUFHLENBQUMsQ0FBQ0MsS0FBU0wsa0JBQ25CLDhEQUFDTTs7c0NBQ0QsOERBQUNDO3NDQUFJRixJQUFJVCxPQUFPOzs7Ozs7c0NBQ2hCLDhEQUFDVztzQ0FBSVA7Ozs7OztzQ0FDTCw4REFBQ1E7Ozs7OzttQkFIUVI7Ozs7Ozs7Ozs7O0FBUWpCO0dBbkNNVjs7UUFJeUJELDZFQUFpQkE7OztLQUoxQ0M7QUFxQ04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9xdWVzdGlvbm5haXJlL09wdGlvbnMudHN4P2VjZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIgfSBmcm9tICdAL3V0aWxzL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgY29sbGVjdGlvbiwgZ2V0RG9jcyB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbkRhdGEgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmUnO1xyXG5cclxuY29uc3QgT3B0aW9ucyA9ICgpID0+IHtcclxuICBcclxuY29uc3QgcGF0aCA9IFwic3JpdWJvcyBxdWVzdGlvbm5haXJlL2N4MnNha3cwdmpWNW1Sb3JBNzhpL3F1ZXN0aW9uMS91UUNtSVFueG9McXdjd0lMRGN2MC9vcHRpb25zL1wiXHJcbmNvbnN0IHF1ZXJ5ID0gY29sbGVjdGlvbihkYiwgcGF0aCk7XHJcbmNvbnN0IFtkb2NzLCBsb2FkaW5nLCBlcnJvcl0gPSB1c2VDb2xsZWN0aW9uRGF0YShxdWVyeSk7XHJcblxyXG5jb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXHJcblxyXG5jb25zdCBmZXRjaFVzZXJzRnJvbUZpcmVzdG9yZSA9IGFzeW5jKCkgPT4ge1xyXG4gIGF3YWl0IGdldERvY3ModXNlcnNDb2xsKVxyXG5pZihkb2NzKSB7XHJcbiAgZm9yKGxldCBpID0gMDsgaTwgZG9jcy5sZW5ndGg7IGkrKykge1xyXG5cclxuICB9XHJcbn1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPk9QVElPTlM8L2gxPlxyXG4gICAgICB7ZG9jcz8ubWFwKChkb2M6YW55LCBpKSA9PiAoXHJcbiAgICAgICAgPHVsIGtleT17aX0+XHJcbiAgICAgICAgPGxpPntkb2Mub3B0aW9uc308L2xpPlxyXG4gICAgICAgIDxsaT57aX08L2xpPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wdGlvbnM7Il0sIm5hbWVzIjpbImRiIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlQ29sbGVjdGlvbkRhdGEiLCJPcHRpb25zIiwicGF0aCIsInF1ZXJ5IiwiZG9jcyIsImxvYWRpbmciLCJlcnJvciIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwiZmV0Y2hVc2Vyc0Zyb21GaXJlc3RvcmUiLCJ1c2Vyc0NvbGwiLCJpIiwibGVuZ3RoIiwiZGl2IiwiaDEiLCJtYXAiLCJkb2MiLCJ1bCIsImxpIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/questionnaire/Options.tsx\n"));

/***/ })

});