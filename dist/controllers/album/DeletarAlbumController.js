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
exports.DeletarAlbumController = void 0;
const DeletaAlbumService_1 = require("../../services/album/DeletaAlbumService");
class DeletarAlbumController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const albumID = req.query.albumID;
            const deletaAlbumService = new DeletaAlbumService_1.DeletaAlbumService();
            yield deletaAlbumService.execute({
                albumID
            });
            return res.status(200).json({
                message: "Fique tranquilo! Já excluimos "
            });
        });
    }
}
exports.DeletarAlbumController = DeletarAlbumController;
