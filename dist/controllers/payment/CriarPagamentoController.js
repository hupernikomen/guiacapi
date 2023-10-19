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
exports.CriaPaymentController = void 0;
const CriarPagamentoService_1 = require("../../services/payment/CriarPagamentoService");
class CriaPaymentController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const criaPaymentService = new CriarPagamentoService_1.CriaPaymentService();
            const userID = req.query.userID;
            const { value, expiration } = req.body;
            const _payment = yield criaPaymentService.execute({
                userID,
                value,
                expiration
            });
            return res.status(200).json(_payment);
        });
    }
}
exports.CriaPaymentController = CriaPaymentController;
