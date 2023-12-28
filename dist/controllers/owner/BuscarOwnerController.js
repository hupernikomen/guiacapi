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
exports.BuscaOwnerController = void 0;
const BuscarOwnerService_1 = require("../../services/owner/BuscarOwnerService");
class BuscaOwnerController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userID = req.query.userID;
            const buscaOwnerService = new BuscarOwnerService_1.BuscaOwnerService();
            const owner = yield buscaOwnerService.execute({ userID });
            return res.json(owner);
        });
    }
}
exports.BuscaOwnerController = BuscaOwnerController;
