import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../services/favoritos.service';
import { MenuComponent } from '../shared/menu/menu.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SeguimientoComponent } from '../seguimiento/seguimiento.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [MenuComponent, HeaderComponent, FooterComponent, SeguimientoComponent, NgFor],
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  favoritos: any[] = [];

  constructor(private favoritosService: FavoritosService) {}

  ngOnInit(): void {
    this.favoritos = this.favoritosService.obtenerFavoritos();
  }

  eliminarDeFavoritos(recetaId: number): void {
    this.favoritosService.eliminarDeFavoritos(recetaId);
    this.favoritos = this.favoritosService.obtenerFavoritos(); // Actualizar la lista
  }
}



