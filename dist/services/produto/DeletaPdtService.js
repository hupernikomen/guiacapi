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
        return __awaiter(this, void 0, void 0, function* () {
            const produto = yield prisma_1.default.produto.findUnique({
                where: {
                    id: produtoID
                }
            });
            // produto.imagens?.forEach((item: any) => {
            var params = { Bucket: 'guiaapi-s3bucket', Key: 'public/42d5b2ea6584a6f96acc245caf9a1e82-598935c3-cc1f-4364-9d11-4e94ada3233d.JPEG' };
            s3.deleteObject(params, function (err, data) {
                if (err)
                    console.log(err, err.stack); // error
                else
                    console.log(); // deleted
                console.log("DeletaPdt API");
            });
            // })
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
