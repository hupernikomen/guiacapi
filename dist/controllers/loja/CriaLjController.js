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
exports.CriaLjController = void 0;
const CriaLjService_1 = require("../../services/loja/CriaLjService");
class CriaLjController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const regiaoID = req.query.regiaoID;
            const { email, senha } = req.body;
            const criaLjService = new CriaLjService_1.CriaLjService();
            const loja = yield criaLjService.execute({
                email,
                senha,
                regiaoID
            });
            if (!loja) {
                throw new Error("Ops, algo deu errado!");
            }
            return res.status(200).json({
                message: "Cadastrado com Sucesso"
            });
        });
    }
}
exports.CriaLjController = CriaLjController;
