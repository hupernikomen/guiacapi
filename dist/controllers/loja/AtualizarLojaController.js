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
exports.AtualizarLojaController = void 0;
const AtualizarLojaService_1 = require("../../services/loja/AtualizarLojaService");
class AtualizarLojaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lojaID = req.query.lojaID;
            const { ativo, nome, whatsapp, bio, endereco, bairro, referencia, latlng, entrega } = req.body;
            const file = req.file;
            const boo = entrega === 'true';
            const atualizarLojaService = new AtualizarLojaService_1.AtualizarLojaService();
            const data = yield atualizarLojaService.execute({
                lojaID,
                ativo,
                logo: file,
                nome,
                whatsapp,
                bio,
                endereco,
                bairro,
                referencia,
                latlng,
                entrega: boo
            });
            return res.json(data);
        });
    }
}
exports.AtualizarLojaController = AtualizarLojaController;
