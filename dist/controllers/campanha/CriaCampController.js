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
exports.CriaCampController = void 0;
const CriaCampService_1 = require("../../services/campanha/CriaCampService");
class CriaCampController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, tema, status } = req.body;
            const criaCampService = new CriaCampService_1.CriaCampService();
            const campanha = yield criaCampService.execute({
                nome, tema, status
            });
            return res.json(campanha);
        });
    }
}
exports.CriaCampController = CriaCampController;
