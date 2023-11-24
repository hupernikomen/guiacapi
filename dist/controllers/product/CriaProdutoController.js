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
exports.CriaProdutoController = void 0;
const CriaProdutoService_1 = require("../../services/product/CriaProdutoService");
class CriaProdutoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const storeID = req.query.storeID;
            const { reference, name, description, price, size, color, categoryID, subcategoryID, } = req.body;
            if (!req.files)
                throw new Error("Ops.. algo deu errado!");
            const criaProdutoService = new CriaProdutoService_1.CriaProdutoService();
            const produto = yield criaProdutoService.execute({
                reference,
                name,
                description,
                price,
                size,
                color,
                image: [req.files],
                categoryID,
                subcategoryID,
                storeID,
            });
            return res.status(200).json(produto);
        });
    }
}
exports.CriaProdutoController = CriaProdutoController;
