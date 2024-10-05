
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [RouterModule],//sempre lembrar que todo componente que recebe outro componente tem que importa o "RouterModule".
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
  
})
export class UsuarioComponent  {

}
