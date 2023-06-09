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
exports.CriaUsuarioController = void 0;
const CriaUsuarioService_1 = require("../../services/usuario/CriaUsuarioService");
class CriaUsuarioController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const regiaoID = req.query.regiaoID;
            const { email, senha } = req.body;
            const criaUsuarioService = new CriaUsuarioService_1.CriaUsuarioService();
            const usuario = yield criaUsuarioService.execute({
                email,
                senha,
                regiaoID
            });
            if (!usuario) {
                throw new Error("Ops, algo deu errado!");
            }
            return res.status(200).json({
                usuario,
                message: "Cadastrado com Sucesso"
            });
        });
    }
}
exports.CriaUsuarioController = CriaUsuarioController;
