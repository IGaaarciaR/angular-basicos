import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';
//componente hijo
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent{

  get productos (){
    return this.dbzService.productos;
  }
  //@Input() productos: Producto[] = []; 
  //input viene desde el componente padre //herencia?
  constructor(private dbzService: DbzService){
    
  }
}
