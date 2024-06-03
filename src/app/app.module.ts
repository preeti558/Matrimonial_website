import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './mainAbout/about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './userDetails/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './userDetails/register/register.component';
import { ForgotpasswordComponent } from './userDetails/forgotpassword/forgotpassword.component';
import { ServiceComponent } from './websiteServices/service/service.component';
import { DashboardComponent } from './userDetails/dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.development';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { VerifyEmailComponent } from './userDetails/verify-email/verify-email.component';
import { LoginButtonComponent } from './userDetails/login-button/login-button.component';
import { StartingComponent } from './starting/starting.component';
import { ContactComponent } from './contactt/contact/contact.component';
import { EduInfoComponent } from './userDetails/edu-info/edu-info.component';
import { FamilyInfoComponent } from './userDetails/family-info/family-info.component';
import { UserInfoComponent } from './userDetails/user-info/user-info.component';
import { PersonalInfoComponent } from './userDetails/personal-info/personal-info.component';
import { About1Component } from './mainAbout/about1/about1.component';
import { Service1Component } from './websiteServices/service1/service1.component';
import { Contact1Component } from './contactt/contact1/contact1.component';
import { GroomInformationComponent } from './websiteServices/groom-information/groom-information.component';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { withFetch } from '@angular/common/http';
import { ROUTES, RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './userDetails/reset-password/reset-password.component';
import { AdminComponent } from './admin/admin.component';
import { LocationBookingComponent } from './location-booking/location-booking.component';
import { GroomsComponent } from './websiteServices/grooms/grooms.component';
import { BridesComponent } from './websiteServices/brides/brides.component';
import { BrideInformationComponent } from './websiteServices/bride-information/bride-information.component';
import { ChatComponent } from './websiteServices/chat/chat.component';
import { DifferentiatorComponent } from './websiteServices/differentiator/differentiator.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ServiceComponent,
    DashboardComponent,
    VerifyEmailComponent,
    LoginButtonComponent,
    StartingComponent,
    ContactComponent,
    EduInfoComponent,
    FamilyInfoComponent,
    UserInfoComponent,
    PersonalInfoComponent,
    About1Component,
    Service1Component,
    Contact1Component,
    GroomInformationComponent,
    UserInfoComponent,
    ResetPasswordComponent,
    AdminComponent,
    LocationBookingComponent,
    GroomsComponent,
    BridesComponent,
    BrideInformationComponent,
    ChatComponent,
    DifferentiatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ], 
  providers: [
    HttpClientModule,
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
