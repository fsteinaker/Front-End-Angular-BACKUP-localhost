import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { habilidades } from '../../model/habilidades.model';

@Component({
  selector: 'app-editar-hab',
  templateUrl: './editar-hab.component.html',
  styleUrls: ['./editar-hab.component.css'],
})
export class EditarHabComponent implements OnInit {
  id: number;
  habilidad: habilidades | any;

  constructor(
    public habilidadService: PortfolioService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.habilidadService
      .detalleHabilidad(this.id)
      .subscribe((dato: habilidades) => {
        this.habilidad = dato;
      });
  }

  onSubmit() {
    this.habilidadService
      .updateHabilidades(this.id, this.habilidad)
      .subscribe();
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/portfolio']));
    swal(
      'Información actualizada',
      `Su habilidad ha sido modificada`,
      `success`
    );
  }

  irHome() {
    this.router.navigate(['/portfolio']);
  }
}
