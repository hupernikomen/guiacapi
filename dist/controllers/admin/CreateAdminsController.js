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
exports.CreateAdminsController = void 0;
const CreateAdminsService_1 = require("../../services/admin/CreateAdminsService");
class CreateAdminsController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user, password } = req.body;
            const createAdminsService = new CreateAdminsService_1.CreateAdminsService();
            const _user = yield createAdminsService.execute({
                user,
                password
            });
            if (!_user)
                throw new Error('Ops, algo deu errado - API!');
            return res.status(200).json({ message: 'Cadastrado com Sucesso' });
        });
    }
}
exports.CreateAdminsController = CreateAdminsController;
