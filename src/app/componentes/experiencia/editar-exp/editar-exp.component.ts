import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { explaboral } from '../../model/explaboral.model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css'],
})
export class EditarExpComponent implements OnInit {
  id: number;
  explaboral: explaboral = new explaboral();

  constructor(
    private explaboralService: PortfolioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.explaboralService
      .detalleExplaboral(this.id)
      .subscribe((dato: explaboral) => {
        this.explaboral = dato;
      });
  }

  onSubmit() {
    this.explaboralService
      .updateExplaboral(this.id, this.explaboral)
      .subscribe((dato) => {
        this.irHome();
      });
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() =>
        this.router.navigate(['/portfolio'])
      );
    swal(
      'Su experiencia laboral ha sido actualizada',
      `Su trabajo en ${this.explaboral.empresa} se ha modificado`,
      `success`
    );
  }

  irHome() {
    this.router.navigate(['/portfolio']);
  }
}
