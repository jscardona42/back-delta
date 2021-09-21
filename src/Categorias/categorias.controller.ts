import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CategoriasService } from "./categorias.service";
import { CreateCategoriaInput, UpdateCategoriaInput } from "./dto/categorias.dto";


@Controller('categorias')
export class CategoriasController {
    constructor(
        private readonly categoriasService: CategoriasService,
    ) { }

    @Get('get')
    async getCategorias() {
        return this.categoriasService.getCategorias();
    }

    @Get('byid/:id')
    async getCategoriaById(@Param('id') id: string) {
        return this.categoriasService.getCategoriaById(Number(id));
    }

    @Get('filter')
    async getFilterCategorias(@Body('nombre') nombre: string) {
        return this.categoriasService.getFilterCategorias(nombre);
    }

    @Post('create')
    async createCategoria(
        @Body() data: CreateCategoriaInput) {
        return this.categoriasService.createCategoria(data);
    }

    @Put('update')
    async updateCategoria(
        @Body() data: UpdateCategoriaInput) {
        return this.categoriasService.updateCategoria(data);
    }

    @Delete('delete/:id')
    async deleteCategoria(@Param('id') id: string) {
        return this.categoriasService.deleteCategoria(Number(id));
    }

}