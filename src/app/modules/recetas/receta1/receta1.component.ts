import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-receta1',
  standalone: true,
  imports: [],
  templateUrl: './receta1.component.html',
  styleUrl: './receta1.component.css'
})
export class Receta1Component {
  @Input() receta: any;  // Propiedad para recibir datos de cada receta
}
