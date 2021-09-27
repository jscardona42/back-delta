import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUsuariosInput, UpdateUsuariosInput } from './dto/usuarios.dto';
import { Usuarios } from './entities/usuarios.entity';


@Injectable()
export class UsuariosService {
    constructor(private prismaService: PrismaService) { }

    async getUsuarios(): Promise<Usuarios[]> {
        return await this.prismaService.usuarios.findMany();
    }

    async getUsuariosById(id_usuario: number): Promise<Usuarios> {
        return await this.prismaService.usuarios.findUnique({
            where: { id_usuario: id_usuario }
        })
    }

    async createUsuarios(data: CreateUsuariosInput) {
        return await this.prismaService.usuarios.create({
            data: {
                // nombre: data.nombre,
                // estado: data.estado
                ...data
            }
        });
    }

    async updateUsuarios(data: UpdateUsuariosInput) {
        return await this.prismaService.usuarios.update({
            where: { id_usuario: data.id_usuario },
            data: {
                // nombre: data.nombre,
                // estado: data.estado
                ...data
            }
        });
    }

    async deleteUsuarios(id_usuario: number) {
        return await this.prismaService.usuarios.delete({
            where: { id_usuario: id_usuario }
        });
    }
}



