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
exports.AtualizaMapaController = void 0;
const AtualizarMapaService_1 = require("../../services/map/AtualizarMapaService");
class AtualizaMapaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userID = req.query.userID;
            const { latlng } = req.body;
            const atualizaMapaService = new AtualizarMapaService_1.AtualizaMapaService();
            yield atualizaMapaService.execute({
                latlng,
                userID
            });
            return res.status(200).json({ message: "Localização Atualizada" });
        });
    }
}
exports.AtualizaMapaController = AtualizaMapaController;
