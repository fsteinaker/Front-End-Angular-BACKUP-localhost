import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userLogged = this.AuthService.getUserLogged();

  constructor(private AuthService: AuthService, public router: Router) {}

  ngOnInit(): void {}

  home() {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/portfolio']));
  }

  salirApp() {
    swal({
      title: '¿Queres salir de la app?',
      text: 'Confirma si deseas salir del Portfolio',
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#c70e0e',
      cancelButtonColor: '#196bc2',
      confirmButtonText: 'Salir',
      cancelButtonText: 'Volver',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    }).then((result) => {
      if (result.value) {
        this.AuthService.logout();
        this.router.navigateByUrl('/iniciar-sesion');
        swal(
          'Has salido de la app',
          'Te esparamos pronto en #YoProgramo',
          'success'
        );
        }
  })
  }
}
