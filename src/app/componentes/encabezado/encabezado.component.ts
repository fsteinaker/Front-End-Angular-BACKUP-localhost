import { Component, OnInit } from '@angular/core';

import { persona } from '../model/persona.model';
import { localidad } from '../model/localidad.model';

import { PortfolioService } from 'src/app/services/portfolio.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
})
export class EncabezadoComponent implements OnInit {
  persona: persona | any;
  localidad: localidad | any;
  authService: any;

  constructor(
    public personaService: PortfolioService,
    public localidadService: PortfolioService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.personaService.getPersona().subscribe((data) => {
      console.log(data);
      this.persona = data;
    }),
      this.localidadService.getLocalidad().subscribe((data) => {
        console.log(data);
        this.localidad = data;
      });
  }

  editarEncabezado(id: number) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/editar-encabezado', id]));
  }
}
