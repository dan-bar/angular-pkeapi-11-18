import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { SearchComponent } from './search/search.component';
import { PokemonApiService } from './pokemon-api.service';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { GenerationComponent } from './generation/generation.component';

const rotas: Routes = [
  { path: '', component: PokedexComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'pokedex/:idPokemon', component: PokemonComponent },
  { path: 'generation', component: GenerationComponent }
];

@NgModule({
  imports:      
  [ 
    BrowserModule,
    FormsModule,  
    HttpClientModule, 
    RouterModule.forRoot(rotas) 
    ],

  declarations: 
  [ 
    AppComponent, 
    HelloComponent, 
    PokedexComponent, 
    SearchComponent, 
    PokemonComponent, GenerationComponent 
    ],
    
  bootstrap:    
  [ 
    AppComponent 
    ],

  providers: 
  [
    PokemonApiService
    ],

  exports: 
  [ 
    RouterModule 
    ]
})
export class AppModule { }