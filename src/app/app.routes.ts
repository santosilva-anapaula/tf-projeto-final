import { FormularioColaboradoresComponent } from './formulario-colaboradores/formulario-colaboradores.component';
import { ListaColaboradoresComponent } from './lista-colaboradores/lista-colaboradores.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'colaboradores', pathMatch: 'full'},
    {path: 'colaboradores', component: ListaColaboradoresComponent},
    {path: 'cadastrar', component: FormularioColaboradoresComponent},
    {path: 'editar/:id', component: FormularioColaboradoresComponent}
];
