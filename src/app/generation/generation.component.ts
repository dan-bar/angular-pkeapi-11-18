import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonApiService } from '../pokemon-api.service';

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.css']
})
export class GenerationComponent implements OnInit {

  generation:Pokemon[];


  constructor(private pokemonApiService: PokemonApiService) { }

  ngOnInit() {
    this.getGeneration();
  }

  getGeneration() {
    this.pokemonApiService.getGeneration().subscribe(dados => this.generation = dados.results);
  }

}