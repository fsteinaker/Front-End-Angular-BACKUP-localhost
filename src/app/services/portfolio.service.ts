import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { explaboral } from '../componentes/model/explaboral.model';
import { localidad } from '../componentes/model/localidad.model';
import { persona } from '../componentes/model/persona.model';
import { educacion } from '../componentes/model/educacion.model';
import { habilidades } from '../componentes/model/habilidades.model';
import { proyectos } from '../componentes/model/proyectos.model';
import { usuario } from '../componentes/model/usuario.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  // COMIENZO SERVICIO PARA VER COMPONENTES

  public getProyectos(): Observable<proyectos[]> {
    return this.http.get<proyectos[]>(`${this.apiServerUrl}/proyectos`);
  }

  public getHabilidades(): Observable<habilidades[]> {
    return this.http.get<habilidades[]>(`${this.apiServerUrl}/habilidad`);
  }

  public getEducacion(): Observable<educacion[]> {
    return this.http.get<educacion[]>(`${this.apiServerUrl}/educacion`);
  }

  public getExplaboral(): Observable<explaboral[]> {
    return this.http.get<explaboral[]>(`${this.apiServerUrl}/explaboral`);
  }

  public getLocalidad(): Observable<localidad> {
    return this.http.get<localidad>(`${this.apiServerUrl}/localidad`);
  }

  public getPersona(): Observable<persona> {
    return this.http.get<persona>(`${this.apiServerUrl}/persona`);
  }

  public getUsuario(): Observable<usuario[]> {
    return this.http.get<usuario[]>(`${this.apiServerUrl}/usuario`);
  }

  //servicio para CREAR nuevos datos (POST)

  public postNewProyectos(proyectos: proyectos): Observable<any> {
    return this.http.post<any>(
      `${this.apiServerUrl}/proyectos/crear`,
      proyectos
    );
  }

  public postNewHabilidades(habilidades: habilidades): Observable<any> {
    return this.http.post<any>(
      `${this.apiServerUrl}/habilidad/crear`,
      habilidades
    );
  }

  public postNewEducacion(educacion: educacion): Observable<any> {
    return this.http.post<any>(
      `${this.apiServerUrl}/educacion/crear`,
      educacion
    );
  }

  public postNewExperiencia(explaboral: explaboral): Observable<any> {
    return this.http.post<any>(
      `${this.apiServerUrl}/explaboral/crear`,
      explaboral
    );
  }

  public postNewLocalidad(localidad: localidad): Observable<any> {
    return this.http.post<any>(
      `${this.apiServerUrl}/localidad/crear`,
      localidad
    );
  }

  public postNewPersona(persona: persona): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/persona/crear`, persona);
  }

  public postNewUsuario(usuario: usuario): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/usuario/crear`, usuario);
  }

  // servicio para TRAER los datos del porfolio

  public detalleProyecto(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/proyectos/detalle/${id}`);
  }

  public detalleHabilidad(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/habilidad/detalle/${id}`);
  }

  public detalleExplaboral(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/explaboral/detalle/${id}`);
  }

  public detalleEducacion(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/educacion/detalle/${id}`);
  }

  public detalleLocalidad(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/localidad/detalle/${id}`);
  }

  public detallePersona(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/persona/detalle/${id}`);
  }

  public detalleUsuario(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/usuario/detalle/${id}`);
  }

  //servicio para ACTUALIZAR los datos del porfolio (PUT)

  public updateProyectos(id: number, proyectos: proyectos): Observable<any> {
    return this.http.put<any>(
      `${this.apiServerUrl}/proyectos/editar/${id}`,
      proyectos
    );
  }

  public updateHabilidades(
    id: number,
    skillshabilidades: habilidades
  ): Observable<any> {
    return this.http.put<any>(
      `${this.apiServerUrl}/habilidad/editar/${id}`,
      skillshabilidades
    );
  }

  public updateEducacion(id: number, educacion: educacion): Observable<any> {
    return this.http.put<any>(
      `${this.apiServerUrl}/educacion/editar/${id}`,
      educacion
    );
  }

  public updateExplaboral(id: number, explaboral: explaboral): Observable<any> {
    return this.http.put<any>(
      `${this.apiServerUrl}/explaboral/editar/${id}`,
      explaboral
    );
  }

  public updateLocalidad(id: number, localidad: localidad): Observable<any> {
    return this.http.put<any>(
      `${this.apiServerUrl}/localidad/editar/${id}`,
      localidad
    );
  }

  public updatePersona(id: number, persona: persona): Observable<any> {
    return this.http.put<any>(
      `${this.apiServerUrl}/persona/editar/${id}`,
      persona
    );
  }

  public updateUsuario(id: number, usuario: usuario): Observable<any> {
    return this.http.put<any>(
      `${this.apiServerUrl}/usuario/editar/${id}`,
      usuario
    );
  }

  //servicio para BORRAR los datos del porfolio (DELETE)

  public deleteProyectos(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/proyectos/borrar/${id}`);
  }

  public deleteHabilidades(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/habilidad/borrar/${id}`);
  }

  public deleteExplaboral(id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.apiServerUrl}/explaboral/borrar/${id}`
    );
  }

  public deleteEducacion(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/educacion/borrar/${id}`);
  }

  public deleteLocalidad(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/localidad/borrar/${id}`);
  }

  public deletePersona(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/persona/borrar/${id}`);
  }

  public deleteUsuario(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/usuario/borrar/${id}`);
  }
}
