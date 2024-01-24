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
exports.CreateMenuController = void 0;
const CreateMenuService_1 = require("../../services/menu/CreateMenuService");
class CreateMenuController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const createMenuService = new CreateMenuService_1.CreateMenuService();
            const foodID = req.query.foodID;
            const { name, price, details } = req.body;
            const _menu = yield createMenuService.execute({
                image: req.file,
                name,
                price,
                details,
                foodID
            });
            return res.status(200).json(_menu);
        });
    }
}
exports.CreateMenuController = CreateMenuController;
