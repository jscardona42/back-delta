import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { CategoriasController } from './Categorias/categorias.controller';
import { CategoriasService } from './Categorias/categorias.service';
import { PrismaService } from './prisma.service';
import { ProductosController } from './Productos/productos.controller';
import { ProductosService } from './Productos/productos.service';
import { SubCategoriasController } from './SubCategorias/subcategorias.controller';
import { SubCategoriasService } from './SubCategorias/subcategorias.service';
import { UsuariosController } from './Usuarios/usuarios.controller';
import { UsuariosService } from './Usuarios/usuarios.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: "secret",
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [CategoriasController, ProductosController, SubCategoriasController, UsuariosController],
  providers: [CategoriasService, PrismaService, ProductosService, SubCategoriasService, UsuariosService],
})
export class AppModule { }
