import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsuariosService } from "./usuarios.service";
import { CreateUsuariosInput, UpdateUsuariosInput } from "./dto/usuarios.dto";


@Controller('usuarios')
export class UsuariosController {
    constructor(
        private readonly usuariosService: UsuariosService,
    ) { }

    
    @Get('get')
    async getUsuarios() {
        return this.usuariosService.getUsuarios();
    }

    @Get('byid/:id')
    async getUsuiariosById(@Param('id') id: string) {
        return this.usuariosService.getUsuariosById(Number(id));
    }

    @Post('create')
    async createUsuarios(
        @Body() data: CreateUsuariosInput) {
        return this.usuariosService.createUsuarios(data);
    }

    @Put('update')
    async updateUsuarios(
        @Body() data: UpdateUsuariosInput) {
        return this.usuariosService.updateUsuarios(data);
    }

    @Delete('delete/:id')
    async deleteUsuarios(@Param('id') id: string) {
        return this.usuariosService.deleteUsuarios(Number(id));
    }

}



