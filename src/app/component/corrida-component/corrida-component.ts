import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Corrida } from '../../models/Corrida';

@Component({
  selector: 'app-corrida-component',
  imports: [FormsModule],
  templateUrl: './corrida-component.html',
  styleUrl: './corrida-component.css',
})
export class CorridaComponent {
  //DEFININDO OS ATRIBUTOS DO COMPONENTE CorridaComponent
  id = 0 
  descricao_corrida = 'Corrida 400km'
  distancia5km = false
  distancia10km = false
  distancia25km = false
  dataCorrida = ''




  dadosFormulario(){
    const corrida = new Corrida()
    corrida.descricao_corrida = this.descricao_corrida
    corrida.datacorrida = this.dataCorrida
    corrida.distancia5km = this.distancia5km
    corrida.distancia10km = this.distancia10km
    corrida.distancia25km = this.distancia25km
    
  }
}
