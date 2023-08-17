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
exports.DeletaPortfolioController = void 0;
const DeletarPortfolioService_1 = require("../../services/portfolio/DeletarPortfolioService");
class DeletaPortfolioController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const portfolioID = req.query.portfolioID;
            const deletaPortfolioService = new DeletarPortfolioService_1.DeletaPortfolioService();
            yield deletaPortfolioService.execute({
                portfolioID
            });
            return res.status(200).json({
                message: "Fique tranquilo! Já excluimos sua imagem"
            });
        });
    }
}
exports.DeletaPortfolioController = DeletaPortfolioController;
