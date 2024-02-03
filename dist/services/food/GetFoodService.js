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
exports.GetFoodService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class GetFoodService {
    execute({ foodID }) {
        return __awaiter(this, void 0, void 0, function* () {
            const food = yield prisma_1.default.food.findFirst({
                where: {
                    id: foodID
                },
                select: {
                    type: true,
                    id: true,
                    avatar: true,
                    name: true,
                    address: true,
                    delivery: true,
                    bio: true,
                    district: true,
                    menu: true,
                    userID: true,
                    user: {
                        select: { id: true, map: { select: { latlng: true } } }
                    }
                }
            });
            return food;
        });
    }
}
exports.GetFoodService = GetFoodService;
