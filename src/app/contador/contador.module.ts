import { CommonModule, NgClass } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppModule } from "src/app/app.module";
import { ContadorComponent } from "./contador/contador.component";

@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ]
})

export class ContadorModule{

}

