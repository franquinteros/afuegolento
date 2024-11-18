import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./modules/home/home.component";
import { MenuComponent } from "./modules/shared/menu/menu.component";
import { HeaderComponent } from './modules/shared/header/header.component';
import { ContactComponent } from './modules/contact/contact.component';
import { UsComponent } from './modules/us/us.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { CarouselComponent } from "./modules/carousel/carousel.component";
import { LoginComponent } from './modules/login/login.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponent, MenuComponent, HeaderComponent, FooterComponent, CarouselComponent, LoginComponent,ContactComponent,UsComponent, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'afuegolento';
}





