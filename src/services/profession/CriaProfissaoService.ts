import prismaClient from "../../prisma";

interface profissaoRequest {
    name: string,
}

class CriaProfissaoService {
    async execute({ name }: profissaoRequest) {

        const _profession = await prismaClient.profession.create({ data: { name } })
        return _profession
    }
}

export { CriaProfissaoService }