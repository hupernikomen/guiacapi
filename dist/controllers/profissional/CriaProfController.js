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
exports.CriaProfController = void 0;
const CriaProfService_1 = require("../../services/profissional/CriaProfService");
class CriaProfController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const criaProfService = new CriaProfService_1.CriaProfService();
            const regiaoID = req.query.regiaoID;
            const servicoID = req.query.servicoID;
            const { nome, listaServicos, whatsapp, email, aDomicilio, endereco, bio, statusGuia } = req.body;
            if (!req.file) {
                throw new Error("Ops.. algo deu errado!");
            }
            else {
                const file = req.file;
                const profissional = yield criaProfService.execute({
                    nome,
                    avatar: file,
                    listaServicos,
                    whatsapp,
                    email,
                    aDomicilio,
                    endereco,
                    bio,
                    statusGuia,
                    regiaoID,
                    servicoID
                });
                return res.status(200).json(profissional);
            }
        });
    }
}
exports.CriaProfController = CriaProfController;
