"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var messageSchema = new mongoose_1.default.Schema({
    senderId: {
        type: String,
        required: true,
    },
    recciverId: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
}, {
    timestamps: { createdAt: true, updatedAt: false },
    toJSON: {
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
    },
});
messageSchema.statics.build = function (messageAttrs) {
    return new Message(messageAttrs);
};
var Message = mongoose_1.default.model('Message', messageSchema);
exports.Message = Message;
