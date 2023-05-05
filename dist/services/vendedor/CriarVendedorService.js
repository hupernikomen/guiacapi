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
exports.CriarVendedorService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CriarVendedorService {
    execute({ nome, whatsapp, foto, lojaID }) {
        return __awaiter(this, void 0, void 0, function* () {
            const vendedorExiste = yield prisma_1.default.vendedor.findFirst({
                where: {
                    whatsapp
                }
            });
            if (vendedorExiste) {
                throw new Error("Vendedor já cadastrado");
            }
            const vendedor = yield prisma_1.default.vendedor.create({
                data: {
                    nome,
                    whatsapp,
                    foto,
                    lojaID
                }
            });
            return vendedor;
        });
    }
}
exports.CriarVendedorService = CriarVendedorService;
