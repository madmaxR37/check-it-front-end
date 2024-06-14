import { Component } from '@angular/core';
import {ItemCategoryListComponent} from "../item-category-list/item-category-list.component";

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [
    ItemCategoryListComponent
  ],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {

}
