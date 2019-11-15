import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonApiService } from './pokemon-api.service';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const rotas: Routes = [
  { path: '', component: PokedexComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'pokedex/:idPokemon', component: PokemonComponent }
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
    PokedexComponent,
    PokemonComponent
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