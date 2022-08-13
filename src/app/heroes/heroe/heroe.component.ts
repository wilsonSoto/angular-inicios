import {Component} from '@angular/core'

@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent{
    name: string = 'Iroman';
    age: number = 18;

    get NombreCapitalizado(): string {
        return this.name.toUpperCase();
    }

    obtenerName(): string {
        return `${this.name} - ${this.age}`
    }

    cambiarNombre(): void {
        this.name = 'SpiderMan'; 
    }

     cambiarEdad(): void {
        this.age = 46; 
    }

}

