import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard, isAdmin } from './core/guards/auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { UserComponent } from './components/user/user.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent,canActivate: [AuthGuard,isAdmin]},
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'users', component:UserComponent,canActivate: [AuthGuard,isAdmin]},
  {path:'profile', component:ProfileComponent,canActivate: [AuthGuard]},
  {path:'payments',component:PaymentComponent,canActivate: [AuthGuard]},
  {path:'products',component:ProductComponent,canActivate: [AuthGuard,isAdmin]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
