import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../services/favoritos.service';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  standalone: true ,
  imports: [NgClass, NgFor]
})
export class RecetasComponent implements OnInit {
  recetas = [
    {
      id: 1,
      nombre: 'Receta 1',
      descripcion: 'Una breve descripción de la receta 1.',
      imagen: 'https://via.placeholder.com/300x200',
      url: '/ruta-a-receta-1',
    },
    {
      id: 2,
      nombre: 'Receta 2',
      descripcion: 'Una breve descripción de la receta 2.',
      imagen: 'https://via.placeholder.com/300x200',
      url: '/ruta-a-receta-2',
    },
    {
      id: 3,
      nombre: 'Receta 2',
      descripcion: 'Una breve descripción de la receta 2.',
      imagen: 'https://via.placeholder.com/300x200',
      url: '/ruta-a-receta-2',
    },
    {
      id: 4,
      nombre: 'Receta 2',
      descripcion: 'Una breve descripción de la receta 2.',
      imagen: 'https://via.placeholder.com/300x200',
      url: '/ruta-a-receta-2',
    },
    {
      id: 5,
      nombre: 'Receta 2',
      descripcion: 'Una breve descripción de la receta 2.',
      imagen: 'https://via.placeholder.com/300x200',
      url: '/ruta-a-receta-2',
    },
    {
      id: 6,
      nombre: 'Receta 2',
      descripcion: 'Una breve descripción de la receta 2.',
      imagen: 'https://via.placeholder.com/300x200',
      url: '/ruta-a-receta-2',
    },
    {
      id: 7,
      nombre: 'Receta 2',
      descripcion: 'Una breve descripción de la receta 2.',
      imagen: 'https://via.placeholder.com/300x200',
      url: '/ruta-a-receta-2',
    },
    {
      id: 8,
      nombre: 'Receta 2',
      descripcion: 'Una breve descripción de la receta 2.',
      imagen: 'https://via.placeholder.com/300x200',
      url: '/ruta-a-receta-2',
    },
    {
      id: 9,
      nombre: 'Receta 2',
      descripcion: 'Una breve descripción de la receta 2.',
      imagen: 'https://via.placeholder.com/300x200',
      url: '/ruta-a-receta-2',
    },
    {
      id: 10,
      nombre: 'Receta 2',
      descripcion: 'Una breve descripción de la receta 2.',
      imagen: 'https://via.placeholder.com/300x200',
      url: '/ruta-a-receta-2',
    },
    {
      id: 11,
      nombre: 'Receta 2',
      descripcion: 'Una breve descripción de la receta 2.',
      imagen: 'https://via.placeholder.com/300x200',
      url: '/ruta-a-receta-2',
    },
    {
      id: 12,
      nombre: 'Receta 2',
      descripcion: 'Una breve descripción de la receta 2.',
      imagen: 'https://via.placeholder.com/300x200',
      url: '/ruta-a-receta-2',
    },
    // Más recetas
  ];

  constructor(private favoritosService: FavoritosService) {}

  ngOnInit(): void {}

  toggleFavorito(receta: any) {
    if (this.favoritosService.esFavorito(receta.id)) {
      this.favoritosService.eliminarDeFavoritos(receta.id);
    } else {
      this.favoritosService.agregarAFavoritos(receta);
    }
  }

  esFavorito(recetaId: number): boolean {
    return this.favoritosService.esFavorito(recetaId);
  }
}

