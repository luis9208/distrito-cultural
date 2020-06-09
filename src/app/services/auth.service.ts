import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


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
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then((result) => {
     console.log('jsjaja');
     
   }).catch((error) => {
     window.alert(error)
   })    
  }

  logout() {
    return this.afAuth.auth.signOut()
  }

}
