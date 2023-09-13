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
exports.AutenticaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
class AutenticaService {
    execute({ email, senha }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email) {
                throw new Error("não cadastrado");
            }
            const usuario = yield prisma_1.default.usuario.findUnique({
                where: { email }
            });
            const loja = yield prisma_1.default.loja.findFirst({
                where: { usuarioID: usuario.id }
            });
            const profissional = yield prisma_1.default.profissional.findFirst({
                where: { usuarioID: usuario.id }
            });
            const posto = yield prisma_1.default.posto.findFirst({
                where: { usuarioID: usuario.id }
            });
            if (!usuario) {
                throw new Error("Usuário não cadastrado");
            }
            if (!usuario.status) {
                throw new Error("Conta Bloqueada");
            }
            const comparePassword = yield (0, bcryptjs_1.compare)(senha, usuario.senha);
            if (!comparePassword) {
                throw new Error("senha incorreta");
            }
            const token = (0, jsonwebtoken_1.sign)({ email: usuario.email }, process.env.JWT_SECRET, { subject: usuario.id });
            return {
                id: usuario.id,
                email: usuario.email,
                token: token,
                conta: { loja, profissional, posto },
            };
        });
    }
}
exports.AutenticaService = AutenticaService;
