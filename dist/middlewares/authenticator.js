"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authenticator = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
require("dotenv/config");
function Authenticator(req, res, next) {
    const authToken = req.headers.authorization;
    if (!authToken)
        return res.status(401).end();
    const [, token] = authToken.split(" ");
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        req.user_ID = sub;
        return next();
    }
    catch (error) {
        return res.status(401).end();
    }
}
exports.Authenticator = Authenticator;
