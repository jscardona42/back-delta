import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { SubCategorias } from './entities/subcategorias.entity';
import { CreateSubCategoriaInput, UpdateSubCategoriaInput } from "./dto/subcategorias.dto";


@Injectable()
export class SubCategoriasService {
    constructor(private prismaService: PrismaService) { }

    async getSubCategorias(): Promise<SubCategorias[]> {
        return await this.prismaService.subcategorias.findMany();
    }

    async getSubCategoriasById(id_subcategoria: number): Promise<SubCategorias> {
        return await this.prismaService.subcategorias.findUnique({
            where: { id_subcategoria: id_subcategoria }
        })
    }

    async createSubCategoria(data: CreateSubCategoriaInput) {
        return await this.prismaService.subcategorias.create({
            data: {
                // nombre: data.nombre,
                // estado: data.estado
                ...data
            }
        });
    }

    async updateSubCategoria(data: UpdateSubCategoriaInput) {
        return await this.prismaService.subcategorias.update({
            where: { id_subcategoria: data.id_subcategoria },
            data: {
                // nombre: data.nombre,
                // estado: data.estado
                ...data
            }
        });
    }

    async deleteSubCategoria(id_subcategoria: number) {
        return await this.prismaService.subcategorias.delete({
            where: { id_subcategoria: id_subcategoria }
        });
    }

}    