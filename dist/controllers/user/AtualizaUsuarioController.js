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
exports.AtualizaUsuarioController = void 0;
const AtualizaUsuarioService_1 = require("../../services/user/AtualizaUsuarioService");
class AtualizaUsuarioController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userID = req.query.userID;
            const { status, password } = req.body;
            const atualizaService = new AtualizaUsuarioService_1.AtualizaService();
            const _user = yield atualizaService.execute({
                userID,
                status,
                password
            });
            return res.json(_user);
        });
    }
}
exports.AtualizaUsuarioController = AtualizaUsuarioController;
