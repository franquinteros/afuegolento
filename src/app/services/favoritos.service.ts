import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
  private favoritos: any[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      const favoritosGuardados = localStorage.getItem('favoritos');
      if (favoritosGuardados) {
        this.favoritos = JSON.parse(favoritosGuardados);
      }
    }
  }

  obtenerFavoritos() {
    return this.favoritos;
  }

  agregarAFavoritos(receta: any) {
    if (!this.esFavorito(receta.id)) {
      this.favoritos.push(receta);
      this.actualizarLocalStorage();
    }
  }

  eliminarDeFavoritos(recetaId: number) {
    this.favoritos = this.favoritos.filter((fav) => fav.id !== recetaId);
    this.actualizarLocalStorage();
  }

  esFavorito(recetaId: number): boolean {
    return this.favoritos.some((fav) => fav.id === recetaId);
  }

  private actualizarLocalStorage() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
    }
  }
}


