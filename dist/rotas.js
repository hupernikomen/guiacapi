"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotas = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const multer_2 = require("./config/multer");
const CriarLojaController_1 = require("./controllers/loja/CriarLojaController");
const CriarCategoriasController_1 = require("./controllers/categoria/CriarCategoriasController");
const CriarProdutoController_1 = require("./controllers/produto/CriarProdutoController");
const CriarRegiaoController_1 = require("./controllers/regiao/CriarRegiaoController");
const CriarVendedorController_1 = require("./controllers/vendedor/CriarVendedorController");
const AuthUserController_1 = require("./controllers/auth/AuthUserController");
const MeLojaController_1 = require("./controllers/loja/MeLojaController");
const AtualizarLojaController_1 = require("./controllers/loja/AtualizarLojaController");
const AtualizarProdutoController_1 = require("./controllers/produto/AtualizarProdutoController");
const ListarCategoriasController_1 = require("./controllers/categoria/ListarCategoriasController");
const ListarLojasController_1 = require("./controllers/loja/ListarLojasController");
const ListarProdutosController_1 = require("./controllers/produto/ListarProdutosController");
const ListarPorCategoriaController_1 = require("./controllers/produto/ListarPorCategoriaController");
const ListarRegioesController_1 = require("./controllers/regiao/ListarRegioesController");
const ListarLojaController_1 = require("./controllers/loja/ListarLojaController");
const AtualizarServicoController_1 = require("./controllers/servico/AtualizarServicoController");
const ListarServicosController_1 = require("./controllers/servico/ListarServicosController");
const DetalheProdutoController_1 = require("./controllers/produto/DetalheProdutoController");
const DeleteProductController_1 = require("./controllers/produto/DeleteProductController");
const CriarServicoController_1 = require("./controllers/servico/CriarServicoController");
const authenticator_1 = require("./middlewares/authenticator");
const uploadUser = (0, multer_1.default)({
    fileFilter: multer_2.fileFilter,
    storage: process.env.TYPE_STORAGE === 'S3' ? multer_2.storageTypes.s3 : multer_2.storageTypes.local,
    limits: {
        fileSize: 1 * 1024 * 1024, // MAX 1MB
    }
});
const rotas = (0, express_1.Router)();
exports.rotas = rotas;
// Loja
rotas.get('/lojas', new ListarLojasController_1.ListarLojasController().handle); //Front [com filtro de regiao]
rotas.get('/loja', new ListarLojaController_1.ListarLojaController().handle); //Front
rotas.post('/login', new AuthUserController_1.AuthLojaController().handle); //Front
rotas.post('/loja', new CriarLojaController_1.CriarLojaController().handle);
rotas.put('/loja', authenticator_1.Authenticator, uploadUser.single('logo'), new AtualizarLojaController_1.AtualizarLojaController().handle);
rotas.get('/me', authenticator_1.Authenticator, new MeLojaController_1.MeLojaController().handle);
//Vendedor
rotas.post('/vendedor', authenticator_1.Authenticator, uploadUser.single('foto'), new CriarVendedorController_1.CriarVendedorController().handle);
//Servicos
rotas.post('/servico', uploadUser.single('foto'), uploadUser.array('imagens'), new CriarServicoController_1.CriarServicoController().handle);
rotas.put('/servico', new AtualizarServicoController_1.AtualizarServicoController().handle);
rotas.get('/servicos', new ListarServicosController_1.ListarServicosController().handle);
// Categoria
rotas.get('/categorias', new ListarCategoriasController_1.ListarCategoriasController().handle); //Front
rotas.post('/categoria', new CriarCategoriasController_1.CriarCategoriaController().handle);
// Produto
rotas.get('/produtos', new ListarProdutosController_1.ListarProdutosController().handle); //Front [com filtro de regiao]
rotas.post('/produto', authenticator_1.Authenticator, uploadUser.array('files', 5), new CriarProdutoController_1.CriarProdutoController().handle);
rotas.get('/porcategoria', new ListarPorCategoriaController_1.ListarPorCategoriaController().handle); //Front [com filtro de regiao]
rotas.get('/detalhe', new DetalheProdutoController_1.DetalheProdutoController().handle);
rotas.delete('/produto', authenticator_1.Authenticator, new DeleteProductController_1.DeletarProdutoController().handle);
rotas.put('/produto', authenticator_1.Authenticator, new AtualizarProdutoController_1.AtualizarProdutoController().handle);
// Region
rotas.get('/regioes', new ListarRegioesController_1.ListarRegioesController().handle); //Front
rotas.post('/regiao', new CriarRegiaoController_1.CriarRegiaoController().handle);
