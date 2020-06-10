import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  urlImage: Observable<string>;

  constructor(private storage: AngularFireStorage) { }

  subir(filePath:string, file){
    let ref = this.storage.ref(filePath);
    let task = this.storage.upload(filePath, file);
    task.snapshotChanges().pipe(finalize(()=>this.urlImage= ref.getDownloadURL() ))
      .subscribe();
  }

}
