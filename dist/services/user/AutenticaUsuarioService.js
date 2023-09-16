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
exports.AutenticaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
class AutenticaService {
    execute({ user, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const _admin = yield prisma_1.default.admin.findFirst({ where: { user } });
            if (_admin) {
                const comparePassword = yield (0, bcryptjs_1.compare)(password, _admin.password);
                if (!comparePassword)
                    throw new Error("password incorreta");
                const token = (0, jsonwebtoken_1.sign)({ user: _admin.user }, process.env.JWT_SECRET, { subject: _admin.id });
                return {
                    id: _admin.id,
                    user: _admin.user,
                    token: token,
                };
            }
            else {
                const _user = yield prisma_1.default.user.findUnique({ where: { user } });
                if (!_user || !_admin)
                    throw new Error("não cadastrado");
                const store = yield prisma_1.default.store.findFirst({ where: { userID: _user.id } });
                const person = yield prisma_1.default.person.findFirst({ where: { userID: _user.id } });
                const gasStation = yield prisma_1.default.gasStation.findFirst({ where: { userID: _user.id } });
                if (!_user)
                    throw new Error("Usuário não cadastrado");
                if (!_user.status)
                    throw new Error("Conta Bloqueada");
                const comparePassword = yield (0, bcryptjs_1.compare)(password, _user.password);
                if (!comparePassword)
                    throw new Error("password incorreta");
                const token = (0, jsonwebtoken_1.sign)({ user: _user.user }, process.env.JWT_SECRET, { subject: _user.id });
                return {
                    id: _user.id,
                    user: _user.user,
                    token: token,
                    conta: { store, person, gasStation },
                };
            }
        });
    }
}
exports.AutenticaService = AutenticaService;
