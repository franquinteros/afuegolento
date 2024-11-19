import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/menu/menu.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-receta8',
  standalone: true,
  imports: [MenuComponent,NgFor,NgClass],
  templateUrl: './receta8.component.html',
  styleUrl: './receta8.component.css'
})
export class Receta8Component {
    // Estrellas disponibles para calificación
    estrellas: number[] = [1, 2, 3, 4, 5];

    // Calificación seleccionada (por defecto 0)
    calificacion: number = 0;
  
    // Función para establecer la calificación
    setCalificacion(calificacion: number): void {
      this.calificacion = calificacion;
    }
  }
