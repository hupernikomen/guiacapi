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
exports.CriaUsuarioService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
class CriaUsuarioService {
    execute({ tipo, email, senha, regiaoID }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email) {
                throw new Error("usuario Incorreto");
            }
            const usuarioExiste = yield prisma_1.default.usuario.findFirst({
                where: {
                    email
                }
            });
            if (usuarioExiste) {
                throw new Error("Usuário já cadastrado!");
            }
            const passwordCripto = yield (0, bcryptjs_1.hash)(senha, 8);
            const usuario = yield prisma_1.default.usuario.create({
                data: {
                    tipo,
                    email,
                    senha: passwordCripto,
                    regiaoID
                }
            });
            if (usuario) {
                yield prisma_1.default.mapa.create({
                    data: {
                        usuarioID: usuario.id
                    }
                });
                yield prisma_1.default.contato.create({
                    data: {
                        usuarioID: usuario.id
                    }
                });
                switch (usuario.tipo) {
                    case 'loja':
                        yield prisma_1.default.loja.create({
                            data: {
                                usuarioID: usuario.id
                            }
                        });
                        break;
                    case 'profissional':
                        yield prisma_1.default.profissional.create({
                            data: {
                                usuarioID: usuario.id
                            }
                        });
                        break;
                    case 'posto':
                        yield prisma_1.default.posto.create({
                            data: {
                                usuarioID: usuario.id
                            }
                        });
                        break;
                    default:
                        break;
                }
            }
            return usuario;
        });
    }
}
exports.CriaUsuarioService = CriaUsuarioService;