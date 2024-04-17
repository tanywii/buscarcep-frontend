import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  cep: string;
  logradouro: string;
  cidade: string;
  bairro: string;
  uf: string;
  complemento: string;
  data_hora_consulta: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    cep: "89211465", logradouro: '123', cidade: "joinville", bairro: "Floresta", uf: "SC", complemento: "AP", data_hora_consulta: "000"}
 ];

/**
 * @title Basic use of <table mat-table>
 */
@Component({
  selector: 'tabela',
  styleUrl: 'tabela.component.css',
  templateUrl: 'tabela.component.html',
  standalone: true,
  imports: [MatTableModule],
})
export class Tabela {
  displayedColumns: string[] = ['cep', 'logradouro', 'cidade', 'bairro', 'uf', 'complemento', 'data_hora_consulta'];
  dataSource = ELEMENT_DATA;
}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */