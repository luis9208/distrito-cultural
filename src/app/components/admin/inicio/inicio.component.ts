import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  private uploadPercent: Observable<number>;
  private urlImage: Observable<string>;

  constructor(private storage: AngularFireStorage, private route:Router) { }

  ngOnInit() {
  }

  upload(e){
    let id = Math.random().toString(36).substring(2);
    let file = e.target.files[0];
    
    let filePath = `eventos/imagenes/${id}_${file.name}`;
    
    let ref = this.storage.ref(filePath);
    let task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(()=>this.urlImage= ref.getDownloadURL() ))
      .subscribe();

  }

  subir(){
    this.route.navigate(['']);
  }

}
