"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerApp = void 0;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var bodyParser = __importStar(require("body-parser"));
require("express-async-errors");
var core_1 = require("@overnightjs/core");
var cors_1 = __importDefault(require("cors"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var errorHandler_1 = require("./middlewares/errorHandler");
var auth_1 = require("./controllers/auth");
var message_1 = require("./controllers/message");
var ServerApp = /** @class */ (function (_super) {
    __extends(ServerApp, _super);
    function ServerApp() {
        var _this = _super.call(this, process.env.NODE_ENV === 'development') || this;
        _this.app.use(bodyParser.json());
        _this.app.use(cors_1.default({ origin: true, credentials: true }));
        _this.app.use(cookie_session_1.default({
            keys: ['secret'],
            signed: false,
            // secure: process.env.NODE_ENV !== 'test',
            secure: false,
            httpOnly: true,
        }));
        if (process.env.NODE_ENV === 'production') {
            _this.app.use(express_1.default.static(path_1.default.join(__dirname, 'client', 'build')));
        }
        _this.setupControllers();
        _this.app.use(errorHandler_1.errorHandler);
        _this.app.get('*', function (req, res) {
            res.sendFile(path_1.default.join(__dirname, 'client', 'build', 'index.html'));
        });
        return _this;
        // this.app.all('*', async () => {
        //   throw new NotFoundError();
        // });
    }
    ServerApp.prototype.setupControllers = function () {
        var authController = new auth_1.AuthController();
        var messageController = new message_1.MessageController();
        _super.prototype.addControllers.call(this, [authController, messageController]);
    };
    ServerApp.prototype.start = function (port) {
        this.app.listen(port, function () {
            console.log("App running on port: " + port);
        });
    };
    return ServerApp;
}(core_1.Server));
exports.ServerApp = ServerApp;
