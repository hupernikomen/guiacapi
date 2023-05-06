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
exports.EsqueciSenhaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
class EsqueciSenhaService {
    execute({ lojaID, novasenha, }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!lojaID) {
                throw new Error("Loja não cadastrada");
            }
            const emailExiste = yield prisma_1.default.loja.findFirst({
                where: {
                    id: lojaID
                },
            });
            if (emailExiste) {
                const passwordCripto = yield (0, bcryptjs_1.hash)(novasenha, 4);
                const loja = yield prisma_1.default.loja.update({
                    where: {
                        id: lojaID
                    },
                    data: {
                        senha: passwordCripto,
                        createdAt: new Date()
                    }
                });
                return loja;
            }
        });
    }
}
exports.EsqueciSenhaService = EsqueciSenhaService;
