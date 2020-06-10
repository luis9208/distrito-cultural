import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { isUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logged = false;

  constructor(private auth: AuthService, private route: Router ) { }

  ngOnInit() {
    this.isLogged();
  }

  private isLogged() {
    
    this.auth.isAuth().subscribe({
      next: (data)=>{
          if(data){
          this.route.navigate(['admin']);
        }
      },
      error: (err)=>{
        
      }
    });
  }

 

}
