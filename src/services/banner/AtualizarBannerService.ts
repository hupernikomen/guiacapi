import prismaClient from "../../prisma"

interface bannerRequest {
  image: object,
  route: string,
  paramsID: string,
  userID: string,
}

class AtualizarBannerService {
    async execute({
      image,
      route,
      paramsID,
      userID,

    }: bannerRequest) {

        const _banner = await prismaClient.banner.updateMany({
            where: { userID },
            data: {
              image,
              route,
              paramsID,
              userID
            },

        })

        return _banner

    }
}

export { AtualizarBannerService }