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
exports.AtualizaLjController = void 0;
const AtualizaLjService_1 = require("../../services/loja/AtualizaLjService");
class AtualizaLjController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lojaID = req.query.lojaID;
            const { statusGuia, nome, bio, endereco, bairro, referencia, latlng, entrega } = req.body;
            const file = req.file;
            const atualizaLjService = new AtualizaLjService_1.AtualizaLjService();
            const data = yield atualizaLjService.execute({
                lojaID,
                statusGuia,
                avatar: file,
                nome,
                bio,
                endereco,
                bairro,
                referencia,
                latlng,
                entrega
            });
            return res.json(data);
        });
    }
}
exports.AtualizaLjController = AtualizaLjController;
