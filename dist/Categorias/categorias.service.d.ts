import { PrismaService } from '../prisma.service';
import { CreateCategoriaInput, UpdateCategoriaInput } from './dto/categorias.dto';
import { Categorias } from './entities/categorias.entity';
export declare class CategoriasService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getCategorias(): Promise<Categorias[]>;
    getCategoriaById(id_categoria: number): Promise<Categorias>;
    getFilterCategorias(nombre: string): Promise<Categorias[]>;
    createCategoria(data: CreateCategoriaInput): Promise<import(".prisma/client").categorias>;
    updateCategoria(data: UpdateCategoriaInput): Promise<import(".prisma/client").categorias>;
    deleteCategoria(id_categoria: number): Promise<import(".prisma/client").categorias>;
}
