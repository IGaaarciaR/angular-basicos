import { Injectable } from "@angular/core";
import { Producto } from "../interfaces/dbz.interfaces";


@Injectable()
export class DbzService{

    private _productos: Producto[] =[
        {
        nombre: 'refresco',
        precio: 22.00
        },
        {
          nombre: 'lechera',
          precio: 15.50
        }
        ];

    get productos(): Producto[]{
        return[...this._productos];
    }
    //... espaciador 
    constructor(){
        //console.log('Servicio inicializado');
    }

    agregarProducto( producto: Producto){
        this._productos.push(producto);
    }
}



