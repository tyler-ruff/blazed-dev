import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Services
import { AppService } from './shared/app.service';

// Pages 
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProductsComponent } from './pages/products/products.component';

// Components
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HrComponent } from './components/hr/hr.component';

//Widgets
import { CtaComponent } from './widgets/cta/cta.component';
import { IntroComponent } from './widgets/intro/intro.component';
import { MottoComponent } from './widgets/motto/motto.component';
import { ContactInfoComponent } from './widgets/contact-info/contact-info.component';

// Utilities
import { LazyLoadDirective } from './utils/lazyload.directive';
import { PhoneFormatPipe } from './utils/format-phone.pipe';
import { RelativeTimePipe } from './utils/relative-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LazyLoadDirective,
    PhoneFormatPipe,
    RelativeTimePipe,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HrComponent,
    HomeComponent,
    CtaComponent,
    IntroComponent,
    MottoComponent,
    ContactInfoComponent,
    ServicesComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
