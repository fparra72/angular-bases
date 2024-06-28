import { DbzModule } from './../dbz.module';
import { v4 as uuid } from 'uuid';
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root' // Será un singleton en toda la aplicación. Angular lo inyectara como un objeto unico en toda la ejecución

})
export class DbzService {
  constructor() { }

  public characters: Character[] = [
    {id:uuid(), name:'Krillin',power:1000},
    {id:uuid(),name:'Goku',power:9500},
    {id:uuid(),name:'Vegeta',power:7500}
  ];

  addCharacter(character:Character):void{

    const newCharacter: Character = {
      id:uuid(),...character
    } // Pone el id y todas las propiedades qeu vengan en character

    console.log(newCharacter);
      this.characters.push(newCharacter);

      console.log(this.characters);
      console.log('añadido');
  }

  deleteCharacterById(id: string):void{

    console.log('id a borrar ' + id);
    this.characters = this.characters.filter( character => character.id != id);
  }
}
