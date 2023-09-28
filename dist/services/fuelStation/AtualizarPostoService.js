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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtualizaPostoService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class AtualizaPostoService {
    execute({ name, avatar, table, district, fuelStationID }) {
        return __awaiter(this, void 0, void 0, function* () {
            const _fuelStationID = yield prisma_1.default.fuelStation.findFirst({ where: { id: fuelStationID } });
            const __fuelStationID = yield prisma_1.default.fuelStation.updateMany({
                where: { id: fuelStationID },
                data: {
                    name,
                    avatar,
                    table,
                    previoustable: _fuelStationID.table,
                    district,
                    updatedAt: new Date()
                }
            });
            return __fuelStationID;
        });
    }
}
exports.AtualizaPostoService = AtualizaPostoService;
