import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-corrida-component',
  imports: [FormsModule],
  templateUrl: './corrida-component.html',
  styleUrl: './corrida-component.css',
})
export class CorridaComponent {
  //DEFININDO OS ATRIBUTOS DO COMPONENTE CorridaComponent
  id = 0 
  descricao_corrida = ''
  distancia5km = false
  distancia10km = false
  distancia25km = false

}
