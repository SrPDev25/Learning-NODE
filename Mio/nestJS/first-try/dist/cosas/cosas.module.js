"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosasModule = void 0;
const common_1 = require("@nestjs/common");
const cosas_service_1 = require("./cosas.service");
const cosas_controller_1 = require("./cosas.controller");
let CosasModule = class CosasModule {
};
CosasModule = __decorate([
    (0, common_1.Module)({
        controllers: [cosas_controller_1.CosasController],
        providers: [cosas_service_1.CosasService]
    })
], CosasModule);
exports.CosasModule = CosasModule;
//# sourceMappingURL=cosas.module.js.map