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
exports.GetMenuService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class GetMenuService {
    execute({ menuID }) {
        return __awaiter(this, void 0, void 0, function* () {
            const owner = yield prisma_1.default.menu.findFirst({
                where: {
                    id: menuID,
                    food: {
                        user: {
                            payment: { some: { status: 'On' } }
                        }
                    }
                },
                select: {
                    id: true,
                    image: true,
                    name: true,
                    price: true,
                    details: true,
                    food: { select: { _count: true, menu: true, avatar: true, categoryFood: true, delivery: true, name: true, type: true, user: true } }
                }
            });
            return owner;
        });
    }
}
exports.GetMenuService = GetMenuService;
