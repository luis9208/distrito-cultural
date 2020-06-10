import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { DataApiService } from 'src/app/services/data-api.service';
import { Eventos } from 'src/app/models/eventos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logged = false;
  eventos= [];


  constructor(private auth: AuthService, private route: Router, private api: DataApiService ) { }

  ngOnInit() {
    this.isLogged();
    this.load();
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

  private load(){
    this.api.getEventos().subscribe({
      next: (eventos: Eventos[])=>{
          for (const e of eventos) {
              this.eventos.push(e);
          }
                  
      }
    } );
  }
 

}
