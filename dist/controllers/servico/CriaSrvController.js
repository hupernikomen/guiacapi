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
exports.CriaSrvController = void 0;
const CriaSrvService_1 = require("../../services/servico/CriaSrvService");
class CriaSrvController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const criaSrvService = new CriaSrvService_1.CriaSrvService();
            const regiaoID = req.query.regiaoID;
            const { nome } = req.body;
            const servico = yield criaSrvService.execute({
                nome,
                regiaoID
            });
            return res.status(200).json(servico);
        });
    }
}
exports.CriaSrvController = CriaSrvController;
