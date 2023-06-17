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
exports.ListaVddController = void 0;
const ListaVddService_1 = require("../../services/vendedor/ListaVddService");
class ListaVddController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lojaID = req.query.lojaID;
            const listaVddService = new ListaVddService_1.ListaVddService();
            const vendedores = yield listaVddService.execute({
                lojaID
            });
            return res.json(vendedores);
        });
    }
}
exports.ListaVddController = ListaVddController;
