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
exports.ListaLjService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListaLjService {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const loja = yield prisma_1.default.loja.findMany({
                where: {
                    statusGuia: true,
                    // regiao:{
                    //     nome: "Dirceu" // Logica de alteração de REGIAO no FrontEnd
                    // }
                },
                select: {
                    id: true,
                    statusGuia: true,
                    nome: true,
                    avatar: true,
                    produtos: {
                        select: {
                            id: true,
                            nome: true,
                            descricao: true,
                            preco: true,
                            oferta: true,
                            tamanho: true,
                            imagens: true,
                            categoria: {
                                select: {
                                    id: true,
                                    nome: true,
                                },
                            },
                        },
                    },
                    bio: true,
                    endereco: true,
                    entrega: true,
                    latlng: true,
                    bairro: true,
                    referencia: true,
                }
            });
            return loja;
        });
    }
}
exports.ListaLjService = ListaLjService;
