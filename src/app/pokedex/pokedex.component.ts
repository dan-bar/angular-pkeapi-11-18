import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonApiService } from '../pokemon-api.service';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokedex:Pokemon[];

  constructor(private pokemonApiService: PokemonApiService) { }

  ngOnInit() {
    this.getPokedex();
  }

  selectPokemon(pokemon:Pokemon) {
    this.pokemonApiService.setPokemon(pokemon);
  }
  
  getPokedex() {
    this.pokemonApiService.getPokedex().subscribe(dados => this.pokedex = dados.results);
  }
}