import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddPropertyComponent } from './Seller/add-property/add-property.component';
import { AllPropertyComponent } from './Seller/all-property/all-property.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicInterfaceComponent } from './public-interface/public-interface.component';



const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'sellerView' , component : PublicInterfaceComponent , pathMatch : 'full'},
  { path : 'properties' , component : AllPropertyComponent, pathMatch : 'full'},
  { path : 'add-Property' , component : AddPropertyComponent, pathMatch : 'full'},
  { path : '**', component : AllPropertyComponent}
  // { path : 'addProperty' , component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
