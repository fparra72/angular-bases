import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";


@NgModule({

  declarations:[
    HeroComponent,
    ListComponent
  ],
  exports: [ // componentes que se pueden usar de este modlo en otros modulos
    HeroComponent,
    ListComponent
  ],
  imports:[
    CommonModule // Necesario para que mi modulo tenga las directivas de ngIf, ngElse,...
  ]

})
export class HeroesModule{

}
