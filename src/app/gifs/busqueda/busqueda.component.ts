import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  // ! para asegurar que el objeto no es nulo
  //importar el htmlInputElement cuando sea de tipo any 

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService : GifsService){

  }
  buscar(  ){
    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0){
      return;
    }

    //console.log(valor );
    this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value='';
  }
}
