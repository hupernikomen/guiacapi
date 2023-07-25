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
exports.DeletaCategoriaController = void 0;
const DeletaCategoriaService_1 = require("../../services/categoria/DeletaCategoriaService");
class DeletaCategoriaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoriaID = req.query.categoriaID;
            const deletaCategoriaService = new DeletaCategoriaService_1.DeletaCategoriaService();
            yield deletaCategoriaService.execute({ categoriaID });
            return res.status(200).json({
                message: "Categoria Excluida"
            });
        });
    }
}
exports.DeletaCategoriaController = DeletaCategoriaController;
