import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent {
  usuario = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}
  /**
   * REVISAR, TIENE QUE HACER UN IF PARA VER SI ES CORRECTO EL LOGIN
   */
  Ingresar() {
    console.log(this.usuario);
    const { email, password } = this.usuario;
    this.authService.login(email, password).then((res) => {
      if (res) {
        console.log('res -> ', res);
        this.router.navigate(['/portfolio']);
      } else {
        this.router.navigate(['/error']);
      }
    });
  }

  IngresarConGoogle() {
    const { email, password } = this.usuario;
    this.authService.loginWithGoogle(email, password).then((res) => {
      console.log('Inicio sesion con Google: ', res);
      this.router.navigateByUrl('/portfolio');
    });
  }
}
