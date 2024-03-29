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
exports.DetalheProdutoService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class DetalheProdutoService {
    execute({ productID }) {
        return __awaiter(this, void 0, void 0, function* () {
            const _product = yield prisma_1.default.product.findUnique({
                where: {
                    id: productID
                },
                select: {
                    id: true,
                    reference: true,
                    name: true,
                    description: true,
                    price: true,
                    off: true,
                    size: true,
                    color: true,
                    image: true,
                    store: {
                        select: {
                            type: true,
                            id: true,
                            name: true,
                            bio: true,
                            address: true,
                            district: true,
                            createdAt: true,
                            reference: true,
                            delivery: true,
                            avatar: true,
                            userID: true
                        }
                    },
                    category: {
                        select: {
                            name: true,
                            id: true
                        }
                    },
                    subcategory: {
                        select: {
                            id: true,
                            name: true
                        }
                    },
                    campaign: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            });
            return _product;
        });
    }
}
exports.DetalheProdutoService = DetalheProdutoService;
