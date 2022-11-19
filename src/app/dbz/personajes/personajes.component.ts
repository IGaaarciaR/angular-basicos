import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../interfaces/dbz.interfaces';
//componente hijo
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent{

  @Input() productos: Producto[] = []; 
  //input viene desde el componente padre //herencia?
}
