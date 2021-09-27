"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
var XLSX = require('xlsx');
let ProductosService = class ProductosService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    readExcel() {
        let ruta = 'C:/Users/Soacha_Delta/Documents/GitHub/delta/src/files/productosbd.xlsx';
        const workBook = XLSX.readFile(ruta);
        const workBookSheets = workBook.SheetNames;
        const sheet = workBookSheets[0];
        const dataExcel = XLSX.utils.sheet_to_json(workBook.Sheets[sheet]);
        return dataExcel;
    }
    async saveProductosAndCostos() {
        let producto = null;
        let dataExcel = this.readExcel();
        dataExcel.forEach(async (element) => {
            producto = await this.prismaService.productos.findFirst({
                where: { nombre: element.nombre }
            });
            if (producto === null) {
                await this.createProducto(element);
            }
            else {
                await this.updateProducto(element, producto);
            }
            producto = null;
        });
    }
    async createProducto(element) {
        await this.prismaService.productos.create({
            data: {
                nombre: element.nombre, productoscostos: {
                    create: {
                        bonificacion: element.bonificacion,
                        codigo: element.codigo.toString(),
                        cantidad: element.cantidad,
                        costo: element.costo,
                        descuento: element.descuento,
                        ipc: element.ipc,
                        iva: element.iva
                    }
                }
            }
        });
    }
    async updateProducto(element, producto) {
        await this.prismaService.productos.update({
            where: { id_producto: producto.id_producto },
            data: {
                nombre: element.nombre, productoscostos: {
                    create: {
                        bonificacion: element.bonificacion,
                        codigo: element.codigo.toString(),
                        cantidad: element.cantidad,
                        costo: element.costo,
                        descuento: element.descuento,
                        ipc: element.ipc,
                        iva: element.iva
                    }
                }
            }
        });
    }
};
ProductosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductosService);
exports.ProductosService = ProductosService;
//# sourceMappingURL=productos.service.js.map