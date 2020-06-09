import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mailField = 'Correo';
  pwdField = 'Contraseña';
  
  constructor(private authService: AuthService, private route:Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.loginGoogle()
    .then((res)=>{
      
      this.route.navigate(['']);
      
    })
    .catch(
      (ex)=>{
        alert('hubo un error y no es posible acceder ahora');
        
      }
    );
  }

}
