import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

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
  public characterList: Character[] = [{ name: 'Trunks', power: 10 }];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    this.onDelete.emit(index);
  }
}
