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
exports.SubCategoriasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let SubCategoriasService = class SubCategoriasService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getSubCategorias() {
        return await this.prismaService.subcategorias.findMany();
    }
    async createSubCategoria(data) {
        return await this.prismaService.subcategorias.create({
            data: Object.assign({}, data)
        });
    }
    async updateSubCategoria(data) {
        return await this.prismaService.subcategorias.update({
            where: { id_subcategoria: data.id_subcategoria },
            data: Object.assign({}, data)
        });
    }
    async deleteSubCategoria(id_subcategoria) {
        return await this.prismaService.subcategorias.delete({
            where: { id_subcategoria: id_subcategoria }
        });
    }
};
SubCategoriasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SubCategoriasService);
exports.SubCategoriasService = SubCategoriasService;
//# sourceMappingURL=subcategorias.service.js.map