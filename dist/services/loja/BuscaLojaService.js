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
exports.BuscaLojaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
/**
 * Busca a loja selecionada
 * Deverá ser exibida quando o usuario do app solicitar pagina da loja
 */
class BuscaLojaService {
    execute({ usuarioID }) {
        return __awaiter(this, void 0, void 0, function* () {
            const loja = yield prisma_1.default.loja.findFirst({
                where: {
                    usuario: {
                        status: true,
                    },
                    usuarioID,
                },
                select: {
                    usuarioID: true,
                    id: true,
                    nome: true,
                    produtos: true
                }
            });
            return loja;
        });
    }
}
exports.BuscaLojaService = BuscaLojaService;
