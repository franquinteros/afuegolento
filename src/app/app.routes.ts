
import { Routes, provideRouter, withInMemoryScrolling } from '@angular/router';
import { ApplicationConfig } from '@angular/core';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { FavoritosComponent } from './modules/favoritos/favoritos.component';
import { MenuComponent } from './modules/shared/menu/menu.component';
import { HeaderComponent } from './modules/shared/header/header.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { CarouselComponent } from './modules/carousel/carousel.component';
import { SeguimientoComponent } from './modules/seguimiento/seguimiento.component';
import { ContactComponent } from './modules/contact/contact.component';
import { UsComponent } from './modules/us/us.component';
import { Receta1Component } from './modules/recetas/receta1/receta1.component';
import { Receta2Component } from './modules/recetas/receta2/receta2.component';
import { Receta3Component } from './modules/recetas/receta3/receta3.component';
import { Receta4Component } from './modules/recetas/receta4/receta4.component';
import { Receta5Component } from './modules/recetas/receta5/receta5.component';
import { Receta6Component } from './modules/recetas/receta6/receta6.component';
import { Receta7Component } from './modules/recetas/receta7/receta7.component';
import { Receta8Component } from './modules/recetas/receta8/receta8.component';
import { Receta9Component } from './modules/recetas/receta9/receta9.component';
import { Receta10Component } from './modules/recetas/receta10/receta10.component';
import { Receta11Component } from './modules/recetas/receta11/receta11.component';
import { Receta12Component } from './modules/recetas/receta12/receta12.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'favoritos', component: FavoritosComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'carousel', component: CarouselComponent },
    { path: 'seguimiento', component: SeguimientoComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'us', component: UsComponent },
    { path: 'receta1', component: Receta1Component },
    { path: 'receta2', component: Receta2Component },
    { path: 'receta3', component: Receta3Component },
    { path: 'receta4', component: Receta4Component },
    { path: 'receta5', component: Receta5Component },
    { path: 'receta6', component: Receta6Component },
    { path: 'receta7', component: Receta7Component },
    { path: 'receta8', component: Receta8Component },
    { path: 'receta9', component: Receta9Component },
    { path: 'receta10', component: Receta10Component },
    { path: 'receta11', component: Receta11Component },
    { path: 'receta12', component: Receta12Component },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled', // Restaurar la posición del scroll
        anchorScrolling: 'enabled', // Habilitar scroll por anclas (opcional)
      })
    ),
  ],
};
