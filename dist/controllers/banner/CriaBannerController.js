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
exports.CriaBannerController = void 0;
const CriaBannerService_1 = require("../../services/banner/CriaBannerService");
class CriaBannerController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lojaID = req.query.lojaID;
            const { rota, id_rota, uri, } = req.body;
            const criaBannerService = new CriaBannerService_1.CriaBannerService();
            const banner = yield criaBannerService.execute({
                rota, id_rota, uri, lojaID
            });
            return res.json(banner);
        });
    }
}
exports.CriaBannerController = CriaBannerController;
