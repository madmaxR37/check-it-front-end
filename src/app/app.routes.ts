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
      },
      {
        path:'pre-order-detail',
        loadComponent:()=> import('./client/pre-order/pre-order-detail/pre-order-detail.component').then(m=>m.PreOrderDetailComponent)
      },
      {
        path:'methode-payment',
        loadComponent:()=> import('./client/payment/payment-options/payment-options.component').then(m=>m.PaymentOptionsComponent)
      },
      {
        path:'orders',
        loadComponent:()=> import('./client/order/orders-list/orders-list.component').then(m=>m.OrdersListComponent)
      },
      {
        path:'orders-detail',
        loadComponent:()=> import('./client/order/orders-detail/orders-detail.component').then(m=>m.OrdersDetailComponent)
      },
      {
        path:'litigation',
        loadComponent:()=> import('./client/litigations/litigations.component').then(m=>m.LitigationsComponent)
      },
      {
        path:'profile',
        loadComponent:()=> import('./client/profile/profile-page/profile-page.component').then(m=>m.ProfilePageComponent)
      },
      {
        path:'profile-detail',
        loadComponent:()=> import('./client/profile/profile-detail/profile-detail.component').then(m=>m.ProfileDetailComponent)
      }
    ]

  },
  {
    path:'seller',
    loadComponent:()=> import('./seller/seller.component').then(m=>m.SellerComponent),
    children:[
      {
        path:'dash-board',
        loadComponent:()=> import('./seller/dash-board/dash-board.component').then(m=>m.DashBoardComponent)
      },
      {
        path:'items',
        loadComponent:()=> import('./seller/item/item-list/item-list.component').then(m=>m.ItemListComponent)
      },
      {
        path:'new-item',
        loadComponent:()=> import('./seller/item/add-item/add-item.component').then(m=>m.AddItemComponent)
      },
      {
        path:'edit-item',
        loadComponent:()=> import('./seller/item/modify-item/modify-item.component').then(m=>m.ModifyItemComponent)
      },
      {
        path:'offers',
        loadComponent:()=> import('./seller/offer/offer.component').then(m=>m.OfferComponent)
      }
    ]
  }
];
