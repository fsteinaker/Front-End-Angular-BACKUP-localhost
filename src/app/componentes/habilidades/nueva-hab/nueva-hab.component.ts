import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { habilidades } from '../../model/habilidades.model';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-hab',
  templateUrl: './nueva-hab.component.html',
  styleUrls: ['./nueva-hab.component.css'],
})
export class NuevaHabComponent implements OnInit {
  habilidad: habilidades = new habilidades();

  constructor(
    private habilidadService: PortfolioService,
    public router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.habilidadService
      .postNewHabilidades(this.habilidad)
      .subscribe((dato) => {
        console.log(dato);
      });
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() =>
        this.router.navigate(['/portfolio'])
      );
    swal(
      'Habilidad añadida',
      `Se agrego ${this.habilidad.tipo} a tu lista de habilidades`,
      `success`
    );
  }

  irHome() {
    this.router.navigate(['/portfolio']);
  }
}
