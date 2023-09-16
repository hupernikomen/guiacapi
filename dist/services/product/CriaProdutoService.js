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
exports.CriaProdutoService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CriaProdutoService {
    execute({ reference, name, description, price, size, color, image, categoryID, subcategoryID, storeID, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _product = yield prisma_1.default.product.create({
                    data: {
                        reference,
                        name,
                        description,
                        price: Number(price),
                        size,
                        color,
                        image,
                        categoryID,
                        subcategoryID,
                        storeID,
                    },
                });
                return _product;
            }
            catch (error) {
                console.error('Erro no Service API', error);
            }
        });
    }
}
exports.CriaProdutoService = CriaProdutoService;