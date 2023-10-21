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
exports.AtualizarPagamentoBannerController = void 0;
const AtualizaPagamentoService_1 = require("../../services/paymentBanner/AtualizaPagamentoService");
class AtualizarPagamentoBannerController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const paymentID = req.query.paymentID;
            const { value, expiration, } = req.body;
            const atualizarPagamentoBannerService = new AtualizaPagamentoService_1.AtualizarPagamentoBannerService();
            const _pay = yield atualizarPagamentoBannerService.execute({
                value,
                expiration,
                paymentID
            });
            return res.json(_pay);
        });
    }
}
exports.AtualizarPagamentoBannerController = AtualizarPagamentoBannerController;
