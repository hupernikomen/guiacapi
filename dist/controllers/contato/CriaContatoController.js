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
const CriaContatoService_1 = require("../../services/contato/CriaContatoService");
class CriaContatoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const criaContatoService = new CriaContatoService_1.CriaContatoService();
            const usuarioID = req.query.usuarioID;
            const { nome, whatsapp, setor, horario } = req.body;
            if (!req.file) {
                throw new Error("Ops.. algo deu errado!");
            }
            else {
                const file = req.file;
                const contato = yield criaContatoService.execute({
                    nome,
                    avatar: file,
                    setor,
                    whatsapp,
                    horario,
                    usuarioID
                });
                return res.status(200).json(contato);
            }
        });
    }
}
exports.CriaContatoController = CriaContatoController;
