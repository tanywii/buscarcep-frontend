import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';


// CHAMA A API NO BACKEND PARA PEGAR OS DADOS CONSULTADO
export interface Endereco {
  cep: string;
  logradouro: string;
  cidade: string;
  bairro: string;
  uf: string;
  complemento: string;
  dataHoraConsulta: string;
}

const ELEMENT_DATA: Endereco[] = [];

@Component({
  selector: 'tabela',
  styleUrl: 'tabela.component.css',
  templateUrl: 'tabela.component.html',
  standalone: true,
  imports: [MatTableModule, MatSortModule],
})

export class Tabela implements OnInit {
  
  constructor(private http: HttpClient, private _liveAnnouncer: LiveAnnouncer) { }
  displayedColumns: string[] = ['cep', 'logradouro', 'cidade', 'bairro', 'uf', 'complemento', 'dataHoraConsulta'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngOnInit() {
    this.http.get<any>('http://localhost:8080/cep/listar-todos').subscribe(data => {
      this.dataSource.data = data;
    })
  }

  // É O MÉTODO QUE FAZ A ORDENACAO (QUANDO VC CLICA ELE COLOCA AS COISAS EM ORDEM ALFABETICA ETC...) 
  // ----------------------------------------
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce('');
    } else {
      this._liveAnnouncer.announce('');
    }
  }
// -------------------------------------------
}
