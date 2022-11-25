import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

//@Input() productos: Producto[] = [];

@Input()  nuevo: Producto = {
    nombre: '',
    precio: 0
  }
  //emitir
  //@Output() onNuevoProducto: EventEmitter<Producto>= new EventEmitter();
  
  constructor( private dbzService: DbzService){}
  
  
  agregar(  ){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log(this.nuevo);
    //this.onNuevoProducto.emit(this.nuevo);
//llamar al servico 
    this.dbzService.agregarProducto(this.nuevo);
    //this.productos.push(this.nuevo);
    this.nuevo = { 
      nombre: '',
      precio: 0
    }

  //console.log(this.productos);

  
  }

}
