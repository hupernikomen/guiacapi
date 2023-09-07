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
            const { link, params } = req.body;
            const criaBannerService = new CriaBannerService_1.CriaBannerService();
            if (!req.file) {
                throw new Error("Falha ao enviar baanner");
            }
            const banner = yield criaBannerService.execute({
                link,
                params,
                imagem: req.file,
                lojaID
            });
            return res.json(banner);
        });
    }
}
exports.CriaBannerController = CriaBannerController;
