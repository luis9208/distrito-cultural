import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/users/login/login.component';
import { UsComponent } from './components/about/us/us.component';
import { HistoryComponent } from './components/about/history/history.component';
import { DonationsComponent } from './components/about/donations/donations.component';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/users/profile/profile.component';



const routes: Routes = [
  {path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nosotros', component: UsComponent },
  { path: 'historia', component: HistoryComponent },
  { path: 'home', component: HomeComponent },
  {path:'donaciones', component:DonationsComponent},
  {path: 'perfil', component:ProfileComponent},
  {path: '**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
