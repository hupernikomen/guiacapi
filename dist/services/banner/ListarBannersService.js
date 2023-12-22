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
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const _banners = yield prisma_1.default.banner.findMany({
                where: { user: { paymentBanners: { some: { status: 'Aprovado' } } } },
                select: {
                    image: true,
                    route: true,
                    paramsID: true,
                    userID: true,
                    link: true,
                    categoryID: true,
                    typebanner: true,
                    id: true,
                    user: {
                        select: {
                            owner: { select: { name: true, whatsapp: true } },
                            paymentBanners: {
                                select: {
                                    id: true,
                                    expiration: true,
                                    status: true,
                                    bannerID: true
                                }
                            },
                            payment: {
                                select: {
                                    id: true,
                                    expiration: true,
                                    status: true
                                }
                            }
                        }
                    }
                }
            });
            return _banners;
        });
    }
}
exports.ListarBannersService = ListarBannersService;
