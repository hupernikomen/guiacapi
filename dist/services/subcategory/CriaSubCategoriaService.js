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
exports.CriaSubCategoriaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CriaSubCategoriaService {
    execute({ name, categoryID }) {
        return __awaiter(this, void 0, void 0, function* () {
            const _subcategory = yield prisma_1.default.subcategory.findFirst({ where: { name, categoryID } });
            if (_subcategory)
                throw new Error("subCategoria já existe");
            const __subcategory = yield prisma_1.default.subcategory.create({
                data: {
                    name,
                    categoryID
                }
            });
            return __subcategory;
        });
    }
}
exports.CriaSubCategoriaService = CriaSubCategoriaService;
