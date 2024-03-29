import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

import {Observable, of, BehaviorSubject} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PokemonApiService {

  private pokemonSelected = new BehaviorSubject(null);

  private urlAPI = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) { 

  }

  getPokedex(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.urlAPI + "?limit=807");
  }

  setPokemon(pokemon):Pokemon {
    this.pokemonSelected.next(pokemon+1);
  }

  getPokemonById(id:number):Observable<Pokemon> {
    return this.http.get<Pokemon>(this.urlAPI + id);
  }
}