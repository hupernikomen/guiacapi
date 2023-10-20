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
exports.ListarProdutosService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListarProdutosService {
    execute({ regionID }) {
        return __awaiter(this, void 0, void 0, function* () {
            const today = new Date().toLocaleDateString('pt-BR');
            const storeWhere = regionID === "cb9085c6-439b-48da-8bc4-17ecd2800d4a" ? { user: { payment: { every: { expiration: { gte: today } } } } } : { user: { payment: { every: { expiration: { gte: today } } }, regionID: regionID } };
            return yield prisma_1.default.product.findMany({
                where: {
                    store: storeWhere
                },
                select: {
                    id: true,
                    name: true,
                    price: true,
                    off: true,
                    image: true,
                    campaign: { select: { id: true, name: true, theme: true } },
                    store: {
                        select: {
                            id: true, name: true, delivery: true,
                            user: { select: { regionID: true } }
                        }
                    },
                    category: {
                        select: {
                            id: true, name: true, _count: true,
                            subcategory: { select: { id: true, name: true, _count: true } }
                        }
                    }
                }
            });
        });
    }
}
exports.ListarProdutosService = ListarProdutosService;
