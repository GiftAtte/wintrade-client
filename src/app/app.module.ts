import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoBoxComponent } from './shared/info-box/info-box.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ChooseUsComponent } from './components/choose-us/choose-us.component';
import { SupportComponent } from './shared/support/support.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CustomeHeaderComponent } from './custome-header/custome-header.component';
import { TableModule } from 'ngx-easy-table';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authInterceptorProviders } from './core/interceptors/auth.interceptor';
import { ProfileComponent } from './components/profile/profile.component';
import { MaterialModule } from './material/material.module';
import { HighlightDirective } from './directives/highlight.directive';
import { PercentagePipe } from './pipes/percentage.pipe';
import { InputComponent } from './shared/input/input.component';
import { Angular4PaystackModule } from 'angular4-paystack';
import { ProductComponent } from './components/product/product.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    OurServicesComponent,
    ChooseUsComponent,
    SupportComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ContactUsComponent,
    UserComponent,
    CustomeHeaderComponent,
    CustomeHeaderComponent,
    DashboardComponent,
    ProfileComponent,
    UserComponent,
    HighlightDirective,
    PercentagePipe,
    InputComponent,
    ProductComponent,
    PaymentComponent,

    
  ],
  imports: [
    TooltipModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    InfoBoxComponent,
    BrowserAnimationsModule,
    TestimonialComponent,
    RouterModule,
    TableModule,
    SidebarComponent,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
   MaterialModule,
   ToastrModule.forRoot(), 
   Angular4PaystackModule.forRoot('pk_live_54378a2a7f89c38b761c29a7c657d5d553be4726'),
  ],

  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
