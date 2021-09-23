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
exports.SubCategoriasController = void 0;
const common_1 = require("@nestjs/common");
const subcategorias_service_1 = require("./subcategorias.service");
const subcategorias_dto_1 = require("./dto/subcategorias.dto");
let SubCategoriasController = class SubCategoriasController {
    constructor(subcategoriasService) {
        this.subcategoriasService = subcategoriasService;
    }
    async getCategorias() {
        return this.subcategoriasService.getSubCategorias();
    }
    async createSubCategoria(data) {
        return this.subcategoriasService.createSubCategoria(data);
    }
    async updateSubCategoria(data) {
        return this.subcategoriasService.updateSubCategoria(data);
    }
    async deleteSubCategoria(id) {
        return this.subcategoriasService.deleteSubCategoria(Number(id));
    }
};
__decorate([
    (0, common_1.Get)('get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubCategoriasController.prototype, "getCategorias", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subcategorias_dto_1.CreateSubCategoriaInput]),
    __metadata("design:returntype", Promise)
], SubCategoriasController.prototype, "createSubCategoria", null);
__decorate([
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subcategorias_dto_1.UpdateSubCategoriaInput]),
    __metadata("design:returntype", Promise)
], SubCategoriasController.prototype, "updateSubCategoria", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubCategoriasController.prototype, "deleteSubCategoria", null);
SubCategoriasController = __decorate([
    (0, common_1.Controller)('subcategorias'),
    __metadata("design:paramtypes", [subcategorias_service_1.SubCategoriasService])
], SubCategoriasController);
exports.SubCategoriasController = SubCategoriasController;
//# sourceMappingURL=subcategorias.controller.js.map