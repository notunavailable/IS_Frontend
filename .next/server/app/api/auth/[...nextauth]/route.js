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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:events":
/*!******************************!*\
  !*** external "node:events" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:events");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fcharlesfrank%2FDesktop%2FInfinitSeed%2FIS_Frontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcharlesfrank%2FDesktop%2FInfinitSeed%2FIS_Frontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fcharlesfrank%2FDesktop%2FInfinitSeed%2FIS_Frontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcharlesfrank%2FDesktop%2FInfinitSeed%2FIS_Frontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_charlesfrank_Desktop_InfinitSeed_IS_Frontend_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/charlesfrank/Desktop/InfinitSeed/IS_Frontend/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_charlesfrank_Desktop_InfinitSeed_IS_Frontend_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmNoYXJsZXNmcmFuayUyRkRlc2t0b3AlMkZJbmZpbml0U2VlZCUyRklTX0Zyb250ZW5kJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmNoYXJsZXNmcmFuayUyRkRlc2t0b3AlMkZJbmZpbml0U2VlZCUyRklTX0Zyb250ZW5kJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3VDO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXNfZnJvbnRlbmQvPzg2YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2NoYXJsZXNmcmFuay9EZXNrdG9wL0luZmluaXRTZWVkL0lTX0Zyb250ZW5kL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9jaGFybGVzZnJhbmsvRGVza3RvcC9JbmZpbml0U2VlZC9JU19Gcm9udGVuZC9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fcharlesfrank%2FDesktop%2FInfinitSeed%2FIS_Frontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcharlesfrank%2FDesktop%2FInfinitSeed%2FIS_Frontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../auth */ \"(rsc)/./auth.ts\");\n\nconst { GET, POST } = _auth__WEBPACK_IMPORTED_MODULE_0__.handlers;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFDckMsTUFBTSxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRSxHQUFHRiwyQ0FBUUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lzX2Zyb250ZW5kLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/YzhhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVycyB9IGZyb20gXCIuLi8uLi8uLi8uLi9hdXRoXCI7XG5leHBvcnQgY29uc3QgeyBHRVQsIFBPU1QgfSA9IGhhbmRsZXJzOyJdLCJuYW1lcyI6WyJoYW5kbGVycyIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./auth.ts":
/*!*****************!*\
  !*** ./auth.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   handlers: () => (/* binding */ handlers),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/zod */ \"(rsc)/./lib/zod.ts\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/db */ \"(rsc)/./lib/db.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_5__);\n\n\n// Your own logic for dealing with plaintext password strings; be careful!\n\n\n\n\nconst adapter = (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_3__.MongoDBAdapter)(_lib_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nconst providers = [\n    (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        // You can specify which fields should be submitted, by adding keys to the `credentials` object.\n        // e.g. domain, username, password, 2FA token, etc.\n        credentials: {\n            email: {\n                label: \"Email\",\n                type: \"text\"\n            },\n            password: {\n                label: \"Password\",\n                type: \"password\"\n            }\n        },\n        authorize: async (credentials)=>{\n            const { email, password } = await _lib_zod__WEBPACK_IMPORTED_MODULE_2__.signInSchema.parseAsync(credentials);\n            let user = await adapter.getUserByEmail(email);\n            if (user) {\n                console.log(user);\n                const match = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_5__.compare)(password, user.password);\n                console.log(match);\n                return match ? user : null;\n            } else {\n                return null;\n            }\n        }\n    })\n];\nconst { handlers, signIn, signOut, auth } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    pages: {\n        signIn: \"/login\"\n    },\n    callbacks: {\n        async signIn ({ user }) {\n            const existingUser = await adapter.getUser(user.id);\n            if (!existingUser) return false;\n            return true;\n        },\n        async session ({ session, token }) {\n            if (token.sub && session.user) {\n                session.user.id = token.sub;\n            }\n            return session;\n        }\n    },\n    adapter: adapter,\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: providers\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hdXRoLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ3lCO0FBQ3pELDBFQUEwRTtBQUNsQztBQUNjO0FBQ2xCO0FBQ0Q7QUFFbkMsTUFBTU0sVUFBVUgscUVBQWNBLENBQUNDLCtDQUFhQTtBQUU1QyxNQUFNRyxZQUFZO0lBQ2ROLDJFQUFXQSxDQUFDO1FBQ1IsZ0dBQWdHO1FBQ2hHLG1EQUFtRDtRQUNuRE8sYUFBYTtZQUNUQyxPQUFPO2dCQUFFQyxPQUFPO2dCQUFTQyxNQUFNO1lBQU87WUFDdENDLFVBQVU7Z0JBQUVGLE9BQU87Z0JBQVlDLE1BQU07WUFBVztRQUNwRDtRQUNBRSxXQUFXLE9BQU9MO1lBQ2QsTUFBTSxFQUFFQyxLQUFLLEVBQUVHLFFBQVEsRUFBRSxHQUFHLE1BQU1WLGtEQUFZQSxDQUFDWSxVQUFVLENBQUNOO1lBQzFELElBQUlPLE9BQVksTUFBTVQsUUFBUVUsY0FBYyxDQUFDUDtZQUM3QyxJQUFJTSxNQUFNO2dCQUNORSxRQUFRQyxHQUFHLENBQUNIO2dCQUNaLE1BQU1JLFFBQVEsTUFBTWQsaURBQU9BLENBQUNPLFVBQVVHLEtBQUtILFFBQVE7Z0JBQ25ESyxRQUFRQyxHQUFHLENBQUNDO2dCQUNaLE9BQU9BLFFBQVFKLE9BQU87WUFDMUIsT0FBTztnQkFDSCxPQUFPO1lBQ1g7UUFDSjtJQUNKO0NBQ0g7QUFFTSxNQUFNLEVBQUVLLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBRSxHQUFHdkIscURBQVFBLENBQUM7SUFDeER3QixPQUFPO1FBQ0hILFFBQVE7SUFFWjtJQUNBSSxXQUFXO1FBQ1AsTUFBTUosUUFBTyxFQUFFTixJQUFJLEVBQUU7WUFDakIsTUFBTVcsZUFBZSxNQUFNcEIsUUFBUXFCLE9BQU8sQ0FBQ1osS0FBS2EsRUFBRTtZQUVsRCxJQUFJLENBQUNGLGNBQWMsT0FBTztZQUUxQixPQUFPO1FBQ1g7UUFDQSxNQUFNRyxTQUFRLEVBQUVBLE9BQU8sRUFBRUMsS0FBSyxFQUFFO1lBRTVCLElBQUlBLE1BQU1DLEdBQUcsSUFBSUYsUUFBUWQsSUFBSSxFQUFFO2dCQUMzQmMsUUFBUWQsSUFBSSxDQUFDYSxFQUFFLEdBQUdFLE1BQU1DLEdBQUc7WUFDL0I7WUFFQSxPQUFPRjtRQUNYO0lBQ0o7SUFDQXZCLFNBQVNBO0lBQ1R1QixTQUFTO1FBQUVHLFVBQVU7SUFBTTtJQUMzQnpCLFdBQVdBO0FBQ2YsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2lzX2Zyb250ZW5kLy4vYXV0aC50cz85MjM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCBDcmVkZW50aWFscyBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiXG4vLyBZb3VyIG93biBsb2dpYyBmb3IgZGVhbGluZyB3aXRoIHBsYWludGV4dCBwYXNzd29yZCBzdHJpbmdzOyBiZSBjYXJlZnVsIVxuaW1wb3J0IHsgc2lnbkluU2NoZW1hIH0gZnJvbSBcIi4vbGliL3pvZFwiXG5pbXBvcnQgeyBNb25nb0RCQWRhcHRlciB9IGZyb20gXCJAYXV0aC9tb25nb2RiLWFkYXB0ZXJcIlxuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4vbGliL2RiXCJcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tICdiY3J5cHRqcyc7XG5cbmNvbnN0IGFkYXB0ZXIgPSBNb25nb0RCQWRhcHRlcihjbGllbnRQcm9taXNlKTtcblxuY29uc3QgcHJvdmlkZXJzID0gW1xuICAgIENyZWRlbnRpYWxzKHtcbiAgICAgICAgLy8gWW91IGNhbiBzcGVjaWZ5IHdoaWNoIGZpZWxkcyBzaG91bGQgYmUgc3VibWl0dGVkLCBieSBhZGRpbmcga2V5cyB0byB0aGUgYGNyZWRlbnRpYWxzYCBvYmplY3QuXG4gICAgICAgIC8vIGUuZy4gZG9tYWluLCB1c2VybmFtZSwgcGFzc3dvcmQsIDJGQSB0b2tlbiwgZXRjLlxuICAgICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgICB9LFxuICAgICAgICBhdXRob3JpemU6IGFzeW5jIChjcmVkZW50aWFscykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGF3YWl0IHNpZ25JblNjaGVtYS5wYXJzZUFzeW5jKGNyZWRlbnRpYWxzKVxuICAgICAgICAgICAgbGV0IHVzZXI6IGFueSA9IGF3YWl0IGFkYXB0ZXIuZ2V0VXNlckJ5RW1haWwoZW1haWwpO1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IGF3YWl0IGNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1hdGNoKVxuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaCA/IHVzZXIgOiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9KSxcbl1cblxuZXhwb3J0IGNvbnN0IHsgaGFuZGxlcnMsIHNpZ25Jbiwgc2lnbk91dCwgYXV0aCB9ID0gTmV4dEF1dGgoe1xuICAgIHBhZ2VzOiB7XG4gICAgICAgIHNpZ25JbjogJy9sb2dpbicsXG5cbiAgICB9LFxuICAgIGNhbGxiYWNrczoge1xuICAgICAgICBhc3luYyBzaWduSW4oeyB1c2VyIH0pIHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IGFkYXB0ZXIuZ2V0VXNlcih1c2VyLmlkKVxuXG4gICAgICAgICAgICBpZiAoIWV4aXN0aW5nVXNlcikgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG5cbiAgICAgICAgICAgIGlmICh0b2tlbi5zdWIgJiYgc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uc3ViXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBhZGFwdGVyOiBhZGFwdGVyLFxuICAgIHNlc3Npb246IHsgc3RyYXRlZ3k6IFwiand0XCIgfSxcbiAgICBwcm92aWRlcnM6IHByb3ZpZGVyc1xufSk7XG5cblxuXG5cblxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHMiLCJzaWduSW5TY2hlbWEiLCJNb25nb0RCQWRhcHRlciIsImNsaWVudFByb21pc2UiLCJjb21wYXJlIiwiYWRhcHRlciIsInByb3ZpZGVycyIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInBhcnNlQXN5bmMiLCJ1c2VyIiwiZ2V0VXNlckJ5RW1haWwiLCJjb25zb2xlIiwibG9nIiwibWF0Y2giLCJoYW5kbGVycyIsInNpZ25JbiIsInNpZ25PdXQiLCJhdXRoIiwicGFnZXMiLCJjYWxsYmFja3MiLCJleGlzdGluZ1VzZXIiLCJnZXRVc2VyIiwiaWQiLCJzZXNzaW9uIiwidG9rZW4iLCJzdWIiLCJzdHJhdGVneSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nif (!process.env.DSN_PROD) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nlet uri;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    uri = process.env.DSN_DEV;\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0dBQWtHO0FBQzdEO0FBS3JDLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxRQUFRLEVBQUU7SUFDdkIsTUFBTSxJQUFJQyxNQUFNO0FBQ3BCO0FBRUEsSUFBSUM7QUFDSixNQUFNQyxVQUFVLENBQUM7QUFFakIsSUFBSUM7QUFDSixJQUFJQztBQUVKLElBQUlQLElBQXNDLEVBQUU7SUFDeENJLE1BQU1KLFFBQVFDLEdBQUcsQ0FBQ08sT0FBTztJQUN6QiwrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ0MsT0FBT0MsbUJBQW1CLEVBQUU7UUFDN0JKLFNBQVMsSUFBSVAsZ0RBQVdBLENBQUNLLEtBQUtDO1FBQzlCSSxPQUFPQyxtQkFBbUIsR0FBR0osT0FBT0ssT0FBTztJQUMvQztJQUNBSixnQkFBZ0JFLE9BQU9DLG1CQUFtQjtBQUU5QyxPQUFPLEVBS047QUFFRCxpRUFBaUU7QUFDakUsOERBQThEO0FBQzlELGlFQUFlSCxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXNfZnJvbnRlbmQvLi9saWIvZGIudHM/MWRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGFwcHJvYWNoIGlzIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvY2FuYXJ5L2V4YW1wbGVzL3dpdGgtbW9uZ29kYlxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiXG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSAnYmNyeXB0anMnO1xuXG5cblxuaWYgKCFwcm9jZXNzLmVudi5EU05fUFJPRCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZC9NaXNzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlOiBcIk1PTkdPREJfVVJJXCInKVxufVxuXG5sZXQgdXJpO1xuY29uc3Qgb3B0aW9ucyA9IHt9XG5cbmxldCBjbGllbnRcbmxldCBjbGllbnRQcm9taXNlOiBQcm9taXNlPE1vbmdvQ2xpZW50PlxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIHVyaSA9IHByb2Nlc3MuZW52LkRTTl9ERVZcbiAgICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcbiAgICAvLyBpcyBwcmVzZXJ2ZWQgYWNyb3NzIG1vZHVsZSByZWxvYWRzIGNhdXNlZCBieSBITVIgKEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQpLlxuICAgIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcbiAgICAgICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcbiAgICAgICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXG4gICAgfVxuICAgIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZVxuXG59IGVsc2Uge1xuICAgIHVyaSA9IHByb2Nlc3MuZW52LkRTTl9QUk9EXG4gICAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxuICAgIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXG59XG5cbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXG4vLyBzZXBhcmF0ZSBtb2R1bGUsIHRoZSBjbGllbnQgY2FuIGJlIHNoYXJlZCBhY3Jvc3MgZnVuY3Rpb25zLlxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZSJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJEU05fUFJPRCIsIkVycm9yIiwidXJpIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJEU05fREVWIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./lib/zod.ts":
/*!********************!*\
  !*** ./lib/zod.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loginSchema: () => (/* binding */ loginSchema),\n/* harmony export */   signInSchema: () => (/* binding */ signInSchema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n\nconst signInSchema = (0,zod__WEBPACK_IMPORTED_MODULE_0__.object)({\n    email: (0,zod__WEBPACK_IMPORTED_MODULE_0__.string)({\n        required_error: \"Email is required\"\n    }).min(1, \"Email is required\").email(\"Invalid email\"),\n    password: (0,zod__WEBPACK_IMPORTED_MODULE_0__.string)({\n        required_error: \"Password is required\"\n    }).min(8, \"Password must be more than 8 characters\").max(32, \"Password must be less than 32 characters\")\n});\nconst loginSchema = (0,zod__WEBPACK_IMPORTED_MODULE_0__.object)({});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvem9kLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUU3QixNQUFNRSxlQUFlRiwyQ0FBTUEsQ0FBQztJQUMvQkcsT0FBT0YsMkNBQU1BLENBQUM7UUFBRUcsZ0JBQWdCO0lBQW9CLEdBQy9DQyxHQUFHLENBQUMsR0FBRyxxQkFDUEYsS0FBSyxDQUFDO0lBQ1hHLFVBQVVMLDJDQUFNQSxDQUFDO1FBQUVHLGdCQUFnQjtJQUF1QixHQUNyREMsR0FBRyxDQUFDLEdBQUcsMkNBQ1BFLEdBQUcsQ0FBQyxJQUFJO0FBQ2pCLEdBQUc7QUFhSSxNQUFNQyxjQUFjUiwyQ0FBTUEsQ0FBQyxDQUVsQyxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXNfZnJvbnRlbmQvLi9saWIvem9kLnRzP2YzZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb2JqZWN0LCBzdHJpbmcgfSBmcm9tIFwiem9kXCJcblxuZXhwb3J0IGNvbnN0IHNpZ25JblNjaGVtYSA9IG9iamVjdCh7XG4gICAgZW1haWw6IHN0cmluZyh7IHJlcXVpcmVkX2Vycm9yOiBcIkVtYWlsIGlzIHJlcXVpcmVkXCIgfSlcbiAgICAgICAgLm1pbigxLCBcIkVtYWlsIGlzIHJlcXVpcmVkXCIpXG4gICAgICAgIC5lbWFpbChcIkludmFsaWQgZW1haWxcIiksXG4gICAgcGFzc3dvcmQ6IHN0cmluZyh7IHJlcXVpcmVkX2Vycm9yOiBcIlBhc3N3b3JkIGlzIHJlcXVpcmVkXCIgfSlcbiAgICAgICAgLm1pbig4LCBcIlBhc3N3b3JkIG11c3QgYmUgbW9yZSB0aGFuIDggY2hhcmFjdGVyc1wiKVxuICAgICAgICAubWF4KDMyLCBcIlBhc3N3b3JkIG11c3QgYmUgbGVzcyB0aGFuIDMyIGNoYXJhY3RlcnNcIiksXG59KTtcblxuZXhwb3J0IHR5cGUgRm9ybVN0YXRlID1cbiAgICB8IHtcbiAgICAgICAgZXJyb3JzPzoge1xuICAgICAgICAgICAgbmFtZT86IHN0cmluZ1tdXG4gICAgICAgICAgICBlbWFpbD86IHN0cmluZ1tdXG4gICAgICAgICAgICBwYXNzd29yZD86IHN0cmluZ1tdXG4gICAgICAgIH1cbiAgICAgICAgbWVzc2FnZT86IHN0cmluZ1xuICAgIH1cbiAgICB8IHVuZGVmaW5lZFxuXG5leHBvcnQgY29uc3QgbG9naW5TY2hlbWEgPSBvYmplY3Qoe1xuXG59KTsiXSwibmFtZXMiOlsib2JqZWN0Iiwic3RyaW5nIiwic2lnbkluU2NoZW1hIiwiZW1haWwiLCJyZXF1aXJlZF9lcnJvciIsIm1pbiIsInBhc3N3b3JkIiwibWF4IiwibG9naW5TY2hlbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/zod.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@auth","vendor-chunks/zod","vendor-chunks/jose","vendor-chunks/oauth4webapi","vendor-chunks/bcryptjs","vendor-chunks/next-auth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fcharlesfrank%2FDesktop%2FInfinitSeed%2FIS_Frontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fcharlesfrank%2FDesktop%2FInfinitSeed%2FIS_Frontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();