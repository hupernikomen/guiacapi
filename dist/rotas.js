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
const CriaLjController_1 = require("./controllers/loja/CriaLjController");
const AutenticadaLjController_1 = require("./controllers/loja/AutenticadaLjController");
const AtualizaLjController_1 = require("./controllers/loja/AtualizaLjController");
const ListaLjController_1 = require("./controllers/loja/ListaLjController");
const LojaController_1 = require("./controllers/loja/LojaController");
const EsqueciSenhaController_1 = require("./controllers/loja/EsqueciSenhaController");
const ListaCtController_1 = require("./controllers/categoria/ListaCtController");
const CriaCtController_1 = require("./controllers/categoria/CriaCtController");
const DeletaCtController_1 = require("./controllers/categoria/DeletaCtController");
const AtualizaCtController_1 = require("./controllers/categoria/AtualizaCtController");
const CriaPdtController_1 = require("./controllers/produto/CriaPdtController");
const AtualizaPdtController_1 = require("./controllers/produto/AtualizaPdtController");
const DetalheProdutoController_1 = require("./controllers/produto/DetalheProdutoController");
const DeletaPdtController_1 = require("./controllers/produto/DeletaPdtController");
const FeedProdutosController_1 = require("./controllers/produto/FeedProdutosController");
const PorCategoriaPdtController_1 = require("./controllers/produto/PorCategoriaPdtController");
const CriaRgController_1 = require("./controllers/regiao/CriaRgController");
const ListaRgController_1 = require("./controllers/regiao/ListaRgController");
const CriaVddController_1 = require("./controllers/vendedor/CriaVddController");
const ListaVddController_1 = require("./controllers/vendedor/ListaVddController");
const DeletaVddController_1 = require("./controllers/vendedor/DeletaVddController");
const AtualizaSrvController_1 = require("./controllers/servico/AtualizaSrvController");
const CriaSrvController_1 = require("./controllers/servico/CriaSrvController");
const ListaSrvController_1 = require("./controllers/servico/ListaSrvController");
const AutenticaController_1 = require("./controllers/autentica/AutenticaController");
const CriaCampController_1 = require("./controllers/campanha/CriaCampController");
const ListaCampController_1 = require("./controllers/campanha/ListaCampController");
const AtualizaCampController_1 = require("./controllers/campanha/AtualizaCampController");
const ListaCampInatController_1 = require("./controllers/campanha/ListaCampInatController");
const CriaProfController_1 = require("./controllers/profissional/CriaProfController");
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
rotas.get('/lojas', new ListaLjController_1.ListaLjController().handle); //Front [com filtro de regiao]
rotas.get('/loja', new LojaController_1.LojaController().handle); //Front
rotas.post('/login', new AutenticaController_1.AutenticaController().handle); //Front
rotas.post('/esquecisenha', new EsqueciSenhaController_1.EsqueciSenhaController().handle);
rotas.post('/loja', new CriaLjController_1.CriaLjController().handle);
rotas.put('/loja', authenticator_1.Authenticator, uploadUser.single('avatar'), new AtualizaLjController_1.AtualizaLjController().handle);
rotas.get('/me', authenticator_1.Authenticator, new AutenticadaLjController_1.AutenticadaLjController().handle); // Rota para Controle
//Vendedor
rotas.post('/vendedor', authenticator_1.Authenticator, uploadUser.single('avatar'), new CriaVddController_1.CriaVddController().handle);
rotas.delete('/vendedor', authenticator_1.Authenticator, new DeletaVddController_1.DeletaVddController().handle);
rotas.get('/vendedores', new ListaVddController_1.ListaVddController().handle);
//Profissionais
rotas.post('/profissional', uploadUser.single('avatar'), uploadUser.array('portfolio', 10), new CriaProfController_1.CriaProfController().handle);
//Servicos
rotas.post('/servico', new CriaSrvController_1.CriaSrvController().handle);
rotas.put('/servico', new AtualizaSrvController_1.AtualizaSrvController().handle);
rotas.get('/servicos', new ListaSrvController_1.ListaSrvController().handle);
// Categoria
rotas.get('/categorias', new ListaCtController_1.ListaCtController().handle); //Front
rotas.post('/categoria', new CriaCtController_1.CriaCtController().handle);
rotas.delete('/categoria', authenticator_1.Authenticator, new DeletaCtController_1.DeletaCtController().handle);
rotas.put('/categoria', authenticator_1.Authenticator, new AtualizaCtController_1.AtualizaCtController().handle);
// Produto
rotas.get('/feed', new FeedProdutosController_1.FeedProdutosControlller().handle); //Front [com filtro de regiao]
rotas.post('/produto', authenticator_1.Authenticator, uploadUser.array('files', 5), new CriaPdtController_1.CriaPdtController().handle);
rotas.get('/porcategoria', new PorCategoriaPdtController_1.PorCategoriaPdtController().handle); //Front [com filtro de regiao]
rotas.get('/detalhe/produto', new DetalheProdutoController_1.DetalheProdutoController().handle);
rotas.delete('/produto', authenticator_1.Authenticator, new DeletaPdtController_1.DeletaPdtController().handle);
rotas.put('/produto', authenticator_1.Authenticator, new AtualizaPdtController_1.AtualizaPdtController().handle);
// Region
rotas.get('/regioes', new ListaRgController_1.ListaRgController().handle); //Front
rotas.post('/regiao', new CriaRgController_1.CriaRgController().handle);
// Campanha
rotas.get('/campanhas/ativas', new ListaCampController_1.ListaCampController().handle); //Front
rotas.post('/campanha', new CriaCampController_1.CriaCampController().handle);
rotas.put('/campanha', new AtualizaCampController_1.AtualizaCampController().handle);
rotas.get('/campanhas', new ListaCampInatController_1.ListaCampInatController().handle);
