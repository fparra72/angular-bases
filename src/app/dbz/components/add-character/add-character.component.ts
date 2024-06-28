import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

   // Emitimos eventos con el objeto Character modificado. El componente padre estrá de escucahdor del evento
   // onNewCharacter nos permitirá lanzar el evento en el momento que creemos oportuno. En este caso cuando se llame al submi del form.
    @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();

    public character:Character={name:'',power:0};

    emitCharacter() : void{
      console.log(this.character);

      if( this.character.name.length === 0) return;

      //debugger; Parara en ejcución en el navegador mostrando el código

      let charactcterAdd = {name:this.character.name,power:this.character.power};

      this.onNewCharacter.emit(charactcterAdd);

      this.character = {name:'',power:0};


    }
}
