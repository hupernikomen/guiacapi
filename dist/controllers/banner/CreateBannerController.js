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
exports.CreateBannerController = void 0;
const CreateBannerService_1 = require("../../services/banner/CreateBannerService");
class CreateBannerController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userID = req.query.userID;
            const { route, paramsID, link, typebanner, categoryID } = req.body;
            if (!req.file)
                throw new Error('Falha ao enviar banner');
            const createBannerService = new CreateBannerService_1.CreateBannerService();
            const banner = yield createBannerService.execute({
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
exports.CreateBannerController = CreateBannerController;
