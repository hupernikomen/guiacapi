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
            const userID = req.query.userID;
            const { route, paramsID, link, typebanner, categoryID } = req.body;
            if (!req.file)
                throw new Error('Falha ao enviar banner');
            const criaBannerService = new CriaBannerService_1.CriaBannerService();
            const banner = yield criaBannerService.execute({
                image: req.file,
                route,
                paramsID,
                userID,
                link,
                typebanner,
                categoryID
            });
            if (!banner)
                throw new Error('Erro ao criar banner - API');
            return res.status(200).json({ message: 'Criado com Sucesso', id: banner.id });
        });
    }
}
exports.CriaBannerController = CriaBannerController;
