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
exports.ListarUsuariosService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListarUsuariosService {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield prisma_1.default.user.findMany({
                select: {
                    id: true,
                    user: true,
                    store: { select: { name: true } },
                    person: { select: { name: true, profession: { select: { name: true } } } },
                    fuelStation: { select: { name: true } },
                    region: { select: { name: true } },
                    contact: true,
                    payment: true
                }
            });
            return usuarios;
        });
    }
}
exports.ListarUsuariosService = ListarUsuariosService;
