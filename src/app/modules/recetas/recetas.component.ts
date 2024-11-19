import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../services/favoritos.service';
import { RouterLink } from '@angular/router';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  standalone: true ,
  imports: [NgClass, NgFor, RouterLink,]
})
export class RecetasComponent implements OnInit {
  recetas = [
    {
      id: 1,
      nombre: 'Asado Argentino',
      descripcion: 'El emblema de la cocina argentina.',
      imagen: '/receta-asado.jpg',
      url: '/receta1',
    },
    {
      id: 2,
      nombre: 'Pollo al Disco',
      descripcion: 'Un clásico para cocinar al aire libre, en un disco de arado.',
      imagen: '/receta-pad.jpg',
      url: '/receta2',
    },
    {
      id: 3,
      nombre: 'Empanadas Criollas',
      descripcion: 'Perfectas para cualquier ocasión, estas empanadas combinan tradición y sabor.',
      imagen: '/receta-emp.jpg',
      url: '/receta3',
    },
    {
      id: 4,
      nombre: 'Milanesa Napolitana',
      descripcion: 'Un plato clásico argentino, perfecto para disfrutar con una guarnición de papas fritas o puré.',
      imagen: '/receta-napo.jpeg',
      url: '/receta4',
    },
    {
      id: 5,
      nombre: 'Choripán con Chimichurri',
      descripcion: 'El clásico argentino que nunca falla.',
      imagen: '/receta-chori.webp',
      url: '/receta5',
    },
    {
      id: 6,
      nombre: 'Matambre a la Pizza',
      descripcion: 'Un plato que combina la pasión por el asado y la pizza.',
      imagen: '/receta-mpizza.webp',
      url: '/receta6',
    },
    {
      id: 7,
      nombre: 'Ojo de Bife a la Parrilla',
      descripcion: 'Un corte jugoso y lleno de sabor.',
      imagen: '/receta-ojodb.jpg',
      url: '/receta7',
    },
    {
      id: 8,
      nombre: 'Costillas de Cerdo con Salsa Barbacoa',
      descripcion: 'Un plato tierno y lleno de sabor.',
      imagen: '/receta-barbacoa.jpg',
      url: '/receta8',
    },
    {
      id: 9,
      nombre: 'Bondiola de Cerdo a la Parrilla',
      descripcion: 'Un corte tierno y jugoso para disfrutar.',
      imagen: '/receta-bondiola.webp',
      url: '/receta9',
    },
    {
      id: 10,
      nombre: 'Provoleta a la Parrilla',
      descripcion: 'Un delicioso inicio para cualquier asado.',
      imagen: '/receta-provo.jpg',
      url: '/receta10',
    },
    {
      id: 11,
      nombre: 'Chivito al Asador',
      descripcion: 'Un plato tradicional del campo argentino.',
      imagen: '/receta-chivito.jpg',
      url: '/receta11',
    },
    {
      id: 12,
      nombre: 'Cordero al Asador',
      descripcion: 'Una de las preparaciones más tradicionales y deliciosas de la cocina argentina.',
      imagen: '/receta-cordero.jpg',
      url: '/receta12',
    },
    // Más recetas
  ];

  constructor(private favoritosService: FavoritosService) {}

  ngOnInit(): void {}

  // Función para agregar o eliminar recetas de los favoritos
  toggleFavorito(receta: any): void {
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

