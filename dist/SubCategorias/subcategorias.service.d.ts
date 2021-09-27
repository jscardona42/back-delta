import { PrismaService } from '../prisma.service';
import { SubCategorias } from './entities/subcategorias.entity';
import { CreateSubCategoriaInput, UpdateSubCategoriaInput } from "./dto/subcategorias.dto";
export declare class SubCategoriasService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getSubCategorias(): Promise<SubCategorias[]>;
    getSubCategoriasById(id_subcategoria: number): Promise<SubCategorias>;
    createSubCategoria(data: CreateSubCategoriaInput): Promise<import(".prisma/client").subcategorias>;
    updateSubCategoria(data: UpdateSubCategoriaInput): Promise<import(".prisma/client").subcategorias>;
    deleteSubCategoria(id_subcategoria: number): Promise<import(".prisma/client").subcategorias>;
}
