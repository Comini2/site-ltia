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
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './project/project.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { JsonService } from './json.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LtiaCarouselComponent,
    LtiaCarouselItemComponent,
    MenuComponent,
    AboutComponent,
    FooterComponent,
    LocationComponent,
    ContactComponent,
    ProjectComponent,
    ProjectInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    ReactiveFormsModule
  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
