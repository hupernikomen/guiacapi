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
exports.CriaProfissionalController = void 0;
const CriaProfissionalService_1 = require("../../services/person/CriaProfissionalService");
class CriaProfissionalController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const criaProfissionalService = new CriaProfissionalService_1.CriaProfissionalService();
            const { userID, professionID } = req.body;
            const _person = yield criaProfissionalService.execute({
                userID,
                professionID
            });
            return res.status(200).json(_person);
        });
    }
}
exports.CriaProfissionalController = CriaProfissionalController;
