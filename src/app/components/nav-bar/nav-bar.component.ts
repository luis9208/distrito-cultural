import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  logged = false;
  login = 'Iniciar sesión';

  constructor() { }
  ngOnInit() {
  }

  isLogged() {
    if (this.logged) {
      return this.login = 'perfil';
    }
    else {
      return this.login;
    }
  }

  

}
