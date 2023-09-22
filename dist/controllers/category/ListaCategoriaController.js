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
exports.ListaCategoriaController = void 0;
const ListaCategoriaService_1 = require("../../services/category/ListaCategoriaService");
class ListaCategoriaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const regionID = req.query.regionID;
            const listaCategoriaService = new ListaCategoriaService_1.ListaCategoriaService();
            const _categories = yield listaCategoriaService.execute({ regionID });
            return res.json(_categories);
        });
    }
}
exports.ListaCategoriaController = ListaCategoriaController;
