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
exports.AtualizaLojaController = void 0;
const AtualizaLojaService_1 = require("../../services/loja/AtualizaLojaService");
class AtualizaLojaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioID = req.query.usuarioID;
            const { nome, bio, endereco, bairro, ponto_ref, delivery, tema } = req.body;
            const file = req.file;
            const atualizaLojaService = new AtualizaLojaService_1.AtualizaLojaService();
            const data = yield atualizaLojaService.execute({
                usuarioID,
                avatar: file,
                nome,
                bio,
                endereco,
                bairro,
                ponto_ref,
                delivery,
                tema
            });
            return res.json(data);
        });
    }
}
exports.AtualizaLojaController = AtualizaLojaController;
