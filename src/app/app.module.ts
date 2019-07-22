import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './elements/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './elements/footer/footer.component';
import { LoginModal } from './modals/login/login.modal';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MatFormFieldModule } from '@angular/material/form-field';
import { LocalStorageModule } from 'angular-2-local-storage';
import { LoginService } from './modals/login/login.service';
import { SlideshowModule } from 'ng-simple-slideshow';
import { SliderComponent } from './elements/slider/slider.component'
import { HomeService } from './pages/home/home.service';
import { TripsComponent } from './pages/trips/trips.component';
import { TripService } from './pages/trips/trips.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginModal,
    SliderComponent,
    TripsComponent
  ],
  imports: [
    LocalStorageModule.forRoot({
      prefix: 'app-root',
      storageType: 'localStorage'
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    SlideshowModule,
    MatExpansionModule,
    MatGridListModule

  ],
  entryComponents: [
    LoginModal
  ],
  providers: [
    LoginService,
    HomeService,
    TripService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
