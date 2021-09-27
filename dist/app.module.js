"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const categorias_controller_1 = require("./Categorias/categorias.controller");
const categorias_service_1 = require("./Categorias/categorias.service");
const prisma_service_1 = require("./prisma.service");
const productos_controller_1 = require("./Productos/productos.controller");
const productos_service_1 = require("./Productos/productos.service");
const subcategorias_controller_1 = require("./SubCategorias/subcategorias.controller");
const subcategorias_service_1 = require("./SubCategorias/subcategorias.service");
const usuarios_controller_1 = require("./Usuarios/usuarios.controller");
const usuarios_service_1 = require("./Usuarios/usuarios.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [categorias_controller_1.CategoriasController, productos_controller_1.ProductosController, subcategorias_controller_1.SubCategoriasController, usuarios_controller_1.UsuariosController],
        providers: [categorias_service_1.CategoriasService, prisma_service_1.PrismaService, productos_service_1.ProductosService, subcategorias_service_1.SubCategoriasService, usuarios_service_1.UsuariosService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map