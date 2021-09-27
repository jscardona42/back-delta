export class CreateSubCategoriaInput {
    nombre: string
    estado: number
}


export class UpdateSubCategoriaInput extends CreateSubCategoriaInput {
    id_subcategoria: number
}