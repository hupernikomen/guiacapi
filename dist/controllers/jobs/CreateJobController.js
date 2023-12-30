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
exports.CriaJobController = void 0;
const CreateJobService_1 = require("../../services/jobs/CreateJobService");
class CriaJobController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userID = req.query.userID;
            const { job, description, contact, validity, sendCurriculum } = req.body;
            const criaJobService = new CreateJobService_1.CriaJobService();
            yield criaJobService.execute({
                job,
                description,
                contact,
                validity,
                sendCurriculum,
                userID
            });
            return res.json({ message: 'Vaga criada com sucesso' });
        });
    }
}
exports.CriaJobController = CriaJobController;
