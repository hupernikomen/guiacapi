import prismaClient from "../../prisma";

interface mapaRequest {
    latlng:object,
    usuarioID: string
}

class CriaMapaService{
    async execute({
      latlng,
      usuarioID
    }: mapaRequest) {

        const usuarioExiste = await prismaClient.mapa.findFirst({
            where: {
              usuarioID
            }
        })

        if (!usuarioExiste) {
            throw new Error("Usuario informado não existe");
            
        }

        const mapa = await prismaClient.mapa.create({
            data: {
                latlng,
                usuarioID
            }
        })

        return mapa
    }
}

export { CriaMapaService}