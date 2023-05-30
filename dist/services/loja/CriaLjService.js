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
exports.CriaLjService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
class CriaLjService {
    execute({ email, senha, regiaoID }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email) {
                throw new Error("Email Incorreto");
            }
            const emailExiste = yield prisma_1.default.loja.findFirst({
                where: {
                    email
                }
            });
            if (emailExiste) {
                throw new Error("Loja já cadastrada!");
            }
            const passwordCripto = yield (0, bcryptjs_1.hash)(senha, 8);
            const loja = yield prisma_1.default.loja.create({
                data: {
                    email,
                    senha: passwordCripto,
                    regiaoID
                }
            });
            return loja;
        });
    }
}
exports.CriaLjService = CriaLjService;
