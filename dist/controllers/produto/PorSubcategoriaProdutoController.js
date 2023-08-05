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
exports.PorSubcategoriaProdutoController = void 0;
const PorSubcategoriaProdutoService_1 = require("../../services/produto/PorSubcategoriaProdutoService");
class PorSubcategoriaProdutoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const subcategoriaID = req.query.subcategoriaID;
            const porSubcategoriaProdutoService = new PorSubcategoriaProdutoService_1.PorSubcategoriaProdutoService();
            const produto = yield porSubcategoriaProdutoService.execute({
                subcategoriaID
            });
            return res.json(produto);
        });
    }
}
exports.PorSubcategoriaProdutoController = PorSubcategoriaProdutoController;
