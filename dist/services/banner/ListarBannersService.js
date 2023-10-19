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
exports.ListarBannersService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListarBannersService {
    execute({ regionID }) {
        return __awaiter(this, void 0, void 0, function* () {
            const _banners = yield prisma_1.default.banner.findMany({
                where: {
                    OR: [
                        { status: true, global: false },
                        { status: true, global: true },
                    ]
                },
                select: {
                    image: true,
                    route: true,
                    paramsID: true,
                    createdAt: true,
                    status: true,
                    global: true,
                    userID: true
                }
            });
            return _banners;
        });
    }
}
exports.ListarBannersService = ListarBannersService;
