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
exports.AtualizaLojaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
let s3 = new aws_sdk_1.default.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: 'us-east-1',
});
class AtualizaLojaService {
    execute({ userID, avatar, name, bio, address, district, reference, delivery, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const _store = yield prisma_1.default.store.findFirst({ where: { userID } });
            if (!_store)
                throw new Error("Ops, infelizmente não encontramos!");
            const deletePromises = [];
            let tempArray = [];
            if (_store.avatar && Array.isArray(_store.avatar)) {
                tempArray = _store.avatar.map((item) => {
                    var params = { Bucket: process.env.BUCKETEER_BUCKET_NAME, Key: item.key };
                    return s3.deleteObject(params).promise();
                });
            }
            deletePromises.push(...tempArray);
            yield Promise.all(deletePromises);
            const __store = yield prisma_1.default.store.updateMany({
                where: { userID },
                data: {
                    name,
                    avatar,
                    bio,
                    address,
                    district,
                    reference,
                    delivery,
                },
            });
            return __store;
        });
    }
}
exports.AtualizaLojaService = AtualizaLojaService;
