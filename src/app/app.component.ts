import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ClientNavComponent} from "./client/client-nav/client-nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ClientNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
