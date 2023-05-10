import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';

@NgModule({
  declarations: [MainPageComponent],
  // LOS EXPORTS SON LOS COMPONENTES QUE VAN AL MUNDO EXTERIOR
  exports: [MainPageComponent],
  imports: [CommonModule],
})
export class DbzModule {}
