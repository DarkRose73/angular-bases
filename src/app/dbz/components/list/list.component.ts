import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  // PARA PERMITIR LA COMUNICACION ENTRE UN COMPONENTE HIJO Y PADRE SE UTILIZA LA PROPERTY @Input()
  // SE LE PUEDE PASAR COMO PARÁMETRO EL NOMBRE DE LA PROPIEDAD, SINO SE USA EL
  // MISMO NOMBRE CON EL QUE LLEGA DESDE EL PADRE
  @Input()
  public characterList: Character[] = [
    { name: 'Trunks', power: 10, id: uuid() },
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    this.onDelete.emit(id);
  }
}
