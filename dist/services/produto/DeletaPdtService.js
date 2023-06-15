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
exports.DeletaPdtService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
let s3 = new aws_sdk_1.default.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: 'us-east-1',
});
class DeletaPdtService {
    execute({ produtoID }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const produto = yield prisma_1.default.produto.findUnique({
                where: {
                    id: produtoID
                }
            });
            (_a = produto.imagens) === null || _a === void 0 ? void 0 : _a.forEach((item) => {
                console.log("DeletaPdt API", item);
                var params = { Bucket: 'guiaapi-s3bucket', Key: 'public/3afd31ce3e19df7ecda409954c3a3998-530da3c2-b3d6-4d13-89a0-0e39cf32a515.JPEG' };
                s3.deleteObject(params, function (err, data) {
                    if (err)
                        console.log(err, err.stack); // error
                    else
                        console.log(); // deleted
                });
            });
            if (!produto) {
                throw new Error("Produto não existe");
            }
            const produtoDelete = yield prisma_1.default.produto.delete({
                where: {
                    id: produtoID
                }
            });
            return produtoDelete;
        });
    }
}
exports.DeletaPdtService = DeletaPdtService;
