import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'client/item-list', pathMatch: 'full' },
  {
    path:'client',
    loadComponent: ()=> import('./client/client.component').then(m=>m.ClientComponent),
    children: [
      {
        path:'item-list',
        loadComponent:()=> import('./client/item-list/item-list.component').then(m=>m.ItemListComponent)
      },
      {
        path:'item-detail',
        loadComponent:()=> import('./client/item-detail/item-detail.component').then(m=>m.ItemDetailComponent)
      },
      {
        path:'carts',
        loadComponent:()=> import ('./client/cart/cart.component').then(m=>m.CartComponent)
      },
      {
        path:'pre-order-form',
        loadComponent:()=> import ('./client/pre-order/pre-order-form/pre-order-form.component').then(m=>m.PreOrderFormComponent)
      }
    ]

  }
];
