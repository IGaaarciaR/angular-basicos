import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes : string[]=['Ironman','Spiderman','Hulk','Thor','Capitan America']
  heroeBorrado: string = '';

  borrarHeroe(){
    //const heroeBorrado = this.heroes.shift();
    this.heroeBorrado = this.heroes.shift() || '';
    //console.log(heroeBorrado);
  }
}
