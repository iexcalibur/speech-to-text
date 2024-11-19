"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/transcribe/route";
exports.ids = ["app/api/transcribe/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("node:stream/web");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftranscribe%2Froute&page=%2Fapi%2Ftranscribe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftranscribe%2Froute.ts&appDir=%2FUsers%2Fshubham%2FDesktop%2Ftesttwoo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshubham%2FDesktop%2Ftesttwoo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftranscribe%2Froute&page=%2Fapi%2Ftranscribe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftranscribe%2Froute.ts&appDir=%2FUsers%2Fshubham%2FDesktop%2Ftesttwoo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshubham%2FDesktop%2Ftesttwoo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_shubham_Desktop_testtwoo_src_app_api_transcribe_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/transcribe/route.ts */ \"(rsc)/./src/app/api/transcribe/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/transcribe/route\",\n        pathname: \"/api/transcribe\",\n        filename: \"route\",\n        bundlePath: \"app/api/transcribe/route\"\n    },\n    resolvedPagePath: \"/Users/shubham/Desktop/testtwoo/src/app/api/transcribe/route.ts\",\n    nextConfigOutput,\n    userland: _Users_shubham_Desktop_testtwoo_src_app_api_transcribe_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/transcribe/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0cmFuc2NyaWJlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ0cmFuc2NyaWJlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdHJhbnNjcmliZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNodWJoYW0lMkZEZXNrdG9wJTJGdGVzdHR3b28lMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGc2h1YmhhbSUyRkRlc2t0b3AlMkZ0ZXN0dHdvbyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNlO0FBQzVGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BlZWNoLXRvLXRleHQtYXBwLz8xYjNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9zaHViaGFtL0Rlc2t0b3AvdGVzdHR3b28vc3JjL2FwcC9hcGkvdHJhbnNjcmliZS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdHJhbnNjcmliZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3RyYW5zY3JpYmVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3RyYW5zY3JpYmUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvc2h1YmhhbS9EZXNrdG9wL3Rlc3R0d29vL3NyYy9hcHAvYXBpL3RyYW5zY3JpYmUvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvdHJhbnNjcmliZS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftranscribe%2Froute&page=%2Fapi%2Ftranscribe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftranscribe%2Froute.ts&appDir=%2FUsers%2Fshubham%2FDesktop%2Ftesttwoo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshubham%2FDesktop%2Ftesttwoo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/transcribe/route.ts":
/*!*****************************************!*\
  !*** ./src/app/api/transcribe/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/openai/index.mjs\");\n\n\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    apiKey: process.env.OPENAI_API_KEY\n});\nasync function POST(request) {\n    try {\n        const formData = await request.formData();\n        const audioFile = formData.get(\"audio\");\n        if (!audioFile) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"No audio file provided\"\n            }, {\n                status: 400\n            });\n        }\n        console.log(\"Received audio file:\", {\n            type: audioFile.type,\n            size: audioFile.size\n        });\n        // Create a new FormData instance for the OpenAI API\n        const formDataForApi = new FormData();\n        formDataForApi.append(\"file\", audioFile, \"audio.mp3\");\n        formDataForApi.append(\"model\", \"whisper-1\");\n        // Make a direct fetch request to OpenAI API\n        const openaiResponse = await fetch(\"https://api.openai.com/v1/audio/transcriptions\", {\n            method: \"POST\",\n            headers: {\n                \"Authorization\": `Bearer ${process.env.OPENAI_API_KEY}`\n            },\n            body: formDataForApi\n        });\n        if (!openaiResponse.ok) {\n            const errorData = await openaiResponse.json();\n            console.error(\"OpenAI API Error:\", errorData);\n            throw new Error(`OpenAI API error: ${errorData.error?.message || \"Unknown error\"}`);\n        }\n        const data = await openaiResponse.json();\n        console.log(\"Transcription response:\", data);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            text: data.text\n        });\n    } catch (error) {\n        console.error(\"Error transcribing audio:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Error transcribing audio\",\n            details: error\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS90cmFuc2NyaWJlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUNmO0FBRTVCLE1BQU1FLFNBQVMsSUFBSUQsOENBQU1BLENBQUM7SUFDeEJFLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUNwQztBQUVPLGVBQWVDLEtBQUtDLE9BQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1ELFFBQVFDLFFBQVE7UUFDdkMsTUFBTUMsWUFBWUQsU0FBU0UsR0FBRyxDQUFDO1FBRS9CLElBQUksQ0FBQ0QsV0FBVztZQUNkLE9BQU9WLGtGQUFZQSxDQUFDWSxJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQXlCLEdBQ2xDO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQUMsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QjtZQUNsQ0MsTUFBTVAsVUFBVU8sSUFBSTtZQUNwQkMsTUFBTVIsVUFBVVEsSUFBSTtRQUN0QjtRQUVBLG9EQUFvRDtRQUNwRCxNQUFNQyxpQkFBaUIsSUFBSUM7UUFDM0JELGVBQWVFLE1BQU0sQ0FBQyxRQUFRWCxXQUFXO1FBQ3pDUyxlQUFlRSxNQUFNLENBQUMsU0FBUztRQUUvQiw0Q0FBNEM7UUFDNUMsTUFBTUMsaUJBQWlCLE1BQU1DLE1BQU0sa0RBQWtEO1lBQ25GQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsaUJBQWlCLENBQUMsT0FBTyxFQUFFckIsUUFBUUMsR0FBRyxDQUFDQyxjQUFjLENBQUMsQ0FBQztZQUN6RDtZQUNBb0IsTUFBTVA7UUFDUjtRQUVBLElBQUksQ0FBQ0csZUFBZUssRUFBRSxFQUFFO1lBQ3RCLE1BQU1DLFlBQVksTUFBTU4sZUFBZVYsSUFBSTtZQUMzQ0csUUFBUUYsS0FBSyxDQUFDLHFCQUFxQmU7WUFDbkMsTUFBTSxJQUFJQyxNQUFNLENBQUMsa0JBQWtCLEVBQUVELFVBQVVmLEtBQUssRUFBRWlCLFdBQVcsZ0JBQWdCLENBQUM7UUFDcEY7UUFFQSxNQUFNQyxPQUFPLE1BQU1ULGVBQWVWLElBQUk7UUFDdENHLFFBQVFDLEdBQUcsQ0FBQywyQkFBMkJlO1FBRXZDLE9BQU8vQixrRkFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQUVvQixNQUFNRCxLQUFLQyxJQUFJO1FBQUM7SUFDN0MsRUFBRSxPQUFPbkIsT0FBTztRQUNkRSxRQUFRRixLQUFLLENBQUMsNkJBQTZCQTtRQUMzQyxPQUFPYixrRkFBWUEsQ0FBQ1ksSUFBSSxDQUN0QjtZQUFFQyxPQUFPO1lBQTRCb0IsU0FBU3BCO1FBQU0sR0FDcEQ7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGVlY2gtdG8tdGV4dC1hcHAvLi9zcmMvYXBwL2FwaS90cmFuc2NyaWJlL3JvdXRlLnRzP2RlM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IE9wZW5BSSBmcm9tICdvcGVuYWknO1xuXG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJKHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gICAgY29uc3QgYXVkaW9GaWxlID0gZm9ybURhdGEuZ2V0KCdhdWRpbycpIGFzIEJsb2I7XG5cbiAgICBpZiAoIWF1ZGlvRmlsZSkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiAnTm8gYXVkaW8gZmlsZSBwcm92aWRlZCcgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCBhdWRpbyBmaWxlOicsIHtcbiAgICAgIHR5cGU6IGF1ZGlvRmlsZS50eXBlLFxuICAgICAgc2l6ZTogYXVkaW9GaWxlLnNpemVcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBhIG5ldyBGb3JtRGF0YSBpbnN0YW5jZSBmb3IgdGhlIE9wZW5BSSBBUElcbiAgICBjb25zdCBmb3JtRGF0YUZvckFwaSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhRm9yQXBpLmFwcGVuZCgnZmlsZScsIGF1ZGlvRmlsZSwgJ2F1ZGlvLm1wMycpO1xuICAgIGZvcm1EYXRhRm9yQXBpLmFwcGVuZCgnbW9kZWwnLCAnd2hpc3Blci0xJyk7XG5cbiAgICAvLyBNYWtlIGEgZGlyZWN0IGZldGNoIHJlcXVlc3QgdG8gT3BlbkFJIEFQSVxuICAgIGNvbnN0IG9wZW5haVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEvYXVkaW8vdHJhbnNjcmlwdGlvbnMnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVl9YCxcbiAgICAgIH0sXG4gICAgICBib2R5OiBmb3JtRGF0YUZvckFwaSxcbiAgICB9KTtcblxuICAgIGlmICghb3BlbmFpUmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IG9wZW5haVJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ09wZW5BSSBBUEkgRXJyb3I6JywgZXJyb3JEYXRhKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT3BlbkFJIEFQSSBlcnJvcjogJHtlcnJvckRhdGEuZXJyb3I/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InfWApO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBvcGVuYWlSZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coJ1RyYW5zY3JpcHRpb24gcmVzcG9uc2U6JywgZGF0YSk7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyB0ZXh0OiBkYXRhLnRleHQgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdHJhbnNjcmliaW5nIGF1ZGlvOicsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiAnRXJyb3IgdHJhbnNjcmliaW5nIGF1ZGlvJywgZGV0YWlsczogZXJyb3IgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn0gIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIk9wZW5BSSIsIm9wZW5haSIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIlBPU1QiLCJyZXF1ZXN0IiwiZm9ybURhdGEiLCJhdWRpb0ZpbGUiLCJnZXQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInNpemUiLCJmb3JtRGF0YUZvckFwaSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwib3BlbmFpUmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5Iiwib2siLCJlcnJvckRhdGEiLCJFcnJvciIsIm1lc3NhZ2UiLCJkYXRhIiwidGV4dCIsImRldGFpbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/transcribe/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/formdata-node","vendor-chunks/openai","vendor-chunks/form-data-encoder","vendor-chunks/whatwg-url","vendor-chunks/agentkeepalive","vendor-chunks/tr46","vendor-chunks/web-streams-polyfill","vendor-chunks/node-fetch","vendor-chunks/webidl-conversions","vendor-chunks/ms","vendor-chunks/humanize-ms","vendor-chunks/event-target-shim","vendor-chunks/abort-controller"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftranscribe%2Froute&page=%2Fapi%2Ftranscribe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftranscribe%2Froute.ts&appDir=%2FUsers%2Fshubham%2FDesktop%2Ftesttwoo%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshubham%2FDesktop%2Ftesttwoo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();