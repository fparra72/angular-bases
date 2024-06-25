import { Component } from '@angular/core';

// Marca que html y css se le asocia al ts. Este decorador añade estas propiedades a AppComponent y le dice que sera del tipo component
@Component({
  //standalone:true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = ' Mi primera App de Angular';
}
