import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { isUndefined } from 'util';

import { from } from 'rxjs';
import { resolve } from 'url';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  logged = false;
  login = 'Iniciar sesión';

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {

    this.isLogged();

  }

  private isLogged() {
    
    this.auth.isAuth().subscribe({
      next: (data)=>{
       if(isUndefined(data) || data !=null){
        this.logged = true;
        this.login = data.displayName;
        this.route.navigate(['perfil']);
       }
      },
      error: (err)=>{
        this.logged = false;
      }
    });
  }

  salir(){
    this.auth.logout().then(
      data =>{
        
        this.route.navigate(['login']);
       
      }
          
    ).finally(
      function() {
        window.location.reload();
      }
    );
  }
  

}
