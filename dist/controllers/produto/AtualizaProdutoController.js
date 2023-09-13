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
exports.AtualizaProdutoController = void 0;
const AtualizaProdutoService_1 = require("../../services/produto/AtualizaProdutoService");
class AtualizaProdutoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const produtoID = req.query.produtoID;
            const { nome, descricao, preco, oferta, tamanho, cores, categoriaID, campanhaID } = req.body;
            const atualizaProdutoService = new AtualizaProdutoService_1.AtualizaProdutoService();
            yield atualizaProdutoService.execute({
                nome,
                descricao,
                preco,
                oferta,
                tamanho,
                cores,
                categoriaID,
                campanhaID,
                produtoID
            });
            return res.status(200).json({ message: "Produto atualizado" });
        });
    }
}
exports.AtualizaProdutoController = AtualizaProdutoController;
