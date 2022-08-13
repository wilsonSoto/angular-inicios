import { NgModule } from "@angular/core";
import { CotadorComponent } from "./contador/contador.component";




@NgModule({
    declarations: [
        CotadorComponent
    ],
    exports: [
        CotadorComponent
    ],
})

export class ContadorModulo {}



