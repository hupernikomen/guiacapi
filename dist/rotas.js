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
const LojaLogadaController_1 = require("./controllers/loja/LojaLogadaController");
const AutenticaUsuarioController_1 = require("./controllers/usuario/AutenticaUsuarioController");
const BucaProfissionalController_1 = require("./controllers/profissional/BucaProfissionalController");
const BuscaMapaController_1 = require("./controllers/mapa/BuscaMapaController");
const BuscaLojaController_1 = require("./controllers/loja/BuscaLojaController");
const BuscaPostoController_1 = require("./controllers/posto/BuscaPostoController");
const DetalheProdutoController_1 = require("./controllers/produto/DetalheProdutoController");
const AtualizaUsuarioController_1 = require("./controllers/usuario/AtualizaUsuarioController");
const AtualizaLojaController_1 = require("./controllers/loja/AtualizaLojaController");
const AtualizaCategoriaController_1 = require("./controllers/categoria/AtualizaCategoriaController");
const AtualizaCampanhaController_1 = require("./controllers/campanha/AtualizaCampanhaController");
const AtualizarProfissionalController_1 = require("./controllers/profissional/AtualizarProfissionalController");
const AtualizaProdutoController_1 = require("./controllers/produto/AtualizaProdutoController");
const AtualizaPostoController_1 = require("./controllers/posto/AtualizaPostoController");
const CriaMapaController_1 = require("./controllers/mapa/CriaMapaController");
const CriaLojaController_1 = require("./controllers/loja/CriaLojaController");
const CriaBannerController_1 = require("./controllers/banner/CriaBannerController");
const CriaUsuarioController_1 = require("./controllers/usuario/CriaUsuarioController");
const CriaRegiaoController_1 = require("./controllers/regiao/CriaRegiaoController");
const CriaProfissaoController_1 = require("./controllers/profissao/CriaProfissaoController");
const CriaCategoriaController_1 = require("./controllers/categoria/CriaCategoriaController");
const CriaContatoController_1 = require("./controllers/contato/CriaContatoController");
const CriaProfissionalController_1 = require("./controllers/profissional/CriaProfissionalController");
const CriaPostoController_1 = require("./controllers/posto/CriaPostoController");
const CriaCampanhaController_1 = require("./controllers/campanha/CriaCampanhaController");
const CriaProdutoController_1 = require("./controllers/produto/CriaProdutoController");
const ListarRegioesController_1 = require("./controllers/regiao/ListarRegioesController");
const ListarProdutosController_1 = require("./controllers/produto/ListarProdutosController");
const ListarProfissionalController_1 = require("./controllers/profissional/ListarProfissionalController");
const ListaProfissaoController_1 = require("./controllers/profissao/ListaProfissaoController");
const ListaContatosController_1 = require("./controllers/contato/ListaContatosController");
const ListaCategoriaController_1 = require("./controllers/categoria/ListaCategoriaController");
const ListaCampanhasInativasController_1 = require("./controllers/campanha/ListaCampanhasInativasController");
const ListaCampanhaController_1 = require("./controllers/campanha/ListaCampanhaController");
const ListaPostosController_1 = require("./controllers/posto/ListaPostosController");
const ListaLojasController_1 = require("./controllers/loja/ListaLojasController");
const PorCategoriaProdutoController_1 = require("./controllers/produto/PorCategoriaProdutoController");
const PorProfissaoController_1 = require("./controllers/profissional/PorProfissaoController");
const DeletaProdutoController_1 = require("./controllers/produto/DeletaProdutoController");
const AtualizaProfissaoController_1 = require("./controllers/profissao/AtualizaProfissaoController");
const DeletaCategoriaController_1 = require("./controllers/categoria/DeletaCategoriaController");
const ListarBannersController_1 = require("./controllers/banner/ListarBannersController");
const DeletaContatoController_1 = require("./controllers/contato/DeletaContatoController");
const CriaPlanoController_1 = require("./controllers/plano/CriaPlanoController");
const ListarPlanosController_1 = require("./controllers/plano/ListarPlanosController");
const CriaSubCategoriaController_1 = require("./controllers/subcategoria/CriaSubCategoriaController");
const ListaSubCategoriasController_1 = require("./controllers/subcategoria/ListaSubCategoriasController");
const BuscaSubcategoriaController_1 = require("./controllers/subcategoria/BuscaSubcategoriaController");
const PorSubcategoriaProdutoController_1 = require("./controllers/produto/PorSubcategoriaProdutoController");
const ListarUsuariosController_1 = require("./controllers/usuario/ListarUsuariosController");
const BuscarUsuarioController_1 = require("./controllers/usuario/BuscarUsuarioController");
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
const rotas = (0, express_1.Router)();
exports.rotas = rotas;
rotas.post('/usuario', new CriaUsuarioController_1.CriaUsuarioController().handle);
rotas.put('/usuario', new AtualizaUsuarioController_1.AtualizaUsuarioController().handle);
rotas.get('/usuarios', new ListarUsuariosController_1.ListarUsuariosController().handle);
rotas.get('/usuario', new BuscarUsuarioController_1.BuscaUsuarioController().handle);
rotas.post('/login', new AutenticaUsuarioController_1.AutenticaUsuarioController().handle);
rotas.get('/banners', new ListarBannersController_1.ListarBannersController().handle);
rotas.post('/banner', uploadProdutos.single('imagem'), new CriaBannerController_1.CriaBannerController().handle);
rotas.get('/categorias', new ListaCategoriaController_1.ListaCategoriaController().handle);
rotas.post('/categoria', new CriaCategoriaController_1.CriaCategoriaController().handle);
rotas.delete('/categoria', new DeletaCategoriaController_1.DeletaCategoriaController().handle);
rotas.put('/categoria', new AtualizaCategoriaController_1.AtualizaCategoriaController().handle);
rotas.post('/subcategoria', new CriaSubCategoriaController_1.CriaSubCategoriaController().handle);
rotas.get('/subcategorias', new ListaSubCategoriasController_1.ListaSubCategoriaController().handle);
rotas.get('/subcategoria', new BuscaSubcategoriaController_1.BuscaSubcategoriaController().handle);
rotas.post('/regiao', new CriaRegiaoController_1.CriaRegiaoController().handle);
rotas.get('/regioes', new ListarRegioesController_1.ListarRegioesController().handle);
rotas.get('/campanhas/ativas', new ListaCampanhaController_1.ListaCampanhaController().handle);
rotas.post('/campanha', new CriaCampanhaController_1.CriaCampanhaController().handle);
rotas.put('/campanha', new AtualizaCampanhaController_1.AtualizaCampanhaController().handle);
rotas.get('/campanhas', new ListaCampanhasInativasController_1.ListaCampanhasInativasController().handle);
rotas.post('/posto', new CriaPostoController_1.CriaPostoController().handle);
rotas.put('/posto', uploadAvatar.single('avatar'), new AtualizaPostoController_1.AtualizaPostoController().handle);
rotas.get('/posto', new BuscaPostoController_1.BuscaPostoController().handle);
rotas.get('/postos', new ListaPostosController_1.ListarPostosController().handle);
rotas.put('/produto', authenticator_1.Authenticator, new AtualizaProdutoController_1.AtualizaProdutoController().handle);
rotas.post('/produto', authenticator_1.Authenticator, uploadProdutos.array('files', 5), new CriaProdutoController_1.CriaProdutoController().handle);
rotas.get('/produtos', new ListarProdutosController_1.ListarProdutosController().handle);
rotas.get('/produtos/categoria', new PorCategoriaProdutoController_1.PorCategoriaProdutoController().handle);
rotas.get('/produtos/subcategoria', new PorSubcategoriaProdutoController_1.PorSubcategoriaProdutoController().handle);
rotas.delete('/produto', authenticator_1.Authenticator, new DeletaProdutoController_1.DeletaProdutoController().handle);
rotas.get('/detalhe/produto', new DetalheProdutoController_1.DetalheProdutoController().handle);
rotas.post('/mapa', new CriaMapaController_1.CriaMapaController().handle);
rotas.get('/mapa', new BuscaMapaController_1.BuscaMapaController().handle);
rotas.post('/contato', authenticator_1.Authenticator, uploadAvatar.single('avatar'), new CriaContatoController_1.CriaContatoController().handle);
rotas.get('/contatos', new ListaContatosController_1.ListaContatosController().handle);
rotas.delete('/contato', new DeletaContatoController_1.DeletarContatoController().handle);
rotas.get('/loja/logado', authenticator_1.Authenticator, new LojaLogadaController_1.LojaLogadaController().handle);
rotas.put('/loja', authenticator_1.Authenticator, uploadAvatar.single('avatar'), new AtualizaLojaController_1.AtualizaLojaController().handle);
rotas.get('/lojas', new ListaLojasController_1.ListaLojasController().handle);
rotas.get('/loja', new BuscaLojaController_1.BuscaLojaController().handle);
rotas.post('/loja', new CriaLojaController_1.CriaLojaController().handle);
rotas.post('/profissional', new CriaProfissionalController_1.CriaProfissionalController().handle);
rotas.post('/profissao', new CriaProfissaoController_1.CriaProfissaoController().handle);
rotas.get('/profissoes', new ListaProfissaoController_1.ListaProfissaoController().handle);
rotas.put('/profissao', new AtualizaProfissaoController_1.AtualizaProfissaoController().handle);
rotas.put('/profissional', authenticator_1.Authenticator, uploadAvatar.single('avatar'), new AtualizarProfissionalController_1.AtualizarProfissionalController().handle);
rotas.get('/profissional', new BucaProfissionalController_1.BuscaProfissionalController().handle);
rotas.get('/profissionais', new ListarProfissionalController_1.ListarProfissionalController().handle);
rotas.get('/profissao/profissionais', new PorProfissaoController_1.PorProfissaoController().handle);
rotas.post('/plano', new CriaPlanoController_1.CriaPlanoController().handle);
rotas.get('/planos', new ListarPlanosController_1.ListarPlanosController().handle);
