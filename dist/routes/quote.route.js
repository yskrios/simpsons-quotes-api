"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quoteRouter = void 0;
const express_1 = require("express");
exports.quoteRouter = (0, express_1.Router)();
exports.quoteRouter.get("/", (req, res) => {
    res.json({
        items: [],
    });
});
