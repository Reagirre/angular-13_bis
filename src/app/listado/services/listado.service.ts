import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Electro } from '../interfaces/listado.interface';

@Injectable({providedIn: 'root'})
export class ListadoService {


  private baseUrl: string = 'https://trazatic-api.azurewebsites.net/api/objetos';
  private inicio: string = '';
  private fin: string = '';


  constructor( private http: HttpClient) { }

  getElectros():Observable<Electro[]> {
    return this.http.get<Electro[]>(`${ this.baseUrl }`);
  }



  searchFechas( fecha: string ):Observable<Electro[]> {
    if ( !fecha) return this.getElectros();
    this.inicio = fecha.substring(0, 10);
    this.fin = fecha.substring(12);
    return this.http.get<Electro[]>(`${ this.baseUrl }/?fechaInicio=${ this.inicio }&fechaFin=${ this.fin }`);
  }


  searchEtiqueta( etiqueta: string ):Observable<Electro[]> {
    if ( !etiqueta) return this.getElectros();
    return this.http.get<Electro[]>(`${ this.baseUrl }/?etiqueta=${ etiqueta }`);
  }


  searchRegion( region: string ):Observable<Electro[]> {
    if ( !region) return this.getElectros();
    return this.http.get<Electro[]>(`${ this.baseUrl }/?region=${ region }`);
  }


  searchId( idlectura: string ):Observable<Electro[]> {
    if ( !idlectura) return this.getElectros();
    return this.http.get<Electro[]>(`${ this.baseUrl }/?idlectura=${ idlectura }`);
  }


}
