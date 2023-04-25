import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logo = "../../assets/steam.png";
  nav_items = ['Steam', 'Ação', 'RPG']
}
