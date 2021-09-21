

export class CreateCategoriaInput {
    nombre: string
    estado: boolean
}


export class UpdateCategoriaInput extends CreateCategoriaInput {
    id_categoria: number
}