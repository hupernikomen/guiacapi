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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtualizaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
class AtualizaService {
    execute({ usuarioID, status, senha }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario_existe = yield prisma_1.default.usuario.findUnique({
                where: {
                    id: usuarioID
                }
            });
            if (!usuario_existe)
                throw new Error("Ops, infelizmente não encontramos!");
            let passwordCripto;
            if (senha)
                passwordCripto = yield (0, bcryptjs_1.hash)(senha, 8);
            const usuario = yield prisma_1.default.usuario.update({
                where: {
                    id: usuarioID
                },
                data: {
                    status,
                    senha: passwordCripto
                },
                select: {
                    status: true,
                    loja: true,
                    posto: true,
                    profissional: true,
                    email: true,
                    rede: true
                }
            });
            return usuario;
        });
    }
}
exports.AtualizaService = AtualizaService;
