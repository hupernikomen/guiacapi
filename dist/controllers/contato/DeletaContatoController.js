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
exports.DeletarContatoController = void 0;
const DeletaContatoService_1 = require("../../services/contato/DeletaContatoService");
class DeletarContatoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contatoID = req.query.contatoID;
            const deletaContatoService = new DeletaContatoService_1.DeletaContatoService();
            yield deletaContatoService.execute({
                contatoID
            });
            return res.status(200).json({
                message: "Contato Excluido"
            });
        });
    }
}
exports.DeletarContatoController = DeletarContatoController;
