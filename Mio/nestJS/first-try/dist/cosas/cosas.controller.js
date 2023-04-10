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
exports.CosasController = void 0;
const common_1 = require("@nestjs/common");
const cosas_service_1 = require("./cosas.service");
const create_cosa_dto_1 = require("./dto/create-cosa.dto");
const update_cosa_dto_1 = require("./dto/update-cosa.dto");
const swagger_1 = require("@nestjs/swagger");
let CosasController = class CosasController {
    constructor(cosasService) {
        this.cosasService = cosasService;
    }
    create(createCosaDto) {
        return this.cosasService.create(createCosaDto);
    }
    getDato(dato1) {
        return this.cosasService.getNiceString(dato1);
    }
    findOne(id) {
        return this.cosasService.findOne(+id);
    }
    update(id, updateCosaDto) {
        return this.cosasService.update(+id, updateCosaDto);
    }
    remove(id) {
        return this.cosasService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cosa_dto_1.CreateCosaDto]),
    __metadata("design:returntype", void 0)
], CosasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('retorno/:dato'),
    __param(0, (0, common_1.Param)('dato')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], CosasController.prototype, "getDato", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CosasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cosa_dto_1.UpdateCosaDto]),
    __metadata("design:returntype", void 0)
], CosasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CosasController.prototype, "remove", null);
CosasController = __decorate([
    (0, swagger_1.ApiTags)('cosas'),
    (0, common_1.Controller)('cosas'),
    __metadata("design:paramtypes", [cosas_service_1.CosasService])
], CosasController);
exports.CosasController = CosasController;
//# sourceMappingURL=cosas.controller.js.map