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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFoodController = void 0;
const CreateFoodService_1 = require("../../services/food/CreateFoodService");
class CreateFoodController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const createFoodService = new CreateFoodService_1.CreateFoodService();
            const { userID } = req.body;
            yield createFoodService.execute({ userID });
            return res.status(200).json({ message: 'Food criada com sucesso' });
        });
    }
}
exports.CreateFoodController = CreateFoodController;
