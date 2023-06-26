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
exports.AtualizaCampanhaController = void 0;
const AtualizaCampanhaService_1 = require("../../services/campanha/AtualizaCampanhaService");
class AtualizaCampanhaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const atualizaCampanhaService = new AtualizaCampanhaService_1.AtualizaCampanhaService();
            const campanhaID = req.query.campanhaID;
            const { nome, status, tema } = req.body;
            const campanha = yield atualizaCampanhaService.execute({
                nome,
                status,
                tema,
                campanhaID
            });
            return res.status(200).json(campanha);
        });
    }
}
exports.AtualizaCampanhaController = AtualizaCampanhaController;
