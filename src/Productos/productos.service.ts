import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
var XLSX = require('xlsx');

@Injectable()
export class ProductosService {
    constructor(private prismaService: PrismaService) { }


    readExcel() {
        let ruta = 'D:/Mis Documentos/Propio/upload-nestjs/delta/src/files/productos.xlsx';
        const workBook = XLSX.readFile(ruta);
        const workBookSheets = workBook.SheetNames;

        const sheet = workBookSheets[0];
        const dataExcel = XLSX.utils.sheet_to_json(workBook.Sheets[sheet]);

        return dataExcel;
    }

    async saveProductosAndCostos() {
        let producto = null;
        let dataExcel = this.readExcel();

        dataExcel.forEach(async element => {

            producto = await this.prismaService.productos.findFirst({
                where: { nombre: element.nombre }
            })

            if (producto === null) {
                await this.createProducto(element);
            } else {
                await this.updateProducto(element, producto)
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
                        ipc: element.ipc
                    }
                }
            }
        })
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
                        ipc: element.ipc
                    }
                }
            }
        })
    }

}
