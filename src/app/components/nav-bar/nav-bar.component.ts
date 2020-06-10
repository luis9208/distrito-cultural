import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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
        this.logged = true;
        this.login = data.displayName;
        this.route.navigate(['perfil']);
        
      },
      error: (err)=>{
        
      }
    });
  }

  salir(){
    this.auth.logout().then((res)=>{
      this.logged = false;
      this.login = 'Iniciar sesion';
    }).catch((err)=>{
      
    })
  }

  

}
