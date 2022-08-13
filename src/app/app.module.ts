import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModulo } from './contador/contador.modulo';
import { HeroesModulo } from './heroes/heroes.modulo';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModulo,
    ContadorModulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// $ ng g c heroes/listado
// este comando se utiliza para crear una carpeta con
// todos los archivos que se utilizan en angular
