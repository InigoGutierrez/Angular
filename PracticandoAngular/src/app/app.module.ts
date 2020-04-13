import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponent } from './components/Mycomponent/myComponent.component';
import { CalculadoraCientifica } from './components/Calculadora/calculadora.component';
import { CalculadoraRPN } from './components/CalculadoraRPN/calculadoraRpn.component'

@NgModule({
  declarations: [
    AppComponent, 
    MyComponent,
    CalculadoraCientifica,
    CalculadoraRPN
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
