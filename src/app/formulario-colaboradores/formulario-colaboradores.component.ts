import { ColaboradorService } from './../colaborador.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseAPI } from '../app.model';

@Component({
  selector: 'app-formulario-colaboradores',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './formulario-colaboradores.component.html',
  styleUrl: './formulario-colaboradores.component.css'
})

export class FormularioColaboradoresComponent{

  id!: string | null;
  name: string = '';
  jobTitle: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ColaboradorService: ColaboradorService

  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.fillEmployee(this.id);
      this.showButton = 'edit'
    }
  }

  showButton = 'register';

  fillEmployee(id: string){
    this.ColaboradorService.get<ResponseAPI>(id)
    .subscribe((response: ResponseAPI) => {
      this.name = response.name;
      this.jobTitle = response.jobTitle;
      console.log('Resposta do GET', response);
    })
  }
  
  register() {
    const body = {
      name: this.name,
      jobTitle: this.jobTitle
    };

    this.ColaboradorService.post<ResponseAPI>(body)
      .subscribe((response: ResponseAPI) => {
        console.log('Resposta do POST', response);
      });
    this.router.navigate(['/colaboradores']);
  }

  edit() {
    const body = {
      id: this.id,
      name: this.name,
      jobTitle: this.jobTitle
    };

    this.ColaboradorService.put<any>(body)
      .subscribe((response: any) => {
        console.log('Resposta do PUT', response);
      });
    this.router.navigate(['/colaboradores']);
  }
}
