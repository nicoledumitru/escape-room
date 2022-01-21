import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { ShopComponent } from './components/shop/shop.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { CartComponent } from './components/cart/cart.component';
import { Room1Component } from './components/rooms/room1/room1.component';
import { Room2Component } from './components/rooms/room2/room2.component';
import { Room3Component } from './components/rooms/room3/room3.component';

import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, 
        MonthService } from '@syncfusion/ej2-angular-schedule';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    RoomsComponent,
    ShopComponent,
    AppointmentsComponent,
    ContactComponent,
    NewsletterComponent,
    CartComponent,
    Room1Component,
    Room2Component,
    Room3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ScheduleModule,
    RecurrenceEditorModule,
    HttpClientModule
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
