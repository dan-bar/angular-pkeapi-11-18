import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonApiService } from '../pokemon-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon:Pokemon;
  pokemonAsync:Pokemon;

  constructor(private pokemonApiService:PokemonApiService) { }

  ngOnInit() {
    this.setPokemon(this.pokemon);
    this.getPokemon();
  }

  setPokemon(pokemon) {
    this.pokemonApiService.setPokemon(pokemon.id);
  }

  getPokemon() {
    this.pokemonApiService.getPokemonById(this.pokemon).subscribe(data => this.pokemonAsync = data.results[0]);
  }
}