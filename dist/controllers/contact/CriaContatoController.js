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
exports.CriaContatoController = void 0;
const CriaContatoService_1 = require("../../services/contact/CriaContatoService");
class CriaContatoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const criaContatoService = new CriaContatoService_1.CriaContatoService();
            const userID = req.query.userID;
            const { name, whatsapp, sector, time, saturday, sunday, away } = req.body;
            if (!req.file)
                throw new Error("Ops.. algo deu errado!");
            const _contact = yield criaContatoService.execute({
                name,
                avatar: req.file,
                sector,
                whatsapp,
                time,
                saturday,
                sunday,
                away,
                userID
            });
            if (!_contact)
                throw new Error("Erro ao criar contato - API");
            return res.status(200).json({ message: "Criado com Sucesso" });
        });
    }
}
exports.CriaContatoController = CriaContatoController;
