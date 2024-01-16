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
exports.CreateCategoryServiceController = void 0;
const CreateCategoryServiceService_1 = require("../../services/categoryService/CreateCategoryServiceService");
class CreateCategoryServiceController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.body;
            const createCategoryServiceService = new CreateCategoryServiceService_1.CreateCategoryServiceService();
            const _categoryService = yield createCategoryServiceService.execute({ name });
            if (!_categoryService)
                throw new Error('Erro ao criar categoria - API');
            return res.status(200).json({ message: 'Criado com Sucesso' });
        });
    }
}
exports.CreateCategoryServiceController = CreateCategoryServiceController;
