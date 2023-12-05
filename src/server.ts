import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import 'express-async-errors'
import 'dotenv/config';

import path from 'path'

import { rotas } from './rotas'

const app = express()

app.use(cors())
app.use(express.json())
app.use(rotas)

app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {

    if (error instanceof Error) return response.status(400).json({ error: error.message })

    return response.status(500).json({
        status: 'error',
        message: 'Erro Interno do Servidor'
    })
})

app.listen(process.env.PORT || 3333, () => console.log('Rodando na porta : ', process.env.PORT))