import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ClientNavComponent} from "./client/client-nav/client-nav.component";
import {SellerNavBarComponent} from "./seller/nav-bar/seller-nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClientNavComponent, SellerNavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
