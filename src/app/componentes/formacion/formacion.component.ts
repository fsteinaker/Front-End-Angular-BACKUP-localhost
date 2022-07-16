import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { educacion } from '../model/educacion.model';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css'],
})
export class FormacionComponent implements OnInit {
  formacionList!: educacion[];

  constructor(
    private educacionService: PortfolioService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getdatosEducacion();
  }

  private getdatosEducacion() {
    this.educacionService.getEducacion().subscribe((data) => {
      this.formacionList = data;
      console.log(data);
    });
  }

  agregarFormacion() {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/nueva-form']));
  }

  eliminarFormacion(id: number) {
    swal({
      title: '¿Estas seguro?',
      text: 'Confirma si deseas eliminar la formación académica',
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
        this.educacionService.deleteEducacion(id).subscribe((data) => {
          console.log(data);
        });
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() =>
            this.router.navigate(['/portfolio'])
          );
        this.getdatosEducacion();
        swal(
          'Formación académica eliminada',
          'Se ha borrado con exito',
          'success'
        );
      }
    });
  }

  editarFormacion(id: number) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/editar-form', id]));
  }
}
