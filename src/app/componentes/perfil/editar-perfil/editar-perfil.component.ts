import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { persona } from '../../model/persona.model';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css'],
})
export class EditarPerfilComponent implements OnInit {
  id: number;
  persona: persona | any;

  constructor(
    public personaService: PortfolioService,
    public router: Router,
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
