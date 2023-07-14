import prismaClient from '../../prisma';
import { hash } from 'bcryptjs'

interface usuarioRequest {
    email: string,
    senha: string,
    regiaoID: string,
}

class CriaUsuarioService {
    async execute({
        email,
        senha,
        regiaoID
    }: usuarioRequest) {

        if (!email) {
            throw new Error("informe seu email");
        }

        const usuarioExiste = await prismaClient.usuario.findFirst({
            where: {
                email
            }
        })

        if (usuarioExiste) {
            throw new Error("Usuário já cadastrado!");
        }

        const passwordCripto = await hash(senha, 8)

        const usuario = await prismaClient.usuario.create({
            data: {
                email,
                senha: passwordCripto,
                regiaoID
            },
            select:{
                id:true,
                
            }

        })



        return usuario

    }
}

export { CriaUsuarioService }