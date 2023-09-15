import prismaClient from "../../prisma";

interface mapaRequest {
    latlng:object,
    userID: string
}

class CriaMapaService{
    async execute({
      latlng,
      userID
    }: mapaRequest) {

        const _map = await prismaClient.map.findFirst({  where: { userID } })
        if (_map)  throw new Error("Mapa ja registrado");
            
        const __map = await prismaClient.map.create({
            data: {
                latlng,
                userID
            }
        })

        return __map
    }
}

export { CriaMapaService}