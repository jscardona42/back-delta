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
exports.CategoriasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let CategoriasService = class CategoriasService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getCategorias() {
        return await this.prismaService.categorias.findMany();
    }
    async getCategoriaById(id_categoria) {
        return await this.prismaService.categorias.findUnique({
            where: { id_categoria: id_categoria }
        });
    }
    async getFilterCategorias(nombre) {
        return await this.prismaService.categorias.findMany({
            where: { nombre: { contains: nombre } }
        });
    }
    async createCategoria(data) {
        return await this.prismaService.categorias.create({
            data: Object.assign({}, data)
        });
    }
    async updateCategoria(data) {
        return await this.prismaService.categorias.update({
            where: { id_categoria: data.id_categoria },
            data: Object.assign({}, data)
        });
    }
    async deleteCategoria(id_categoria) {
        return await this.prismaService.categorias.delete({
            where: { id_categoria: id_categoria }
        });
    }
};
CategoriasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriasService);
exports.CategoriasService = CategoriasService;
//# sourceMappingURL=categorias.service.js.map