import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductosService } from "./productos.service";


@Controller('productos')
export class ProductosController {
    constructor(
        private readonly productosService: ProductosService,
    ) { }

    @Get('save')
    async saveProductosAndCostos() {
        return this.productosService.saveProductosAndCostos();
    }


}