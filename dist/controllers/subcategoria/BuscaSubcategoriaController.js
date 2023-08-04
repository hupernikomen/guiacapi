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
exports.BuscaSubcategoriaController = void 0;
const BuscaSubCategoriaService_1 = require("../../services/subcategoria/BuscaSubCategoriaService");
class BuscaSubcategoriaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const subcategoriaID = req.query.subcategoriaID;
            const buscaSubcategoriaService = new BuscaSubCategoriaService_1.BuscaSubcategoriaService();
            const subcategoria = yield buscaSubcategoriaService.execute({
                subcategoriaID
            });
            return res.json(subcategoria);
        });
    }
}
exports.BuscaSubcategoriaController = BuscaSubcategoriaController;
