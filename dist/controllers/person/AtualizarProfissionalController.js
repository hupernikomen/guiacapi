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
exports.AtualizarProfissionalController = void 0;
const AtualizarProfissionalService_1 = require("../../services/person/AtualizarProfissionalService");
class AtualizarProfissionalController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const personID = req.query.personID;
            const { name, bio, address, services, district, professionID } = req.body;
            const atualizarProfissionalService = new AtualizarProfissionalService_1.AtualizarProfissionalService();
            const _person = yield atualizarProfissionalService.execute({
                personID,
                avatar: req.file,
                name,
                bio,
                address,
                services,
                district,
                professionID
            });
            return res.json(_person);
        });
    }
}
exports.AtualizarProfissionalController = AtualizarProfissionalController;
