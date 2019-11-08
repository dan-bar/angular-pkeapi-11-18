import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { SearchComponent } from './search/search.component';
import { PokemonApiService } from './pokemon-api.service';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PokedexComponent, SearchComponent, PokemonComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PokemonApiService]
})
export class AppModule { }