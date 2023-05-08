import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';

@NgModule({
  // Aqui se declaran los componentes que se utilizaran en este modulo
  declarations: [AppComponent, HeroComponent, ListComponent],
  // LOS MODULOS SIEMPRE VAN EN LOS IMPORTS
  imports: [BrowserModule, CounterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
