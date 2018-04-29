import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CoinsComponent } from './coins/coins.component';
import { CtaService } from './service/cta.service';
import { HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AppRoutingModule } from './app-routing.module';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthService} from './service/auth.service';
import { DataTablesModule } from 'angular-datatables';
import { AuthGuardService } from './auth/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoinsComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [CtaService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
