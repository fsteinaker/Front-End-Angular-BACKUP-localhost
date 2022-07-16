import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afauth: AngularFireAuth, private router: Router) {}

  async login(email: string, password: string) {
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log('error en login: ', err);
      return null;
    }
  }

  async register(email: string, password: string) {
    try {
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log('error en registro: ', err);
      return null;
    }
  }

  async loginWithGoogle(email: string, password: string) {
    try {
      return await this.afauth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
    } catch (err) {
      console.log('error en login con Google: ', err);
      return null;
    }
  }

  // RESETEAR PASSWORD OLVIDADO
  ForgotPassword(passwordResetEmail: string) {
    return this.afauth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Se ha mandado un mail a tu cuenta de correo. Verfifica tu casilla SPAM o correo no deseado');
        this.router.navigateByUrl('/iniciar-sesion');
      })
      .catch(() => {
        window.alert('Ingresa una cuenta de correo registrada para restablecer la contraseña');
      });
  }

  getUserLogged() {
    return this.afauth.authState;
  }

  logout() {
    this.afauth.signOut();
  }
}
