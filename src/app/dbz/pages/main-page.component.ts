import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    // Aqui se hara la inyección de dependencia. Angular consteuira un singletosn si aun no lo tiene y lo inyectará
    constructor(private dbzService:DbzService){}

    get characters(): Character[]{
      return[...this.dbzService.characters]; // Devuelve una copia del array
    }

    onDeleteCharacter(id: string):void{
        this.dbzService.deleteCharacterById(id);
    }

    onNewCharacter( character: Character):void{
      this.dbzService.addCharacter(character);
    }
}
