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
  idRota: number;

  constructor(private pokemonApiService:PokemonApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRoute();
    this.getPokemon();
  }

  getRoute(){
    this.route.paramMap.subscribe(params =>this.idRota = +params.get('PokemonId'));
  }

  getPokemon() {
    this.pokemonApiService.getPokemonById(this.idRota).subscribe(data => this.pokemonAsync = data.results[0]);
  }
}