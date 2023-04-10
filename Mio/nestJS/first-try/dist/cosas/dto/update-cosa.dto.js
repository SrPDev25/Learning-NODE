"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCosaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cosa_dto_1 = require("./create-cosa.dto");
class UpdateCosaDto extends (0, mapped_types_1.PartialType)(create_cosa_dto_1.CreateCosaDto) {
}
exports.UpdateCosaDto = UpdateCosaDto;
//# sourceMappingURL=update-cosa.dto.js.map