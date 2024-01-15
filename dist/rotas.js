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
const CreateAdminsController_1 = require("./controllers/admin/CreateAdminsController");
const CreateBannerController_1 = require("./controllers/banner/CreateBannerController");
// import { GetUniqueBannerController } from './controllers/banner/GetUniqueBannerController';
// import { UpdateBannerController } from './controllers/banner/UpdateBannerController';
const CreateServiceController_1 = require("./controllers/service/CreateServiceController");
const ListServicesController_1 = require("./controllers/service/ListServicesController");
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
const CriaSubCategoriaController_1 = require("./controllers/subcategory/CriaSubCategoriaController");
const ListaSubCategoriasController_1 = require("./controllers/subcategory/ListaSubCategoriasController");
const BuscaSubcategoriaController_1 = require("./controllers/subcategory/BuscaSubcategoriaController");
const PorSubcategoriaProdutoController_1 = require("./controllers/product/PorSubcategoriaProdutoController");
const ListarUsuariosController_1 = require("./controllers/user/ListarUsuariosController");
const BuscarUsuarioController_1 = require("./controllers/user/BuscarUsuarioController");
const AtualizaMapaController_1 = require("./controllers/map/AtualizaMapaController");
const DeletaMarcaController_1 = require("./controllers/brand/DeletaMarcaController");
const CriaMarcaController_1 = require("./controllers/brand/CriaMarcaController");
const ListaMarcasController_1 = require("./controllers/brand/ListaMarcasController");
const CriarPagamentoController_1 = require("./controllers/payment/CriarPagamentoController");
const ListarPaymentController_1 = require("./controllers/payment/ListarPaymentController");
const BuscaPaymentController_1 = require("./controllers/payment/BuscaPaymentController");
const AtualizarPagamentoController_1 = require("./controllers/payment/AtualizarPagamentoController");
const ListaLojasControllerAdmin_1 = require("./controllers/store/ListaLojasControllerAdmin");
const ListarProfissionalControllerAdmin_1 = require("./controllers/person/ListarProfissionalControllerAdmin");
const AtualizarPagamentoController_2 = require("./controllers/paymentBanner/AtualizarPagamentoController");
const BuscaPaymentController_2 = require("./controllers/paymentBanner/BuscaPaymentController");
const CriarPagamentoController_2 = require("./controllers/paymentBanner/CriarPagamentoController");
const ListarPaymentController_2 = require("./controllers/paymentBanner/ListarPaymentController");
const CriarOwnerController_1 = require("./controllers/owner/CriarOwnerController");
const BuscaRegiaoController_1 = require("./controllers/region/BuscaRegiaoController");
const DeletaRegiaoController_1 = require("./controllers/region/DeletaRegiaoController");
const ListarMapsController_1 = require("./controllers/map/ListarMapsController");
const ListarAdminController_1 = require("./controllers/banner/ListarAdminController");
const ListarRegioesControllerAdmin_1 = require("./controllers/region/ListarRegioesControllerAdmin");
const BuscarOwnerController_1 = require("./controllers/owner/BuscarOwnerController");
const DeleteBannerController_1 = require("./controllers/banner/DeleteBannerController");
const CreateJobController_1 = require("./controllers/jobs/CreateJobController");
const ListarJobsController_1 = require("./controllers/jobs/ListarJobsController");
const uploadProdutos = (0, multer_1.default)({
    fileFilter: multer_2.fileFilter,
    storage: process.env.TYPE_STORAGE === 'S3' ? multer_2.storageProdutos.s3 : multer_2.storageProdutos.local,
    limits: {
        fileSize: 1 * 1024 * 1024 // MAX 1MB
    }
});
const uploadAvatar = (0, multer_1.default)({
    fileFilter: multer_2.fileFilter,
    storage: process.env.TYPE_STORAGE === 'S3' ? multer_2.storageAvatar.s3 : multer_2.storageAvatar.local,
    limits: {
        fileSize: 1 * 1024 * 1024 // MAX 1MB
    }
});
const uploadPortfolio = (0, multer_1.default)({
    fileFilter: multer_2.fileFilter,
    storage: process.env.TYPE_STORAGE === 'S3' ? multer_2.storagePortfolio.s3 : multer_2.storagePortfolio.local,
    limits: {
        fileSize: 1 * 1024 * 1024 // MAX 1MB
    }
});
const uploadMarca = (0, multer_1.default)({
    fileFilter: multer_2.fileFilter,
    storage: process.env.TYPE_STORAGE === 'S3' ? multer_2.storageMarca.s3 : multer_2.storageMarca.local,
    limits: {
        fileSize: 1 * 1024 * 1024 // MAX 1MB
    }
});
const uploadBanner = (0, multer_1.default)({
    fileFilter: multer_2.fileFilter,
    storage: process.env.TYPE_STORAGE === 'S3' ? multer_2.storageBanner.s3 : multer_2.storageBanner.local,
    limits: {
        fileSize: 1 * 1024 * 1024 // MAX 1MB
    }
});
const rotas = (0, express_1.Router)();
exports.rotas = rotas;
rotas.post('/admins', new CreateAdminsController_1.CreateAdminsController().handle);
rotas.get('/storesAdmin', new ListaLojasControllerAdmin_1.ListaLojasControllerAdmin().handle);
rotas.get('/personsAdmin', new ListarProfissionalControllerAdmin_1.ListarProfissionalControllerAdmin().handle);
rotas.post('/service', authenticator_1.Authenticator, new CreateServiceController_1.CreateServiceController().handle);
rotas.get('/services', new ListServicesController_1.ListServicesController().handle);
// pages/admin/create/user
rotas.post('/owner', authenticator_1.Authenticator, new CriarOwnerController_1.CriaOwnerController().handle);
// pages/contactUs - OK
rotas.get('/owner', new BuscarOwnerController_1.BuscaOwnerController().handle);
// pages/admin/create/user
rotas.post('/user', authenticator_1.Authenticator, new CriaUsuarioController_1.CriaUsuarioController().handle);
// account/person/dados
// account/users/manipulatePassword
rotas.put('/user', authenticator_1.Authenticator, new AtualizaUsuarioController_1.AtualizaUsuarioController().handle);
// pages/admin/index - OK
rotas.get('/users', new ListarUsuariosController_1.ListarUsuariosController().handle);
// pages/admin/create/payment - OK
rotas.get('/user', new BuscarUsuarioController_1.BuscaUsuarioController().handle);
// context/appcontext
rotas.post('/login', new AutenticaUsuarioController_1.AutenticaUsuarioController().handle);
// pages/admin/create/banner
rotas.post('/banner', authenticator_1.Authenticator, uploadBanner.single('image'), new CreateBannerController_1.CreateBannerController().handle);
// pages/feed - OK
// pages/productByCategory - OK
// pages/detailProduct - OK
rotas.get('/banners', new ListarBannersController_1.ListarBannersController().handle);
rotas.delete('/banner', authenticator_1.Authenticator, new DeleteBannerController_1.DeleteBannerController().handle);
// rotas.get('/banner', new BuscaBannerController().handle);
// rotas.put('/banner', Authenticator, uploadBanner.single('image'), new AtualizarBannerController().handle);
// pages/admin/list/banner - OK
rotas.get('/bannersAdmin', authenticator_1.Authenticator, new ListarAdminController_1.ListarAdminController().handle);
rotas.post('/category', authenticator_1.Authenticator, new CriaCategoriaController_1.CriaCategoriaController().handle);
rotas.delete('/category', authenticator_1.Authenticator, new DeletaCategoriaController_1.DeletaCategoriaController().handle);
rotas.put('/category', authenticator_1.Authenticator, new AtualizaCategoriaController_1.AtualizaCategoriaController().handle);
// account/store/addproduct
// pages/admin/create/banner
rotas.get('/categories', new ListaCategoriaController_1.ListaCategoriaController().handle);
rotas.post('/subcategory', authenticator_1.Authenticator, new CriaSubCategoriaController_1.CriaSubCategoriaController().handle);
// account/store/addproduct
rotas.get('/subcategories', new ListaSubCategoriasController_1.ListaSubCategoriaController().handle);
rotas.get('/subcategory', new BuscaSubcategoriaController_1.BuscaSubcategoriaController().handle);
// pages/admin/create/region
rotas.post('/region', authenticator_1.Authenticator, new CriaRegiaoController_1.CriaRegiaoController().handle);
// pages/filters
rotas.get('/regions', new ListarRegioesController_1.ListarRegioesController().handle);
// pages/admin/create/user
rotas.get('/regionsAdmin', new ListarRegioesControllerAdmin_1.ListarRegioesControllerAdmin().handle);
// context/appcontext
rotas.get('/region', new BuscaRegiaoController_1.BuscaRegiaoController().handle);
rotas.delete('/region', authenticator_1.Authenticator, new DeletaRegiaoController_1.DeletaRegiaoController().handle);
// pages/admin/create/payment
rotas.post('/payment', authenticator_1.Authenticator, new CriarPagamentoController_1.CriaPaymentController().handle);
rotas.get('/payments', new ListarPaymentController_1.ListarPaymentController().handle);
rotas.get('/payment', new BuscaPaymentController_1.BuscaPaymentController().handle);
// pages/admin/create/payment
rotas.put('/payment', authenticator_1.Authenticator, new AtualizarPagamentoController_1.AtualizarPagamentoController().handle);
// pages/admin/create/paymentBanner
rotas.post('/paymentBanner', authenticator_1.Authenticator, new CriarPagamentoController_2.CriaPaymentBannerController().handle);
// pages/admin/list/banner
rotas.get('/paymentBanners', new ListarPaymentController_2.ListarPaymentBannerController().handle);
// pages/admin/create/paymentBanner
rotas.get('/paymentBanner', new BuscaPaymentController_2.BuscaPaymentBannerController().handle);
// pages/admin/create/paymentBanner
rotas.put('/paymentBanner', authenticator_1.Authenticator, new AtualizarPagamentoController_2.AtualizarPagamentoBannerController().handle);
rotas.post('/campaign', authenticator_1.Authenticator, new CriaCampanhaController_1.CriaCampanhaController().handle);
rotas.put('/campaign', authenticator_1.Authenticator, new AtualizaCampanhaController_1.AtualizaCampanhaController().handle);
rotas.get('/campaigns', new ListaCampanhasInativasController_1.ListaCampanhasInativasController().handle);
rotas.get('/campaigns/active', new ListaCampanhaController_1.ListaCampanhaController().handle);
rotas.post('/posto', new CriaPostoController_1.CriaPostoController().handle);
rotas.put('/posto', uploadAvatar.single('avatar'), new AtualizaPostoController_1.AtualizaPostoController().handle);
rotas.get('/posto', new BuscaPostoController_1.BuscaPostoController().handle);
rotas.get('/postos', new ListaPostosController_1.ListarPostosController().handle);
rotas.post('/job', authenticator_1.Authenticator, new CreateJobController_1.CriaJobController().handle);
rotas.get('/jobs', new ListarJobsController_1.ListarJobsController().handle);
// account/store/manipulateproduct
rotas.put('/product', authenticator_1.Authenticator, new AtualizaProdutoController_1.AtualizaProdutoController().handle);
// account/store/manipulateproduct
rotas.delete('/product', authenticator_1.Authenticator, new DeletaProdutoController_1.DeletaProdutoController().handle);
// account/store/addproduct
rotas.post('/product', authenticator_1.Authenticator, uploadProdutos.array('files', 5), new CriaProdutoController_1.CriaProdutoController().handle);
// pages/feed
// pages/search
rotas.get('/products', new ListarProdutosController_1.ListarProdutosController().handle);
// pages/productbycategory
rotas.get('/products/category', new PorCategoriaProdutoController_1.PorCategoriaProdutoController().handle);
// pages/detailProduct
// pages/productbysubcategory
rotas.get('/products/subcategory', new PorSubcategoriaProdutoController_1.PorSubcategoriaProdutoController().handle);
// account/store/manipulateproduct
// pages/detailProduct
rotas.get('/detail/product', new DetalheProdutoController_1.DetalheProdutoController().handle);
// pages/admin/create/location
// pages/admin/create/user
rotas.post('/map', authenticator_1.Authenticator, new CriaMapaController_1.CriaMapaController().handle);
// pages/admin/create/location
rotas.put('/map', authenticator_1.Authenticator, new AtualizaMapaController_1.AtualizaMapaController().handle);
// pages/admin/create/location
// pages/map
rotas.get('/map', new BuscaMapaController_1.BuscaMapaController().handle);
// pages/whois
rotas.get('/maps', new ListarMapsController_1.ListaMapasController().handle);
// account/users/contacts/create
rotas.post('/contact', authenticator_1.Authenticator, uploadAvatar.single('avatar'), new CriaContatoController_1.CriaContatoController().handle);
// account/users/contacts/listcontacts
rotas.delete('/contact', authenticator_1.Authenticator, new DeletaContatoController_1.DeletarContatoController().handle);
// account/users/contacts/listcontacts
// pages/contactUs
rotas.get('/contacts', new ListaContatosController_1.ListaContatosController().handle);
// account/store/home
// account/store/settings
// account/store/addproduct
// account/store/profilestore
rotas.get('/store/logged', authenticator_1.Authenticator, new LojaLogadaController_1.LojaLogadaController().handle);
// pages/admin/create/user
rotas.post('/store', authenticator_1.Authenticator, new CriaLojaController_1.CriaLojaController().handle);
// account/store/profilestore
// account/store/settings
// pages/admin/create/user
rotas.put('/store', authenticator_1.Authenticator, uploadAvatar.single('avatar'), new AtualizaLojaController_1.AtualizaLojaController().handle);
// pages/admin/create/banner
// pages/liststores
rotas.get('/stores', new ListaLojasController_1.ListaLojasController().handle);
// pages/store
rotas.get('/store', new BuscaLojaController_1.BuscaLojaController().handle);
rotas.post('/brand', authenticator_1.Authenticator, uploadMarca.single('avatar'), new CriaMarcaController_1.CriaMarcaController().handle);
rotas.delete('/brand', authenticator_1.Authenticator, new DeletaMarcaController_1.DeletaMarcaController().handle);
// pages/feed
rotas.get('/brands', new ListaMarcasController_1.ListaMarcasController().handle);
// pages/admin/create/user
rotas.post('/person', authenticator_1.Authenticator, new CriaProfissionalController_1.CriaProfissionalController().handle);
// account/person/dados
// pages/admin/create/user
rotas.put('/person', authenticator_1.Authenticator, uploadAvatar.single('avatar'), new AtualizarProfissionalController_1.AtualizarProfissionalController().handle);
// account/person/dados
rotas.get('/person', new BucaProfissionalController_1.BuscaProfissionalController().handle);
// pages/feed
// pages/listPersons
// pages/search
rotas.get('/persons', new ListarProfissionalController_1.ListarProfissionalController().handle);
// pages/admin/create/profession
rotas.post('/profession', authenticator_1.Authenticator, new CriaProfissaoController_1.CriaProfissaoController().handle);
rotas.put('/profession', authenticator_1.Authenticator, new AtualizaProfissaoController_1.AtualizaProfissaoController().handle);
// pages/admin/create/user
rotas.get('/professions', new ListaProfissaoController_1.ListaProfissaoController().handle);
rotas.get('/profession/persons', new PorProfissaoController_1.PorProfissaoController().handle);
