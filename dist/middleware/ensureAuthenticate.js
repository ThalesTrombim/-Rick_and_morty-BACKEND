"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticate = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticate(req, res, next) {
    const authToken = req.headers.authorization;
    if (!authToken) {
        res.status(401).json({ erroCode: "token.invalid" });
    }
    const [, token] = authToken.split(" ");
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        req.user_id = sub;
        return next();
    }
    catch (err) {
        return res.status(401).json({ errorCode: "token expired, please login" });
    }
}
exports.ensureAuthenticate = ensureAuthenticate;
