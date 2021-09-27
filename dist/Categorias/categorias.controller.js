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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriasController = void 0;
const common_1 = require("@nestjs/common");
const categorias_service_1 = require("./categorias.service");
const categorias_dto_1 = require("./dto/categorias.dto");
let CategoriasController = class CategoriasController {
    constructor(categoriasService) {
        this.categoriasService = categoriasService;
    }
    async getCategorias() {
        return this.categoriasService.getCategorias();
    }
    async getCategoriaById(id) {
        return this.categoriasService.getCategoriaById(Number(id));
    }
    async getFilterCategorias(nombre) {
        return this.categoriasService.getFilterCategorias(nombre);
    }
    async createCategoria(data) {
        return this.categoriasService.createCategoria(data);
    }
    async updateCategoria(data) {
        return this.categoriasService.updateCategoria(data);
    }
    async deleteCategoria(id) {
        return this.categoriasService.deleteCategoria(Number(id));
    }
};
__decorate([
    (0, common_1.Get)('get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "getCategorias", null);
__decorate([
    (0, common_1.Get)('byid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "getCategoriaById", null);
__decorate([
    (0, common_1.Get)('filter'),
    __param(0, (0, common_1.Body)('nombre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "getFilterCategorias", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [categorias_dto_1.CreateCategoriaInput]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "createCategoria", null);
__decorate([
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [categorias_dto_1.UpdateCategoriaInput]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "updateCategoria", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "deleteCategoria", null);
CategoriasController = __decorate([
    (0, common_1.Controller)('categorias'),
    __metadata("design:paramtypes", [categorias_service_1.CategoriasService])
], CategoriasController);
exports.CategoriasController = CategoriasController;
//# sourceMappingURL=categorias.controller.js.map