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
exports.CriaVddController = void 0;
const CriaVddService_1 = require("../../services/vendedor/CriaVddService");
class CriaVddController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, whatsapp, setor, horario } = req.body;
            const lojaID = req.loja_ID;
            const criaVddService = new CriaVddService_1.CriaVddService();
            if (!req.file) {
                throw new Error("Ops.. algo deu errado!");
            }
            else {
                const file = req.file;
                const vendedor = yield criaVddService.execute({
                    avatar: file,
                    nome,
                    whatsapp,
                    setor,
                    horario,
                    lojaID
                });
                return res.json(vendedor);
            }
        });
    }
}
exports.CriaVddController = CriaVddController;
