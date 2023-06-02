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
exports.AtualizaCampController = void 0;
const AtualizaCampService_1 = require("../../services/campanha/AtualizaCampService");
class AtualizaCampController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const atualizaCampService = new AtualizaCampService_1.AtualizaCampService();
            const campanhaID = req.query.campanhaID;
            const { nome, status, tema } = req.body;
            const campanha = yield atualizaCampService.execute({
                nome,
                status,
                tema,
                campanhaID
            });
            return res.status(200).json(campanha);
        });
    }
}
exports.AtualizaCampController = AtualizaCampController;
