import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LtiaCarouselComponent } from './home/ltia-carousel/ltia-carousel.component';
import { LtiaCarouselItemComponent } from './home/ltia-carousel/ltia-carousel-item/ltia-carousel-item.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { LocationComponent } from './location/location.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LtiaCarouselComponent,
    LtiaCarouselItemComponent,
    MenuComponent,
    AboutComponent,
    FooterComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
