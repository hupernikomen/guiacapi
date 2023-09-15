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
exports.ListaSubCategoriaController = void 0;
const ListaSubCategoriasService_1 = require("../../services/subcategory/ListaSubCategoriasService");
class ListaSubCategoriaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryID = req.query.categoryID;
            const listaSubCategoriasService = new ListaSubCategoriasService_1.ListaSubCategoriasService();
            const _subcategory = yield listaSubCategoriasService.execute({ categoryID });
            return res.json(_subcategory);
        });
    }
}
exports.ListaSubCategoriaController = ListaSubCategoriaController;
