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
exports.AtualizaSrvController = void 0;
const AtualizaSrvService_1 = require("../../services/servico/AtualizaSrvService");
class AtualizaSrvController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const atualizaSrvService = new AtualizaSrvService_1.AtualizaSrvService();
            const servicoID = req.query.servicoID;
            const { nome } = req.body;
            const servico = yield atualizaSrvService.execute({
                nome,
                servicoID
            });
            return res.status(200).json(servico);
        });
    }
}
exports.AtualizaSrvController = AtualizaSrvController;
