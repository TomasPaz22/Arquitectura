import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/service/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthenticationService) {}

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then(() => {
      })
      .catch(error => {
        console.error('Error en el inicio de sesión con Google:', error);
      });
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
      .then(() => {
      })
      .catch(error => {
        console.error('Error en el inicio de sesión con Facebook:', error);
      });
  }

  signInWithGitHub() {
    this.authService.signInWithGitHub()
      .then(() => {
      })
      .catch(error => {
        console.error('Error en el inicio de sesión con GitHub:', error);
      });
  }
}
