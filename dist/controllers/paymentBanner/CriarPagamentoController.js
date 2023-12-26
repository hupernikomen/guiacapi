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
exports.CriaPaymentBannerController = void 0;
const CriarPagamentoService_1 = require("../../services/paymentBanner/CriarPagamentoService");
class CriaPaymentBannerController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const criaPaymentBannerService = new CriarPagamentoService_1.CriaPaymentBannerService();
            const bannerID = req.query.bannerID;
            const { value, expiration } = req.body;
            const _payment = yield criaPaymentBannerService.execute({
                bannerID,
                value,
                expiration
            });
            return res.status(200).json(_payment);
        });
    }
}
exports.CriaPaymentBannerController = CriaPaymentBannerController;
