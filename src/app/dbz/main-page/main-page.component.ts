import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  constructor( private dbzService: DbzService ) {}

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 8500,
    },
  ];

  nuevo: Personaje = {
    nombre: 'Lala',
    poder: 10,
  };

  agregarNuevoPersonaje(argumento: Personaje): void {
    this.personajes.push(argumento);
  }

}
