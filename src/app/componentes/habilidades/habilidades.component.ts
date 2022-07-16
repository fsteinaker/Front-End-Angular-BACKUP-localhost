import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { habilidades } from '../model/habilidades.model';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  habilidadList!: habilidades[];

  constructor(
    private habilidadService: PortfolioService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getdatosHabilidades();
  }

  private getdatosHabilidades() {
    this.habilidadService.getHabilidades().subscribe((data) => {
      this.habilidadList = data;
      console.log(data);
    });
  }

  eliminarHabilidad(id: number) {
    swal({
      title: '¿Estas seguro?',
      text: 'Confirma si deseas eliminar la habilidad',
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
        this.habilidadService.deleteHabilidades(id).subscribe((data) => {
          console.log(data);
        });
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() =>
            this.router.navigate(['/portfolio'], { fragment: 'habilidad' })
          );
        this.getdatosHabilidades();
        swal('Habilidad eliminada', 'Se ha borrado con exito', 'success');
      }
    });
  }

  editarHabilidad(id: number) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/editar-hab', id]));
  }

  agregarHabilidad() {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/nueva-hab']));
  }
}
