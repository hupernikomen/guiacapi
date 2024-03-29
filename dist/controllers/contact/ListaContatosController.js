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
exports.ListaContatosController = void 0;
const ListaContatosService_1 = require("../../services/contact/ListaContatosService");
const lodash_1 = require("lodash");
class ListaContatosController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listaContatosService = new ListaContatosService_1.ListaContatosService();
            const userID = req.query.userID;
            const _contact = yield listaContatosService.execute({ userID });
            const shuffledResults = (0, lodash_1.shuffle)(_contact);
            return res.json(shuffledResults);
        });
    }
}
exports.ListaContatosController = ListaContatosController;
