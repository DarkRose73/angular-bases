import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  // Aqui se declaran los componentes que se utilizaran en este modulo
  declarations: [AppComponent],
  // LOS MODULOS SIEMPRE VAN EN LOS IMPORTS
  imports: [BrowserModule, CounterModule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
