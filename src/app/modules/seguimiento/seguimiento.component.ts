import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FavoritosComponent } from '../favoritos/favoritos.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seguimiento',
  standalone: true,
  imports: [FavoritosComponent, CommonModule],
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css'],
})
export class SeguimientoComponent implements OnChanges {
  @Input() recetaId: number | null = null;
  ingredientes: string[] = [];
  procedimiento: string[] = [];
  animationClass: string = ''; // Variable para aplicar la clase de animación

  ngOnChanges(changes: SimpleChanges) {
    if (changes['recetaId'] && this.recetaId !== null) {
      this.animationClass = ''; // Remover la clase de animación anterior
      setTimeout(() => {
        this.animationClass = 'slide-in'; // Activar la animación después de un pequeño retraso
      }, 50); // Esto permite que la animación se ejecute correctamente
      this.cargarReceta(this.recetaId);
    }
  }

  cargarReceta(id: number) {
    if (id === 0) {
      this.ingredientes = ['Ingrediente A1', 'Ingrediente A2'];
      this.procedimiento = ['Paso A1', 'Paso A2'];
    } else if (id === 1) {
      this.ingredientes = ['Ingrediente B1', 'Ingrediente B2'];
      this.procedimiento = ['Paso B1', 'Paso B2'];
    } else if (id === 2) {
      this.ingredientes = ['Ingrediente C1', 'Ingrediente C2'];
      this.procedimiento = ['Paso C1', 'Paso C2'];
    }
  }
}
