import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import {AvatarModule} from "primeng/avatar";
import {NgOptimizedImage} from "@angular/common";
import {ItemCategoryListComponent} from "../item-category-list/item-category-list.component";


@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [PanelModule, AvatarModule, NgOptimizedImage, ItemCategoryListComponent],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss'
})

export class ItemDetailComponent {

}
