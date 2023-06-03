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
exports.AtualizaPdtController = void 0;
const AtualizaPdtService_1 = require("../../services/produto/AtualizaPdtService");
class AtualizaPdtController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const produtoID = req.query.produtoID;
            const { nome, descricao, preco, oferta, tamanho, categoriaID, campanhaID } = req.body;
            const atualizaPdtService = new AtualizaPdtService_1.AtualizaPdtService();
            const produto = yield atualizaPdtService.execute({
                nome,
                descricao,
                preco: parseFloat(preco.toFixed(2)),
                oferta: parseFloat(oferta.toFixed(2)),
                tamanho,
                categoriaID,
                campanhaID,
                produtoID
            });
            return res.json(produto);
        });
    }
}
exports.AtualizaPdtController = AtualizaPdtController;
