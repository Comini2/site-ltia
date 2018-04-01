import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LtiaCarouselComponent } from './home/ltia-carousel/ltia-carousel.component';
import { OrderModule } from 'ngx-order-pipe';
import { LtiaCarouselItemComponent } from './home/ltia-carousel/ltia-carousel-item/ltia-carousel-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LtiaCarouselComponent,
    LtiaCarouselItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
