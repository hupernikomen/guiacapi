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
exports.AtualizaPostoController = void 0;
const AtualizarPostoService_1 = require("../../services/fuelStation/AtualizarPostoService");
class AtualizaPostoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const fuelStationID = req.query.fuelStationID;
            const { name, table, district } = req.body;
            if (!req.file)
                throw new Error("Erro ao enviar avatar - API");
            const atualizaPostoService = new AtualizarPostoService_1.AtualizaPostoService();
            const posto = yield atualizaPostoService.execute({
                name,
                avatar: req.file,
                table,
                district,
                fuelStationID
            });
            return res.status(200).json(posto);
        });
    }
}
exports.AtualizaPostoController = AtualizaPostoController;
