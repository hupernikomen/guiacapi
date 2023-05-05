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
exports.AtualizarServicoController = void 0;
const AtualizarServicoService_1 = require("../../services/servico/AtualizarServicoService");
class AtualizarServicoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const atualizarServicoService = new AtualizarServicoService_1.AtualizarServicoService();
            const servicoID = req.query.servicoID;
            const { nome, nomeServico, listaServicos, bio, email, endereco, whatsapp, domicilio, } = req.body;
            const servico = yield atualizarServicoService.execute({
                nome,
                nomeServico,
                listaServicos,
                bio,
                email,
                endereco,
                whatsapp,
                domicilio,
                servicoID
            });
            return res.status(200).json(servico);
        });
    }
}
exports.AtualizarServicoController = AtualizarServicoController;
