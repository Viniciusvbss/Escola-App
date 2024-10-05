import { Routes } from '@angular/router';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { HomeComponent } from './component/home/home.component';
import { EscolaComponent } from './component/escola/escola.component';
import { CriarContaComponent } from './component/criar-conta/criar-conta.component';

export const routes: Routes = [
 {path: 'usuario', component: UsuarioComponent},
 {path: 'home', component: HomeComponent},
 {path: 'escola',component:EscolaComponent},
 {path: 'criar-conta',component:CriarContaComponent}
];
