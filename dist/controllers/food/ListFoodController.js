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
exports.ListFoodController = void 0;
const ListFoodService_1 = require("../../services/food/ListFoodService");
const lodash_1 = require("lodash");
class ListFoodController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listFoodService = new ListFoodService_1.ListFoodService();
            const _food = yield listFoodService.execute();
            const shuffledResults = (0, lodash_1.shuffle)(_food);
            return res.json(shuffledResults);
        });
    }
}
exports.ListFoodController = ListFoodController;
