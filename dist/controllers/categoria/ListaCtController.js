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
exports.ListaCtController = void 0;
const ListaCtService_1 = require("../../services/categoria/ListaCtService");
class ListaCtController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listaCtService = new ListaCtService_1.ListaCtService();
            const categorias = yield listaCtService.execute();
            return res.json(categorias);
        });
    }
}
exports.ListaCtController = ListaCtController;
