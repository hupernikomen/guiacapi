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
exports.CriaCategoriaController = void 0;
const CriaCategoriaService_1 = require("../../services/categoria/CriaCategoriaService");
class CriaCategoriaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome } = req.body;
            const criaCategoriaService = new CriaCategoriaService_1.CriaCategoriaService();
            const categoria = yield criaCategoriaService.execute({ nome });
            if (!categoria)
                throw new Error("Erro ao criar categoria - API");
            return res.status(200).json({ message: "Criado com Sucesso" });
        });
    }
}
exports.CriaCategoriaController = CriaCategoriaController;
