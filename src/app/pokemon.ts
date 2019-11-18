import { Sprites } from "./sprites";
export class Pokemon {
  id: number;
  name: string;
  sprite:string;
  height: number;
  weight: number;
  getPic(){
   return this.sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.id+".png";
  }
}