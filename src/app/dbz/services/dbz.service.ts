import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  constructor() {
    console.log('Servicio Inicializado');
  }

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
