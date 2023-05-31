import { Component, OnInit } from '@angular/core';
import { Electro } from '../interfaces/listado.interface';
import { ListadoService } from '../services/listado.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit{

  public electros: Electro[] = [];

  constructor( private listadoService: ListadoService) {}

  ngOnInit(): void {
    this.listadoService.getElectros()
      .subscribe( electros => this.electros = electros );
  }


  searchByFechas( fecha: string):void {


    this.listadoService.searchFechas( fecha )
      .subscribe( listados => {
        this.electros = listados;
      } )
  }


  searchByEtiqueta( etiqueta: string ):void {

    this.listadoService.searchEtiqueta( etiqueta )
      .subscribe( listados => {
        this.electros = listados;
      } )

  }


  searchByRegion( region: string ):void {

    this.listadoService.searchRegion( region )
      .subscribe( regiones => {
        this.electros = regiones;
      } )

  }


  searchById( idlectura: string ):void {

    this.listadoService.searchId( idlectura )
      .subscribe( ids => {
        this.electros = ids;
      } )

  }

}
