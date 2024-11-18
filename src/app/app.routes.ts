
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
