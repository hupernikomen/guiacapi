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
exports.AtualizarProfissionalController = void 0;
const AtualizarProfissionalService_1 = require("../../services/profissional/AtualizarProfissionalService");
class AtualizarProfissionalController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioID = req.query.usuarioID;
            const { nome, bio, endereco, lista_servicos, album, bairro, profissaoID } = req.body;
            const file = req.file;
            const files = req.files;
            const atualizarProfissionalService = new AtualizarProfissionalService_1.AtualizarProfissionalService();
            const profissional = yield atualizarProfissionalService.execute({
                usuarioID,
                avatar: file,
                nome,
                bio,
                endereco,
                lista_servicos,
                album: files,
                bairro,
                profissaoID
            });
            return res.json(profissional);
        });
    }
}
exports.AtualizarProfissionalController = AtualizarProfissionalController;
