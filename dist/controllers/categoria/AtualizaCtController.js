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
exports.AtualizaCtController = void 0;
const AtualizaCtService_1 = require("../../services/categoria/AtualizaCtService");
class AtualizaCtController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const atualizaCtService = new AtualizaCtService_1.AtualizaCtService();
            const categoriaID = req.query.categoriaID;
            const { nome } = req.body;
            const categoria = yield atualizaCtService.execute({
                nome,
                categoriaID
            });
            return res.status(200).json(categoria);
        });
    }
}
exports.AtualizaCtController = AtualizaCtController;
