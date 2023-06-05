import { Router, Request, Response } from 'express';
import multer from 'multer'
import 'dotenv/config';

import { Authenticator } from './middlewares/authenticator';

import { fileFilter, storageTypes } from './config/multer'

import { CriaLjController } from './controllers/loja/CriaLjController'
import { AutenticadaLjController } from './controllers/loja/AutenticadaLjController';
import { AtualizaLjController } from './controllers/loja/AtualizaLjController';
import { ListaLjController } from './controllers/loja/ListaLjController';
import { UnicaLjController } from './controllers/loja/UnicaLjController';
import { EsqueciSenhaController } from './controllers/loja/EsqueciSenhaController';

import { ListaCtController } from './controllers/categoria/ListaCtController';
import { CriaCtController } from './controllers/categoria/CriaCtController';
import { DeletaCtController } from './controllers/categoria/DeletaCtController';
import { AtualizaCtController } from './controllers/categoria/AtualizaCtController';

import { CriaPdtController } from './controllers/produto/CriaPdtController';
import { AtualizaPdtController } from './controllers/produto/AtualizaPdtController';
import { DetalhePdtController } from './controllers/produto/DetalhePdtController';
import { DeletaPdtController } from './controllers/produto/DeletaPdtController';
import { ListaPdtController } from './controllers/produto/ListaPdtController';
import { PorCategoriaPdtController } from './controllers/produto/PorCategoriaPdtController';

import { CriaRgController } from './controllers/regiao/CriaRgController';
import { ListaRgController } from './controllers/regiao/ListaRgController';

import { CriaVddController } from './controllers/vendedor/CriaVddController';
import { ListaVddController } from './controllers/vendedor/ListaVddController';
import { DeletaVddController } from './controllers/vendedor/DeletaVddController';

import { AtualizaSrvController } from './controllers/servico/AtualizaSrvController';
import { CriaSrvController } from './controllers/servico/CriaSrvController';
import { ListaSrvController } from './controllers/servico/ListaSrvController';

import { AutenticaController } from './controllers/autentica/AutenticaController';

import { CriaCampController } from './controllers/campanha/CriaCampController';
import { ListaCampController } from './controllers/campanha/ListaCampController';
import { AtualizaCampController } from './controllers/campanha/AtualizaCampController';
import { ListaCampInatController } from './controllers/campanha/ListaCampInatController';


const uploadUser = multer({
  fileFilter: fileFilter,
  storage: process.env.TYPE_STORAGE === 'S3' ? storageTypes.s3 : storageTypes.local,
  limits: {
    fileSize: 1 * 1024 * 1024, // MAX 1MB
  }
})


const rotas = Router();

// Loja
rotas.get('/lojas', new ListaLjController().handle)  //Front [com filtro de regiao]
rotas.get('/loja', new UnicaLjController().handle)  //Front
rotas.post('/login', new AutenticaController().handle)  //Front
rotas.post('/esquecisenha', new EsqueciSenhaController().handle)


rotas.post('/loja', new CriaLjController().handle)
rotas.put('/loja', Authenticator, uploadUser.single('avatar'), new AtualizaLjController().handle)
rotas.get('/me', Authenticator, new AutenticadaLjController().handle) // Rota para Controle

//Vendedor
rotas.post('/vendedor', Authenticator, uploadUser.single('avatar'), new CriaVddController().handle)
rotas.delete('/vendedor', Authenticator, new DeletaVddController().handle)
rotas.get('/vendedores', new ListaVddController().handle)

//Servicos
rotas.post('/servico', uploadUser.single('foto'), uploadUser.array('imagens'), new CriaSrvController().handle)
rotas.put('/servico', new AtualizaSrvController().handle)
rotas.get('/servicos', new ListaSrvController().handle)

// Categoria
rotas.get('/categorias', new ListaCtController().handle)  //Front
rotas.post('/categoria', new CriaCtController().handle)
rotas.delete('/categoria', Authenticator, new DeletaCtController().handle)
rotas.put('/categoria', Authenticator, new AtualizaCtController().handle)


// Produto
rotas.get('/produtos', new ListaPdtController().handle)  //Front [com filtro de regiao]
rotas.post('/produto', Authenticator, uploadUser.array('files', 5), new CriaPdtController().handle)
rotas.get('/porcategoria', new PorCategoriaPdtController().handle)  //Front [com filtro de regiao]
rotas.get('/detalhe', new DetalhePdtController().handle)
rotas.delete('/produto', Authenticator, new DeletaPdtController().handle)
rotas.put('/produto', Authenticator, new AtualizaPdtController().handle)


// Region
rotas.get('/regioes', new ListaRgController().handle) //Front
rotas.post('/regiao', new CriaRgController().handle)

// Campanha
rotas.get('/campanhas/ativas', new ListaCampController().handle) //Front
rotas.post('/campanha', new CriaCampController().handle)
rotas.put('/campanha', new AtualizaCampController().handle)
rotas.get('/campanhas', new ListaCampInatController().handle)


export { rotas };