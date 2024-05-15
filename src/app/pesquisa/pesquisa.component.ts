import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// pesquisa.component.ts  -  QUANDO O FORMULARIO É ENVIADO CHAMA A API (consulta_e_salvar_endereco)
@Component({
  selector: 'pesquisa',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.css'
})
export class Pesquisa{
  form = new FormGroup({
    cep: new FormControl('',Validators.minLength(8))
  }); 
  constructor(private http: HttpClient) { }

  
  onSubmit(): void {
    this.http.get<any>('http://localhost:8080/cep/consultar-e-salvar-endereco?cep='+this.form.value.cep).subscribe(data => {
      window.location.reload();
    })
  }

}

