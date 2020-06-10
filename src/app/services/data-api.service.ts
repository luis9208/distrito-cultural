import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from  '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Eventos } from '../models/eventos';
import { map } from 'rxjs/operators';
import { Documentos } from '../models/documents';


@Injectable({
  providedIn: 'root'
})

export class DataApiService {

  private fotosCollection: AngularFirestoreCollection<Eventos>;
  private fotos: Observable<Eventos[]>;
  private documentsCollection: AngularFirestoreCollection<Documentos>;
  private documentos: Observable<Documentos[]>;

  constructor(private afs: AngularFirestore) { 
    this.fotosCollection = afs.collection<Eventos>('eventos');
    this.fotos = this.fotosCollection.valueChanges();
    this.documentsCollection = afs.collection<Documentos>('documentos');
    this.documentos = this.documentsCollection.valueChanges();
  }

  addEvento(evento: Eventos){
    this.fotosCollection.add(evento);
  }
  getEventos(){
    return this.fotos;
  }

  getDocuments(){
    return this.documentos;
  }
}
