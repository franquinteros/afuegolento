import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
