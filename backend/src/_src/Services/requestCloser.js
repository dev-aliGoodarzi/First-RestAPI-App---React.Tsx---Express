"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestCloser = void 0;
const requestCloser = (res) => {
    return res.end();
};
exports.requestCloser = requestCloser;
