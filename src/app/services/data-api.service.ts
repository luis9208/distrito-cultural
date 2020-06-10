import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from  '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Eventos } from '../models/eventos';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class DataApiService {

  private fotosCollection: AngularFirestoreCollection<Eventos>;
  private fotos: Observable<Eventos[]>;
  constructor(private afs: AngularFirestore) { 
    this.fotosCollection = afs.collection<Eventos>('eventos');
    this.fotos = this.fotosCollection.valueChanges();
  }

  getEventos(){
    return this.fotos;
  }
}
