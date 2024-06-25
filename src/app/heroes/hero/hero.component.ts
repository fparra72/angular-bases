import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

    public name:string = 'ironman';
    public age:number = 45;

    // El get añade un atributo capitalizedName
    get capitalizedName():string{
      return this.name.toUpperCase();
    }

    getHeroDescription():string{
      return `${this.name} - ${this.age}`;
    }

    changeHero():void{
      this.name = "Spiderman";
    }

    changeAge():void{
      this.age=25;
    }

    resetForm():void{
      this.name = "ironman";
      this.age = 45;

      // Busca todos los h1 y les cambia el contenido si encuentra alguno simbolo !
      //document.querySelectorAll('h1')!.forEach( element =>{ element.innerHTML='<h1>Desde Angular</h1>';});
    }
}
