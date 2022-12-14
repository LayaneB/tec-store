import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  {path:'', redirectTo: 'produtos', pathMatch:'full'},
  { path: 'carrinho', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'contato', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  {
    path:'**', component:NotFoundComponent
  }

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouteModule { }
