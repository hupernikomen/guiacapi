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
exports.CriaMapaController = void 0;
const CriaMapaService_1 = require("../../services/map/CriaMapaService");
class CriaMapaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userID = req.query.userID;
            const { latlng } = req.body;
            const criaMapaService = new CriaMapaService_1.CriaMapaService();
            yield criaMapaService.execute({
                latlng,
                userID
            });
            return res.json({ message: "Criado com sucesso" });
        });
    }
}
exports.CriaMapaController = CriaMapaController;
