import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

import {Observable, of, BehaviorSubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokemonApiService {

  private pokemonSelected

  constructor() { }

}