"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const POKEMON_DATA = require("./pokemon.json");
const pokemon_dto_1 = require("./dto/pokemon.dto");
let GridService = class GridService {
    getGrid() {
        return (0, class_transformer_1.plainToClass)(pokemon_dto_1.PokemonDTO, POKEMON_DATA, { strategy: 'excludeAll' });
    }
};
GridService = __decorate([
    (0, common_1.Injectable)()
], GridService);
exports.GridService = GridService;
//# sourceMappingURL=grid.service.js.map