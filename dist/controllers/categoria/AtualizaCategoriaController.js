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
exports.AtualizaCategoriaController = void 0;
const AtualizaCategoriaService_1 = require("../../services/categoria/AtualizaCategoriaService");
class AtualizaCategoriaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const atualizaCategoriaService = new AtualizaCategoriaService_1.AtualizaCategoriaService();
            const categoriaID = req.query.categoriaID;
            const { nome } = req.body;
            const categoria = yield atualizaCategoriaService.execute({
                nome,
                categoriaID
            });
            return res.status(200).json(categoria);
        });
    }
}
exports.AtualizaCategoriaController = AtualizaCategoriaController;
