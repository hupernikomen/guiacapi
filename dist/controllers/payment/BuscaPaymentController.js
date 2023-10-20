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
exports.BuscaPaymentController = void 0;
const BuscaPaymentService_1 = require("../../services/payment/BuscaPaymentService");
class BuscaPaymentController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userID = req.query.userID;
            const paymentOf = req.query.paymentOf;
            const buscaPaymentService = new BuscaPaymentService_1.BuscaPaymentService();
            const _pay = yield buscaPaymentService.execute({ userID, paymentOf });
            return res.json(_pay);
        });
    }
}
exports.BuscaPaymentController = BuscaPaymentController;
