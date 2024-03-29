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
exports.ListServicesController = void 0;
const ListServicesService_1 = require("../../services/service/ListServicesService");
const lodash_1 = require("lodash");
class ListServicesController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const regionID = req.query.regionID;
            const listServicesService = new ListServicesService_1.ListServicesService();
            const _service = yield listServicesService.execute({ regionID });
            const shuffledResults = (0, lodash_1.shuffle)(_service);
            return res.json(shuffledResults);
        });
    }
}
exports.ListServicesController = ListServicesController;
