import prismaClient from "../../prisma"
import { hash } from "bcryptjs";

interface usuarioRequest {
    usuarioID: string,
    status: boolean,
    senha: string
}

class AtualizaService {
    async execute({
        usuarioID,
        status,
        senha

    }: usuarioRequest) {

        const usuario_existe = await prismaClient.usuario.findUnique({
            where: {
                id: usuarioID
            }
        })
        
        
        if (!usuario_existe) throw new Error("Ops, infelizmente não encontramos!");
        
        
        let passwordCripto: string
        if (senha) passwordCripto = await hash(senha, 8)


        const usuario = await prismaClient.usuario.update({
            where: {
                id: usuarioID
            },
            data: {
                status,
                senha: passwordCripto
            }
        })

        return usuario

    }
}

export { AtualizaService }