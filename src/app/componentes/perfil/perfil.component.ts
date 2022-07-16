import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { persona } from '../model/persona.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  persona: persona | any;

  constructor(
    public personaService: PortfolioService,
    public localidadService: PortfolioService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.personaService.getPersona().subscribe((data) => {
      console.log(data);
      this.persona = data;
    });
  }

  editarPerfil(id: number) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/editar-perfil', id]));
  }
}
