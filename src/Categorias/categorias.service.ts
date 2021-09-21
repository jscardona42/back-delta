import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateCategoriaInput, UpdateCategoriaInput } from './dto/categorias.dto';
import { Categorias } from './entities/categorias.entity';

@Injectable()
export class CategoriasService {
    constructor(private prismaService: PrismaService) { }

    async getCategorias(): Promise<Categorias[]> {
        return await this.prismaService.categorias.findMany();
    }

    async getCategoriaById(id_categoria: number): Promise<Categorias> {
        return await this.prismaService.categorias.findUnique({
            where: { id_categoria: id_categoria }
        })
    }

    async getFilterCategorias(nombre: string): Promise<Categorias[]> {
        return await this.prismaService.categorias.findMany({
            where: { nombre: { contains: nombre } }
        })
    }

    async createCategoria(data: CreateCategoriaInput) {
        return await this.prismaService.categorias.create({
            data: {
                // nombre: data.nombre,
                // estado: data.estado
                ...data
            }
        });
    }

    async updateCategoria(data: UpdateCategoriaInput) {
        return await this.prismaService.categorias.update({
            where: { id_categoria: data.id_categoria },
            data: {
                // nombre: data.nombre,
                // estado: data.estado
                ...data
            }
        });
    }

    async deleteCategoria(id_categoria: number) {
        return await this.prismaService.categorias.delete({
            where: { id_categoria: id_categoria }
        });
    }
}
