"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotas = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
require("dotenv/config");
const authenticator_1 = require("./middlewares/authenticator");
const multer_2 = require("./config/multer");
const LojaLogadaController_1 = require("./controllers/store/LojaLogadaController");
const AutenticaUsuarioController_1 = require("./controllers/user/AutenticaUsuarioController");
const BucaProfissionalController_1 = require("./controllers/person/BucaProfissionalController");
const BuscaMapaController_1 = require("./controllers/map/BuscaMapaController");
const BuscaLojaController_1 = require("./controllers/store/BuscaLojaController");
const BuscaPostoController_1 = require("./controllers/fuelStation/BuscaPostoController");
const DetalheProdutoController_1 = require("./controllers/product/DetalheProdutoController");
const AtualizaUsuarioController_1 = require("./controllers/user/AtualizaUsuarioController");
const AtualizaLojaController_1 = require("./controllers/store/AtualizaLojaController");
const AtualizaCategoriaController_1 = require("./controllers/category/AtualizaCategoriaController");
const AtualizaCampanhaController_1 = require("./controllers/campaign/AtualizaCampanhaController");
const AtualizarProfissionalController_1 = require("./controllers/person/AtualizarProfissionalController");
const AtualizaProdutoController_1 = require("./controllers/product/AtualizaProdutoController");
const AtualizaPostoController_1 = require("./controllers/fuelStation/AtualizaPostoController");
const CriaMapaController_1 = require("./controllers/map/CriaMapaController");
const CriaLojaController_1 = require("./controllers/store/CriaLojaController");
const CriaBannerController_1 = require("./controllers/banner/CriaBannerController");
const CriaUsuarioController_1 = require("./controllers/user/CriaUsuarioController");
const CriaRegiaoController_1 = require("./controllers/region/CriaRegiaoController");
const CriaProfissaoController_1 = require("./controllers/profession/CriaProfissaoController");
const CriaCategoriaController_1 = require("./controllers/category/CriaCategoriaController");
const CriaContatoController_1 = require("./controllers/contact/CriaContatoController");
const CriaProfissionalController_1 = require("./controllers/person/CriaProfissionalController");
const CriaPostoController_1 = require("./controllers/fuelStation/CriaPostoController");
const CriaCampanhaController_1 = require("./controllers/campaign/CriaCampanhaController");
const CriaProdutoController_1 = require("./controllers/product/CriaProdutoController");
const ListarRegioesController_1 = require("./controllers/region/ListarRegioesController");
const ListarProdutosController_1 = require("./controllers/product/ListarProdutosController");
const ListarProfissionalController_1 = require("./controllers/person/ListarProfissionalController");
const ListaProfissaoController_1 = require("./controllers/profession/ListaProfissaoController");
const ListaContatosController_1 = require("./controllers/contact/ListaContatosController");
const ListaCategoriaController_1 = require("./controllers/category/ListaCategoriaController");
const ListaCampanhasInativasController_1 = require("./controllers/campaign/ListaCampanhasInativasController");
const ListaCampanhaController_1 = require("./controllers/campaign/ListaCampanhaController");
const ListaPostosController_1 = require("./controllers/fuelStation/ListaPostosController");
const ListaLojasController_1 = require("./controllers/store/ListaLojasController");
const PorCategoriaProdutoController_1 = require("./controllers/product/PorCategoriaProdutoController");
const PorProfissaoController_1 = require("./controllers/person/PorProfissaoController");
const DeletaProdutoController_1 = require("./controllers/product/DeletaProdutoController");
const AtualizaProfissaoController_1 = require("./controllers/profession/AtualizaProfissaoController");
const DeletaCategoriaController_1 = require("./controllers/category/DeletaCategoriaController");
const ListarBannersController_1 = require("./controllers/banner/ListarBannersController");
const DeletaContatoController_1 = require("./controllers/contact/DeletaContatoController");
const CriaPlanoController_1 = require("./controllers/price/CriaPlanoController");
const ListarPlanosController_1 = require("./controllers/price/ListarPlanosController");
const CriaSubCategoriaController_1 = require("./controllers/subcategory/CriaSubCategoriaController");
const ListaSubCategoriasController_1 = require("./controllers/subcategory/ListaSubCategoriasController");
const BuscaSubcategoriaController_1 = require("./controllers/subcategory/BuscaSubcategoriaController");
const PorSubcategoriaProdutoController_1 = require("./controllers/product/PorSubcategoriaProdutoController");
const ListarUsuariosController_1 = require("./controllers/user/ListarUsuariosController");
const BuscarUsuarioController_1 = require("./controllers/user/BuscarUsuarioController");
const AtualizaMapaController_1 = require("./controllers/map/AtualizaMapaController");
const CriaPortfolioController_1 = require("./controllers/portfolio/CriaPortfolioController");
const ListaPortfolioController_1 = require("./controllers/portfolio/ListaPortfolioController");
const DeletaPortfolioController_1 = require("./controllers/portfolio/DeletaPortfolioController");
const DeletaMarcaController_1 = require("./controllers/brand/DeletaMarcaController");
const CriaMarcaController_1 = require("./controllers/brand/CriaMarcaController");
const ListaMarcasController_1 = require("./controllers/brand/ListaMarcasController");
const CriaAdminController_1 = require("./controllers/admin/CriaAdminController");
const CriarPagamentoController_1 = require("./controllers/payment/CriarPagamentoController");
const ListarPaymentController_1 = require("./controllers/payment/ListarPaymentController");
const uploadProdutos = (0, multer_1.default)({
    fileFilter: multer_2.fileFilter,
    storage: process.env.TYPE_STORAGE === 'S3' ? multer_2.storageProdutos.s3 : multer_2.storageProdutos.local,
    limits: {
        fileSize: 1 * 1024 * 1024, // MAX 1MB
    }
});
const uploadAvatar = (0, multer_1.default)({
    fileFilter: multer_2.fileFilter,
    storage: process.env.TYPE_STORAGE === 'S3' ? multer_2.storageAvatar.s3 : multer_2.storageAvatar.local,
    limits: {
        fileSize: 1 * 1024 * 1024, // MAX 1MB
    }
});
const uploadPortfolio = (0, multer_1.default)({
    fileFilter: multer_2.fileFilter,
    storage: process.env.TYPE_STORAGE === 'S3' ? multer_2.storagePortfolio.s3 : multer_2.storagePortfolio.local,
    limits: {
        fileSize: 1 * 1024 * 1024, // MAX 1MB
    }
});
const uploadMarca = (0, multer_1.default)({
    fileFilter: multer_2.fileFilter,
    storage: process.env.TYPE_STORAGE === 'S3' ? multer_2.storageMarca.s3 : multer_2.storageMarca.local,
    limits: {
        fileSize: 1 * 1024 * 1024, // MAX 1MB
    }
});
const uploadBanner = (0, multer_1.default)({
    fileFilter: multer_2.fileFilter,
    storage: process.env.TYPE_STORAGE === 'S3' ? multer_2.storageBanner.s3 : multer_2.storageBanner.local,
    limits: {
        fileSize: 1 * 1024 * 1024, // MAX 1MB
    }
});
const rotas = (0, express_1.Router)();
exports.rotas = rotas;
rotas.post('/admin', authenticator_1.Authenticator, new CriaAdminController_1.CriaAdminController().handle);
rotas.post('/user', authenticator_1.Authenticator, new CriaUsuarioController_1.CriaUsuarioController().handle);
rotas.put('/user', authenticator_1.Authenticator, new AtualizaUsuarioController_1.AtualizaUsuarioController().handle);
rotas.get('/users', authenticator_1.Authenticator, new ListarUsuariosController_1.ListarUsuariosController().handle);
rotas.get('/user', new BuscarUsuarioController_1.BuscaUsuarioController().handle);
rotas.post('/login', new AutenticaUsuarioController_1.AutenticaUsuarioController().handle);
rotas.post('/banner', authenticator_1.Authenticator, uploadBanner.single('image'), new CriaBannerController_1.CriaBannerController().handle);
rotas.get('/banners', new ListarBannersController_1.ListarBannersController().handle);
rotas.post('/category', authenticator_1.Authenticator, new CriaCategoriaController_1.CriaCategoriaController().handle);
rotas.delete('/category', authenticator_1.Authenticator, new DeletaCategoriaController_1.DeletaCategoriaController().handle);
rotas.put('/category', authenticator_1.Authenticator, new AtualizaCategoriaController_1.AtualizaCategoriaController().handle);
rotas.get('/categories', new ListaCategoriaController_1.ListaCategoriaController().handle);
rotas.post('/subcategory', authenticator_1.Authenticator, new CriaSubCategoriaController_1.CriaSubCategoriaController().handle);
rotas.get('/subcategories', new ListaSubCategoriasController_1.ListaSubCategoriaController().handle);
rotas.get('/subcategory', new BuscaSubcategoriaController_1.BuscaSubcategoriaController().handle);
rotas.post('/region', authenticator_1.Authenticator, new CriaRegiaoController_1.CriaRegiaoController().handle);
rotas.get('/regions', new ListarRegioesController_1.ListarRegioesController().handle);
rotas.post('/payment', authenticator_1.Authenticator, new CriarPagamentoController_1.CriaPaymentController().handle);
rotas.get('/payment', new ListarPaymentController_1.ListarPaymentController().handle);
rotas.post('/campaign', authenticator_1.Authenticator, new CriaCampanhaController_1.CriaCampanhaController().handle);
rotas.put('/campaign', authenticator_1.Authenticator, new AtualizaCampanhaController_1.AtualizaCampanhaController().handle);
rotas.get('/campaigns', new ListaCampanhasInativasController_1.ListaCampanhasInativasController().handle);
rotas.get('/campaigns/active', new ListaCampanhaController_1.ListaCampanhaController().handle);
rotas.post('/posto', new CriaPostoController_1.CriaPostoController().handle);
rotas.put('/posto', uploadAvatar.single('avatar'), new AtualizaPostoController_1.AtualizaPostoController().handle);
rotas.get('/posto', new BuscaPostoController_1.BuscaPostoController().handle);
rotas.get('/postos', new ListaPostosController_1.ListarPostosController().handle);
rotas.put('/product', authenticator_1.Authenticator, new AtualizaProdutoController_1.AtualizaProdutoController().handle);
rotas.delete('/product', authenticator_1.Authenticator, new DeletaProdutoController_1.DeletaProdutoController().handle);
rotas.post('/product', authenticator_1.Authenticator, uploadProdutos.array('files', 5), new CriaProdutoController_1.CriaProdutoController().handle);
rotas.get('/products', new ListarProdutosController_1.ListarProdutosController().handle);
rotas.get('/products/category', new PorCategoriaProdutoController_1.PorCategoriaProdutoController().handle);
rotas.get('/products/subcategory', new PorSubcategoriaProdutoController_1.PorSubcategoriaProdutoController().handle);
rotas.get('/detail/product', new DetalheProdutoController_1.DetalheProdutoController().handle);
rotas.post('/map', authenticator_1.Authenticator, new CriaMapaController_1.CriaMapaController().handle);
rotas.put('/map', authenticator_1.Authenticator, new AtualizaMapaController_1.AtualizaMapaController().handle);
rotas.get('/map', new BuscaMapaController_1.BuscaMapaController().handle);
rotas.post('/contact', authenticator_1.Authenticator, uploadAvatar.single('avatar'), new CriaContatoController_1.CriaContatoController().handle);
rotas.delete('/contact', authenticator_1.Authenticator, new DeletaContatoController_1.DeletarContatoController().handle);
rotas.get('/contacts', new ListaContatosController_1.ListaContatosController().handle);
rotas.get('/store/logged', authenticator_1.Authenticator, new LojaLogadaController_1.LojaLogadaController().handle);
rotas.post('/store', authenticator_1.Authenticator, new CriaLojaController_1.CriaLojaController().handle);
rotas.put('/store', authenticator_1.Authenticator, uploadAvatar.single('avatar'), new AtualizaLojaController_1.AtualizaLojaController().handle);
rotas.get('/stores', new ListaLojasController_1.ListaLojasController().handle);
rotas.get('/store', new BuscaLojaController_1.BuscaLojaController().handle);
rotas.post('/brand', authenticator_1.Authenticator, uploadMarca.single('avatar'), new CriaMarcaController_1.CriaMarcaController().handle);
rotas.delete('/brand', authenticator_1.Authenticator, new DeletaMarcaController_1.DeletaMarcaController().handle);
rotas.get('/brands', new ListaMarcasController_1.ListaMarcasController().handle);
rotas.post('/person', authenticator_1.Authenticator, new CriaProfissionalController_1.CriaProfissionalController().handle);
rotas.post('/profession', authenticator_1.Authenticator, new CriaProfissaoController_1.CriaProfissaoController().handle);
rotas.put('/profession', authenticator_1.Authenticator, new AtualizaProfissaoController_1.AtualizaProfissaoController().handle);
rotas.put('/person', authenticator_1.Authenticator, uploadAvatar.single('avatar'), new AtualizarProfissionalController_1.AtualizarProfissionalController().handle);
rotas.get('/person', new BucaProfissionalController_1.BuscaProfissionalController().handle);
rotas.get('/professions', new ListaProfissaoController_1.ListaProfissaoController().handle);
rotas.get('/persons', new ListarProfissionalController_1.ListarProfissionalController().handle);
rotas.get('/profession/persons', new PorProfissaoController_1.PorProfissaoController().handle);
rotas.post('/portfolio', authenticator_1.Authenticator, uploadPortfolio.single('image'), new CriaPortfolioController_1.CriaPortfolioControlller().handle);
rotas.delete('/portfolio', authenticator_1.Authenticator, new DeletaPortfolioController_1.DeletaPortfolioController().handle);
rotas.get('/portfolios', new ListaPortfolioController_1.ListarPortfolioController().handle);
rotas.post('/plano', authenticator_1.Authenticator, new CriaPlanoController_1.CriaPlanoController().handle);
rotas.get('/planos', new ListarPlanosController_1.ListarPlanosController().handle);
