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
exports.BuscarCategoriasController = void 0;
const BuscarProdutoService_1 = require("../../services/produto/BuscarProdutoService");
class BuscarCategoriasController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nomeProduto = req.query.nomeProduto;
            const buscarProdutosServices = new BuscarProdutoService_1.BuscarProdutosService();
            const produto = yield buscarProdutosServices.execute({
                nomeProduto
            });
            return res.json(produto);
        });
    }
}
exports.BuscarCategoriasController = BuscarCategoriasController;
