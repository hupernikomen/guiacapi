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
exports.PorCategoriaProdutoController = void 0;
const PorCategoriaProdutoService_1 = require("../../services/produto/PorCategoriaProdutoService");
class PorCategoriaProdutoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoriaID = req.query.categoriaID;
            const porCategoriaProdutoService = new PorCategoriaProdutoService_1.PorCategoriaProdutoService();
            const produto = yield porCategoriaProdutoService.execute({ categoriaID });
            return res.json(produto);
        });
    }
}
exports.PorCategoriaProdutoController = PorCategoriaProdutoController;
