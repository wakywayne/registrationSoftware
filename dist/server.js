/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/config/index.ts":
/*!************************************!*\
  !*** ./src/server/config/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\ndotenv.config();\nexports[\"default\"] = {\n    mysql: {\n        host: process.env.MYSQL_HOST,\n        port: process.env.MYSQL_PORT,\n        user: process.env.MYSQL_USER,\n        password: process.env.MYSQL_PASSWORD,\n        database: process.env.MYSQL_DATABASE,\n    },\n    test: process.env.TESTING_ENV,\n    jwt: {\n        secret: process.env.JWT_SECRET,\n    },\n    stripe: {\n        secret: process.env.STRIPE_SECRET_KEY,\n    },\n};\n\n\n//# sourceURL=webpack://app-backend-template/./src/server/config/index.ts?");

/***/ }),

/***/ "./src/server/db/blogs.ts":
/*!********************************!*\
  !*** ./src/server/db/blogs.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/server/db/index.ts\");\nvar selectAllFromEvents_table = function () { return (0, index_1.Query)(\"select * from events_table;\"); };\nvar selectAllDivisions = function (id) { return (0, index_1.Query)(\"select * from division_table where event_id = ?;\", [id]); };\nvar selectEventFromEvents_table = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    switch (_a.label) {\n        case 0: return [4 /*yield*/, (0, index_1.Query)(\"select * from events_table where id=?;\", [id])];\n        case 1: return [2 /*return*/, _a.sent()];\n    }\n}); }); };\nvar selectEventNameFromEvents_table = function (name) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    switch (_a.label) {\n        case 0: return [4 /*yield*/, (0, index_1.Query)(\"select id from events_table where name_of_event=?;\", [name])];\n        case 1: return [2 /*return*/, _a.sent()];\n    }\n}); }); };\nvar find = function (column, value) {\n    return (0, index_1.Query)(\"SELECT * from users_table WHERE ?? = ?\", [\n        column,\n        value,\n    ]);\n};\nvar insertUser = function (newUser) {\n    (0, index_1.Query)('Insert into users_table SET ?', [newUser]);\n};\nvar insertEvent = function (newEvent) {\n    (0, index_1.Query)('Insert into events_table SET ?', [newEvent]);\n};\nvar insertDivision = function (newDivision) {\n    (0, index_1.Query)('Insert into division_table SET ?', [newDivision]);\n};\nexports[\"default\"] = {\n    selectAllFromEvents_table: selectAllFromEvents_table,\n    find: find,\n    insertUser: insertUser,\n    insertEvent: insertEvent,\n    insertDivision: insertDivision,\n    selectEventFromEvents_table: selectEventFromEvents_table,\n    selectEventNameFromEvents_table: selectEventNameFromEvents_table,\n    selectAllDivisions: selectAllDivisions\n};\n\n\n//# sourceURL=webpack://app-backend-template/./src/server/db/blogs.ts?");

/***/ }),

/***/ "./src/server/db/index.ts":
/*!********************************!*\
  !*** ./src/server/db/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Query = exports.Connection = void 0;\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\nvar config_1 = __webpack_require__(/*! ../config */ \"./src/server/config/index.ts\");\nexports.Connection = mysql.createConnection({\n    host: config_1.default.mysql.host,\n    port: Number(config_1.default.mysql.port),\n    user: config_1.default.mysql.user,\n    password: config_1.default.mysql.password,\n    database: config_1.default.mysql.database,\n});\nexports.Connection.connect(function (err) {\n    if (err)\n        console.log(err);\n});\nvar Query = function (query, values) {\n    return new Promise(function (resolve, reject) {\n        exports.Connection.query(query, values, function (err, results) {\n            if (err)\n                return reject(err);\n            return resolve(results);\n        });\n    });\n};\nexports.Query = Query;\n\n\n//# sourceURL=webpack://app-backend-template/./src/server/db/index.ts?");

/***/ }),

/***/ "./src/server/middleware/auth.ts":
/*!***************************************!*\
  !*** ./src/server/middleware/auth.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.tokenCheck = void 0;\nvar passport = __webpack_require__(/*! passport */ \"passport\");\nfunction tokenCheck(req, res, next) {\n    passport.authenticate('jwt', function (err, user, info) {\n        if (err) {\n            return next(err);\n            // If next err get's called it get daisy chained to the call back and then does the try catch that's on pizza time for example  \n        }\n        if (info) {\n            console.log(info);\n            return res.status(401).json({ message: info.message });\n        }\n        if (!user) {\n            return res.status(401).json({ message: 'Rederect to login something went wrong' });\n            // res.redirect('/login);\n        }\n        req.user = user;\n        next();\n    })(req, res, next);\n}\nexports.tokenCheck = tokenCheck;\n\n\n//# sourceURL=webpack://app-backend-template/./src/server/middleware/auth.ts?");

/***/ }),

/***/ "./src/server/middleware/passport-stradegies.ts":
/*!******************************************************!*\
  !*** ./src/server/middleware/passport-stradegies.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.configurePassport = void 0;\nvar config_1 = __webpack_require__(/*! ../config */ \"./src/server/config/index.ts\");\nvar blogs_1 = __webpack_require__(/*! ../db/blogs */ \"./src/server/db/blogs.ts\");\nvar passport = __webpack_require__(/*! passport */ \"passport\");\nvar PassportLocal = __webpack_require__(/*! passport-local */ \"passport-local\");\nvar PassportJWT = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\nvar utils_1 = __webpack_require__(/*! ../utils */ \"./src/server/utils/index.ts\");\nfunction configurePassport(app) {\n    var _this = this;\n    passport.serializeUser(function (user /*I suck*/, done) {\n        if (user.password) {\n            delete user.password;\n        }\n        done(null, user);\n    });\n    passport.deserializeUser(function (user, done) { return done(null, user); });\n    passport.use(new PassportLocal.Strategy({\n        usernameField: \"email\",\n    }, function (email, password, done) { return __awaiter(_this, void 0, void 0, function () {\n        var userFound, error_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    return [4 /*yield*/, blogs_1.default.find(\"email\", email)];\n                case 1:\n                    userFound = (_a.sent())[0];\n                    if (userFound && (0, utils_1.compareHash)(password, userFound.password)) {\n                        done(null, userFound);\n                    }\n                    else {\n                        done(null, false);\n                    }\n                    return [3 /*break*/, 3];\n                case 2:\n                    error_1 = _a.sent();\n                    done(error_1);\n                    return [3 /*break*/, 3];\n                case 3: return [2 /*return*/];\n            }\n        });\n    }); }));\n    passport.use(new PassportJWT.Strategy({\n        jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),\n        secretOrKey: config_1.default.jwt.secret,\n    }, function (payload, done) {\n        try {\n            done(null, payload);\n        }\n        catch (error) {\n            done(error);\n        }\n    }));\n    app.use(passport.initialize());\n}\nexports.configurePassport = configurePassport;\n\n\n//# sourceURL=webpack://app-backend-template/./src/server/middleware/passport-stradegies.ts?");

/***/ }),

/***/ "./src/server/routes/api/index.ts":
/*!****************************************!*\
  !*** ./src/server/routes/api/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar config_1 = __webpack_require__(/*! ../../config */ \"./src/server/config/index.ts\");\nvar blogs_1 = __webpack_require__(/*! ../../db/blogs */ \"./src/server/db/blogs.ts\");\nvar stripe_1 = __webpack_require__(/*! stripe */ \"stripe\");\nvar stripe = new stripe_1.default(config_1.default.stripe.secret, { apiVersion: '2020-08-27' });\nvar router = express.Router();\nrouter.get(\"/hello\", function (req, res, next) {\n    res.json(\"Hello \" + config_1.default.test);\n});\nrouter.get(\"/events\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var _a, _b, err_1;\n    return __generator(this, function (_c) {\n        switch (_c.label) {\n            case 0:\n                _c.trys.push([0, 2, , 3]);\n                _b = (_a = res).json;\n                return [4 /*yield*/, blogs_1.default.selectAllFromEvents_table()];\n            case 1:\n                _b.apply(_a, [_c.sent()]);\n                return [3 /*break*/, 3];\n            case 2:\n                err_1 = _c.sent();\n                console.log(err_1);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.get(\"/event/:id\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var _a, _b, err_2;\n    return __generator(this, function (_c) {\n        switch (_c.label) {\n            case 0:\n                _c.trys.push([0, 2, , 3]);\n                _b = (_a = res).json;\n                return [4 /*yield*/, blogs_1.default.selectEventFromEvents_table(Number(req.params.id))];\n            case 1:\n                _b.apply(_a, [_c.sent()]);\n                return [3 /*break*/, 3];\n            case 2:\n                err_2 = _c.sent();\n                console.log(err_2);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.get(\"/event/divisions/:id\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var _a, _b, err_3;\n    return __generator(this, function (_c) {\n        switch (_c.label) {\n            case 0:\n                _c.trys.push([0, 2, , 3]);\n                _b = (_a = res).json;\n                return [4 /*yield*/, blogs_1.default.selectAllDivisions(Number(req.params.id))];\n            case 1:\n                _b.apply(_a, [_c.sent()]);\n                return [3 /*break*/, 3];\n            case 2:\n                err_3 = _c.sent();\n                console.log(err_3);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.post(\"/donate\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var paymentMethod, amount, fulfilled, err_4;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                paymentMethod = req.body.paymentMethod;\n                amount = req.body.chosenDivision;\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 3, , 4]);\n                return [4 /*yield*/, stripe.paymentIntents.create({\n                        currency: 'usd',\n                        amount: Number(amount) * 100,\n                        payment_method: paymentMethod.id,\n                        confirm: true\n                    })];\n            case 2:\n                fulfilled = _a.sent();\n                res.json(fulfilled);\n                return [3 /*break*/, 4];\n            case 3:\n                err_4 = _a.sent();\n                console.log(err_4);\n                return [3 /*break*/, 4];\n            case 4: return [2 /*return*/];\n        }\n    });\n}); });\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://app-backend-template/./src/server/routes/api/index.ts?");

/***/ }),

/***/ "./src/server/routes/auth/index.ts":
/*!*****************************************!*\
  !*** ./src/server/routes/auth/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar login_1 = __webpack_require__(/*! ./login */ \"./src/server/routes/auth/login.ts\");\nvar register_1 = __webpack_require__(/*! ./register */ \"./src/server/routes/auth/register.ts\");\nvar makeAnEvent_1 = __webpack_require__(/*! ./makeAnEvent */ \"./src/server/routes/auth/makeAnEvent.ts\");\nvar router = express.Router();\nrouter.use(\"/makeAnEvent\", makeAnEvent_1.default);\nrouter.use(\"/login\", login_1.default);\nrouter.use(\"/register\", register_1.default);\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://app-backend-template/./src/server/routes/auth/index.ts?");

/***/ }),

/***/ "./src/server/routes/auth/login.ts":
/*!*****************************************!*\
  !*** ./src/server/routes/auth/login.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nvar passport = __webpack_require__(/*! passport */ \"passport\");\nvar config_1 = __webpack_require__(/*! ../../config */ \"./src/server/config/index.ts\");\nvar router = express.Router();\nrouter.post(\"/\", passport.authenticate('local'), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var token;\n    return __generator(this, function (_a) {\n        try {\n            token = jwt.sign({ userid: req.user.id, email: req.user.email, role: 1 }, config_1.default.jwt.secret, { expiresIn: '30d' });\n            return [2 /*return*/, res.json(token)];\n        }\n        catch (err) {\n            console.log(err);\n            res.status(500).json({ message: \"My code login broke oops... SORRY\" });\n        }\n        return [2 /*return*/];\n    });\n}); });\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://app-backend-template/./src/server/routes/auth/login.ts?");

/***/ }),

/***/ "./src/server/routes/auth/makeAnEvent.ts":
/*!***********************************************!*\
  !*** ./src/server/routes/auth/makeAnEvent.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar blogs_1 = __webpack_require__(/*! ../../db/blogs */ \"./src/server/db/blogs.ts\");\nvar auth_1 = __webpack_require__(/*! ../../middleware/auth */ \"./src/server/middleware/auth.ts\");\nvar rout = express.Router();\nrout.post(\"/\", auth_1.tokenCheck, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var event, _a, _b, _c;\n    return __generator(this, function (_d) {\n        switch (_d.label) {\n            case 0:\n                _d.trys.push([0, 2, , 3]);\n                event = req.body;\n                _b = (_a = res).json;\n                return [4 /*yield*/, blogs_1.default.insertEvent(event)];\n            case 1:\n                _b.apply(_a, [_d.sent()]);\n                return [3 /*break*/, 3];\n            case 2:\n                _c = _d.sent();\n                console.log(\"code broke in makeAnEvent\");\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrout.post(\"/divisions\", auth_1.tokenCheck, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var division, _a, _b, _c;\n    return __generator(this, function (_d) {\n        switch (_d.label) {\n            case 0:\n                _d.trys.push([0, 2, , 3]);\n                division = req.body;\n                _b = (_a = res).json;\n                return [4 /*yield*/, blogs_1.default.insertDivision(division)];\n            case 1:\n                _b.apply(_a, [_d.sent()]);\n                return [3 /*break*/, 3];\n            case 2:\n                _c = _d.sent();\n                console.log(\"code broke in makeAnEvent\");\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nexports[\"default\"] = rout;\n\n\n//# sourceURL=webpack://app-backend-template/./src/server/routes/auth/makeAnEvent.ts?");

/***/ }),

/***/ "./src/server/routes/auth/register.ts":
/*!********************************************!*\
  !*** ./src/server/routes/auth/register.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nvar config_1 = __webpack_require__(/*! ../../config */ \"./src/server/config/index.ts\");\nvar blogs_1 = __webpack_require__(/*! ../../db/blogs */ \"./src/server/db/blogs.ts\");\nvar utils_1 = __webpack_require__(/*! ../../utils */ \"./src/server/utils/index.ts\");\nvar router = express.Router();\nrouter.post(\"/\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var newUser, result, newUserId, results, token, err_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                newUser = req.body;\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 4, , 5]);\n                newUser.password = (0, utils_1.generateHash)(newUser.password);\n                return [4 /*yield*/, blogs_1.default.insertUser(newUser)];\n            case 2:\n                result = _a.sent();\n                return [4 /*yield*/, blogs_1.default.find('email', newUser.email)];\n            case 3:\n                newUserId = _a.sent();\n                results = JSON.parse(JSON.stringify(newUserId[0]));\n                token = jwt.sign({ userid: newUserId[0], email: newUser.email, role: newUser.role }, config_1.default.jwt.secret, { expiresIn: '30d' });\n                return [2 /*return*/, res.json(token)];\n            case 4:\n                err_1 = _a.sent();\n                console.log(err_1);\n                res.status(500).json({ message: \"My code register broke oops\" });\n                return [3 /*break*/, 5];\n            case 5: return [2 /*return*/];\n        }\n    });\n}); });\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://app-backend-template/./src/server/routes/auth/register.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar api_1 = __webpack_require__(/*! ./api */ \"./src/server/routes/api/index.ts\");\nvar auth_1 = __webpack_require__(/*! ./auth */ \"./src/server/routes/auth/index.ts\");\nvar router = express.Router();\nrouter.use(\"/api\", api_1.default);\nrouter.use(\"/auth\", auth_1.default);\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://app-backend-template/./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar index_1 = __webpack_require__(/*! ./routes/index */ \"./src/server/routes/index.ts\");\nvar passport_stradegies_1 = __webpack_require__(/*! ./middleware/passport-stradegies */ \"./src/server/middleware/passport-stradegies.ts\");\nvar app = express();\n(0, passport_stradegies_1.configurePassport)(app);\napp.use(express.static(\"public\"));\napp.use(express.json());\napp.use(index_1.default);\napp.get(['*'], function (req, res, next) {\n    res.sendFile(path.join(__dirname, \"../public/index.html\"));\n});\nvar port = process.env.PORT || 3000;\napp.listen(port, function () { return console.log(\"Server listening on port: \" + port); });\n\n\n//# sourceURL=webpack://app-backend-template/./src/server/server.ts?");

/***/ }),

/***/ "./src/server/utils/index.ts":
/*!***********************************!*\
  !*** ./src/server/utils/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.compareHash = exports.generateHash = void 0;\nvar bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nfunction generateHash(password) {\n    var salt = bcrypt.genSaltSync(12);\n    var hash = bcrypt.hashSync(password, salt);\n    return hash;\n}\nexports.generateHash = generateHash;\nfunction compareHash(password, hashed) {\n    return bcrypt.compareSync(password, hashed);\n}\nexports.compareHash = compareHash;\n\n\n//# sourceURL=webpack://app-backend-template/./src/server/utils/index.ts?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("passport");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.ts");
/******/ 	
/******/ })()
;