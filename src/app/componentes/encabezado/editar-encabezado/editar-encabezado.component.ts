import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { persona } from '../../model/persona.model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-encabezado',
  templateUrl: './editar-encabezado.component.html',
  styleUrls: ['./editar-encabezado.component.css'],
})
export class EditarEncabezadoComponent implements OnInit {
  id: number;
  persona: persona = new persona();

  constructor(
    private personaService: PortfolioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.personaService.detallePersona(this.id).subscribe((dato: persona) => {
      this.persona = dato;
    });
  }

  onSubmit() {
    this.personaService.updatePersona(this.id, this.persona).subscribe();
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/portfolio']));
    swal(
      'Información actualizada',
      `Sus datos personales han sido modificados`,
      `success`
    );
  }

  irHome() {
    this.router.navigate(['/portfolio']);
  }
}
