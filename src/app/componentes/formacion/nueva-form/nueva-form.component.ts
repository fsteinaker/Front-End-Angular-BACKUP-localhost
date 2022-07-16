import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { educacion } from '../../model/educacion.model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-form',
  templateUrl: './nueva-form.component.html',
  styleUrls: ['./nueva-form.component.css'],
})
export class NuevaFormComponent implements OnInit {
  educacion: educacion = new educacion();

  constructor(
    private educacionService: PortfolioService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.educacionService.postNewEducacion(this.educacion).subscribe((dato) => {
      console.log(dato);
    });
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() =>
        this.router.navigate(['/portfolio'])
      );
    swal(
      'Formación académica añadida',
      `Sus estudios en ${this.educacion.institucion} ha sido registrado`,
      `success`
    );
  }

  irHome() {
    this.router.navigate(['/portfolio']);
  }
}
