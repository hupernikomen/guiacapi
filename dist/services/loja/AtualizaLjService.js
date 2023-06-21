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
exports.AtualizaLjService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
let s3 = new aws_sdk_1.default.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: 'us-east-1',
});
class AtualizaLjService {
    execute({ lojaID, statusGuia, avatar, nome, bio, endereco, bairro, referencia, latlng, entrega }) {
        return __awaiter(this, void 0, void 0, function* () {
            const loja = yield prisma_1.default.loja.findUnique({
                where: {
                    id: lojaID
                }
            });
            if (!loja) {
                throw new Error("Ops, infelizmente não encontramos!");
            }
            console.log(loja, "lojaaaaaaaaaa");
            // Apagar imagens do S3 da Amazon
            // var params = { Bucket: process.env.BUCKETEER_BUCKET_NAME, Key: loja.avatar?.key };
            // s3.deleteObject(params, function (err, data) {
            //     if (err) console.log(err, err.stack);  // error
            //     else console.log();                 // deleted
            // })
            const data = yield prisma_1.default.loja.update({
                where: {
                    id: lojaID
                },
                data: {
                    statusGuia,
                    nome,
                    avatar,
                    bio,
                    endereco,
                    bairro,
                    referencia,
                    latlng,
                    entrega
                }
            });
            return data;
        });
    }
}
exports.AtualizaLjService = AtualizaLjService;
