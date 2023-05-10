import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';
// EL SERVICIO SIRVE PARA MANTENER LA DATA CENTRALIZADA

@Injectable({
  // providedIn:root permite que el servicio sea un singleton
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    { name: 'Krillin', power: 1000, id: uuid() },
    { name: 'Goku', power: 9500, id: uuid() },
    { name: 'Vegeta', power: 7500, id: uuid() },
  ];

  onNewCharacter(character: Character): void {
    // Hacer spread de propiedades desde el objeto character
    const newCharacter: Character = {
      ...character,
      id: uuid(),
    };
    this.characters.push(newCharacter);
  }

  // remover el item
  onDeleteCharacter(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
