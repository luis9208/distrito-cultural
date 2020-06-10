import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logged = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.isLogged();
  }

  private isLogged() {
    
    this.auth.isAuth().subscribe({
      next: (data)=>{
          
          this.logged = true;
      },
      error: (err)=>{
        
      }
    });
  }

}
