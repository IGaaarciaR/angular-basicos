import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../interfaces/dbz.interfaces';

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

  @Output() onNuevoProducto: EventEmitter<Producto>= new EventEmitter();
  
  agregar(  ){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log(this.nuevo);
    this.onNuevoProducto.emit(this.nuevo);

    //this.productos.push(this.nuevo);
    this.nuevo = { 
      nombre: '',
      precio: 0
    }

  //console.log(this.productos);

  
  }

}
