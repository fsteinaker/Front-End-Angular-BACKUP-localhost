import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { educacion } from '../../model/educacion.model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-form',
  templateUrl: './editar-form.component.html',
  styleUrls: ['./editar-form.component.css'],
})
export class EditarFormComponent implements OnInit {
  id: number;
  educacion: educacion = new educacion();

  constructor(
    private educacionService: PortfolioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.educacionService
      .detalleEducacion(this.id)
      .subscribe((dato: educacion) => {
        this.educacion = dato;
      });
  }

  onSubmit() {
    this.educacionService
      .updateEducacion(this.id, this.educacion)
      .subscribe((dato) => {
        this.irHome();
      });
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() =>
        this.router.navigate(['/portfolio'])
      );
    swal(
      'Su formación ha sido actualizada',
      `Sus estudios en ${this.educacion.institucion} se ha modificado`,
      `success`
    );
  }

  irHome() {
    this.router.navigate(['/portfolio']);
  }
}
