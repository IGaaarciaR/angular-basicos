import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/dbz.interfaces';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent  {

productos: Producto[] =[
{
nombre: 'refresco',
precio: 22.00
},
{
  nombre: 'lechera',
  precio: 15.50
}
];

  cambiarNombre(event : any ){
    console.log(event.target.value)
  }

  nuevo: Producto = {
    nombre: 'Cajeta ',
    precio: 45.00
  }
  
  agregarNuevoProducto(argumento: Producto){
    console.log(argumento);
  }

}
