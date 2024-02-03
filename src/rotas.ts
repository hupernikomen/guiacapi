import { Router, Request, Response } from 'express';
import multer from 'multer';
import 'dotenv/config';

import { Authenticator } from './middlewares/authenticator';

import { fileFilter, storageProdutos, storageAvatar, storageBanner } from './config/multer';

import { CreateAdminsController } from './controllers/admin/CreateAdminsController';
import { CreateBannerController } from './controllers/banner/CreateBannerController';
import { CreateServiceController } from './controllers/service/CreateServiceController';
import { ListServicesController } from './controllers/service/ListServicesController';
import { CreateCategoryServiceController } from './controllers/categoryService/CreateCategoryServiceController';
import { PutServiceController } from './controllers/service/PutServiceController';
import { ListCategoryServicesController } from './controllers/categoryService/ListCategoryServicesController';
import { GetUniqueServiceController } from './controllers/service/GetUniqueServiceController';
import { ListCategoryControllerAdm } from './controllers/category/ListCategoryControllerAdm';
import { LojaLogadaController } from './controllers/store/LojaLogadaController';
import { AutenticaUsuarioController } from './controllers/user/AutenticaUsuarioController';
import { BuscaMapaController } from './controllers/map/BuscaMapaController';
import { BuscaLojaController } from './controllers/store/BuscaLojaController';
import { DetalheProdutoController } from './controllers/product/DetalheProdutoController';
import { AtualizaUsuarioController } from './controllers/user/AtualizaUsuarioController';
import { AtualizaLojaController } from './controllers/store/AtualizaLojaController';
import { AtualizaCategoriaController } from './controllers/category/AtualizaCategoriaController';
import { AtualizaCampanhaController } from './controllers/campaign/AtualizaCampanhaController';
import { AtualizaProdutoController } from './controllers/product/AtualizaProdutoController';
import { CriaMapaController } from './controllers/map/CriaMapaController';
import { CriaLojaController } from './controllers/store/CriaLojaController';
import { CriaUsuarioController } from './controllers/user/CriaUsuarioController';
import { CriaRegiaoController } from './controllers/region/CriaRegiaoController';
import { CriaCategoriaController } from './controllers/category/CriaCategoriaController';
import { CriaContatoController } from './controllers/contact/CriaContatoController';
import { CriaCampanhaController } from './controllers/campaign/CriaCampanhaController';
import { CriaProdutoController } from './controllers/product/CriaProdutoController';
import { ListarRegioesController } from './controllers/region/ListarRegioesController';
import { ListarProdutosController } from './controllers/product/ListarProdutosController';
import { ListaContatosController } from './controllers/contact/ListaContatosController';
import { ListaCategoriaController } from './controllers/category/ListaCategoriaController';
import { ListaCampanhasInativasController } from './controllers/campaign/ListaCampanhasInativasController';
import { ListaCampanhaController } from './controllers/campaign/ListaCampanhaController';
import { ListaLojasController } from './controllers/store/ListaLojasController';
import { PorCategoriaProdutoController } from './controllers/product/PorCategoriaProdutoController';
import { DeletaProdutoController } from './controllers/product/DeletaProdutoController';
import { DeletaCategoriaController } from './controllers/category/DeletaCategoriaController';
import { ListarBannersController } from './controllers/banner/ListarBannersController';
import { DeletarContatoController } from './controllers/contact/DeletaContatoController';
import { CriaSubCategoriaController } from './controllers/subcategory/CriaSubCategoriaController';
import { ListaSubCategoriaController } from './controllers/subcategory/ListaSubCategoriasController';
import { BuscaSubcategoriaController } from './controllers/subcategory/BuscaSubcategoriaController';
import { PorSubcategoriaProdutoController } from './controllers/product/PorSubcategoriaProdutoController';
import { ListarUsuariosController } from './controllers/user/ListarUsuariosController';
import { BuscaUsuarioController } from './controllers/user/BuscarUsuarioController';
import { AtualizaMapaController } from './controllers/map/AtualizaMapaController';
import { CriaPaymentController } from './controllers/payment/CriarPagamentoController';
import { ListarPaymentController } from './controllers/payment/ListarPaymentController';
import { BuscaPaymentController } from './controllers/payment/BuscaPaymentController';
import { AtualizarPagamentoController } from './controllers/payment/AtualizarPagamentoController';
import { ListaLojasControllerAdmin } from './controllers/store/ListaLojasControllerAdmin';
import { AtualizarPagamentoBannerController } from './controllers/paymentBanner/AtualizarPagamentoController';
import { BuscaPaymentBannerController } from './controllers/paymentBanner/BuscaPaymentController';
import { CriaPaymentBannerController } from './controllers/paymentBanner/CriarPagamentoController';
import { ListarPaymentBannerController } from './controllers/paymentBanner/ListarPaymentController';
import { CriaOwnerController } from './controllers/owner/CriarOwnerController';
import { BuscaRegiaoController } from './controllers/region/BuscaRegiaoController';
import { DeletaRegiaoController } from './controllers/region/DeletaRegiaoController';
import { ListaMapasController } from './controllers/map/ListarMapsController';
import { ListarAdminController } from './controllers/banner/ListarAdminController';
import { ListarRegioesControllerAdmin } from './controllers/region/ListarRegioesControllerAdmin';
import { BuscaOwnerController } from './controllers/owner/BuscarOwnerController';
import { DeleteBannerController } from './controllers/banner/DeleteBannerController';
import { CriaJobController } from './controllers/jobs/CreateJobController';
import { ListarJobsController } from './controllers/jobs/ListarJobsController';
import { CreateCategoryFoodController } from './controllers/categoryFood/CreateCategoryFoodController';
import { ListCategoryFoodController } from './controllers/categoryFood/ListCategoryFoodController';
import { CreateFoodController } from './controllers/food/CreateFoodController';
import { UpdateFoodController } from './controllers/food/UpdateFoodController';
import { CreateMenuController } from './controllers/menu/CreateMenuController';
import { ListMenuController } from './controllers/menu/ListMenuController';
import { GetFoodController } from './controllers/food/GetFoodController';
import { GetMenuController } from './controllers/menu/GetMenuController';
import { ListFoodController } from './controllers/food/ListFoodController';

const uploadProdutos = multer({
  fileFilter: fileFilter,
  storage: process.env.TYPE_STORAGE === 'S3' ? storageProdutos.s3 : storageProdutos.local,
  limits: {
    fileSize: 1 * 1024 * 1024 // MAX 1MB
  }
});

const uploadAvatar = multer({
  fileFilter: fileFilter,
  storage: process.env.TYPE_STORAGE === 'S3' ? storageAvatar.s3 : storageAvatar.local,
  limits: {
    fileSize: 1 * 1024 * 1024 // MAX 1MB
  }
});

const uploadBanner = multer({
  fileFilter: fileFilter,
  storage: process.env.TYPE_STORAGE === 'S3' ? storageBanner.s3 : storageBanner.local,
  limits: {
    fileSize: 1 * 1024 * 1024 // MAX 1MB
  }
});

const rotas = Router();
rotas.post('/admins', new CreateAdminsController().handle);
rotas.post('/login', new AutenticaUsuarioController().handle);

rotas.get('/storesAdmin', new ListaLojasControllerAdmin().handle);

rotas.post('/service', Authenticator, new CreateServiceController().handle);
rotas.get('/services', new ListServicesController().handle);
rotas.get('/service', new GetUniqueServiceController().handle);
rotas.put('/service', Authenticator, uploadAvatar.single('avatar'), new PutServiceController().handle);

rotas.post('/categoryService', Authenticator, new CreateCategoryServiceController().handle);
rotas.get('/categoryServices', new ListCategoryServicesController().handle);
rotas.get('/categoriesAll', new ListCategoryControllerAdm().handle);

rotas.post('/categoryFood', Authenticator, new CreateCategoryFoodController().handle);
rotas.get('/categoriesFood', new ListCategoryFoodController().handle);

rotas.post('/food', Authenticator, new CreateFoodController().handle);
rotas.get('/foodsAll', new ListFoodController().handle);
rotas.get('/food', new GetFoodController().handle);
rotas.put('/food', Authenticator, uploadAvatar.single('avatar'), new UpdateFoodController().handle);

rotas.post('/menu', Authenticator, uploadProdutos.single('image'), new CreateMenuController().handle);
rotas.get('/menuAll', new ListMenuController().handle);
rotas.get('/menu', new GetMenuController().handle);

rotas.post('/owner', Authenticator, new CriaOwnerController().handle);
rotas.get('/owner', new BuscaOwnerController().handle);

rotas.post('/user', Authenticator, new CriaUsuarioController().handle);
rotas.put('/user', Authenticator, new AtualizaUsuarioController().handle);
rotas.get('/users', new ListarUsuariosController().handle);
rotas.get('/user', new BuscaUsuarioController().handle);

rotas.post('/banner', Authenticator, uploadBanner.single('image'), new CreateBannerController().handle);
rotas.get('/banners', new ListarBannersController().handle);
rotas.delete('/banner', Authenticator, new DeleteBannerController().handle);
rotas.get('/bannersAdmin', Authenticator, new ListarAdminController().handle);

rotas.post('/category', Authenticator, new CriaCategoriaController().handle);
rotas.delete('/category', Authenticator, new DeletaCategoriaController().handle);
rotas.put('/category', Authenticator, new AtualizaCategoriaController().handle);
rotas.get('/categories', new ListaCategoriaController().handle);

rotas.post('/subcategory', Authenticator, new CriaSubCategoriaController().handle);
rotas.get('/subcategories', new ListaSubCategoriaController().handle);
rotas.get('/subcategory', new BuscaSubcategoriaController().handle);

rotas.post('/region', Authenticator, new CriaRegiaoController().handle);
rotas.get('/regions', new ListarRegioesController().handle);
rotas.get('/regionsAdmin', new ListarRegioesControllerAdmin().handle);
rotas.get('/region', new BuscaRegiaoController().handle);
rotas.delete('/region', Authenticator, new DeletaRegiaoController().handle);

rotas.post('/payment', Authenticator, new CriaPaymentController().handle);
rotas.get('/payments', new ListarPaymentController().handle);
rotas.get('/payment', new BuscaPaymentController().handle);
rotas.put('/payment', Authenticator, new AtualizarPagamentoController().handle);

rotas.post('/paymentBanner', Authenticator, new CriaPaymentBannerController().handle);
rotas.get('/paymentBanners', new ListarPaymentBannerController().handle);
rotas.get('/paymentBanner', new BuscaPaymentBannerController().handle);
rotas.put('/paymentBanner', Authenticator, new AtualizarPagamentoBannerController().handle);

rotas.post('/campaign', Authenticator, new CriaCampanhaController().handle);
rotas.put('/campaign', Authenticator, new AtualizaCampanhaController().handle);
rotas.get('/campaigns', new ListaCampanhasInativasController().handle);
rotas.get('/campaigns/active', new ListaCampanhaController().handle);

rotas.post('/job', Authenticator, new CriaJobController().handle);
rotas.get('/jobs', new ListarJobsController().handle);

rotas.put('/product', Authenticator, new AtualizaProdutoController().handle);
rotas.delete('/product', Authenticator, new DeletaProdutoController().handle);
rotas.post('/product', Authenticator, uploadProdutos.array('files', 5), new CriaProdutoController().handle);
rotas.get('/products', new ListarProdutosController().handle);
rotas.get('/products/category', new PorCategoriaProdutoController().handle);
rotas.get('/products/subcategory', new PorSubcategoriaProdutoController().handle);
rotas.get('/detail/product', new DetalheProdutoController().handle);

rotas.post('/map', Authenticator, new CriaMapaController().handle);
rotas.put('/map', Authenticator, new AtualizaMapaController().handle);
rotas.get('/map', new BuscaMapaController().handle);
rotas.get('/maps', new ListaMapasController().handle);

rotas.post('/contact', Authenticator, uploadAvatar.single('avatar'), new CriaContatoController().handle);
rotas.delete('/contact', Authenticator, new DeletarContatoController().handle);
rotas.get('/contacts', new ListaContatosController().handle);

rotas.get('/store/logged', Authenticator, new LojaLogadaController().handle);
rotas.post('/store', Authenticator, new CriaLojaController().handle);
rotas.put('/store', Authenticator, uploadAvatar.single('avatar'), new AtualizaLojaController().handle);
rotas.get('/stores', new ListaLojasController().handle);
rotas.get('/store', new BuscaLojaController().handle);

export { rotas };
