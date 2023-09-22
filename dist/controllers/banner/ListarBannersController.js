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
exports.ListarBannersController = void 0;
const ListarBannersService_1 = require("../../services/banner/ListarBannersService");
class ListarBannersController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const regionID = req.query.regionID;
            const listarBannersService = new ListarBannersService_1.ListarBannersService();
            const banners = yield listarBannersService.execute({ regionID });
            return res.json(banners);
        });
    }
}
exports.ListarBannersController = ListarBannersController;
