import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent  {

  productos: Producto[]=[];

  /*cambiarNombre(event : any ){
    console.log(event.target.value)
  }*/

  nuevo: Producto = {
    nombre: 'Cajeta ',
    precio: 45.00
  }
  constructor(){}

  //get productos (): Producto[]{
    //return this.dbzService.productos;
  //}
  /*
  agregarNuevoProducto(argumento: Producto){
    //debugger;
    this.productos.push(argumento);
    console.log(argumento);
  }
  //Inyeccion de dependencias: inyectando el servicio en el proy
  constructor(private dbzService: DbzService){
    this.productos = this.dbzService.productos;
  }*/

}
