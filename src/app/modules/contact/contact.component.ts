import { Component } from '@angular/core';
import { MenuComponent } from "../shared/menu/menu.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
