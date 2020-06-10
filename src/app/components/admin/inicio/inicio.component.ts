import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { DataApiService } from 'src/app/services/data-api.service';
import { Documentos } from 'src/app/models/documents';
import { Eventos } from 'src/app/models/eventos';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  private uploadPercent: Observable<number>;
  private urlImage: Observable<string>;
  extensiones:string;
  documentos =[];
  evento: Eventos;

  constructor(private storage: StorageService, 
    private api: DataApiService,
    private route:Router) {
    this.extensiones='.doc, .docx, .pdf ';
    this.evento={
      nombre:'',
      descripcion:'',
      fecha:null,
      imagenes:[]
    }
   }

  ngOnInit() {
    this.load();
  }

  upload(e){
    let id = Math.random().toString(36).substring(2);
    let file = e.target.files[0];
    
    let filePath = `eventos/imagenes/${id}_${file.name}`;
    this.storage.subir(filePath, file);
    
  }

  uploadDocs(e){
    let file = e.target.files[0];
    let filePath = `Documentos/${file.name}`;
    this.storage.subir(filePath, file);
    
    
  }

  subir(){
    this.api.addEvento(this.evento);
    this.route.navigate(['']);


  }

  load(){
    this.api.getDocuments().subscribe({
      next: (docs: Documentos[])=>{
        for (const doc of docs) {
          this.documentos.push(doc);
        }
      }
    })
  }

}
