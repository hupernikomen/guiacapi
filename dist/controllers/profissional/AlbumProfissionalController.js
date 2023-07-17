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
exports.AlbumProfissionalController = void 0;
const AlbumProfissionalService_1 = require("../../services/profissional/AlbumProfissionalService");
class AlbumProfissionalController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioID = req.query.usuarioID;
            const files = req.files;
            const albumProfissionalService = new AlbumProfissionalService_1.AlbumProfissionalService();
            const profissional = yield albumProfissionalService.execute({
                usuarioID,
                album: files,
            });
            return res.json(profissional);
        });
    }
}
exports.AlbumProfissionalController = AlbumProfissionalController;
