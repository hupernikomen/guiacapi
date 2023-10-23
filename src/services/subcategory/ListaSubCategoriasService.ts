import prismaClient from "../../prisma";

interface listaSubCategoriaRequest {
    categoryID: string
}

class ListaSubCategoriasService {
    async execute({ categoryID }: listaSubCategoriaRequest) {

        const subcatgoria = await prismaClient.subcategory.findMany({
            where: { categoryID},
            select: {
                id: true,
                name: true,
                _count:true,
                category: {
                    select:{
                        id:true,
                        name:true
                    }
                }
            }
          
        })



        return subcatgoria
    }
}

export { ListaSubCategoriasService }