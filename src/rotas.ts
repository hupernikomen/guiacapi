import { Router, Request, Response } from 'express';
import multer from 'multer'
import 'dotenv/config';

import { Authenticator } from './middlewares/authenticator';

import { fileFilter, storageTypes } from './config/multer'

import { LojaLogadaController } from './controllers/loja/LojaLogadaController';
import { AutenticaUsuarioController } from './controllers/usuario/AutenticaUsuarioController';
import { BuscaLojaController } from './controllers/loja/BuscaLojaController';
import { DetalheProdutoController } from './controllers/produto/DetalheProdutoController';
import { AtualizaUsuarioController } from './controllers/usuario/AtualizaUsuarioController';
import { AtualizaLojaController } from './controllers/loja/AtualizaLojaController';
import { AtualizaCategoriaController } from './controllers/categoria/AtualizaCategoriaController';
import { AtualizaCampanhaController } from './controllers/campanha/AtualizaCampanhaController';
import { AtualizarProfissionalController } from './controllers/profissional/AtualizarProfissionalController';
import { AtualizaProdutoController } from './controllers/produto/AtualizaProdutoController';
import { CriaLojaController } from './controllers/loja/CriaLojaController';
import { CriaUsuarioController } from './controllers/usuario/CriaUsuarioController';
import { CriaRegiaoController } from './controllers/regiao/CriaRegiaoController';
import { CriaProfissaoController } from './controllers/profissao/CriaProfissaoController';
import { CriaCategoriaController } from './controllers/categoria/CriaCategoriaController';
import { CriaContatoController } from './controllers/contato/CriaContatoController';
import { CriaCampanhaController } from './controllers/campanha/CriaCampanhaController';
import { CriaProdutoController } from './controllers/produto/CriaProdutoController';
import { ListarRegioesController } from './controllers/regiao/ListarRegioesController';
import { ListarProdutosController } from './controllers/produto/ListarProdutosController';
import { ListarProfissionalController } from './controllers/profissional/ListarProfissionalController';
import { ListaCampanhasInativasController } from './controllers/campanha/ListaCampanhasInativasController';
import { ListaCampanhaController } from './controllers/campanha/ListaCampanhaController';
import { ListaLojasController } from './controllers/loja/ListaLojasController';
import { PorCategoriaProdutoController } from './controllers/produto/PorCategoriaProdutoController';
import { PorProfissaoController } from './controllers/profissional/PorProfissaoController';
import { DeletaProdutoController } from './controllers/produto/DeletaProdutoController';

import { ListaProfissaoController } from './controllers/profissao/ListaProfissaoController';
import { AtualizaProfissaoController } from './controllers/profissao/AtualizaProfissaoController';
import { DeletaCategoriaController } from './controllers/categoria/DeletaCategoriaController';
import { ListaCategoriaController } from './controllers/categoria/ListaCategoriaController';


const uploadUser = multer({
  fileFilter: fileFilter,
  storage: process.env.TYPE_STORAGE === 'S3' ? storageTypes.s3 : storageTypes.local,
  limits: {
    fileSize: 1 * 1024 * 1024, // MAX 1MB
  }
})


const rotas = Router();

//Admin
rotas.post('/usuario', new CriaUsuarioController().handle)
rotas.post('/loja',new CriaLojaController().handle)
rotas.post('/profissao', new CriaProfissaoController().handle)
rotas.post('/regiao', new CriaRegiaoController().handle)
rotas.post('/categoria', new CriaCategoriaController().handle)
rotas.post('/campanha', new CriaCampanhaController().handle)
rotas.get('/profissoes', new ListaProfissaoController().handle)
rotas.get('/campanhas', new ListaCampanhasInativasController().handle)
rotas.put('/usuario', new AtualizaUsuarioController().handle)
rotas.put('/campanha', new AtualizaCampanhaController().handle)
rotas.put('/categoria', new AtualizaCategoriaController().handle)
rotas.put('/profissao', new AtualizaProfissaoController().handle)
rotas.delete('/categoria', new DeletaCategoriaController().handle)


//Usuario
rotas.post('/login', new AutenticaUsuarioController().handle)
rotas.post('/produto', Authenticator, uploadUser.array('files', 5), new CriaProdutoController().handle)
rotas.post('/contato', Authenticator, uploadUser.single('avatar'), new CriaContatoController().handle)

rotas.get('/loja/logado', Authenticator, new LojaLogadaController().handle)
rotas.put('/loja', Authenticator, uploadUser.single('avatar'), new AtualizaLojaController().handle) 
rotas.put('/profissional',Authenticator, new AtualizarProfissionalController().handle)
rotas.put('/produto', Authenticator, new AtualizaProdutoController().handle)

rotas.delete('/produto', Authenticator, new DeletaProdutoController().handle)


//App
rotas.get('/lojas', new ListaLojasController().handle)
rotas.get('/loja', new BuscaLojaController().handle)

rotas.get('/detalhe/produto', new DetalheProdutoController().handle)
rotas.get('/produtos', new ListarProdutosController().handle)
rotas.get('/produtos/categoria', new PorCategoriaProdutoController().handle)

rotas.get('/profissionais', new ListarProfissionalController().handle)
rotas.get('/profissao/profissionais', new PorProfissaoController().handle)


// Ambos
rotas.get('/regioes', new ListarRegioesController().handle)
rotas.get('/campanhas/ativas', new ListaCampanhaController().handle)
rotas.get('/categorias', new ListaCategoriaController().handle) 


export { rotas };