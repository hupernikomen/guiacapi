"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../prisma"));
const teresinaID = prisma_1.default.region.findFirst({
    where: { name: "Teresina" },
    select: { id: true }
});
exports.default = teresinaID;
