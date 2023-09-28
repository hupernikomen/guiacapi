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
exports.CriaPostoController = void 0;
const CriaPostoService_1 = require("../../services/fuelStation/CriaPostoService");
class CriaPostoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const criaPostoService = new CriaPostoService_1.CriaPostoService();
            const { userID } = req.body;
            const _fuelStation = yield criaPostoService.execute({ userID });
            if (!_fuelStation)
                throw new Error("Erro ao cadastrar posto - API");
            return res.status(200).json({ message: "Criado com sucesso" });
        });
    }
}
exports.CriaPostoController = CriaPostoController;
