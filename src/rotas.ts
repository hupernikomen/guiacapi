import { Router, Request, Response } from 'express';
import multer from 'multer';
import 'dotenv/config';

import { Authenticator } from './middlewares/authenticator';

import { fileFilter, storageProdutos, storageAvatar, storagePortfolio, storageMarca, storageBanner } from './config/multer';

import { CreateAdminsController } from './controllers/admin/CreateAdminsController';

import { CreateBannerController } from './controllers/banner/CreateBannerController';
// import { GetUniqueBannerController } from './controllers/banner/GetUniqueBannerController';
// import { UpdateBannerController } from './controllers/banner/UpdateBannerController';

import { LojaLogadaController } from './controllers/store/LojaLogadaController';
import { AutenticaUsuarioController } from './controllers/user/AutenticaUsuarioController';
import { BuscaProfissionalController } from './controllers/person/BucaProfissionalController';
import { BuscaMapaController } from './controllers/map/BuscaMapaController';
import { BuscaLojaController } from './controllers/store/BuscaLojaController';
import { BuscaPostoController } from './controllers/fuelStation/BuscaPostoController';
import { DetalheProdutoController } from './controllers/product/DetalheProdutoController';
import { AtualizaUsuarioController } from './controllers/user/AtualizaUsuarioController';
import { AtualizaLojaController } from './controllers/store/AtualizaLojaController';
import { AtualizaCategoriaController } from './controllers/category/AtualizaCategoriaController';
import { AtualizaCampanhaController } from './controllers/campaign/AtualizaCampanhaController';
import { AtualizarProfissionalController } from './controllers/person/AtualizarProfissionalController';
import { AtualizaProdutoController } from './controllers/product/AtualizaProdutoController';
import { AtualizaPostoController } from './controllers/fuelStation/AtualizaPostoController';
import { CriaMapaController } from './controllers/map/CriaMapaController';
import { CriaLojaController } from './controllers/store/CriaLojaController';
import { CriaUsuarioController } from './controllers/user/CriaUsuarioController';
import { CriaRegiaoController } from './controllers/region/CriaRegiaoController';
import { CriaProfissaoController } from './controllers/profession/CriaProfissaoController';
import { CriaCategoriaController } from './controllers/category/CriaCategoriaController';
import { CriaContatoController } from './controllers/contact/CriaContatoController';
import { CriaProfissionalController } from './controllers/person/CriaProfissionalController';
import { CriaPostoController } from './controllers/fuelStation/CriaPostoController';
import { CriaCampanhaController } from './controllers/campaign/CriaCampanhaController';
import { CriaProdutoController } from './controllers/product/CriaProdutoController';
import { ListarRegioesController } from './controllers/region/ListarRegioesController';
import { ListarProdutosController } from './controllers/product/ListarProdutosController';
import { ListarProfissionalController } from './controllers/person/ListarProfissionalController';
import { ListaProfissaoController } from './controllers/profession/ListaProfissaoController';
import { ListaContatosController } from './controllers/contact/ListaContatosController';
import { ListaCategoriaController } from './controllers/category/ListaCategoriaController';
import { ListaCampanhasInativasController } from './controllers/campaign/ListaCampanhasInativasController';
import { ListaCampanhaController } from './controllers/campaign/ListaCampanhaController';
import { ListarPostosController } from './controllers/fuelStation/ListaPostosController';
import { ListaLojasController } from './controllers/store/ListaLojasController';
import { PorCategoriaProdutoController } from './controllers/product/PorCategoriaProdutoController';
import { PorProfissaoController } from './controllers/person/PorProfissaoController';
import { DeletaProdutoController } from './controllers/product/DeletaProdutoController';
import { AtualizaProfissaoController } from './controllers/profession/AtualizaProfissaoController';
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
import { DeletaMarcaController } from './controllers/brand/DeletaMarcaController';
import { CriaMarcaController } from './controllers/brand/CriaMarcaController';
import { ListaMarcasController } from './controllers/brand/ListaMarcasController';
import { CriaPaymentController } from './controllers/payment/CriarPagamentoController';
import { ListarPaymentController } from './controllers/payment/ListarPaymentController';
import { BuscaPaymentController } from './controllers/payment/BuscaPaymentController';
import { AtualizarPagamentoController } from './controllers/payment/AtualizarPagamentoController';
import { ListaLojasControllerAdmin } from './controllers/store/ListaLojasControllerAdmin';
import { ListarProfissionalControllerAdmin } from './controllers/person/ListarProfissionalControllerAdmin';
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
const uploadPortfolio = multer({
  fileFilter: fileFilter,
  storage: process.env.TYPE_STORAGE === 'S3' ? storagePortfolio.s3 : storagePortfolio.local,
  limits: {
    fileSize: 1 * 1024 * 1024 // MAX 1MB
  }
});

const uploadMarca = multer({
  fileFilter: fileFilter,
  storage: process.env.TYPE_STORAGE === 'S3' ? storageMarca.s3 : storageMarca.local,
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

rotas.get('/storesAdmin', new ListaLojasControllerAdmin().handle);
rotas.get('/personsAdmin', new ListarProfissionalControllerAdmin().handle);

// pages/admin/create/user
rotas.post('/owner', Authenticator, new CriaOwnerController().handle);

// pages/contactUs - OK
rotas.get('/owner', new BuscaOwnerController().handle);

// pages/admin/create/user
rotas.post('/user', Authenticator, new CriaUsuarioController().handle);

// account/person/dados
// account/users/manipulatePassword
rotas.put('/user', Authenticator, new AtualizaUsuarioController().handle);

// pages/admin/index - OK
rotas.get('/users', new ListarUsuariosController().handle);

// pages/admin/create/payment - OK
rotas.get('/user', new BuscaUsuarioController().handle);

// context/appcontext
rotas.post('/login', new AutenticaUsuarioController().handle);

// pages/admin/create/banner
rotas.post('/banner', Authenticator, uploadBanner.single('image'), new CreateBannerController().handle);

// pages/feed - OK
// pages/productByCategory - OK
// pages/detailProduct - OK
rotas.get('/banners', new ListarBannersController().handle);

rotas.delete('/banner', Authenticator, new DeleteBannerController().handle);

// rotas.get('/banner', new BuscaBannerController().handle);
// rotas.put('/banner', Authenticator, uploadBanner.single('image'), new AtualizarBannerController().handle);

// pages/admin/list/banner - OK
rotas.get('/bannersAdmin', Authenticator, new ListarAdminController().handle);

rotas.post('/category', Authenticator, new CriaCategoriaController().handle);
rotas.delete('/category', Authenticator, new DeletaCategoriaController().handle);
rotas.put('/category', Authenticator, new AtualizaCategoriaController().handle);

// account/store/addproduct
// pages/admin/create/banner
rotas.get('/categories', new ListaCategoriaController().handle);

rotas.post('/subcategory', Authenticator, new CriaSubCategoriaController().handle);

// account/store/addproduct
rotas.get('/subcategories', new ListaSubCategoriaController().handle);

rotas.get('/subcategory', new BuscaSubcategoriaController().handle);

// pages/admin/create/region
rotas.post('/region', Authenticator, new CriaRegiaoController().handle);

// pages/filters
rotas.get('/regions', new ListarRegioesController().handle);

// pages/admin/create/user
rotas.get('/regionsAdmin', new ListarRegioesControllerAdmin().handle);

// context/appcontext
rotas.get('/region', new BuscaRegiaoController().handle);
rotas.delete('/region', Authenticator, new DeletaRegiaoController().handle);

// pages/admin/create/payment
rotas.post('/payment', Authenticator, new CriaPaymentController().handle);

rotas.get('/payments', new ListarPaymentController().handle);
rotas.get('/payment', new BuscaPaymentController().handle);

// pages/admin/create/payment
rotas.put('/payment', Authenticator, new AtualizarPagamentoController().handle);

// pages/admin/create/paymentBanner
rotas.post('/paymentBanner', Authenticator, new CriaPaymentBannerController().handle);

// pages/admin/list/banner
rotas.get('/paymentBanners', new ListarPaymentBannerController().handle);

// pages/admin/create/paymentBanner
rotas.get('/paymentBanner', new BuscaPaymentBannerController().handle);

// pages/admin/create/paymentBanner
rotas.put('/paymentBanner', Authenticator, new AtualizarPagamentoBannerController().handle);

rotas.post('/campaign', Authenticator, new CriaCampanhaController().handle);
rotas.put('/campaign', Authenticator, new AtualizaCampanhaController().handle);
rotas.get('/campaigns', new ListaCampanhasInativasController().handle);
rotas.get('/campaigns/active', new ListaCampanhaController().handle);
rotas.post('/posto', new CriaPostoController().handle);
rotas.put('/posto', uploadAvatar.single('avatar'), new AtualizaPostoController().handle);
rotas.get('/posto', new BuscaPostoController().handle);
rotas.get('/postos', new ListarPostosController().handle);

rotas.post('/job', Authenticator, new CriaJobController().handle);
rotas.get('/jobs', new ListarJobsController().handle);

// account/store/manipulateproduct
rotas.put('/product', Authenticator, new AtualizaProdutoController().handle);

// account/store/manipulateproduct
rotas.delete('/product', Authenticator, new DeletaProdutoController().handle);

// account/store/addproduct
rotas.post('/product', Authenticator, uploadProdutos.array('files', 5), new CriaProdutoController().handle);

// pages/feed
// pages/search
rotas.get('/products', new ListarProdutosController().handle);

// pages/productbycategory
rotas.get('/products/category', new PorCategoriaProdutoController().handle);

// pages/detailProduct
// pages/productbysubcategory
rotas.get('/products/subcategory', new PorSubcategoriaProdutoController().handle);

// account/store/manipulateproduct
// pages/detailProduct
rotas.get('/detail/product', new DetalheProdutoController().handle);

// pages/admin/create/location
// pages/admin/create/user
rotas.post('/map', Authenticator, new CriaMapaController().handle);

// pages/admin/create/location
rotas.put('/map', Authenticator, new AtualizaMapaController().handle);

// pages/admin/create/location
// pages/map
rotas.get('/map', new BuscaMapaController().handle);

// pages/whois
rotas.get('/maps', new ListaMapasController().handle);

// account/users/contacts/create
rotas.post('/contact', Authenticator, uploadAvatar.single('avatar'), new CriaContatoController().handle);

// account/users/contacts/listcontacts
rotas.delete('/contact', Authenticator, new DeletarContatoController().handle);

// account/users/contacts/listcontacts
// pages/contactUs
rotas.get('/contacts', new ListaContatosController().handle);

// account/store/home
// account/store/settings
// account/store/addproduct
// account/store/profilestore
rotas.get('/store/logged', Authenticator, new LojaLogadaController().handle);

// pages/admin/create/user
rotas.post('/store', Authenticator, new CriaLojaController().handle);

// account/store/profilestore
// account/store/settings
// pages/admin/create/user
rotas.put('/store', Authenticator, uploadAvatar.single('avatar'), new AtualizaLojaController().handle);

// pages/admin/create/banner
// pages/liststores
rotas.get('/stores', new ListaLojasController().handle);

// pages/store
rotas.get('/store', new BuscaLojaController().handle);

rotas.post('/brand', Authenticator, uploadMarca.single('avatar'), new CriaMarcaController().handle);
rotas.delete('/brand', Authenticator, new DeletaMarcaController().handle);

// pages/feed
rotas.get('/brands', new ListaMarcasController().handle);

// pages/admin/create/user
rotas.post('/person', Authenticator, new CriaProfissionalController().handle);

// account/person/dados
// pages/admin/create/user
rotas.put('/person', Authenticator, uploadAvatar.single('avatar'), new AtualizarProfissionalController().handle);

// account/person/dados
rotas.get('/person', new BuscaProfissionalController().handle);

// pages/feed
// pages/listPersons
// pages/search
rotas.get('/persons', new ListarProfissionalController().handle);

// pages/admin/create/profession
rotas.post('/profession', Authenticator, new CriaProfissaoController().handle);

rotas.put('/profession', Authenticator, new AtualizaProfissaoController().handle);

// pages/admin/create/user
rotas.get('/professions', new ListaProfissaoController().handle);
rotas.get('/profession/persons', new PorProfissaoController().handle);

export { rotas };
