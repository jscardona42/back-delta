import { Module } from '@nestjs/common';
import { CategoriasController } from './Categorias/categorias.controller';
import { CategoriasService } from './Categorias/categorias.service';
import { PrismaService } from './prisma.service';
import { ProductosController } from './Productos/productos.controller';
import { ProductosService } from './Productos/productos.service';

@Module({
  imports: [],
  controllers: [CategoriasController, ProductosController],
  providers: [CategoriasService, PrismaService, ProductosService],
})
export class AppModule { }
