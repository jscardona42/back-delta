import { PrismaService } from '../prisma.service';
export declare class ProductosService {
    private prismaService;
    constructor(prismaService: PrismaService);
    readExcel(): any;
    saveProductosAndCostos(): Promise<void>;
    createProducto(element: any): Promise<void>;
    updateProducto(element: any, producto: any): Promise<void>;
}
