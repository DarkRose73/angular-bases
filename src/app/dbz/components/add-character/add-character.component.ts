import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  // Generar nueva instancia del emisor de eventos
  // Sirve para enviar data al componente padre
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    // debugger sirve para detener la ejecucion de js desde el navegador
    // debugger;

    // Validar que los personajes se envien con nombre
    if (this.character.name.length === 0) return;

    // Hacer la emision del evento
    this.onNewCharacter.emit(this.character);
    // Limpiar data
    this.character = { name: '', power: 0 };
  }
}
