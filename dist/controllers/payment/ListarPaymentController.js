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
exports.ListarPaymentController = void 0;
const ListarPaymentService_1 = require("../../services/payment/ListarPaymentService");
class ListarPaymentController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const paymentID = req.query.paymentID;
            const listarPaymentService = new ListarPaymentService_1.ListarPaymentService();
            const _pay = yield listarPaymentService.execute({ paymentID });
            return res.json(_pay);
        });
    }
}
exports.ListarPaymentController = ListarPaymentController;
