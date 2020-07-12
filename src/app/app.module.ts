import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegComponent } from './reg/reg.component';
import {RouterModule, Routes} from  '@angular/router';
import { from } from 'rxjs';
import { FooterComponent } from './footer/footer.component';
import {FlashMessagesModule} from 'angular2-flash-messages'
import {CheakFormService} from "./services/cheak-form.service"
import {AuthService} from "./services/auth.service"
import {DecreeService} from "./services/decree.service"
import {ProtocolService} from "./services/protocol.service"
import {HttpClientModule} from '@angular/common/http';

import {IsLoggedIn} from './isLoggerd.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPipe } from './pipes/serchfilter.pipe';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ProtocolComponent } from './protocol/protocol.component';
import { DecreeComponent } from './decree/decree.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
const appRoute: Routes=[
  {path:'', component: HomeComponent},
  {path:'reg', component: RegComponent},
  {path:'auth', component: AuthComponent},
  {path:'protocol/:id', component: ProtocolComponent},
  {path:'dashbord', component: DashboardComponent,canActivate:[IsLoggedIn]},
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    RegComponent,
    FooterComponent,
    SearchPipe,
    ProtocolComponent,
    DecreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    SwiperModule,
    ReactiveFormsModule
  ],
  providers: [
    CheakFormService,
    AuthService,
    IsLoggedIn,
    DecreeService,
    ProtocolService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
