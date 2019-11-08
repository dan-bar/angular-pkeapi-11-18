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

  getPokedex(): Observable<Pokemon> {
    return this.http.get<Pokemon[]>(this.urlAPI + "?limit=151"); 
  }
   
  getGeneration():Observable<Pokemon> {
    return this.http.get<Pokemon[]>(this.urlAPI + "generation/" + id+1);

  }
  getPokemon():Observable<Pokemon> {
    return this.pokemonSelected;
  }

  setPokemon(pokemon):Pokemon {
    this.pokemonSelected.next(pokemon);
  }

  getPokemonById(id:number):Observable<Pokemon> {
    return this.http.get<Pokemon[]>(this.urlAPI + "&results=1page" + id+1);
  }

}