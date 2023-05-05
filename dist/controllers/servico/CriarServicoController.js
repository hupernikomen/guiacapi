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
exports.CriarServicoController = void 0;
const CriarServicoService_1 = require("../../services/servico/CriarServicoService");
class CriarServicoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const criarServicoService = new CriarServicoService_1.CriarServicoService();
            const { nome, nomeServico, listaServicos, bio, email, endereco, whatsapp, domicilio, categoria } = req.body;
            if (!req.file || !req.files) {
                throw new Error("Ops.. algo deu errado!");
            }
            else {
                const file = req.file;
                const img = req.files;
                const servico = yield criarServicoService.execute({
                    foto: file,
                    arrPortfolio: img,
                    nome,
                    nomeServico,
                    listaServicos,
                    bio,
                    email,
                    endereco,
                    whatsapp,
                    domicilio,
                    categoria
                });
                return res.status(200).json(servico);
            }
        });
    }
}
exports.CriarServicoController = CriarServicoController;
