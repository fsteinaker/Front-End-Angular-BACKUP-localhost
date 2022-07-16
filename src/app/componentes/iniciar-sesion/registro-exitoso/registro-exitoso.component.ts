import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-exitoso',
  templateUrl: './registro-exitoso.component.html',
  styleUrls: ['./registro-exitoso.component.css'],
})
export class RegistroExitosoComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  volverLogin() {
    this.router.navigateByUrl('/iniciar-sesion');
  }
}
