import { GridService } from './grid.service';
import { PokemonDTO } from './dto/pokemon.dto';
export declare class GridController {
    private readonly gridService;
    constructor(gridService: GridService);
    read(): PokemonDTO[];
}
