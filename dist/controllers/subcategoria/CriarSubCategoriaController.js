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
exports.CriarSubCategoriaController = void 0;
const CriarSubCategoriaService_1 = require("../../services/subcategoria/CriarSubCategoriaService");
class CriarSubCategoriaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome } = req.body;
            const categoriaID = req.query.categoriaID;
            const criarSubCategoriaService = new CriarSubCategoriaService_1.CriarSubCategoriaService();
            const subcategoria = yield criarSubCategoriaService.execute({
                nome,
                categoriaID
            });
            return res.json(subcategoria);
        });
    }
}
exports.CriarSubCategoriaController = CriarSubCategoriaController;
