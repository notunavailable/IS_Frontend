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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            async authorize (credentials) {\n                const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__.MongoClient.connect(process.env.URI, {\n                    useNewUrlParser: true,\n                    useUnifiedTopology: true\n                });\n                const users = await client.db().collection(\"users\");\n                const result = await users.findOne({\n                    email: credentials.email\n                });\n                if (!result) {\n                    client.close();\n                    throw new Error(\"No user found with the email\");\n                }\n                const checkPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_3__.compare)(credentials.password, result.password);\n                if (!checkPassword) {\n                    client.close();\n                    throw new Error(\"incorrect_password\");\n                }\n                // Update lastLoginDate after successful login\n                await users.updateOne({\n                    _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_2__.ObjectId)(result._id)\n                }, {\n                    $set: {\n                        lastLoginDate: new Date()\n                    }\n                });\n                client.close();\n                return {\n                    email: result.email,\n                    id: result._id,\n                    firstName: result.firstName,\n                    lastName: result.lastName\n                };\n            }\n        })\n    ],\n    callbacks: {\n        jwt: async ({ token , user  })=>{\n            if (user) token.id = user.id;\n            return token;\n        },\n        session: async ({ session , token  })=>{\n            if (token) session.id = token.id;\n            return session;\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET,\n    session: {\n        strategy: \"jwt\",\n        maxAge: 1 * 24 * 60 * 60\n    },\n    jwt: async ({ token , user  })=>{\n        if (user) token.id = user.id;\n        return token;\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpQztBQUNpQztBQUNsQjtBQUNiO0FBRW5DLGlFQUFlQSxnREFBUUEsQ0FBQztJQUNwQkssV0FBVztRQUNQSixzRUFBbUJBLENBQUM7WUFDaEIsTUFBTUssV0FBVUMsV0FBVyxFQUFFO2dCQUN6QixNQUFNQyxTQUFTLE1BQU1OLHdEQUFtQixDQUNwQ1EsUUFBUUMsR0FBRyxDQUFDQyxHQUFHLEVBQ2Y7b0JBQUVDLGlCQUFpQixJQUFJO29CQUFFQyxvQkFBb0IsSUFBSTtnQkFBQztnQkFFdEQsTUFBTUMsUUFBUSxNQUFNUCxPQUFPUSxFQUFFLEdBQUdDLFVBQVUsQ0FBQztnQkFDM0MsTUFBTUMsU0FBUyxNQUFNSCxNQUFNSSxPQUFPLENBQUM7b0JBQy9CQyxPQUFPYixZQUFZYSxLQUFLO2dCQUM1QjtnQkFFQSxJQUFJLENBQUNGLFFBQVE7b0JBQ1RWLE9BQU9hLEtBQUs7b0JBQ1osTUFBTSxJQUFJQyxNQUFNLGdDQUFnQztnQkFDcEQsQ0FBQztnQkFFRCxNQUFNQyxnQkFBZ0IsTUFBTW5CLGlEQUFPQSxDQUFDRyxZQUFZaUIsUUFBUSxFQUFFTixPQUFPTSxRQUFRO2dCQUV6RSxJQUFJLENBQUNELGVBQWU7b0JBQ2hCZixPQUFPYSxLQUFLO29CQUNaLE1BQU0sSUFBSUMsTUFBTSxzQkFBc0I7Z0JBQ3hDLENBQUM7Z0JBRUgsOENBQThDO2dCQUM5QyxNQUFNUCxNQUFNVSxTQUFTLENBQ2pCO29CQUFFQyxLQUFLdkIsaURBQVFBLENBQUNlLE9BQU9RLEdBQUc7Z0JBQUUsR0FDNUI7b0JBQUVDLE1BQU07d0JBQUVDLGVBQWUsSUFBSUM7b0JBQU87Z0JBQUU7Z0JBRzFDckIsT0FBT2EsS0FBSztnQkFDWixPQUFPO29CQUNIRCxPQUFPRixPQUFPRSxLQUFLO29CQUNuQlUsSUFBSVosT0FBT1EsR0FBRztvQkFDZEssV0FBV2IsT0FBT2EsU0FBUztvQkFDM0JDLFVBQVVkLE9BQU9jLFFBQVE7Z0JBQzdCO1lBQ0o7UUFDSjtLQUNIO0lBQ0RDLFdBQVc7UUFDUEMsS0FBSyxPQUFPLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFLEdBQUs7WUFDNUIsSUFBSUEsTUFBTUQsTUFBTUwsRUFBRSxHQUFHTSxLQUFLTixFQUFFO1lBQzVCLE9BQU9LO1FBQ1g7UUFDQUUsU0FBUyxPQUFPLEVBQUVBLFFBQU8sRUFBRUYsTUFBSyxFQUFFLEdBQUs7WUFDbkMsSUFBSUEsT0FBT0UsUUFBUVAsRUFBRSxHQUFHSyxNQUFNTCxFQUFFO1lBQ2hDLE9BQU9PO1FBQ1g7SUFDSjtJQUNBQyxRQUFRNUIsUUFBUUMsR0FBRyxDQUFDNEIsZUFBZTtJQUNuQ0YsU0FBUztRQUNMRyxVQUFVO1FBQ1ZDLFFBQVEsSUFBSSxLQUFLLEtBQUs7SUFDMUI7SUFDQVAsS0FBSyxPQUFPLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFLEdBQUs7UUFDNUIsSUFBSUEsTUFBTUQsTUFBTUwsRUFBRSxHQUFHTSxLQUFLTixFQUFFO1FBQzVCLE9BQU9LO0lBQ1g7QUFDSixFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gJ2JjcnlwdGpzJztcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlVSSSxcbiAgICAgICAgICAgICAgICAgICAgeyB1c2VOZXdVcmxQYXJzZXI6IHRydWUsIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oJ3VzZXJzJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXNlcnMuZmluZE9uZSh7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHVzZXIgZm91bmQgd2l0aCB0aGUgZW1haWwnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja1Bhc3N3b3JkID0gYXdhaXQgY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCwgcmVzdWx0LnBhc3N3b3JkKTtcblxuICAgICAgICAgICAgICAgIGlmICghY2hlY2tQYXNzd29yZCkge1xuICAgICAgICAgICAgICAgICAgICBjbGllbnQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbmNvcnJlY3RfcGFzc3dvcmQnKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBsYXN0TG9naW5EYXRlIGFmdGVyIHN1Y2Nlc3NmdWwgbG9naW5cbiAgICAgICAgICAgICAgICBhd2FpdCB1c2Vycy51cGRhdGVPbmUoXG4gICAgICAgICAgICAgICAgICAgIHsgX2lkOiBPYmplY3RJZChyZXN1bHQuX2lkKSB9LFxuICAgICAgICAgICAgICAgICAgICB7ICRzZXQ6IHsgbGFzdExvZ2luRGF0ZTogbmV3IERhdGUoKSB9IH1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY2xpZW50LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHJlc3VsdC5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHJlc3VsdC5faWQsXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogcmVzdWx0LmZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU6IHJlc3VsdC5sYXN0TmFtZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICBdLFxuICAgIGNhbGxiYWNrczoge1xuICAgICAgICBqd3Q6IGFzeW5jICh7IHRva2VuLCB1c2VyIH0pID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB0b2tlbi5pZCA9IHVzZXIuaWRcbiAgICAgICAgICAgIHJldHVybiB0b2tlblxuICAgICAgICB9LFxuICAgICAgICBzZXNzaW9uOiBhc3luYyAoeyBzZXNzaW9uLCB0b2tlbiB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodG9rZW4pIHNlc3Npb24uaWQgPSB0b2tlbi5pZFxuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb25cbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxuICAgIHNlc3Npb246IHtcbiAgICAgICAgc3RyYXRlZ3k6ICdqd3QnLFxuICAgICAgICBtYXhBZ2U6IDEgKiAyNCAqIDYwICogNjAsIC8vIDFkXG4gICAgfSxcbiAgICBqd3Q6IGFzeW5jICh7IHRva2VuLCB1c2VyIH0pID0+IHtcbiAgICAgICAgaWYgKHVzZXIpIHRva2VuLmlkID0gdXNlci5pZDtcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG59KTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiTW9uZ29DbGllbnQiLCJPYmplY3RJZCIsImNvbXBhcmUiLCJwcm92aWRlcnMiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsImNsaWVudCIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiVVJJIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlcnMiLCJkYiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJmaW5kT25lIiwiZW1haWwiLCJjbG9zZSIsIkVycm9yIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkIiwidXBkYXRlT25lIiwiX2lkIiwiJHNldCIsImxhc3RMb2dpbkRhdGUiLCJEYXRlIiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlciIsInNlc3Npb24iLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiLCJzdHJhdGVneSIsIm1heEFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();