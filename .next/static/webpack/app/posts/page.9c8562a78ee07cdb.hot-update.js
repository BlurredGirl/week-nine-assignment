"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/posts/page",{

/***/ "(app-pages-browser)/./src/app/components/Toast.jsx":
/*!**************************************!*\
  !*** ./src/app/components/Toast.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-toast */ \"(app-pages-browser)/./node_modules/@radix-ui/react-toast/dist/index.mjs\");\n/* harmony import */ var _Toast_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toast.css */ \"(app-pages-browser)/./src/app/components/Toast.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ToastButton = ()=>{\n    _s();\n    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const eventDateRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(new Date());\n    const timerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(0);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        return ()=>clearTimeout(timerRef.current);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        swipeDirection: \"right\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"Button large violet\",\n                onClick: ()=>{\n                    setOpen(false);\n                    window.clearTimeout(timerRef.current);\n                    timerRef.current = window.setTimeout(()=>{\n                        eventDateRef.current = oneWeekAway();\n                        setOpen(true);\n                    }, 100);\n                },\n                children: \"Mrrrp...tap\"\n            }, void 0, false, {\n                fileName: \"/Users/cinem/projects/week-nine-assignment/src/app/components/Toast.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_3__.Root, {\n                className: \"ToastRoot\",\n                open: open,\n                onOpenChange: setOpen,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_3__.Title, {\n                        className: \"ToastTitle\",\n                        children: \"CHANGE TEXT H\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cinem/projects/week-nine-assignment/src/app/components/Toast.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_3__.Description, {\n                        asChild: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                            className: \"ToastDescription\",\n                            dateTime: eventDateRef.current.toISOString(),\n                            children: prettyDate(eventDateRef.current)\n                        }, void 0, false, {\n                            fileName: \"/Users/cinem/projects/week-nine-assignment/src/app/components/Toast.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/cinem/projects/week-nine-assignment/src/app/components/Toast.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_3__.Action, {\n                        className: \"ToastAction\",\n                        asChild: true,\n                        altText: \"Goto schedule to undo\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"Button small green\",\n                            children: \"Undo\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cinem/projects/week-nine-assignment/src/app/components/Toast.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/cinem/projects/week-nine-assignment/src/app/components/Toast.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cinem/projects/week-nine-assignment/src/app/components/Toast.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_3__.Viewport, {\n                className: \"ToastViewport\"\n            }, void 0, false, {\n                fileName: \"/Users/cinem/projects/week-nine-assignment/src/app/components/Toast.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cinem/projects/week-nine-assignment/src/app/components/Toast.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ToastButton, \"Onz4SCAl0z2bIWECK7bp1vkqGQU=\");\n_c = ToastButton;\nfunction oneWeekAway(date) {\n    const now = new Date();\n    const inOneWeek = now.setDate(now.getDate() + 7);\n    return new Date(inOneWeek);\n}\nfunction prettyDate(date) {\n    return new Intl.DateTimeFormat(\"en-US\", {\n        dateStyle: \"full\",\n        timeStyle: \"short\"\n    }).format(date);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToastButton);\nvar _c;\n$RefreshReg$(_c, \"ToastButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ub2FzdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFK0I7QUFDZ0I7QUFDMUI7QUFFckIsTUFBTUUsY0FBYzs7SUFDbEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLDJDQUFjLENBQUM7SUFDdkMsTUFBTU0sZUFBZU4seUNBQVksQ0FBQyxJQUFJUTtJQUN0QyxNQUFNQyxXQUFXVCx5Q0FBWSxDQUFDO0lBRTlCQSw0Q0FBZSxDQUFDO1FBQ2QsT0FBTyxJQUFNVyxhQUFhRixTQUFTRyxPQUFPO0lBQzVDLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDWCwyREFBYztRQUFDYSxnQkFBZTs7MEJBQzdCLDhEQUFDQztnQkFDQ0MsV0FBVTtnQkFDVkMsU0FBUztvQkFDUGIsUUFBUTtvQkFDUmMsT0FBT1AsWUFBWSxDQUFDRixTQUFTRyxPQUFPO29CQUNwQ0gsU0FBU0csT0FBTyxHQUFHTSxPQUFPQyxVQUFVLENBQUM7d0JBQ25DYixhQUFhTSxPQUFPLEdBQUdRO3dCQUN2QmhCLFFBQVE7b0JBQ1YsR0FBRztnQkFDTDswQkFDRDs7Ozs7OzBCQUlELDhEQUFDSCx1REFBVTtnQkFBQ2UsV0FBVTtnQkFBWWIsTUFBTUE7Z0JBQU1tQixjQUFjbEI7O2tDQUMxRCw4REFBQ0gsd0RBQVc7d0JBQUNlLFdBQVU7a0NBQWE7Ozs7OztrQ0FDcEMsOERBQUNmLDhEQUFpQjt3QkFBQ3dCLE9BQU87a0NBQ3hCLDRFQUFDQzs0QkFBS1YsV0FBVTs0QkFBbUJXLFVBQVVyQixhQUFhTSxPQUFPLENBQUNnQixXQUFXO3NDQUMxRUMsV0FBV3ZCLGFBQWFNLE9BQU87Ozs7Ozs7Ozs7O2tDQUdwQyw4REFBQ1gseURBQVk7d0JBQUNlLFdBQVU7d0JBQWNTLE9BQU87d0JBQUNNLFNBQVE7a0NBQ3BELDRFQUFDaEI7NEJBQU9DLFdBQVU7c0NBQXFCOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHM0MsOERBQUNmLDJEQUFjO2dCQUFDZSxXQUFVOzs7Ozs7Ozs7Ozs7QUFHaEM7R0F2Q01kO0tBQUFBO0FBeUNOLFNBQVNrQixZQUFZYSxJQUFJO0lBQ3ZCLE1BQU1DLE1BQU0sSUFBSTFCO0lBQ2hCLE1BQU0yQixZQUFZRCxJQUFJRSxPQUFPLENBQUNGLElBQUlHLE9BQU8sS0FBSztJQUM5QyxPQUFPLElBQUk3QixLQUFLMkI7QUFDbEI7QUFFQSxTQUFTTixXQUFXSSxJQUFJO0lBQ3RCLE9BQU8sSUFBSUssS0FBS0MsY0FBYyxDQUFDLFNBQVM7UUFBRUMsV0FBVztRQUFRQyxXQUFXO0lBQVEsR0FBR0MsTUFBTSxDQUFDVDtBQUM1RjtBQUVBLCtEQUFlL0IsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvVG9hc3QuanN4PzA4MmQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gJ0ByYWRpeC11aS9yZWFjdC10b2FzdCc7XG5pbXBvcnQgJy4vVG9hc3QuY3NzJztcblxuY29uc3QgVG9hc3RCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZXZlbnREYXRlUmVmID0gUmVhY3QudXNlUmVmKG5ldyBEYXRlKCkpO1xuICBjb25zdCB0aW1lclJlZiA9IFJlYWN0LnVzZVJlZigwKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXJSZWYuY3VycmVudCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxUb2FzdC5Qcm92aWRlciBzd2lwZURpcmVjdGlvbj1cInJpZ2h0XCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cIkJ1dHRvbiBsYXJnZSB2aW9sZXRcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lclJlZi5jdXJyZW50KTtcbiAgICAgICAgICB0aW1lclJlZi5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnREYXRlUmVmLmN1cnJlbnQgPSBvbmVXZWVrQXdheSgpO1xuICAgICAgICAgICAgc2V0T3Blbih0cnVlKTtcbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBNcnJycC4uLnRhcFxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxUb2FzdC5Sb290IGNsYXNzTmFtZT1cIlRvYXN0Um9vdFwiIG9wZW49e29wZW59IG9uT3BlbkNoYW5nZT17c2V0T3Blbn0+XG4gICAgICAgIDxUb2FzdC5UaXRsZSBjbGFzc05hbWU9XCJUb2FzdFRpdGxlXCI+Q0hBTkdFIFRFWFQgSDwvVG9hc3QuVGl0bGU+XG4gICAgICAgIDxUb2FzdC5EZXNjcmlwdGlvbiBhc0NoaWxkPlxuICAgICAgICAgIDx0aW1lIGNsYXNzTmFtZT1cIlRvYXN0RGVzY3JpcHRpb25cIiBkYXRlVGltZT17ZXZlbnREYXRlUmVmLmN1cnJlbnQudG9JU09TdHJpbmcoKX0+XG4gICAgICAgICAgICB7cHJldHR5RGF0ZShldmVudERhdGVSZWYuY3VycmVudCl9XG4gICAgICAgICAgPC90aW1lPlxuICAgICAgICA8L1RvYXN0LkRlc2NyaXB0aW9uPlxuICAgICAgICA8VG9hc3QuQWN0aW9uIGNsYXNzTmFtZT1cIlRvYXN0QWN0aW9uXCIgYXNDaGlsZCBhbHRUZXh0PVwiR290byBzY2hlZHVsZSB0byB1bmRvXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJCdXR0b24gc21hbGwgZ3JlZW5cIj5VbmRvPC9idXR0b24+XG4gICAgICAgIDwvVG9hc3QuQWN0aW9uPlxuICAgICAgPC9Ub2FzdC5Sb290PlxuICAgICAgPFRvYXN0LlZpZXdwb3J0IGNsYXNzTmFtZT1cIlRvYXN0Vmlld3BvcnRcIiAvPlxuICAgIDwvVG9hc3QuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBvbmVXZWVrQXdheShkYXRlKSB7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGluT25lV2VlayA9IG5vdy5zZXREYXRlKG5vdy5nZXREYXRlKCkgKyA3KTtcbiAgcmV0dXJuIG5ldyBEYXRlKGluT25lV2Vlayk7XG59XG5cbmZ1bmN0aW9uIHByZXR0eURhdGUoZGF0ZSkge1xuICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLVVTJywgeyBkYXRlU3R5bGU6ICdmdWxsJywgdGltZVN0eWxlOiAnc2hvcnQnIH0pLmZvcm1hdChkYXRlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9hc3RCdXR0b247Il0sIm5hbWVzIjpbIlJlYWN0IiwiVG9hc3QiLCJUb2FzdEJ1dHRvbiIsIm9wZW4iLCJzZXRPcGVuIiwidXNlU3RhdGUiLCJldmVudERhdGVSZWYiLCJ1c2VSZWYiLCJEYXRlIiwidGltZXJSZWYiLCJ1c2VFZmZlY3QiLCJjbGVhclRpbWVvdXQiLCJjdXJyZW50IiwiUHJvdmlkZXIiLCJzd2lwZURpcmVjdGlvbiIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJzZXRUaW1lb3V0Iiwib25lV2Vla0F3YXkiLCJSb290Iiwib25PcGVuQ2hhbmdlIiwiVGl0bGUiLCJEZXNjcmlwdGlvbiIsImFzQ2hpbGQiLCJ0aW1lIiwiZGF0ZVRpbWUiLCJ0b0lTT1N0cmluZyIsInByZXR0eURhdGUiLCJBY3Rpb24iLCJhbHRUZXh0IiwiVmlld3BvcnQiLCJkYXRlIiwibm93IiwiaW5PbmVXZWVrIiwic2V0RGF0ZSIsImdldERhdGUiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJkYXRlU3R5bGUiLCJ0aW1lU3R5bGUiLCJmb3JtYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Toast.jsx\n"));

/***/ })

});