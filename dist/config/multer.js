"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageMarca = exports.storagePortfolio = exports.storageBanner = exports.storageAvatar = exports.storageProdutos = exports.fileFilter = void 0;
const multer_1 = __importDefault(require("multer"));
const crypto_1 = __importDefault(require("crypto"));
const path_1 = __importDefault(require("path"));
const multer_s3_1 = __importDefault(require("multer-s3"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const path_2 = require("path");
require("dotenv/config");
let s3 = new aws_sdk_1.default.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: 'us-east-1',
});
exports.default = {
    upload(folder) {
        return {
            storage: multer_1.default.diskStorage({
                destination: (0, path_2.resolve)(__dirname, '..', '..', folder),
                filename: (request, file, callback) => {
                    const fileHash = crypto_1.default.randomBytes(16).toString("hex");
                    const fileName = `${fileHash}-${file.originalname}`;
                    return callback(null, fileName);
                }
            })
        };
    }
};
// Filtro de tipos
function fileFilter(req, file, callback) {
    let errorMessage = '';
    const ext = path_1.default.extname(file.originalname).toLowerCase();
    if (file.size > 1024) {
        errorMessage = 'Tamanho do arquivo excede o limite permitido';
        return callback({ errorMessage: errorMessage, code: 'LIMIT_FILE_SIZE' }, false);
    }
    if (ext !== '.png' &&
        ext !== '.jpg' &&
        ext !== '.jpeg' &&
        ext !== '.webp')
        return callback(new Error('Formato de arquivo não aceito'));
    if (errorMessage) {
        console.log(errorMessage, "Multer API");
        return callback({ errorMessage: errorMessage, code: 'LIMIT_FILE_TYPE' }, false);
    }
    callback(null, true);
}
exports.fileFilter = fileFilter;
const local = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path_1.default.resolve(__dirname, '..', '..', 'files', 'users'));
    },
    filename: (request, file, callback) => {
        const fileHash = crypto_1.default.randomBytes(16).toString("hex");
        const fileName = `${fileHash}-${file.originalname}`;
        return callback(null, fileName);
    },
});
exports.storageProdutos = {
    local: local,
    s3: (0, multer_s3_1.default)({
        s3: s3,
        bucket: process.env.BUCKETEER_BUCKET_NAME,
        contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
        acl: "public-read",
        key: (req, file, cb) => {
            crypto_1.default.randomBytes(16, (err, hash) => {
                if (err)
                    cb(err);
                const fileHash = crypto_1.default.randomBytes(16).toString("hex");
                const fileName = `produtos/${fileHash}-${file.originalname}`;
                cb(null, fileName);
            });
        },
    }),
};
exports.storageAvatar = {
    local: local,
    s3: (0, multer_s3_1.default)({
        s3: s3,
        bucket: process.env.BUCKETEER_BUCKET_NAME,
        contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
        acl: "public-read",
        key: (req, file, cb) => {
            crypto_1.default.randomBytes(16, (err, hash) => {
                if (err)
                    cb(err);
                const fileHash = crypto_1.default.randomBytes(16).toString("hex");
                const fileName = `avatar/${fileHash}-${file.originalname}`;
                cb(null, fileName);
            });
        },
    }),
};
exports.storageBanner = {
    local: local,
    s3: (0, multer_s3_1.default)({
        s3: s3,
        bucket: process.env.BUCKETEER_BUCKET_NAME,
        contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
        acl: "public-read",
        key: (req, file, cb) => {
            crypto_1.default.randomBytes(16, (err, hash) => {
                if (err)
                    cb(err);
                const fileHash = crypto_1.default.randomBytes(16).toString("hex");
                const fileName = `banner/${fileHash}-${file.originalname}`;
                cb(null, fileName);
            });
        },
    }),
};
exports.storagePortfolio = {
    local: local,
    s3: (0, multer_s3_1.default)({
        s3: s3,
        bucket: process.env.BUCKETEER_BUCKET_NAME,
        contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
        acl: "public-read",
        key: (req, file, cb) => {
            crypto_1.default.randomBytes(16, (err, hash) => {
                if (err)
                    cb(err);
                const fileHash = crypto_1.default.randomBytes(16).toString("hex");
                const fileName = `portfolio/${fileHash}-${file.originalname}`;
                cb(null, fileName);
            });
        },
    }),
};
exports.storageMarca = {
    local: local,
    s3: (0, multer_s3_1.default)({
        s3: s3,
        bucket: process.env.BUCKETEER_BUCKET_NAME,
        contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
        acl: "public-read",
        key: (req, file, cb) => {
            crypto_1.default.randomBytes(16, (err, hash) => {
                if (err)
                    cb(err);
                const fileHash = crypto_1.default.randomBytes(16).toString("hex");
                const fileName = `marcas/${fileHash}-${file.originalname}`;
                cb(null, fileName);
            });
        },
    }),
};
