import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  {path:'', redirectTo: 'produtos', pathMatch:'full'}

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
