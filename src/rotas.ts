import { Router, Request, Response } from 'express';
import multer from 'multer'
import 'dotenv/config';

import { Authenticator } from './middlewares/authenticator';

import { fileFilter, storageTypes } from './config/multer'

import { CriarLojaController } from './controllers/loja/CriarLojaController'
import { CriarCategoriaController } from './controllers/categoria/CriarCategoriasController';
import { CriarProdutoController } from './controllers/produto/CriarProdutoController';
import { CriarRegiaoController } from './controllers/regiao/CriarRegiaoController';
import { CriarVendedorController } from './controllers/vendedor/CriarVendedorController';

import { AuthLojaController } from './controllers/auth/AuthUserController'
import { MeLojaController } from './controllers/loja/MeLojaController';

import { AtualizarLojaController } from './controllers/loja/AtualizarLojaController';
import { AtualizarProdutoController } from './controllers/produto/AtualizarProdutoController';

import { ListarCategoriasController } from './controllers/categoria/ListarCategoriasController';
import { ListarLojasController } from './controllers/loja/ListarLojasController';
import { ListarProdutosController } from './controllers/produto/ListarProdutosController';
import { ListarPorCategoriaController } from './controllers/produto/ListarPorCategoriaController';
import { ListarRegioesController } from './controllers/regiao/ListarRegioesController';
import { ListarLojaController } from './controllers/loja/ListarLojaController';
import { ListarVendedoresController } from './controllers/vendedor/ListarVendedoresController';


import { AtualizarServicoController } from './controllers/servico/AtualizarServicoController';
import { ListarServicosController } from './controllers/servico/ListarServicosController';

import { DetalheProdutoController } from './controllers/produto/DetalheProdutoController';

import { DeletarProdutoController } from './controllers/produto/DeleteProductController';
import { DeletarVendedorController } from './controllers/vendedor/DeletarVendedorController';

import { CriarServicoController } from './controllers/servico/CriarServicoController';

import { EsqueciSenhaController } from './controllers/loja/EsqueciSenhaController';


const uploadUser = multer({
  fileFilter: fileFilter,
  storage: process.env.TYPE_STORAGE === 'S3' ? storageTypes.s3 : storageTypes.local,
  limits: {
    fileSize: 1 * 1024 * 1024, // MAX 1MB
  }
})

const rotas = Router();

// Loja
rotas.get('/lojas', new ListarLojasController().handle)  //Front [com filtro de regiao]
rotas.get('/loja', new ListarLojaController().handle)  //Front
rotas.post('/login', new AuthLojaController().handle)  //Front
rotas.post('/esquecisenha', new EsqueciSenhaController().handle)


rotas.post('/loja', new CriarLojaController().handle)
rotas.put('/loja', Authenticator, uploadUser.single('logo'), new AtualizarLojaController().handle)
rotas.get('/me', Authenticator, new MeLojaController().handle) // Rota para Controle

//Vendedor
rotas.post('/vendedor', Authenticator, new CriarVendedorController().handle)
rotas.delete('/vendedor', Authenticator, new DeletarVendedorController().handle)
rotas.get('/vendedores', new ListarVendedoresController().handle)

//Servicos
rotas.post('/servico', uploadUser.single('foto'), uploadUser.array('imagens'), new CriarServicoController().handle)
rotas.put('/servico', new AtualizarServicoController().handle)
rotas.get('/servicos', new ListarServicosController().handle)

// Categoria
rotas.get('/categorias', new ListarCategoriasController().handle)  //Front
rotas.post('/categoria', new CriarCategoriaController().handle)


// Produto
rotas.get('/produtos', new ListarProdutosController().handle)  //Front [com filtro de regiao]
rotas.post('/produto', Authenticator, uploadUser.array('files', 5), new CriarProdutoController().handle)
rotas.get('/porcategoria', new ListarPorCategoriaController().handle)  //Front [com filtro de regiao]
rotas.get('/detalhe', new DetalheProdutoController().handle)

rotas.delete('/produto', Authenticator, new DeletarProdutoController().handle)
rotas.put('/produto', Authenticator, new AtualizarProdutoController().handle)


// Region
rotas.get('/regioes', new ListarRegioesController().handle) //Front

rotas.post('/regiao', new CriarRegiaoController().handle)


export { rotas };