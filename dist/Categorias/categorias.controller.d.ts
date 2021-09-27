import { CategoriasService } from "./categorias.service";
import { CreateCategoriaInput, UpdateCategoriaInput } from "./dto/categorias.dto";
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
    getCategorias(): Promise<import("./entities/categorias.entity").Categorias[]>;
    getCategoriaById(id: string): Promise<import("./entities/categorias.entity").Categorias>;
    getFilterCategorias(nombre: string): Promise<import("./entities/categorias.entity").Categorias[]>;
    createCategoria(data: CreateCategoriaInput): Promise<import(".prisma/client").categorias>;
    updateCategoria(data: UpdateCategoriaInput): Promise<import(".prisma/client").categorias>;
    deleteCategoria(id: string): Promise<import(".prisma/client").categorias>;
}
