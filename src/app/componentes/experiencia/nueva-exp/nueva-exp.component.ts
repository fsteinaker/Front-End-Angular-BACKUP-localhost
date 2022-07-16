import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { explaboral } from '../../model/explaboral.model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-exp',
  templateUrl: './nueva-exp.component.html',
  styleUrls: ['./nueva-exp.component.css'],
})
export class NuevaExpComponent implements OnInit {
  explaboral: explaboral = new explaboral();

  constructor(
    private explaboralService: PortfolioService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.explaboralService
      .postNewExperiencia(this.explaboral)
      .subscribe((dato) => {
        console.log(dato);
      });
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() =>
        this.router.navigate(['/portfolio'])
      );
    swal(
      'Experiencia laboral añadida',
      `Su trabajo en ${this.explaboral.empresa} ha sido registrado`,
      `success`
    );
  }

  irHome() {
    this.router.navigate(['/portfolio']);
  }
}
