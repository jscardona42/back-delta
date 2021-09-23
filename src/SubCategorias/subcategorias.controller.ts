import { Controller, Body, Post, Put, Delete, Param, Get } from "@nestjs/common";
import { SubCategoriasService } from "./subcategorias.service";
import { CreateSubCategoriaInput, UpdateSubCategoriaInput } from "./dto/subcategorias.dto";


@Controller('subcategorias')
export class SubCategoriasController {
    constructor(
        private readonly subcategoriasService: SubCategoriasService,
    ) { }

    @Get('get')
    async getCategorias() {
        return this.subcategoriasService.getSubCategorias();
    }

    @Post('create')
    async createSubCategoria(
        @Body() data: CreateSubCategoriaInput) {
        return this.subcategoriasService.createSubCategoria(data);
    }

    @Put('update')
    async updateSubCategoria(
        @Body() data: UpdateSubCategoriaInput) {
        return this.subcategoriasService.updateSubCategoria(data);
    }

    @Delete('delete/:id')
    async deleteSubCategoria(@Param('id') id: string) {
        return this.subcategoriasService.deleteSubCategoria(Number(id));
    }

}