import { Expose, Transform } from 'class-transformer';

export class PokemonDTO {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  @Transform((value) => value.obj['types'].map((item:any) => item.type['name']))
  types: string[];

  @Expose()
  @Transform((value) => value.obj['sprites'].other['official-artwork'].front_default)
  sprite: string;

}
