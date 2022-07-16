import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { explaboral } from '../model/explaboral.model';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  explaboralList!: explaboral[];

  constructor(
    public explaboralService: PortfolioService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getdatosExpLab();
  }

  private getdatosExpLab() {
    this.explaboralService.getExplaboral().subscribe((data) => {
      this.explaboralList = data;
      console.log(data);
    });
  }

  agregarExperiencia() {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/nueva-exp']));
  }

  eliminarExperiencia(id: number) {
    swal({
      title: '¿Estas seguro?',
      text: 'Confirma si deseas eliminar la experiencia laboral',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#c70e0e',
      cancelButtonColor: '#196bc2',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    }).then((result) => {
      if (result.value) {
        this.explaboralService.deleteExplaboral(id).subscribe((data) => {
          console.log(data);
        });
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() =>
            this.router.navigate(['/portfolio'], { fragment: 'experiencia' })
          );
        this.getdatosExpLab();
        swal(
          'Experiencia laboral eliminada',
          'Se ha borrado con exito',
          'success'
        );
      }
    });
  }

  editarExperiencia(id: number) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/editar-exp', id]));
  }
}
