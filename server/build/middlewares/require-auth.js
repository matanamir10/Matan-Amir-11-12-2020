"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
var not_authorized_1 = require("../errors/not-authorized");
exports.requireAuth = function (req, res, next) {
    if (!req.currentUser) {
        throw new not_authorized_1.NotAuthorizedError();
    }
    next();
};
