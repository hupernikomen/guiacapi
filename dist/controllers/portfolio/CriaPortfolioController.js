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
exports.CriaPortfolioControlller = void 0;
const CriaPortfolioService_1 = require("../../services/portfolio/CriaPortfolioService");
class CriaPortfolioControlller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const criaPortfolioService = new CriaPortfolioService_1.CriaPortfolioService();
            const profissionalID = req.query.profissionalID;
            if (!req.file)
                throw new Error("Erro ao carregar imagem - API");
            const portfolio = yield criaPortfolioService.execute({
                imagem: req.file,
                profissionalID,
            });
            return res.status(200).json(portfolio);
        });
    }
}
exports.CriaPortfolioControlller = CriaPortfolioControlller;
