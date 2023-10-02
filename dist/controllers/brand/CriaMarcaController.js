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
exports.CriaMarcaController = void 0;
const CriaMarcaService_1 = require("../../services/brand/CriaMarcaService");
class CriaMarcaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userID = req.query.userID;
            const { name } = req.body;
            if (!req.file)
                throw new Error("Falha ao carregar imagem da Marca - API");
            const criaMarcaService = new CriaMarcaService_1.CriaMarcaService();
            const _brand = yield criaMarcaService.execute({
                name,
                avatar: req.file,
                userID
            });
            return res.status(200).json(_brand);
        });
    }
}
exports.CriaMarcaController = CriaMarcaController;
