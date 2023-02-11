import { Injectable } from '@nestjs/common';
import { instanceToPlain, plainToClass } from 'class-transformer';

import * as POKEMON_DATA from './pokemon.json'
import { PokemonDTO } from './dto/pokemon.dto';

@Injectable()
export class GridService {

    getGrid(): PokemonDTO[] {
        return plainToClass(PokemonDTO, POKEMON_DATA, {strategy: 'excludeAll'} );
    }

}
