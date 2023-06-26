import prismaClient from '../../prisma';
import { hash } from 'bcryptjs'

interface usuarioRequest {
    tipo: string,
    email: string,
    senha: string,
    regiaoID: string,
}

class CriaUsuarioService {
    async execute({
        tipo,
        email,
        senha,
        regiaoID
    }: usuarioRequest) {

        if (!email) {
            throw new Error("usuario Incorreto");
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
                tipo,
                email,
                senha: passwordCripto,
                regiaoID
            }

        })

        if (usuario) {

            await prismaClient.mapa.create({
                data: {
                    usuarioID: usuario.id
                }
            })

            await prismaClient.contato.create({
                data: {
                    usuarioID: usuario.id
                }
            })

            switch (usuario.tipo) {
                case 'loja':
                    await prismaClient.loja.create({
                        data: {
                            usuarioID: usuario.id
                        }
                    })
                    break;
                case 'profissional':
                    await prismaClient.profissional.create({
                        data: {
                            usuarioID: usuario.id
                        }
                    })
                    break;
                case 'posto':

                    await prismaClient.posto.create({
                        data: {
                            usuarioID: usuario.id
                        }
                    })
                    break;

                default:
                    break;
            }
        }

        return usuario

    }
}

export { CriaUsuarioService }