import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateProductoInput } from "./dto/productos.dto";
import { ProductosService } from "./productos.service";


@Controller('productos')
export class ProductosController {
    constructor(
        private readonly productosService: ProductosService,
    ) { }

    @Post('create')
    async saveProductosAndCostos(@Body() data: [CreateProductoInput]) {
        return this.productosService.saveProductosAndCostos(data);
    }


}