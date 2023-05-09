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
exports.CriarVendedorController = void 0;
const CriarVendedorService_1 = require("../../services/vendedor/CriarVendedorService");
class CriarVendedorController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, whatsapp } = req.body;
            const lojaID = req.query.lojaID;
            if (!req.file) {
                throw new Error("Ops.. algo deu errado!");
            }
            else {
                const file = req.file;
                const criarVendedorService = new CriarVendedorService_1.CriarVendedorService();
                const vendedor = yield criarVendedorService.execute({
                    nome,
                    whatsapp,
                    foto: file,
                    lojaID
                });
                return res.json(vendedor);
            }
        });
    }
}
exports.CriarVendedorController = CriarVendedorController;
