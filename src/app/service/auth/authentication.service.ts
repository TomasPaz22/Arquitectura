import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from 'firebase/auth';


// authentication.service.ts



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private afAuth: AngularFireAuth) {}

  loginWithEmailAndPassword(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return this.afAuth.signInWithPopup(provider);
  }

  signInWithFacebook() {
    const provider = new FacebookAuthProvider();
    return this.afAuth.signInWithPopup(provider);
  }

  signInWithGitHub() {
    const provider = new GithubAuthProvider();
    return this.afAuth.signInWithPopup(provider);
  }

  signOut() {
    return this.afAuth.signOut();
  }
}

