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
exports.ListaLojasService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
require("dotenv/config");
class ListaLojasService {
    execute({ regionID }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.store.findMany({
                where: {
                    user: {
                        payment: { some: { status: "Aprovado" } },
                        regionID
                    }
                },
                select: {
                    product: true,
                    id: true,
                    name: true,
                    avatar: true,
                    delivery: true,
                    user: { select: { payment: { select: { status: true, value: true, expiration: true, createdAt: true } }, } },
                    userID: true,
                }
            });
        });
    }
}
exports.ListaLojasService = ListaLojasService;
