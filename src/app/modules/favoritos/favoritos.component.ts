import { Component } from '@angular/core';
import { MenuComponent } from '../shared/menu/menu.component';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { SeguimientoComponent } from '../seguimiento/seguimiento.component';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [MenuComponent, HeaderComponent, FooterComponent, SeguimientoComponent],
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
  recetaId: number | null = null;

  // Método para actualizar el ID de la receta seleccionada
  seleccionarReceta(id: number): void {
    this.recetaId = id; // Cambia el ID de la receta seleccionada
  }
}

