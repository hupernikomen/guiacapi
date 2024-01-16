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
exports.PutServiceService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class PutServiceService {
    execute({ serviceID, categoryServiceID, avatar, name, bio, address, district }) {
        return __awaiter(this, void 0, void 0, function* () {
            const _service = yield prisma_1.default.service.findFirst({ where: { id: serviceID } });
            if (!_service)
                throw new Error('Ops, infelizmente não encontramos!');
            const __service = yield prisma_1.default.service.updateMany({
                where: { id: serviceID },
                data: {
                    name,
                    avatar,
                    bio,
                    address,
                    district,
                    categoryServiceID
                }
            });
            return __service;
        });
    }
}
exports.PutServiceService = PutServiceService;
