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
exports.ListaCategoriaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListaCategoriaService {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const _category = yield prisma_1.default.category.findMany({
                where: {
                    product: {
                        some: {
                            store: {
                                user: {
                                    payment: { some: { status: 'On' } }
                                }
                            }
                        }
                    }
                },
                select: {
                    id: true,
                    name: true,
                    subcategory: { select: { name: true, _count: true, categoryID: true } },
                    _count: true
                }
            });
            return _category;
        });
    }
}
exports.ListaCategoriaService = ListaCategoriaService;
