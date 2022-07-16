import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { proyectos } from '../../model/proyectos.model';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css'],
})
export class NuevoProyectoComponent implements OnInit {
  proyectos: proyectos = new proyectos();

  constructor(
    private proyectosService: PortfolioService,
    public router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.proyectosService.postNewProyectos(this.proyectos).subscribe((dato) => {
      console.log(dato);
    });
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() =>
        this.router.navigate(['/portfolio'])
      );
    swal(
      'Proyecto añadido',
      `Se agrego ${this.proyectos.proyectos} a tu lista de trabajos`,
      `success`
    );
  }

  irHome() {
    this.router.navigate(['/portfolio']);
  }
}
