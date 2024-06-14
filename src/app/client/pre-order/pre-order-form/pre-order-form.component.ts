import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import {FloatLabelModule} from "primeng/floatlabel";

@Component({
  selector: 'app-pre-order-form',
  standalone: true,
  imports: [InputTextModule, FloatLabelModule],
  templateUrl: './pre-order-form.component.html',
  styleUrl: './pre-order-form.component.scss'
})
export class PreOrderFormComponent {

}
