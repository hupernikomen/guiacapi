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
exports.UpdateFoodController = void 0;
const UpdateFoodService_1 = require("../../services/food/UpdateFoodService");
class UpdateFoodController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userID = req.query.userID;
            const { name, bio, address, district, delivery } = req.body;
            const updateFoodService = new UpdateFoodService_1.UpdateFoodService();
            yield updateFoodService.execute({
                userID,
                avatar: req.file,
                name,
                bio,
                address,
                district,
                delivery: Boolean(delivery)
            });
            return res.status(200).json({ message: 'Food Atualizado' });
        });
    }
}
exports.UpdateFoodController = UpdateFoodController;
