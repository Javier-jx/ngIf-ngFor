import { Component } from "@angular/core"


@Component({
    selector:'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponet {
   mostrar=true;

    frase: any={
        mensaje: 'Ese es mi sevreto capitan, siempre estoy enojado',
        autor: 'Bruce Banner'
    };

personajes: string[]=['Hulk','Deadpool','Wolverine'];

}