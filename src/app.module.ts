import { Module } from '@nestjs/common';
import { CategoriasController } from './Categorias/categorias.controller';
import { CategoriasService } from './Categorias/categorias.service';
import { PrismaService } from './prisma.service';
import { ProductosController } from './Productos/productos.controller';
import { ProductosService } from './Productos/productos.service';
import { SubCategoriasController } from './SubCategorias/subcategorias.controller';
import { SubCategoriasService } from './SubCategorias/subcategorias.service';

@Module({
  imports: [],
  controllers: [CategoriasController, ProductosController, SubCategoriasController],
  providers: [CategoriasService, PrismaService, ProductosService, SubCategoriasService],
})
export class AppModule { }
