import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { HomepageComponent } from './component/homepage/homepage.component';


const routes: Routes = [
  {path:'', redirectTo:'homepage', pathMatch:'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'product', component: ProductComponent},
  {path: 'cart', component: CartComponent},
  {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
