import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  // template: `
  //   <h1>Hola de nuevo</h1>

  // `
})
export class AppComponent {
  public titulo: string = 'Contador App';
  numero: number = 10;

  acumular( valor: number ): void {
    this.numero += valor;
  }
}
