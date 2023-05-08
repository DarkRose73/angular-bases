import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;
  public showButtonName: boolean = true;
  public showButtonAge: boolean = true;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spider-man';
    this.showButtonName = false;
  }

  changeAge(): void {
    this.age = 25;
    this.showButtonAge = false;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
    this.showButtonName = true;
    this.showButtonAge = true;
  }
}
