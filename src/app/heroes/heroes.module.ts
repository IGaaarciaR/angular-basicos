import { CommonModule } from "@angular/common";
import { compileNgModule } from "@angular/compiler";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.componetn';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule //van los modulos
    ]
})

export class HeroesModule{

}

