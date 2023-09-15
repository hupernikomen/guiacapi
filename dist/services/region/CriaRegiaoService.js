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
exports.CriaRegiaoService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CriaRegiaoService {
    execute({ name }) {
        return __awaiter(this, void 0, void 0, function* () {
            const _region = yield prisma_1.default.region.findFirst({ where: { name } });
            if (_region)
                throw new Error("Região já existe");
            const __region = yield prisma_1.default.region.create({ data: { name } });
            return __region;
        });
    }
}
exports.CriaRegiaoService = CriaRegiaoService;
