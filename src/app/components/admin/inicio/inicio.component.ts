import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  upload(e){
    let id = Math.random().toString(36).substring(2);
    let file = e.target.files[0];
    console.log(file.name);
    
    let filePath = `eventos/imagenes/${id}_${file}`;
    let ref = this.storage.ref(filePath);
    let task = this.storage.upload(filePath, file);

  }

}
