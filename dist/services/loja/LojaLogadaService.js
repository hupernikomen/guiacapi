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
exports.LojaLogadaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
/**
 * Para rota de loja com usuario logado
 * O conteudo deverá ser exxibido na tela de admin da loja
 */
class LojaLogadaService {
    execute({ usuarioID }) {
        return __awaiter(this, void 0, void 0, function* () {
            const loja = yield prisma_1.default.loja.findFirst({
                where: {
                    usuario: {
                        status: true
                    },
                    usuarioID
                },
                select: {
                    id: true,
                    avatar: true,
                    nome: true,
                    endereco: true,
                    bairro: true,
                    ponto_ref: true,
                    bio: true,
                    produtos: {
                        select: {
                            id: true,
                            categoriaID: true,
                            campanha: true,
                            nome: true,
                            preco: true,
                            oferta: true,
                            descricao: true,
                            tamanho: true,
                            codigo: true,
                            imagens: true
                        }
                    },
                    delivery: true,
                    usuario: {
                        select: {
                            status: true,
                        },
                    },
                }
            });
            return loja;
        });
    }
}
exports.LojaLogadaService = LojaLogadaService;
