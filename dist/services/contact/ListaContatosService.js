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
exports.ListaContatosService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListaContatosService {
    execute({ userID }) {
        return __awaiter(this, void 0, void 0, function* () {
            const contato = yield prisma_1.default.contact.findMany({
                where: {
                    userID
                },
                select: {
                    id: true,
                    name: true,
                    avatar: true,
                    sector: true,
                    whatsapp: true,
                    time: true,
                    saturday: true,
                    sunday: true,
                    away: true,
                    user: { select: { owner: true } }
                }
            });
            return contato;
        });
    }
}
exports.ListaContatosService = ListaContatosService;
