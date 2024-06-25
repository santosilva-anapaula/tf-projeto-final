import { ColaboradorService } from './../colaborador.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseAPI } from '../app.model';

@Component({
  selector: 'app-lista-colaboradores',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './lista-colaboradores.component.html',
  styleUrl: './lista-colaboradores.component.css'
})

export class ListaColaboradoresComponent {

  constructor(
    private router: Router,
    private ColaboradorService: ColaboradorService
  ) {}

  ngOnInit() {
    this.listColaboadores()
  }
  
  responseEmployee: any;

  register() {
    this.router.navigate(['/cadastrar']);
  } 

  edit(id: string) {
    this.router.navigate(['/editar', id]);
  }

  delete(id: string) {
    const confirmDelete = window.confirm("Confirma deletar o colaborador?");
    if (confirmDelete){
      this.ColaboradorService.delete<ResponseAPI>(id)
      .subscribe((response: ResponseAPI) => {
        console.log('Colaborador removido com sucesso!');
        this.listColaboadores();
      })
    }
    
  }

  listColaboadores() {
    this.ColaboradorService.getAll<ResponseAPI>()
    .subscribe((response: ResponseAPI) => {
      console.log('Resposta', response);
      this.responseEmployee = response;
    })
  }
}
