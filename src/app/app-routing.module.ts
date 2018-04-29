import {NgModule} from '@angular/core';
import {ErrorPageComponent} from './error-page/error-page.component';
import {RouterModule, Routes} from '@angular/router';
import {CoinsComponent} from './coins/coins.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', component: CoinsComponent },
  { path: 'home', component: CoinsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found !!!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
    // RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
