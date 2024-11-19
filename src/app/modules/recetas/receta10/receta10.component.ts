import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/menu/menu.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-receta10',
  standalone: true,
  imports: [MenuComponent,NgFor,NgClass],
  templateUrl: './receta10.component.html',
  styleUrl: './receta10.component.css'
})
export class Receta10Component {
    // Estrellas disponibles para calificación
    estrellas: number[] = [1, 2, 3, 4, 5];

    // Calificación seleccionada (por defecto 0)
    calificacion: number = 0;
  
    // Función para establecer la calificación
    setCalificacion(calificacion: number): void {
      this.calificacion = calificacion;
    }
  }
