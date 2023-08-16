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
exports.ListarPortfolioController = void 0;
const ListaPortfolioService_1 = require("../../services/portfolio/ListaPortfolioService");
class ListarPortfolioController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const profissionalID = req.query.profissionalID;
            const listaPortfolioService = new ListaPortfolioService_1.ListaPortfolioService();
            const portfolio = yield listaPortfolioService.execute({
                profissionalID
            });
            return res.json(portfolio);
        });
    }
}
exports.ListarPortfolioController = ListarPortfolioController;
