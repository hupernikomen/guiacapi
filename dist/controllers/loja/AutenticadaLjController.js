"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticadaLjController = void 0;
const AutenticadaLjService_1 = require("../../services/loja/AutenticadaLjService");
class AutenticadaLjController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const loja_ID = req.loja_ID;
            const autenticadaLjService = new AutenticadaLjService_1.AutenticadaLjService();
            const me = yield autenticadaLjService.execute(loja_ID);
            return res.json(me);
        });
    }
}
exports.AutenticadaLjController = AutenticadaLjController;
