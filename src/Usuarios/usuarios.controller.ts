import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuariosInput, SignInUsuariosInput, UpdateUsuariosInput } from './dto/usuarios.dto';
import { Usuarios } from './entities/usuarios.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) { }

  @Get('get')
  async getUsuarios() {
    return this.usuariosService.getUsuarios();
  }

  @Get('byid/:id')
  async getUsuiariosById(@Param('id') id: string): Promise<Usuarios> {
    return this.usuariosService.getUsuariosById(Number(id));
  }

  @Post('create')
  async createUsuarios(@Body() data: CreateUsuariosInput): Promise<Usuarios> {
    return this.usuariosService.createUsuarios(data);
  }

  @Put('update')
  async updateUsuarios(@Body() data: UpdateUsuariosInput): Promise<Usuarios> {
    return this.usuariosService.updateUsuarios(data);
  }

  @Delete('delete/:id')
  async deleteUsuarios(@Param('id') id: string): Promise<Usuarios> {
    return this.usuariosService.deleteUsuarios(Number(id));
  }

  @Post('iniciarsesion')
  async signInUsuarios(@Body() data: SignInUsuariosInput): Promise<Object> {
    return this.usuariosService.signInUsuarios(data);
  }
}
