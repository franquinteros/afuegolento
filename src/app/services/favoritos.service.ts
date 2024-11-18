import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
  private favoritos: any[] = [];

  obtenerFavoritos() {
    return this.favoritos;
  }

  agregarAFavoritos(receta: any) {
    if (!this.esFavorito(receta.id)) {
      this.favoritos.push(receta);
    }
  }

  eliminarDeFavoritos(recetaId: number) {
    this.favoritos = this.favoritos.filter((fav) => fav.id !== recetaId);
  }

  esFavorito(recetaId: number): boolean {
    return this.favoritos.some((fav) => fav.id === recetaId);
  }
}

