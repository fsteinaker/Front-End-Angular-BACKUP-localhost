import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso-negado',
  templateUrl: './acceso-negado.component.html',
  styleUrls: ['./acceso-negado.component.css'],
})
export class AccesoNegadoComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  volverLogin() {
    this.router.navigateByUrl('/iniciar-sesion');
  }
}
