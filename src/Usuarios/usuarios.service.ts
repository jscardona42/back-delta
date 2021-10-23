import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  CreateUsuariosInput,
  SignInUsuariosInput,
  UpdateUsuariosInput,
} from './dto/usuarios.dto';
import { Usuarios } from './entities/usuarios.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsuariosService {
  constructor(private prismaService: PrismaService) {}

  async getUsuarios(): Promise<Usuarios[]> {
    return await this.prismaService.usuarios.findMany();
  }

  async getUsuariosById(id_usuario: number): Promise<Usuarios> {
    return await this.prismaService.usuarios.findUnique({
      where: { id_usuario: id_usuario },
    });
  }

  async createUsuarios(data: CreateUsuariosInput) {
    var salt = await bcrypt.genSalt();

    return await this.prismaService.usuarios.create({
      data: {
        nombre: data.nombre,
        correo: data.correo,
        clave: await bcrypt.hash(data.clave, salt),
        salt: salt,
      },
    });
  }

  async updateUsuarios(data: UpdateUsuariosInput) {
    return await this.prismaService.usuarios.update({
      where: { id_usuario: data.id_usuario },
      data: {
        ...data,
      },
    });
  }

  async deleteUsuarios(id_usuario: number) {
    return await this.prismaService.usuarios.delete({
      where: { id_usuario: id_usuario },
    });
  }

  async signInUsuarios(data: SignInUsuariosInput): Promise<Usuarios> {
    const salt = await this.prismaService.usuarios.findFirst({
      where: { correo: data.correo },
      select: { salt: true },
    });

    // Obtenemos la llave de la base de datos
    if (salt === null) {
      throw new UnauthorizedException('Datos de acceso incorrectos');
    }

    // Almacenamos el usuario devuelto en una variable
    const usuario = await this.prismaService.usuarios.findFirst({
      where: {
        correo: data.correo,
        clave: await bcrypt.hash(data.clave, salt.salt),
      },
    });

    // Mostramos mensaje de error
    if (usuario === null) {
      throw new UnauthorizedException('Datos de acceso incorrectos');
    }
    //Retornamos el usuario que se consultó a partir del correo si es diferente de null
    return usuario;
  }
}
