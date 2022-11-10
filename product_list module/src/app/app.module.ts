import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductModuleComponent } from './product-module/product-module.component';


// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'Products',
//     pathMatch: 'full'
//   },
//   {
//     path: 'Products',
//     component: AppComponent
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
