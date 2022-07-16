import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { proyectos } from '../../model/proyectos.model';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {
  id: number;
  proyecto: proyectos;

  constructor(
    public proyectoService: PortfolioService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.proyectoService.detalleProyecto(this.id).subscribe((dato: proyectos) => {
      this.proyecto = dato;
    });
  }

  onSubmit() {
    this.proyectoService.updateProyectos(this.id, this.proyecto).subscribe();
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/portfolio']));
    swal(
      'Información actualizada',
      `El proyecto ha sido modificado`,
      `success`
    );
  }

  irHome() {
    this.router.navigate(['/portfolio']);
  }
}