import { Controller, Get, Post, Query } from '@nestjs/common';
import { GridService } from './grid.service';
import { PokemonDTO } from './dto/pokemon.dto';

@Controller('grid')
export class GridController {
    constructor(private readonly gridService: GridService){}


    @Get()
    read(): PokemonDTO[] {
        console.log('GET endpoint hit');
        return this.gridService.getGrid();
    }


}


