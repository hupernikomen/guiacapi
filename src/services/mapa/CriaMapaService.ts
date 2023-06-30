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

        const mapaExiste = await prismaClient.mapa.findFirst({
            where: {
              usuarioID
            }
        })

        if (mapaExiste) {
            throw new Error("Mapa ja registrado");
            
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