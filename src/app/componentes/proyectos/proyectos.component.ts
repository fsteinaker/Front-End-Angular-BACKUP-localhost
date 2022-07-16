import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { proyectos } from '../model/proyectos.model';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  proyectos!: proyectos[];

  constructor(
    private proyectoService: PortfolioService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getdatosProyectos();
  }

  private getdatosProyectos() {
    this.proyectoService.getProyectos().subscribe((data) => {
      this.proyectos = data;
      console.log(data);
    });
  }

  eliminarProyecto(id: number) {
    swal({
      title: '¿Estas seguro?',
      text: 'Confirma si deseas eliminar el proyecto',
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
        this.proyectoService.deleteProyectos(id).subscribe((data) => {
          console.log(data);
        });
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() =>
            this.router.navigate(['/portfolio'])
          );
        this.getdatosProyectos();
        swal('Proyecto eliminado', 'Se ha borrado con exito', 'success');
      }
    });
  }

  editarProyecto(id: number) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/editar-proyecto', id]));
  }

  agregarProyecto() {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/nueva-proyecto']));
  }
}
