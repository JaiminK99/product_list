import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';



const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'productList',
    pathMatch: 'full'
  },
  {
    path: 'productList',
    component: ProductListComponent
  }
];

// We have to create different routes for different modules??

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
