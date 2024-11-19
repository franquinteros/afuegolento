import { Component,ViewChild,ElementRef, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from '../shared/footer/footer.component';
import { CarouselComponent } from "../carousel/carousel.component";
import { RecetasComponent } from "../recetas/recetas.component";
import { MultimediaComponent } from "../multimedia/multimedia.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CarouselComponent, RecetasComponent, MultimediaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None,
})  
export class HomeComponent {
  // Usamos ViewChild para acceder a la sección de destino
  @ViewChild('sectionDestino') sectionDestino!: ElementRef;

  // Método que realiza el scroll suave a la sección
  scrollToSection(): void {
    this.sectionDestino.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
