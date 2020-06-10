import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
// Firebase Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { TesoreriaComponent } from './components/admin/tesoreria/tesoreria.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { EventsComponent } from './components/events/events.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DonationsComponent } from './components/about/donations/donations.component';
import { HistoryComponent } from './components/about/history/history.component';
import { UsComponent } from './components/about/us/us.component';




import { MatExpansionModule } from '@angular/material/expansion';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { AngularFirestore} from '@angular/fire/firestore';
import { InicioComponent } from './components/admin/inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TesoreriaComponent,
    HomeComponent,
    ModalComponent,
    EventsComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    Page404Component,
    NavBarComponent,
    DonationsComponent,
    HistoryComponent,
    UsComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    // Fire base
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,  
  ],
  providers: [AngularFireModule,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
