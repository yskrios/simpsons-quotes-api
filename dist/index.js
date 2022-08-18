"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const quote_route_1 = require("./routes/quote.route");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 9001;
app.use("/quote", quote_route_1.quoteRouter);
app.get("/", (req, res) => {
    res.send("Hola mundo");
});
app.listen(PORT, () => {
    console.log("🚀 ~ file: index.ts ~ line 13 ~ app.listen ~ PORT", PORT);
});
