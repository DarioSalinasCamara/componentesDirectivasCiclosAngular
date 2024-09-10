import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { usuarioRoutes } from './components/usuario/usuario.routes';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuario/:id',
    component: UsuarioComponent,
    children: usuarioRoutes
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
