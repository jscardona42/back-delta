import { SubCategoriasService } from "./subcategorias.service";
import { CreateSubCategoriaInput, UpdateSubCategoriaInput } from "./dto/subcategorias.dto";
export declare class SubCategoriasController {
    private readonly subcategoriasService;
    constructor(subcategoriasService: SubCategoriasService);
    getCategorias(): Promise<import("./entities/subcategorias.entity").SubCategorias[]>;
    getSubCategoriasById(id: string): Promise<import("./entities/subcategorias.entity").SubCategorias>;
    createSubCategoria(data: CreateSubCategoriaInput): Promise<import(".prisma/client").subcategorias>;
    updateSubCategoria(data: UpdateSubCategoriaInput): Promise<import(".prisma/client").subcategorias>;
    deleteSubCategoria(id: string): Promise<import(".prisma/client").subcategorias>;
}
