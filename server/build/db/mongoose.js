"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
exports.connectToDB = function () {
    return new Promise(function (resolve, reject) {
        mongoose_1.default
            .connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(resolve)
            .catch(reject);
    });
};
