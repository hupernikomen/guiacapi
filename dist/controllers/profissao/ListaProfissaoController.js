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
exports.ListaProfissaoController = void 0;
const ListaProfissaoService_1 = require("../../services/profissao/ListaProfissaoService");
class ListaProfissaoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listaProfissaoService = new ListaProfissaoService_1.ListaProfissaoService();
            const profissoes = yield listaProfissaoService.execute();
            return res.json(profissoes);
        });
    }
}
exports.ListaProfissaoController = ListaProfissaoController;
