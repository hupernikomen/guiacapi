import prismaClient from "../../prisma"

interface albumRequest {
    usuarioID: string,
    album:object,
}

class AlbumProfissionalService {
    async execute({
        usuarioID,
        album,

    }: albumRequest) {

        const profissional = await prismaClient.profissional.updateMany({
            where: {
                usuarioID
            },
            data: {
                album,
            },

        })

        return profissional

    }
}

export { AlbumProfissionalService }