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
exports.CriarProdutoController = void 0;
const CriaPdtService_1 = require("../../services/produto/CriaPdtService");
class CriarProdutoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const criaPdtService = new CriaPdtService_1.CriaPdtService();
            const lojaID = req.query.lojaID;
            const { nome, descricao, preco, tamanho, categoriaID, } = req.body;
            if (!req.files) {
                throw new Error("Ops.. algo deu errado!");
            }
            else {
                const files = req.files;
                const produto = yield criaPdtService.execute({
                    nome,
                    descricao,
                    preco,
                    tamanho,
                    imagens: files,
                    categoriaID,
                    lojaID,
                });
                return res.status(200).json(produto);
            }
        });
    }
}
exports.CriarProdutoController = CriarProdutoController;
