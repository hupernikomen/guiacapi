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
exports.AtualizaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
class AtualizaService {
    execute({ userID, status, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const _user = yield prisma_1.default.user.findUnique({ where: { id: userID } });
            if (!_user)
                throw new Error("Ops, infelizmente não encontramos!");
            let passwordCripto;
            if (password)
                passwordCripto = yield (0, bcryptjs_1.hash)(password, 8);
            const __user = yield prisma_1.default.user.update({
                where: { id: userID },
                data: {
                    status,
                    password: passwordCripto
                },
                select: {
                    status: true,
                    store: true,
                    gasStation: true,
                    person: true,
                    user: true,
                    company: true
                }
            });
            return __user;
        });
    }
}
exports.AtualizaService = AtualizaService;
