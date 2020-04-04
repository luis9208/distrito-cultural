import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }
  
  loginEmail(email:string, pwd:string) {
    return new Promise(
      (resolve, reject) => {
        this.afAuth.auth.signInWithEmailAndPassword(email, pwd)
          .then(userData => resolve(userData),
          err=>reject(err));
      }
    );
    
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    
  }

  logout() {
    this.afAuth.auth.signOut()
  }

}
