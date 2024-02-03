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
const CreateServiceController_1 = require("./controllers/service/CreateServiceController");
const ListServicesController_1 = require("./controllers/service/ListServicesController");
const CreateCategoryServiceController_1 = require("./controllers/categoryService/CreateCategoryServiceController");
const PutServiceController_1 = require("./controllers/service/PutServiceController");
const ListCategoryServicesController_1 = require("./controllers/categoryService/ListCategoryServicesController");
const GetUniqueServiceController_1 = require("./controllers/service/GetUniqueServiceController");
const ListCategoryControllerAdm_1 = require("./controllers/category/ListCategoryControllerAdm");
const LojaLogadaController_1 = require("./controllers/store/LojaLogadaController");
const AutenticaUsuarioController_1 = require("./controllers/user/AutenticaUsuarioController");
const BuscaMapaController_1 = require("./controllers/map/BuscaMapaController");
const BuscaLojaController_1 = require("./controllers/store/BuscaLojaController");
const DetalheProdutoController_1 = require("./controllers/product/DetalheProdutoController");
const AtualizaUsuarioController_1 = require("./controllers/user/AtualizaUsuarioController");
const AtualizaLojaController_1 = require("./controllers/store/AtualizaLojaController");
const AtualizaCategoriaController_1 = require("./controllers/category/AtualizaCategoriaController");
const AtualizaCampanhaController_1 = require("./controllers/campaign/AtualizaCampanhaController");
const AtualizaProdutoController_1 = require("./controllers/product/AtualizaProdutoController");
const CriaMapaController_1 = require("./controllers/map/CriaMapaController");
const CriaLojaController_1 = require("./controllers/store/CriaLojaController");
const CriaUsuarioController_1 = require("./controllers/user/CriaUsuarioController");
const CriaRegiaoController_1 = require("./controllers/region/CriaRegiaoController");
const CriaCategoriaController_1 = require("./controllers/category/CriaCategoriaController");
const CriaContatoController_1 = require("./controllers/contact/CriaContatoController");
const CriaCampanhaController_1 = require("./controllers/campaign/CriaCampanhaController");
const CriaProdutoController_1 = require("./controllers/product/CriaProdutoController");
const ListarRegioesController_1 = require("./controllers/region/ListarRegioesController");
const ListarProdutosController_1 = require("./controllers/product/ListarProdutosController");
const ListaContatosController_1 = require("./controllers/contact/ListaContatosController");
const ListaCategoriaController_1 = require("./controllers/category/ListaCategoriaController");
const ListaCampanhasInativasController_1 = require("./controllers/campaign/ListaCampanhasInativasController");
const ListaCampanhaController_1 = require("./controllers/campaign/ListaCampanhaController");
const ListaLojasController_1 = require("./controllers/store/ListaLojasController");
const PorCategoriaProdutoController_1 = require("./controllers/product/PorCategoriaProdutoController");
const DeletaProdutoController_1 = require("./controllers/product/DeletaProdutoController");
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
const CriarPagamentoController_1 = require("./controllers/payment/CriarPagamentoController");
const ListarPaymentController_1 = require("./controllers/payment/ListarPaymentController");
const BuscaPaymentController_1 = require("./controllers/payment/BuscaPaymentController");
const AtualizarPagamentoController_1 = require("./controllers/payment/AtualizarPagamentoController");
const ListaLojasControllerAdmin_1 = require("./controllers/store/ListaLojasControllerAdmin");
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
const CreateCategoryFoodController_1 = require("./controllers/categoryFood/CreateCategoryFoodController");
const ListCategoryFoodController_1 = require("./controllers/categoryFood/ListCategoryFoodController");
const CreateFoodController_1 = require("./controllers/food/CreateFoodController");
const UpdateFoodController_1 = require("./controllers/food/UpdateFoodController");
const CreateMenuController_1 = require("./controllers/menu/CreateMenuController");
const ListMenuController_1 = require("./controllers/menu/ListMenuController");
const GetFoodController_1 = require("./controllers/food/GetFoodController");
const GetMenuController_1 = require("./controllers/menu/GetMenuController");
const ListFoodController_1 = require("./controllers/food/ListFoodController");
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
rotas.post('/login', new AutenticaUsuarioController_1.AutenticaUsuarioController().handle);
rotas.get('/storesAdmin', new ListaLojasControllerAdmin_1.ListaLojasControllerAdmin().handle);
rotas.post('/service', authenticator_1.Authenticator, new CreateServiceController_1.CreateServiceController().handle);
rotas.get('/services', new ListServicesController_1.ListServicesController().handle);
rotas.get('/service', new GetUniqueServiceController_1.GetUniqueServiceController().handle);
rotas.put('/service', authenticator_1.Authenticator, uploadAvatar.single('avatar'), new PutServiceController_1.PutServiceController().handle);
rotas.post('/categoryService', authenticator_1.Authenticator, new CreateCategoryServiceController_1.CreateCategoryServiceController().handle);
rotas.get('/categoryServices', new ListCategoryServicesController_1.ListCategoryServicesController().handle);
rotas.get('/categoriesAll', new ListCategoryControllerAdm_1.ListCategoryControllerAdm().handle);
rotas.post('/categoryFood', authenticator_1.Authenticator, new CreateCategoryFoodController_1.CreateCategoryFoodController().handle);
rotas.get('/categoriesFood', new ListCategoryFoodController_1.ListCategoryFoodController().handle);
rotas.post('/food', authenticator_1.Authenticator, new CreateFoodController_1.CreateFoodController().handle);
rotas.get('/foodsAll', new ListFoodController_1.ListFoodController().handle);
rotas.get('/food', new GetFoodController_1.GetFoodController().handle);
rotas.put('/food', authenticator_1.Authenticator, uploadAvatar.single('avatar'), new UpdateFoodController_1.UpdateFoodController().handle);
rotas.post('/menu', authenticator_1.Authenticator, uploadProdutos.single('image'), new CreateMenuController_1.CreateMenuController().handle);
rotas.get('/menuAll', new ListMenuController_1.ListMenuController().handle);
rotas.get('/menu', new GetMenuController_1.GetMenuController().handle);
rotas.post('/owner', authenticator_1.Authenticator, new CriarOwnerController_1.CriaOwnerController().handle);
rotas.get('/owner', new BuscarOwnerController_1.BuscaOwnerController().handle);
rotas.post('/user', authenticator_1.Authenticator, new CriaUsuarioController_1.CriaUsuarioController().handle);
rotas.put('/user', authenticator_1.Authenticator, new AtualizaUsuarioController_1.AtualizaUsuarioController().handle);
rotas.get('/users', new ListarUsuariosController_1.ListarUsuariosController().handle);
rotas.get('/user', new BuscarUsuarioController_1.BuscaUsuarioController().handle);
rotas.post('/banner', authenticator_1.Authenticator, uploadBanner.single('image'), new CreateBannerController_1.CreateBannerController().handle);
rotas.get('/banners', new ListarBannersController_1.ListarBannersController().handle);
rotas.delete('/banner', authenticator_1.Authenticator, new DeleteBannerController_1.DeleteBannerController().handle);
rotas.get('/bannersAdmin', authenticator_1.Authenticator, new ListarAdminController_1.ListarAdminController().handle);
rotas.post('/category', authenticator_1.Authenticator, new CriaCategoriaController_1.CriaCategoriaController().handle);
rotas.delete('/category', authenticator_1.Authenticator, new DeletaCategoriaController_1.DeletaCategoriaController().handle);
rotas.put('/category', authenticator_1.Authenticator, new AtualizaCategoriaController_1.AtualizaCategoriaController().handle);
rotas.get('/categories', new ListaCategoriaController_1.ListaCategoriaController().handle);
rotas.post('/subcategory', authenticator_1.Authenticator, new CriaSubCategoriaController_1.CriaSubCategoriaController().handle);
rotas.get('/subcategories', new ListaSubCategoriasController_1.ListaSubCategoriaController().handle);
rotas.get('/subcategory', new BuscaSubcategoriaController_1.BuscaSubcategoriaController().handle);
rotas.post('/region', authenticator_1.Authenticator, new CriaRegiaoController_1.CriaRegiaoController().handle);
rotas.get('/regions', new ListarRegioesController_1.ListarRegioesController().handle);
rotas.get('/regionsAdmin', new ListarRegioesControllerAdmin_1.ListarRegioesControllerAdmin().handle);
rotas.get('/region', new BuscaRegiaoController_1.BuscaRegiaoController().handle);
rotas.delete('/region', authenticator_1.Authenticator, new DeletaRegiaoController_1.DeletaRegiaoController().handle);
rotas.post('/payment', authenticator_1.Authenticator, new CriarPagamentoController_1.CriaPaymentController().handle);
rotas.get('/payments', new ListarPaymentController_1.ListarPaymentController().handle);
rotas.get('/payment', new BuscaPaymentController_1.BuscaPaymentController().handle);
rotas.put('/payment', authenticator_1.Authenticator, new AtualizarPagamentoController_1.AtualizarPagamentoController().handle);
rotas.post('/paymentBanner', authenticator_1.Authenticator, new CriarPagamentoController_2.CriaPaymentBannerController().handle);
rotas.get('/paymentBanners', new ListarPaymentController_2.ListarPaymentBannerController().handle);
rotas.get('/paymentBanner', new BuscaPaymentController_2.BuscaPaymentBannerController().handle);
rotas.put('/paymentBanner', authenticator_1.Authenticator, new AtualizarPagamentoController_2.AtualizarPagamentoBannerController().handle);
rotas.post('/campaign', authenticator_1.Authenticator, new CriaCampanhaController_1.CriaCampanhaController().handle);
rotas.put('/campaign', authenticator_1.Authenticator, new AtualizaCampanhaController_1.AtualizaCampanhaController().handle);
rotas.get('/campaigns', new ListaCampanhasInativasController_1.ListaCampanhasInativasController().handle);
rotas.get('/campaigns/active', new ListaCampanhaController_1.ListaCampanhaController().handle);
rotas.post('/job', authenticator_1.Authenticator, new CreateJobController_1.CriaJobController().handle);
rotas.get('/jobs', new ListarJobsController_1.ListarJobsController().handle);
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
rotas.get('/maps', new ListarMapsController_1.ListaMapasController().handle);
rotas.post('/contact', authenticator_1.Authenticator, uploadAvatar.single('avatar'), new CriaContatoController_1.CriaContatoController().handle);
rotas.delete('/contact', authenticator_1.Authenticator, new DeletaContatoController_1.DeletarContatoController().handle);
rotas.get('/contacts', new ListaContatosController_1.ListaContatosController().handle);
rotas.get('/store/logged', authenticator_1.Authenticator, new LojaLogadaController_1.LojaLogadaController().handle);
rotas.post('/store', authenticator_1.Authenticator, new CriaLojaController_1.CriaLojaController().handle);
rotas.put('/store', authenticator_1.Authenticator, uploadAvatar.single('avatar'), new AtualizaLojaController_1.AtualizaLojaController().handle);
rotas.get('/stores', new ListaLojasController_1.ListaLojasController().handle);
rotas.get('/store', new BuscaLojaController_1.BuscaLojaController().handle);
