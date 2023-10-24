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
exports.ListaLojasControllerAdmin = void 0;
const ListaLojasServiceAdmin_1 = require("../../services/store/ListaLojasServiceAdmin");
class ListaLojasControllerAdmin {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listaLojasServiceAdmin = new ListaLojasServiceAdmin_1.ListaLojasServiceAdmin();
            const _store = yield listaLojasServiceAdmin.execute();
            const _response = {
                type: "store",
                data: _store
            };
            return res.json(_response);
        });
    }
}
exports.ListaLojasControllerAdmin = ListaLojasControllerAdmin;
