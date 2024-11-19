import { Component } from '@angular/core';
import { MenuComponent } from "../shared/menu/menu.component";
import { FooterComponent } from '../shared/footer/footer.component';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MenuComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
