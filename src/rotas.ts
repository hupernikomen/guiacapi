import { Router, Request, Response } from 'express';
import multer from 'multer'
import 'dotenv/config';

import { Authenticator } from './middlewares/authenticator';

import { fileFilter, storageProdutos, storageAvatar, storagePortfolio, storageMarca,storageBanner } from './config/multer'

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
import { CriaBannerController } from './controllers/banner/CriaBannerController';
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
import { CriaPlanoController } from './controllers/price/CriaPlanoController';
import { ListarPlanosController } from './controllers/price/ListarPlanosController';
import { CriaSubCategoriaController } from './controllers/subcategory/CriaSubCategoriaController';
import { ListaSubCategoriaController } from './controllers/subcategory/ListaSubCategoriasController';
import { BuscaSubcategoriaController } from './controllers/subcategory/BuscaSubcategoriaController';
import { PorSubcategoriaProdutoController } from './controllers/product/PorSubcategoriaProdutoController';
import { ListarUsuariosController } from './controllers/user/ListarUsuariosController';
import { BuscaUsuarioController } from './controllers/user/BuscarUsuarioController';
import { AtualizaMapaController } from './controllers/map/AtualizaMapaController';
import { CriaPortfolioControlller } from './controllers/portfolio/CriaPortfolioController';
import { ListarPortfolioController } from './controllers/portfolio/ListaPortfolioController';
import { DeletaPortfolioController } from './controllers/portfolio/DeletaPortfolioController';
import { DeletaMarcaController } from './controllers/brand/DeletaMarcaController';
import { CriaMarcaController } from './controllers/brand/CriaMarcaController';
import { ListaMarcasController } from './controllers/brand/ListaMarcasController';
import { CriaAdminController } from './controllers/admin/CriaAdminController';
import { CriaPaymentController } from './controllers/payment/CriarPagamentoController';
import { ListarPaymentController } from './controllers/payment/ListarPaymentController';


const uploadProdutos = multer({
  fileFilter: fileFilter,
  storage: process.env.TYPE_STORAGE === 'S3' ? storageProdutos.s3 : storageProdutos.local,
  limits: {
    fileSize: 1 * 1024 * 1024, // MAX 1MB
  }
})

const uploadAvatar = multer({
  fileFilter: fileFilter,
  storage: process.env.TYPE_STORAGE === 'S3' ? storageAvatar.s3 : storageAvatar.local,
  limits: {
    fileSize: 1 * 1024 * 1024, // MAX 1MB
  }
})
const uploadPortfolio = multer({
  fileFilter: fileFilter,
  storage: process.env.TYPE_STORAGE === 'S3' ? storagePortfolio.s3 : storagePortfolio.local,
  limits: {
    fileSize: 1 * 1024 * 1024, // MAX 1MB
  }
})

const uploadMarca = multer({
  fileFilter: fileFilter,
  storage: process.env.TYPE_STORAGE === 'S3' ? storageMarca.s3 : storageMarca.local,
  limits: {
    fileSize: 1 * 1024 * 1024, // MAX 1MB
  }
})

const uploadBanner = multer({
  fileFilter: fileFilter,
  storage: process.env.TYPE_STORAGE === 'S3' ? storageBanner.s3 : storageBanner.local,
  limits: {
    fileSize: 1 * 1024 * 1024, // MAX 1MB
  }
})


const rotas = Router();

rotas.post('/admin',Authenticator, new CriaAdminController().handle)

rotas.post('/user', Authenticator, new CriaUsuarioController().handle)
rotas.put('/user', Authenticator, new AtualizaUsuarioController().handle)
rotas.get('/users', Authenticator, new ListarUsuariosController().handle)
rotas.get('/user', new BuscaUsuarioController().handle)
rotas.post('/login', new AutenticaUsuarioController().handle)

rotas.post('/banner', Authenticator, uploadBanner.single('image'), new CriaBannerController().handle)
rotas.get('/banners', new ListarBannersController().handle)

rotas.post('/category', Authenticator, new CriaCategoriaController().handle)
rotas.delete('/category', Authenticator, new DeletaCategoriaController().handle)
rotas.put('/category', Authenticator, new AtualizaCategoriaController().handle)
rotas.get('/categories', new ListaCategoriaController().handle)

rotas.post('/subcategory', Authenticator, new CriaSubCategoriaController().handle)
rotas.get('/subcategories', new ListaSubCategoriaController().handle)
rotas.get('/subcategory', new BuscaSubcategoriaController().handle)

rotas.post('/region', Authenticator, new CriaRegiaoController().handle)
rotas.get('/regions', new ListarRegioesController().handle)

rotas.post('/payment', Authenticator, new CriaPaymentController().handle)
rotas.get('/payment', new ListarPaymentController().handle)


rotas.post('/campaign', Authenticator, new CriaCampanhaController().handle)
rotas.put('/campaign', Authenticator, new AtualizaCampanhaController().handle)
rotas.get('/campaigns', new ListaCampanhasInativasController().handle)
rotas.get('/campaigns/active', new ListaCampanhaController().handle)

rotas.post('/posto', new CriaPostoController().handle)
rotas.put('/posto', uploadAvatar.single('avatar'), new AtualizaPostoController().handle)
rotas.get('/posto', new BuscaPostoController().handle)
rotas.get('/postos', new ListarPostosController().handle)

rotas.put('/product', Authenticator, new AtualizaProdutoController().handle)
rotas.delete('/product', Authenticator, new DeletaProdutoController().handle)
rotas.post('/product', Authenticator, uploadProdutos.array('files', 5), new CriaProdutoController().handle)
rotas.get('/products', new ListarProdutosController().handle)
rotas.get('/products/category', new PorCategoriaProdutoController().handle)
rotas.get('/products/subcategory', new PorSubcategoriaProdutoController().handle)
rotas.get('/detail/product', new DetalheProdutoController().handle)

rotas.post('/map', Authenticator, new CriaMapaController().handle)
rotas.put('/map', Authenticator, new AtualizaMapaController().handle)
rotas.get('/map', new BuscaMapaController().handle)

rotas.post('/contact', Authenticator, uploadAvatar.single('avatar'), new CriaContatoController().handle)
rotas.delete('/contact', Authenticator, new DeletarContatoController().handle)
rotas.get('/contacts', new ListaContatosController().handle)

rotas.get('/store/logged', Authenticator, new LojaLogadaController().handle)
rotas.post('/store', Authenticator, new CriaLojaController().handle)
rotas.put('/store', Authenticator, uploadAvatar.single('avatar'), new AtualizaLojaController().handle)
rotas.get('/stores', new ListaLojasController().handle)
rotas.get('/store', new BuscaLojaController().handle)

rotas.post('/brand', Authenticator, uploadMarca.single('avatar'), new CriaMarcaController().handle)
rotas.delete('/brand', Authenticator, new DeletaMarcaController().handle)
rotas.get('/brands', new ListaMarcasController().handle)

rotas.post('/person', Authenticator, new CriaProfissionalController().handle)
rotas.post('/profession', Authenticator,new CriaProfissaoController().handle)
rotas.put('/profession', Authenticator, new AtualizaProfissaoController().handle)
rotas.put('/person', Authenticator, uploadAvatar.single('avatar'), new AtualizarProfissionalController().handle)
rotas.get('/person', new BuscaProfissionalController().handle)
rotas.get('/professions', new ListaProfissaoController().handle)
rotas.get('/persons', new ListarProfissionalController().handle)
rotas.get('/profession/persons', new PorProfissaoController().handle)

rotas.post('/portfolio', Authenticator, uploadPortfolio.single('image'), new CriaPortfolioControlller().handle)
rotas.delete('/portfolio', Authenticator, new DeletaPortfolioController().handle)
rotas.get('/portfolios', new ListarPortfolioController().handle)

rotas.post('/plano', Authenticator, new CriaPlanoController().handle)
rotas.get('/planos', new ListarPlanosController().handle)



export { rotas };