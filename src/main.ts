import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Router } from '@angular/router';

// Bootstrap la aplicación
bootstrapApplication(AppComponent, appConfig)
  .then((ref) => {
    const router = ref.injector.get(Router);
    
    // Restablece la posición del scroll después de cada navegación
    router.events.subscribe((event: any) => {
      if (event.constructor.name === 'NavigationEnd') {
        window.scrollTo(0, 0); // Restaura la posición del scroll
      }
    });
  })
  .catch((err) => console.error(err));


