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
exports.CriaCampService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CriaCampService {
    execute({ nome, status, tema }) {
        return __awaiter(this, void 0, void 0, function* () {
            const campanhaExiste = yield prisma_1.default.campanha.findFirst({
                where: {
                    nome
                }
            });
            if (campanhaExiste) {
                throw new Error("Campanha já existe");
            }
            const campanha = yield prisma_1.default.campanha.create({
                data: {
                    nome,
                    status,
                    tema
                }
            });
            return campanha;
        });
    }
}
exports.CriaCampService = CriaCampService;