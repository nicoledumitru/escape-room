import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { ShopComponent } from './components/shop/shop.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { ContactComponent } from './components/contact/contact.component';
import { Room1Component } from './components/rooms/room1/room1.component';
import { Room2Component } from './components/rooms/room2/room2.component';
import { Room3Component } from './components/rooms/room3/room3.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cart', component: CartComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'appointments', component: AppointmentsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'rooms/room1', component: Room1Component},
  {path: 'rooms/room2', component: Room2Component},
  {path: 'rooms/room3', component: Room3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, RoomsComponent, ShopComponent, AppointmentsComponent, ContactComponent, LoginComponent,
  Room1Component, Room2Component, Room3Component, CartComponent]
