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
exports.PorProfissaoController = void 0;
const PorProfissaoService_1 = require("../../services/profissional/PorProfissaoService");
class PorProfissaoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const profissaoID = req.query.profissaoID;
            const porProfissaoService = new PorProfissaoService_1.PorProfissaoService();
            const produto = yield porProfissaoService.execute({
                profissaoID
            });
            return res.json(produto);
        });
    }
}
exports.PorProfissaoController = PorProfissaoController;
