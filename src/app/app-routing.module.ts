import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/users/login/login.component';
import { UsComponent } from './components/about/us/us.component';
import { HistoryComponent } from './components/about/history/history.component';
import { DonationsComponent } from './components/about/donations/donations.component';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  {path: '', component: HomeComponent },
  { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'nosotros', component: UsComponent },
  { path: 'historia', component: HistoryComponent },
  { path: 'home', component: HomeComponent },
  {path:'donaciones', component:DonationsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
