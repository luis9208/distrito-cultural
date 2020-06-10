import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  logged = false;
  login = 'Iniciar sesión';

  constructor(private auth: AuthService) { }

  ngOnInit() {

    this.isLogged();

  }

  private isLogged() {
    
    this.auth.isAuth().subscribe({
      next: (data)=>{
        this.logged = true;
        this.login = data.displayName;
        
      },
      error: (err)=>{
        
      }
    });
  }

  

}
